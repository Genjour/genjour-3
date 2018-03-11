const express = require('express');
const router = express.Router();
const Journal = require('../models/journal');
const uniqid     = require('uniqid');
const passport = require('passport');
const jwt = require('jsonwebtoken');


//=============================================================================
//============================== ADD QUOTAION ====-============================
//=============================================================================

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


router.get('/quotations',(req,res)=>{
  Quotation.getQuotations((err,quotes)=>{
    if(err) throw err;
    if(!quotes){
      res.json({success:false, msg:'no quotes'});
    }else{
      res.json(quotes);
    }
  })
})

router.get('/quotations/:category', (req,res)=>{
    Quotation.findQuotationByCategory(req.params.category, (err,data)=>{
      if(err) throw err;
      if(!data){
        res.json({success:false, msg:"No data found"});
      }else{
        res.json(data);
      }
    })
})

module.exports = router;