const express = require('express');
const path = require('path');
const router = express.Router();
const Article = require('../models/article');
const uniqid     = require('uniqid');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const multer  = require('multer');

// Set The Storage Engine
const storage = multer.diskStorage({
  destination: './uploads/articles/',
  filename: function(req, file, cb){
    cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

// Init Upload
const upload = multer({
  storage: storage,
  limits:{fileSize: 1000000},  //1 Mb ki limit
  fileFilter: function(req, file, cb){
    checkFileType(file, cb);
  }
}).single('photo');

// Check File Type
function checkFileType(file, cb){
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if(mimetype && extname){
    return cb(null,true);
  } else {
    cb('Error: Images Only!');
  }
}

router.post('/articleImage' , function(req,res){
	var path = '';
	upload(req, res, (err)=>{
		if(err){
			throw err;
		}else {
			if(req.file == undefined){
				console.log('No file selected');
			}else{
        path = req.file.path;
        console.log(path);
        return res.send(path);
				//console.log('file uploaded successsfully'+path);
			}

		}
	});
    
});

router.post('/article',  passport.authenticate('jwt', {session:false}),  function(req,res){

  
    let newArticle = new Article({
        articleId     : uniqid(),
        genjouristId  : req.user.genjouristId,
        genjourist    : req.user.name,
        category      : req.body.category,
        title         : req.body.title,
        content       : req.body.content,
        date          : Date(),
        tags          : req.body.tags,
        imgUrl        : req.body.imgUrl,
        status        : req.body.status,
    });


    Article.addArticle(newArticle, (err,article)=>{
		if(err){
			res.json({success:false, msg:'Fail to add article'});
		} else {
      
			res.json({success:true, msg:'Article saved'});
		
    }
	});

});

router.get('/articles/:category', (req,res)=>{
  Article.findArticleByCategory(req.params.category, (err,data)=>{
    if(err) throw err;
    if(!data){
      res.json({success:false, msg:"No data found"});
    }else{
      res.json(data);
    }
  });
});

router.get('/edit/article/:articleId', (req,res)=>{
  Article.findArticle(req.params.articleId, (err,data)=>{
    if(err) throw err;
    if(!data){
      res.json({success:false, msg:"No data found"});
    }else{
      res.json(data);
    }
  });
});


router.delete('/delete/article/:articleId', function(req,res){
  Article.deleteArticle(req.params.articleId, (err,done)=>{
      if(err) throw err;
      if(!done){ 
          res.json({success:false, msg:"Cannot delete"});
      }else{
          res.json({success:true, msg:"deleted"});
      }
  });
});

router.put('/update/article/:articleId', function(req,res){

  const flag = {
        category         : req.body.category,
        title            : req.body.title,
        content          : req.body.content,
        tags             : req.body.tags,
        status           : req.body.status,
  }

  Article.findArticle(req.params.articleId, (err,article)=>{
    if(err) throw err;
    if(!article){
      res.json({success:false, msg:'cannot find this article which you want to update'});
    }else{
      Article.updateArticle(req.params.articleId, flag, (err,draftArticle)=>{
        if(err) throw err;
        if(!draftArticle){
          res.json({success:false, msg:'cannot update'});
        }else{
          res.json({success:true, msg:'updation successful'});
        }
      });
    }
  });
});


module.exports = router;