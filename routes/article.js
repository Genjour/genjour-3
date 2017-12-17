const express = require('express');
const router = express.Router();
const Article = require('../models/article');
const uniqid     = require('uniqid');
const passport = require('passport');
const jwt = require('jsonwebtoken');

router.post('/article',  passport.authenticate('jwt', {session:false}),  function(req,res){
    let newArticle = new Article({
        articleId     : uniqid(),
        genjouristId  : req.user.genjouristId,
        genjourist    : req.user.name,
        category      : req.body.category,
        title         : req.body.title,
        content       : req.body.content,
        date          : Date(),
        tags          : req.body.tags,
        image         : req.body.image
    });

    Article.addArticle(newArticle, (err,article)=>{
		if(err){
			res.json({success:false, msg:'Fail to add article'});
		} else {
			res.json({success:true, msg:'Article saved'});
		}
	});

});

module.exports = router;