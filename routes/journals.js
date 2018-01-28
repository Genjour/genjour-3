const express = require('express');
const router = express.Router();
const Article = require('../models/article');
const User = require('../models/user');
const uniqid     = require('uniqid');

router.get('/journals',   function(req,res){

    Article.getArticles((err, articles) => {
        if (err) throw err;
        res.json(articles);
    });
    
});



router.get('/journal/:id',function(req,res){
    Article.findOne({ 'articleId' : req.params.id }, function(err, article) {
        if (err) throw err;
        res.json(article);
    });
});

module.exports = router;