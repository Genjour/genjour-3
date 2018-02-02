const express    = require('express');
const router     = express.Router();
const passport   = require('passport');
const User       = require('../models/user');
const Article    = require('../models/article');
const jwt        = require('jsonwebtoken');
const config     = require('../config/database');
const uniqueId   = require('unique-id-generator');
const io		 = require('socket.io');


    router.post('/support/:articleId/:genjouristId',function(req,res) {
        const articleId = req.params.articleId;
        const genjouristId = req.params.genjouristId;
        Article.findArticle(articleId, (err,article)=>{
            if(err) throw err;
            if(!article){
                return res.json({success:false, msg:"article not found"});
            }
            else 
                {
                    const array = article.supporters;
                    //array.includes(genjouristId);
                    if(array.includes(genjouristId) == true)
                    {
                        Article.removeSupporter(articleId, genjouristId , (err,status)=>{
                            if(err) throw err;
                            if(!status){
                                return res.json({success:false, msg:"cannot pop"});
                            } else {                          
                                      return res.json({success:true, msg:"pop"});
                                    }
                        });
                        
                    }
                    else{
                        Article.addSupporter(articleId, genjouristId , (err,status)=>{
                            if(err) throw err;
                            if(!status){
                                return res.json({success:false, msg:"cannot push"});
                            } else 
                                    {
    
                                        return res.json({success:true, msg:"push"})
                                        
                                    }
                                    
                        });
                        
                    }
    
                } 
        })

    
    });



//================================================================================================
//---------------------------------- Total Supports on Article -----------------------------------
//================================================================================================

router.get('/support/:articleId',function(req,res){
    const articleId = req.params.articleId;
    const genjouristId = req.params.genjouristId;

        Article.findArticle(articleId, (err,article)=>{
        if(err) throw err;
        if(!article){
            return res.json({success:false, msg:"article not found"});
        }
        else 
            {
                const supportersNumber = article.supporters.length;
                console.log(supportersNumber);
                res.json({success:true, msg:supportersNumber});
            } 
    })

})

module.exports = router;