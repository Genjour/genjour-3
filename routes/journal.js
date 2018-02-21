const express = require('express');
const router = express.Router();
// const Article = require('../models/article');
const User = require('../models/user');
const uniqid     = require('uniqid');
const Quotation = require('../models/quotation');
const Journal = require('../models/journal');
const passport = require('passport');
const jwt = require('jsonwebtoken');

router.get('/journal',(req,res)=>{

    Journal.getJournal((err, journal) => {
        if (err) throw err;
        res.json(journal);
    });

})

router.get('/journal/:id',function(req,res){
    Journal.findOne({ 'articleId' : req.params.id }, function(err, article) {
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
                Journal.feedsArticle(supporting_array, function(err,docs){
                    if(err) throw err;
                    res.json(docs);
                });
            }
        }
    });


});




router.post('/journal/add/quotation', passport.authenticate('jwt', {session:false}), function(req,res){
    let newQuotation = new Journal({
        journalId   : uniqid(),
        genjouristId  : req.user.genjouristId,
        genjourist    : req.user.name,
        category      : req.body.category,
        content       : req.body.quote,
        tags          : req.body.tags,
        date          : Date(),
        status        : req.body.status,
        type          : 0

    });

    Journal.addJournal(newQuotation, (err,Quotation)=>{
		if(err){
			res.json({success:false, msg:'Fail to add Quotation'});
		} else {
			res.json({success:true, msg:'Quotation saved'});
		}
	});

});

module.exports = router;