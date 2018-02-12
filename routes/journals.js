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

router.get('/journals/feeds/:userId', function(req,res){
    const userId = req.params.userId;
    
    User.findUser(userId, (err,user)=>{
        if(err) throw err;
        if(!user){
            res.json({success:false, msg:"no such user"});
        }else{
            console.log(user.supporting);
            Article.feedsArticle(user.supporting, function(err,docs){
                if(err) throw err;
                res.json(docs);
            });
        }
    });


});


router.delete('/delete/article/:articleId', function(req,res){
    const articleId = req.params.articleId;
    Article.deleteArticle(articleId, (err,done)=>{
        if(err) throw err;
        if(!done){
            res.json({success:false, msg:"Cannot delete"});
        }else{
            res.json({success:true, msg:"deleted"});
        }
    })
})


module.exports = router;