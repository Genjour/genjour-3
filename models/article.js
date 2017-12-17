// load the things we need
var mongoose = require('mongoose');


var articleSchema = mongoose.Schema({

        id            : String,
        articleId     : String,
        genjouristId  : String,
        genjourist    : String,
        category      : String,
        title         : String,
        content       : String,
        date          : String,
        tags          : String,
        image         : String


});


const Article = module.exports = mongoose.model('Article',articleSchema);

module.exports.addArticle = function(newArticle, callback){
   newArticle.save(callback);
  }