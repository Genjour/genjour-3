const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Article = require('../models/article');
const Quotation = require('../models/quotation');


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

router.get('/genjourist/quotation/:id', function(req,res){
    Quotation.find({'genjouristId':req.params.id}, function(err,genjouristQuotation){
        if(err) throw err;
        res.json(genjouristQuotation);
    });
});


router.post('/support/genjourist/:userId/:genjouristId',function(req,res) {
    const userId = req.params.articleId;
    const genjouristId = req.params.genjouristId;
    
    User.findArticle(userId, (err,user)=>{
        if(err) throw err;
        if(!user){
            return res.json({success:false, msg:"user not found"});
        }
        else 
            {
                const array = user.supporters;
                //array.includes(genjouristId);
                if(array.includes(genjouristId) == true)
                {
                    User.removeSupporter(articleId, genjouristId , (err,status)=>{
                        if(err) throw err;
                        if(!status){
                            return res.json({success:false, msg:"cannot pop"});
                        } else {    

                                    return res.json({success:true, msg:"pop"})
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

})


module.exports = router;