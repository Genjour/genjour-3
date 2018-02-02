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

//=============================================================================
//============================== SUPPORTERS ===================================
//=============================================================================

router.post('/support/genjourist/:userId/:genjouristId',function(req,res) {
    const userId = req.params.userId;
    const genjouristId = req.params.genjouristId;
    



})

//=============================================================================
//============================== SUPPORTING ===================================
//=============================================================================

router.post('/supporting/genjourist/:userId/:genjouristId',function(req,res) {
    const userId = req.params.userId;
    const genjouristId = req.params.genjouristId;

    User.findUser(userId,(err,user)=>{
        if(err) throw err;
        if(!user)
        {return res.json({success:false,msg:"no user found"});}
        else{
            array = user.supporting;
            //console.log(genjouristId);
            var found = array.find(found=>found.genjouristId == genjouristId);
            if(found != undefined){
                User.removeSupporting(userId,found, (err,docs)=>{
                    if(err) throw err;
                    else res.json({success:true});
                })
            } else{
                User.findUser(genjouristId, (err,doc)=>{
                    if(err) throw err;
                    else{        
                         var store ={
                            name:doc.name,
                            genjouristId:doc.genjouristId,
                            dob: doc.dob,
                            imgUrl : doc.imgUrl
                            };
            
                        //res.json(store);
                        User.addSupporting(userId,store,(err,docs)=>{
                            if(err) throw err;
                            else{
                                res.json(docs)
                            }
                        })
            
                    }
                })

            }
        }
    })
    
 
})


//=============================================================================
//============================== SUPPORTING LIST ==============================
//=============================================================================

router.get('/supportingList/:userid', function(req,res){
    const userId = req.params.userid;
    User.findUser(userId, function(err,user){
        if(err) throw err;
        else{
                return res.json(user.supporting);
            }
        })
    });

module.exports = router;