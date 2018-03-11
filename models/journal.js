var mongoose = require('mongoose');



var journalSchema = mongoose.Schema({

        id               : String,
        journalId        : String,
        genjouristId     : String,
        genjourist       : String,
        category         : String,
        title            : String,
        content          : String,
        date             : String,
        tags             : String,
        imgUrl           : String,
        supportersNumber : Number,
        repilicateNumber : Number,
        status           : Boolean,
        type             : String
});

const Journal = module.exports = mongoose.model('Journal',journalSchema);


//=================================================================================
//========================= ADD Article or Quotation ==============================
//=================================================================================

module.exports.addJournal = function(journal, callback){
    journal.save(callback);
}

//=================================================================================
//========================= Get Journal (Article and Quotation) ===================
//=================================================================================

module.exports.getJournal = function(callback){
    Journal.aggregate([
        {
            $lookup: {
               from: "users",
               localField: "genjouristId",    // field in the orders collection
               foreignField: "genjouristId",  // field in the items collection
               as: "details"
            }
         },
         {
             $unwind:"$details"
         },
         { $project: { details: {
            createdOn:1,
            dob:1,
            email:1,
            gender:1,
            profileImg:1
         },
             genjouristId: "$genjouristId",
             journalId:1,         
             content:1,
             category:1, 
             imgUrl:1,
             status:1,
             type:1,
             date:1,
             title:1,
             tags:1,
             genjourist:1,                      
             } 
        }
     ],callback)
}

//=================================================================================
//========================= Find Article from Journal ==============================
//=================================================================================

module.exports.findJournal = function(journalId, callback){
    const query = {journalId: journalId}
    Journal.findOne(query, callback);
}

//=================================================================================
//==================== Find Article from Journal acc to category ===================
//=================================================================================

module.exports.findJournalByCategory = function(category, callback){
    const query = {category:category}
    Journal.find(query,callback);
}

//=================================================================================
//==================== Get all articles from Journal ==============================
//=================================================================================

module.exports.getArticles = function(callback){
    Journal.find({type:1},callback).sort({date:-1});
}

module.exports.addSupporter = function(journalId, supporters, callback){ 
    Journal.findOneAndUpdate({journalId:journalId}, {$push:{supporters:supporters}}, callback);
}

module.exports.removeSupporter = function(journalId, supporters, callback){
    Journal.findOneAndUpdate({journalId:journalId}, {$pop:{supporters:supporters}}, callback);
}

module.exports.updateSupporters = function(journalId, supportersNumber, callback){
    Journal.updateOne({journalId:journalId},{$set:{ supportNumber : supportersNumber }}, callback);  
}

module.exports.supporterNumber = function(journalId,calllback){
    const query = {journalId:journalId}
    Journal.findOne(query,calllback);
}


module.exports.feedsArticle = function(array,callback){
    Journal.find({genjouristId:{$in : array}},callback).sort({date:-1});
}

module.exports.newUserArticles = function(category,callback){

}

module.exports.deleteArticle = function(journalId, callback){
    Journal.remove({journalId:journalId},callback);
}

module.exports.updateArticle = function(journalId, article, callback){
    Journal.findOneAndUpdate({journalId:journalId}, article, callback );
}
