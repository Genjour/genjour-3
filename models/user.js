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
  profileImg       : String,
  createdOn        : String,
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

//=============================================================================
//============================== add new user =================================
//=============================================================================

module.exports.addUser = function(newUser, callback){
  bcrypt.genSalt(10,(err,salt)=>{
    bcrypt.hash(newUser.password, salt, (err,hash)=>{
      if(err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    });
  });
}


//=============================================================================
//============================== compare password =============================
//=============================================================================

module.exports.comparePassword = function(candiadatePassword, hash, callback){
  bcrypt.compare(candiadatePassword,hash,(err,isMatch)=>{
    if(err) throw err;
    callback(null,isMatch);
  });
}


//=============================================================================
//============================== find user by name ============================
//=============================================================================

module.exports.findUserByName = function(name, callback){
  User.find({name:name},{name:1, genjouristId:1, dob:1, profileImg:1 },callback);
}

//=============================================================================
//============================== find user by genjouristId ====================
//=============================================================================

module.exports.findUser = function(userId, callback){
        const query = {genjouristId: userId}
        User.findOne(query, callback);
}


//=============================================================================
//============================== Recommended User =============================
//=============================================================================

module.exports.recommendedUsers = function(arr,callback){
  User.find({genjouristId:{$nin:arr}},callback);
}


//=============================================================================
//====================== get supporters and supporting ========================
//=============================================================================

module.exports.getSupporting = function(arr,callback){
  User.find(
              {genjouristId:{$in:arr}},
              {name:1, genjouristId:1, dob:1, imgUrl:1 },
              callback
            );
}

module.exports.getSupporters = function(arr,callback){
  User.find(
              {genjouristId:{$in:arr}},
              {name:1, genjouristId:1, dob:1, imgUrl:1 },
              callback
            );
}

module.exports.changeProfileImg = function(genjouristId,imgAddress,callback){
  User.findOneAndUpdate(
                          {genjouristId:genjouristId},
                          {$set: {profileImg:imgAddress}}, callback
  )
}

