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
            return res.json({success:false, msg:"genjourist is not found"});
        }
        else 
            {
                const array = genjourist.supporters;
                //array.includes(genjouristId);
                if(array.includes(userId) == true)
                {
                    User.removeSupporter(userId, genjouristId , (err,status)=>{
                        if(err) throw err;
                        if(!status){
                            return res.json({success:false, msg:"supporters cannot pop"});
                        } else {    
                                    //console.log(array.length);
                                    // User.updateSupporterNumber(userId,array.length, function(err,doc) {
                                    //     if (err) { throw err; }
                                    //     else { console.log("Updated"); }
                                    //   });  
                                    // console.log(array.length);
                                    return res.json({success:true, msg:"supporters pop"})
                                }
                    });
                    
                }
                else{
                    User.addSupporter(userId, genjouristId , (err,status)=>{
                        if(err) throw err;
                        if(!status){
                            return res.json({success:false, msg:"supporters cannot push"});
                        } else 
                                {
                                    //console.log(array.length);
                                    // User.updateSupporterNumber(userId,array.length, function(err,doc) {
                                    //     if (err) { throw err; }
                                    //     else { console.log("Updated"); }
                                    //   });  
                                    // console.log(array.length);
                                    return res.json({success:true, msg:"supporters push"});
                                    
                                }
                                
                    });
                    
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
    
    User.findUser(userId, (err,user)=>{
        if(err) throw err;
        if(!user){
            return res.json({success:false, msg:"user not found"});
        }
        else 
            {
                const array = user.supporting;
                //array.includes(genjouristId);
                if(array.includes(genjouristId) == true)
                {
                    User.removeSupporting(userId, genjouristId , (err,status)=>{
                        if(err) throw err;
                        if(!status){
                            return res.json({success:false, msg:"supporting cannot pop"});
                        } else {    
                                    //console.log(array.length); 
                                    User.updateSupportingNumber(genjouristId,array.length, function(err,doc) {
                                        if (err) { throw err; }
                                        else { console.log("Updated"); }
                                      }); 
                                    console.log(array.length);
                                    return res.json({success:true, msg:"supporting pop"});
                                }
                    });
                    
                }
                else{
                    User.addSupporting(userId, genjouristId , (err,status)=>{
                        if(err) throw err;
                        if(!status){
                            return res.json({success:false, msg:"supporting cannot push"});
                        } else 
                                {
                                    //console.log(array.length);
                                    User.updateSupportingNumber(genjouristId,array.length, function(err,doc) {
                                        if (err) { throw err; }
                                        else { console.log("Updated"); }
                                      });  
                                    console.log(array.length);
                                    return res.json({success:true, msg:"supporting push"});
                                    
                                }
                                
                    });
                    
                }

            } 
    })

})

//=============================================================================
//============================== SUPPORTING LIST ==============================
//=============================================================================

router.get('/supportingList/:userid', function(req,res){
    var userId = req.params.userid;
    User.findUser(userId, function(err,user){
        if(err) throw err;
        else{
            
                return res.json(user);
            }
        })
    });

//=============================================================================
//============================== Supporters ===================================
//=============================================================================

router.get('/supportersList/:userid', function(req,res){
    var userId = req.params.userid;
    User.findUser(userId, function(err,user){
        if(err) throw err;
        else{
                
                return res.json(user);
            }
        })
    });

//=============================================================================
//============================== Recommended Users ============================
//=============================================================================

router.get('/recommended/users/:userid', (req,res)=>{
    var userId = req.params.userid;
    User.findUser(userId, (err,user)=>{
        if(err) throw err;
        if(!user){
            res.json({success:false, msg:'Sorry user not found'});
        }else{
            var arr = [];
            arr.push(userId);
            for(var i=0; i<user.supporting.length; i++){
                arr.push(user.supporting[i].genjouristId);
            }
            console.log(arr);
            User.recommendedUsers(arr,(err,docs)=>{
                if(err) throw err;
                if(!docs){
                    res.json({success:false, msg:'You are supporting everyone'});
                }else{
                    res.json(docs);
                }
            })
        }
    })
})

module.exports = router;