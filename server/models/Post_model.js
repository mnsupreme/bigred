console.log('Post server model');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// build your friend schema and add it to the mongoose.models
var PostSchema = new mongoose.Schema({
  owner: String,
  address1: String,
  address2: String,
  description: String,
  zip: String,
  guests: Number,
  phone: String,
  email: String,
  price: Number,
  wifi: Boolean,
  washer: Boolean,
  parking: Boolean,
  fridge: Boolean,
  residents:[],
  _user:[{type: Schema.Types.ObjectId, ref: 'User'}]//one to many where this is the many

}, {timestamps: true  });
// register the schema as a model
var Post = mongoose.model('Post', PostSchema);

