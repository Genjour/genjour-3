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
            console.log(user.supporting.length);
            if(user.supporting.length==0){
                res.json({msg:'support them'});
            }else{

                var supporting_array = [];
                console.log(user.supporting);
                for(var i=0; i<user.supporting.length; i++){
                    //console.log(user.supporting[i].genjouristId);
                    supporting_array.push(user.supporting[i].genjouristId);
                }

                
                //console.log(supporting_array);
                Article.feedsArticle(supporting_array, function(err,docs){
                    if(err) throw err;
                    res.json(docs);
                });
            }
        }
    });


});




module.exports = router;