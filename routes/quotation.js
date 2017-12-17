const express = require('express');
const router = express.Router();
const Quotation = require('../models/quotation');
const uniqid     = require('uniqid');
const passport = require('passport');
const jwt = require('jsonwebtoken');

router.post('/quotation', passport.authenticate('jwt', {session:false}), function(req,res){
    let newQuotation = new Quotation({
        articleId     : uniqid(),
        genjouristId  : req.user.genjouristId,
        genjourist    : req.user.name,
        category      : req.body.category,
        title         : req.body.title,
        content       : req.body.content,
        date          : Date()

    });

Quotation.addQuotation(newQuotation, (err,Quotation)=>{
		if(err){
			res.json({success:false, msg:'Fail to add Quotation'});
		} else {
			res.json({success:true, msg:'Quotation saved'});
		}
	});

});

module.exports = router;