var mongoose = require('mongoose');


var supportSchema = mongoose.Schema({

        genjouristId     : String,
        supportId        : String,
        sDate            : String,

});


const Support = module.exports = mongoose.model('Support',supportSchema);

module.exports.addSupporters = function(newQuotation, callback){
    newQuotation.save(callback);
}

module.exports.findSupporters = function(userId, supportId, callback){
    Support.findOne({genjouristId:userId,supportId:supportId},callback)
}

module.exports.removeSupporters = function(userId, supportId, callback){
    Support.remove({genjouristId:userId,supportId:supportId},callback)
}


module.exports.getSupporting = function(userId,callback){
    //Support.find({genjouristId:userId},callback);

    Support.aggregate([
        {
            $match: { "genjouristId": userId }
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
            { details: {
                createdOn:1,
                genjouristId:1,
                name:1,
                dob:1,
                email:1,
                gender:1,
                profileImg:1
            },
                
                genjouristId : "$supportId",
            } 
        }
    ], callback)
}

module.exports.getSupporters = function(userId, callback){
    //Support.find({supportId:userId},callback)

    Support.aggregate([
        {
            $match: { "supportId": userId }
        },
        {
            $lookup:{
                from:"users",
                localField:"genjouristId",
                foreignField:"genjouristId",
                as:"details"
            }
        },
        {
            $unwind:"$details"
        },
        { $project : 
            { details: {
                createdOn:1,
                genjouristId:1,
                name:1,
                dob:1,
                email:1,
                gender:1,
                profileImg:1
            },
                
                genjouristId : "$supportId",
            } 
        }
    ], callback)
}
