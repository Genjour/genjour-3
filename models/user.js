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
  imgUrl           : String,
  createdOn        : String,
  supporters       : [],
  supporting       : [],
  supportersNumber : Number,
  supportingNumber : Number,
  status           : Boolean,
  mobile           : String,
  
  
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


//=============================================================================
//============================== find user by genjouristId ====================
//=============================================================================

module.exports.findUser = function(userId, callback){
        const query = {genjouristId: userId}
        User.findOne(query, callback);
}

//=============================================================================
//============================== SUPPORTERS ===================================
//=============================================================================

module.exports.addSupporter = function(userId, supporters, callback){ 
  User.findOneAndUpdate({genjouristId:supporters}, {$push:{supporters:userId}}, callback);
}

module.exports.removeSupporter = function(userId, supporters, callback){
  User.findOneAndUpdate({genjouristId:supporters}, {$pop:{supporters:userId}}, callback);
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

//=============================================================================
//========================= UPDATING SUPPORTERS AND SUPPORTING ================
//=============================================================================

module.exports.updateSupporterNumber = function(userId, supportersNumber, callback){
  User.updateOne({genjouristId:userId},{$set:{ supportNumber : supportersNumber }}, callback);  
}

module.exports.updateSupportingNumber = function(userId, supportersNumber, callback){
  User.updateOne({genjouristId:userId},{$set:{ supportingNumber : supportersNumber }}, callback);  
}


//=============================================================================
//============================== Recommended User =============================
//=============================================================================

module.exports.recommendedUsers = function(arr,callback){
  User.find({genjouristId:{$nin:arr}},callback);
}