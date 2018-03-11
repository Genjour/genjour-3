// load the things we need
var mongoose = require('mongoose');


var supportJournalSchema = mongoose.Schema({

        journalId        : String,
        supportId        : String,
        sDate            : String,

});

const SupportJournal = module.exports = mongoose.model('supportJournal', supportJournalSchema);

module.exports.addSupporters = function(newData, callback){
    newData.save(callback);
}

module.exports.findSupporters = function(userId, supportId, callback){
    SupportJournal.findOne({journalId:userId,supportId:supportId},callback)
}

module.exports.removeSupporters = function(userId, supportId, callback){
    SupportJournal.remove({journalId:userId,supportId:supportId},callback)
}

//==========================================================================================
//================================== GET SUPPORTERS OF JOURNALS ============================
//==========================================================================================

//CURRENTLY NOT IN USE this api

module.exports.getSupporters = function(journalId, callback){

    SupportJournal.aggregate([
        {
            $match: { "journalId": journalId }
        },
        {
            $lookup:{
                from:"users",
                localField:"supportId",
                foreignField:"genjouristId",
                as:"details"
            }
        },
        {
            $unwind:"$details"
        },
        { $project : 

            { 
                details: {
                    createdOn:1,
                    dob:1,
                    email:1,
                    gender:1,
                    profileImg:1
                 },
                genjouristId : "$supportId",
                _id:0
            } 
        }
    ], callback)
}


module.exports.numberOfSupporters = function(journalId,callback){
    SupportJournal.find({journalId:journalId},callback);
}