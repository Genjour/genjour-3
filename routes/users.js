const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const uniqueId = require('unique-id-generator');

router.post('/register',(req,res,next)=>{
	let newUser = new User({
		name 			: req.body.name,
		email			: req.body.email,
		username		: req.body.username,
		password		: req.body.password,
		gender   		: req.body.gender,
		genjouristId	: "10"+uniqueId(),
		dob 			: req.body.dob,
		supporters		: [],
		supporting		: [],
		supportingNumber: " ",
		supportersNumber: " ",
		status			: true,
		createdOn 		: Date(),
		img 			: "assets/uploads/user/defaultBoy",

	});

	

	User.addUser(newUser, (err,user)=>{
		if(err){
			res.json({success:false, msg:'Failed to register User'});
		} else {
			res.json({success:true, msg:'User registered'});
		}
	});
});

router.post('/authenticate',(req, res, next)=>{
	const username = req.body.username;
	const password = req.body.password;

	User.getUserByUsername(username, (err,user)=>{
		if (err) throw err;
		if(!user) {
			return res.json({success : false, msg:'User not found'});
		}

		User.comparePassword(password, user.password, (err,isMatch)=>{
			if(err) throw err;
			if(isMatch){
				const token = jwt.sign(user.toObject(), config.secret,{
					expiresIn:604800 // 1 week
				});

				res.json({
					success:true,
					token: 'JWT '+token,
					user:{
						id: user._id,
						name: user.name,
						username : user.username,
						email:  user.email,
						gender : user.gender,
						genjouristId : user.genjouristId
					}
				});
			}else {
				return res.json({success: false, msg:'Worng password'});
			}
		});
	});
});

router.get('/profile', passport.authenticate('jwt', {session:false}), (req,res,next)=>{
	res.json({user : req.user});
});






module.exports = router;
