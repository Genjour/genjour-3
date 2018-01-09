const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');


//User Schema
const  UserSchema = mongoose.Schema({
  
  name        :String,
  email       :String,
  username    :String,
  password    :String,
  genjouristId:String,
  gender      :String,
  dob         :String,
  createdOn   :String,
  supporters  :Array,
  supportersNumber : Number,
  supporting  :Array,
  supportingNumber  : Number,
  status: Boolean,
  
  
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
