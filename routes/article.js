const express = require('express');
const path = require('path');
const router = express.Router();
const Journal = require('../models/journal');
const uniqid     = require('uniqid');
const passport = require('passport');
const jwt = require('jsonwebtoken');


router.post('/journal/add/article',  passport.authenticate('jwt', {session:false}),  function(req,res){

  
  let newArticle = new Journal({
      journalId     : uniqid(),
      genjouristId  : req.user.genjouristId,
      genjourist    : req.user.username,
      category      : req.body.category,
      title         : req.body.title,
      content       : req.body.content,
      date          : Date(),
      tags          : req.body.tags,
      imgUrl        : req.body.imgUrl,
      status        : req.body.status,
      type          : 1
  });


  Journal.addJournal(newArticle, (err,article)=>{
  if(err){
    res.json({success:false, msg:'Fail to add article'});
  } else {
    
    res.json({success:true, msg:'Article saved'});
  
  }
});

});

router.get('/articles/:category', (req,res)=>{
  Journal.findArticleByCategory(req.params.category, (err,data)=>{
    if(err) throw err;
    if(!data){
      res.json({success:false, msg:"No data found"});
    }else{
      res.json(data);
    }
  });
});

router.get('/edit/article/:articleId', (req,res)=>{
  Journal.findArticle(req.params.articleId, (err,data)=>{
    if(err) throw err;
    if(!data){
      res.json({success:false, msg:"No data found"});
    }else{
      res.json(data);
    }
  });
});


router.delete('/delete/article/:articleId', function(req,res){
  Journal.deleteArticle(req.params.articleId, (err,done)=>{
      if(err) throw err;
      if(!done){ 
          res.json({success:false, msg:"Cannot delete"});
      }else{
          res.json({success:true, msg:"deleted"});
      }
  });
});

router.put('/update/article/:articleId', function(req,res){

  const flag = {
        category         : req.body.category,
        title            : req.body.title,
        content          : req.body.content,
        tags             : req.body.tags,
        status           : req.body.status,
  }

  Journal.findArticle(req.params.articleId, (err,article)=>{
    if(err) throw err;
    if(!article){
      res.json({success:false, msg:'cannot find this article which you want to update'});
    }else{
      Journal.updateArticle(req.params.articleId, flag, (err,draftArticle)=>{
        if(err) throw err;
        if(!draftArticle){
          res.json({success:false, msg:'cannot update'});
        }else{
          res.json({success:true, msg:'updation successful'});
        }
      });
    }
  });
});


router.get('/articles',   function(req,res){

  Journal.getArticles((err, articles) => {
      if (err) throw err;
      res.json(articles);
  });
  
});

module.exports = router;