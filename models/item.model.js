const mongoose = require('mongoose');

const User = require('./user.model');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
    enum: ["pending","done"],
    default: "pending"
  },
  home: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Home'
  }, 
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }, 
  expirationDate: {
    type: Date
  }
},{
  timestamps: true,
});

const Item = mongoose.model('Item', itemSchema)
module.exports = Item;
