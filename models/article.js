// load the things we need
var mongoose = require('mongoose');


var articleSchema = mongoose.Schema({

        id               : String,
        articleId        : String,
        genjouristId     : String,
        genjourist       : String,
        category         : String,
        title            : String,
        content          : String,
        date             : String,
        tags             : String,
        imgUrl           : String,
        supportNumber    : Number,
        supporters       : Array,
        repilicateNumber : Number,
        status           : Boolean,

});


const Article = module.exports = mongoose.model('Article',articleSchema);

module.exports.addArticle = function(newArticle, callback){
        newArticle.save(callback);
}

module.exports.findArticle = function(articleId, callback){
        const query = {articleId: articleId}
        Article.findOne(query, callback);
}


module.exports.addSupporter = function(articleId, supporters, callback){ 
        Article.findOneAndUpdate({articleId:articleId}, {$push:{supporters:supporters}}, callback);
}

module.exports.removeSupporter = function(articleId, supporters, callback){
        Article.findOneAndUpdate({articleId:articleId}, {$pop:{supporters:supporters}}, callback);
}

module.exports.updateSupporters = function(articleId, supportersNumber, callback){
        Article.updateOne({articleId:articleId},{$set:{ supportNumber : supportersNumber }}, callback);  
}