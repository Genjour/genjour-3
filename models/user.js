const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');


//User Schema
const  UserSchema = mongoose.Schema({
  
  name             : String,
  email            : String,
  username         : String,
  password         : String,
  genjouristId     : String,
  gender           : String,
  dob              : String,
  createdOn        : String,
  supporters       : String,
  supporting       : String,
  supportersNumber : Number,
  supportingNumber : Number,
  status           : Boolean,
  
  
});


const User = module.exports = mongoose.model('User',UserSchema);

module.exports.getUserById = function (id,callback){
  User.findById(id,callback);
}

module.exports.getUserByUsername = function (username,callback) {
  const query = {username: username}
  User.findOne(query, callback);

}

module.exports.addUser = function(newUser, callback){
  bcrypt.genSalt(10,(err,salt)=>{
    bcrypt.hash(newUser.password, salt, (err,hash)=>{
      if(err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    });
  });
}


module.exports.comparePassword = function(candiadatePassword, hash, callback){
  bcrypt.compare(candiadatePassword,hash,(err,isMatch)=>{
    if(err) throw err;
    callback(null,isMatch);
  });
}


//================== find user by genjouristId =============

module.exports.findUser = function(userId, callback){
        const query = {genjouristId: userId}
        User.findOne(query, callback);
}

//=============================================================================
//============================== SUPPORTERS ===================================
//=============================================================================

module.exports.addSupporter = function(userId, store, callback){ 
  User.findOneAndUpdate({genjouristId:userId}, {$push:{supporters:store}}, callback);
}

module.exports.removeSupporter = function(userId, foundItem, callback){
  User.findOneAndUpdate({genjouristId:userId}, {$pop:{supporters:foundItem}}, callback);
}


//=============================================================================
//============================== SUPPORTING ===================================
//=============================================================================


module.exports.addSupporting = function(userId, supporting, callback){ 
  User.findOneAndUpdate({genjouristId:userId}, {$push:{supporting:supporting}}, callback);
}

module.exports.removeSupporting = function(userId, supporting, callback){
  User.findOneAndUpdate({genjouristId:userId}, {$pop:{supporting:supporting}}, callback);
}

module.exports.updateSupporterNumber = function(userId, supportersNumber, callback){
  User.updateOne({genjouristId:userId},{$set:{ supportNumber : supportersNumber }}, callback);  
}

module.exports.updateSupportingNumber = function(userId, supportersNumber, callback){
  User.updateOne({genjouristId:userId},{$set:{ supportingNumber : supportersNumber }}, callback);  
}

module.exports.getSupportingArray = function(userId){
  //return UserId.find({genjouristId:userId},)
}