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
    
    User.findUser(genjouristId, (err,genjourist)=>{
        if(err) throw err;
        if(!genjourist){
            return res.json({success:false, msg:"no genjourist with this id found"});
        }
        else{
            array=genjourist.supporters;
            //console.log(array);
            var found = array.find(found=>found.genjouristId == userId);
            
            if(found != undefined){
                
                User.removeSupporter(genjouristId, found, (err,docs)=>{
                    if(err) throw err;
                    
                    else {  
                            // console.log("i m here"+docs);
                            res.json({ msg:"remove supporter"});
                        }
                })
            }else{
                User.findUser(userId, (err,doc)=>{
                    if(err) throw err;
                    else{
                        var store ={
                            name:doc.name,
                            genjouristId:doc.genjouristId,
                            dob: doc.dob,
                            imgUrl : doc.imgUrl
                            };

                            User.addSupporter(genjouristId, store, (err,docs)=>{
                                if(err) throw err;
                                else{
                                    res.json({msg:"add supporter"})
                                }
                            })
                    }
                })
            }
        }
    })


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
                    else res.json({success:true, msg:"remove supporting"});
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
                                res.json({succes:true, msg:"add supporting"})
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

//=============================================================================
//============================== Supporters LIST ==============================
//=============================================================================

router.get('/supportersList/:userid', function(req,res){
    const userId = req.params.userid;
    User.findUser(userId, function(err,user){
        if(err) throw err;
        else{
                return res.json(user.supporters);
            }
        })
    });

module.exports = router;