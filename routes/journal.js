const express = require('express');
const router = express.Router();
const User = require('../models/user');
const uniqid     = require('uniqid');
const Journal = require('../models/journal');
const passport = require('passport');
const jwt = require('jsonwebtoken');


//=============================================================================
//=========================== GET ALL JOURNALS ================================
//=============================================================================

router.get('/journal',(req,res)=>{

    Journal.getJournal((err, journal) => {
        if (err) throw err;
        res.json(journal);
    });

})

//=============================================================================
//========================== SINGLE JOURNAL BY ID =============================
//=============================================================================


router.get('/journal/:id',function(req,res){
    Journal.findOne({ 'journalId' : req.params.id }, function(err, article) {
        if (err) throw err;
        res.json(article);
    });
});

//=============================================================================
//============================== FEEDS JOURNAL ================================
//=============================================================================

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
                Journal.feedsArticle(supporting_array, function(err,docs){
                    if(err) throw err;
                    res.json(docs);
                });
            }
        }
    });


});


//=============================================================================
//========================== JOURNALS BY CATEGORY =============================
//=============================================================================

router.get('/journals/:category', (req,res)=>{
    Journal.findJournalByCategory(req.params.category, (err,data)=>{
      if(err) throw err;
      if(!data){
        res.json({success:false, msg:"No data found"});
      }else{
        res.json(data);
      }
    });
  });

module.exports = router;