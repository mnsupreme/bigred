console.log('User server model');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// build your friend schema and add it to the mongoose.models
var UserSchema = new mongoose.Schema({
  	email: String,
  	password: String

}, {timestamps: true  });
// register the schema as a model
var User = mongoose.model('User', UserSchema);