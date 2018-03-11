const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Journal = require('../models/journal');
const Support = require('../models/support');



router.get('/genjourist/:id',function(req,res){
    User.findOne({ 'genjouristId' : req.params.id }, function(err, genjourist) {
        if (err) throw err;
        res.json(genjourist);
    });
});


router.get('/genjourist/article/:id', function(req,res){
    Journal.find({'genjouristId':req.params.id}, function(err,genjouristArticles){
        if(err) throw err;
        else{
            genjouristArticles = genjouristArticles.filter( x=> x.type == 1 );
            res.json(genjouristArticles);
        }
        
    });
});


router.get('/genjourist/quotation/:id', function(req,res){
    Journal.find({'genjouristId':req.params.id}, function(err,genjouristQuotation){
        if(err) throw err;
        else{
            genjouristQuotation = genjouristQuotation.filter( x=> x.type == 0 );
            res.json(genjouristQuotation);
        }
        
    });
});

//=============================================================================
//============================== SUPPORT Genjourist ===========================
//=============================================================================

router.post('/support/genjourist/:userId/:supportId',function(req,res) {
    const userId = req.params.userId;
    const supportId = req.params.supportId;

    let a = new Support({
        genjouristId : userId,
        supportId    : supportId,
        sDate        : Date()
    })

    Support.findSupporters(userId,supportId,(err,docs)=>{
        if(err) throw err;
        if(docs){
            Support.removeSupporters(userId,supportId, (err,docs)=>{
                if(err) throw err;
                else{
                    res.json({success:true,msg:"user is pop"});
                }
            })
        }else{
            
            Support.addSupporters(a, (err,docss)=>{
                if(err) throw err;
                else{
                    res.json({success:true,msg:"user is pushed"});
                }
            })
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
        if(!user){
            return res.json({success:false, msg:'genjourist id is not valid'});
        }
        else{   
                Support.getSupporting(userId, (err,docs)=>{
                    if (err) throw err;
                    else{
                        //console.log(docs);
                        return res.json(docs);
                    }
                })
            }
        })
    });

//=============================================================================
//============================== SUPPORTERS LIST ==============================
//=============================================================================

router.get('/supportersList/:userid', function(req,res){
    var userId = req.params.userid;
    User.findUser(userId, function(err,user){
        if(err) throw err;
        if(!user){
            return res.json({success:false, msg:'genjourist id is not valid'});
        }
        else{

                Support.getSupporters(userId, (err,docs)=>{
                    if (err) throw err;
                    else{
                        //console.log(docs);
                        return res.json(docs);
                    }
                })
            }
        })
    });

//=============================================================================
//============================== Recommended Users ============================
//=============================================================================

// router.get('/recommended/users/:userid', (req,res)=>{
//     var userId = req.params.userid;
//     User.findUser(userId, (err,user)=>{
//         if(err) throw err;
//         if(!user){
//             res.json({success:false, msg:'Sorry user not found'});
//         }else{
//             var arr = [];
//             arr.push(userId);
//             for(var i=0; i<user.supporting.length; i++){
//                 arr.push(user.supporting[i].genjouristId);
//             }
//             console.log(arr);
//             User.recommendedUsers(arr,(err,docs)=>{
//                 if(err) throw err;
//                 if(!docs){
//                     res.json({success:false, msg:'You are supporting everyone'});
//                 }else{
//                     res.json(docs);
//                 }
//             })
//         }
//     })
// })

module.exports = router;