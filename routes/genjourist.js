const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Article = require('../models/article');


router.get('/genjourist/:id',function(req,res){
    User.findOne({ 'genjouristId' : req.params.id }, function(err, genjourist) {
        if (err) throw err;
        res.json(genjourist);
    });
});

router.get('/genjourist/article/:id', function(req,res){
    Article.find({'genjouristId':req.params.id}, function(err,genjouristArticles){
        if(err) throw err;
        res.json(genjouristArticles);
    });
});

module.exports = router;