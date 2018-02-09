const express = require('express');
const router = express.Router();
const Quotation = require('../models/quotation');
const uniqid     = require('uniqid');
const passport = require('passport');
const jwt = require('jsonwebtoken');

router.post('/quotation', passport.authenticate('jwt', {session:false}), function(req,res){
    let newQuotation = new Quotation({
        quotationId   : uniqid(),
        genjouristId  : req.user.genjouristId,
        genjourist    : req.user.name,
        category      : req.body.category,
        quote         : req.body.quote,
        tags          : req.body.tags,
        date          : Date(),
        status        : req.body.status

    });

Quotation.addQuotation(newQuotation, (err,Quotation)=>{
		if(err){
			res.json({success:false, msg:'Fail to add Quotation'});
		} else {
			res.json({success:true, msg:'Quotation saved'});
		}
	});

});

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