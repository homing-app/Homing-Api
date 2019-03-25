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
  expirationDate: {
    type: Date
  }
},{
  timestamps: true,
});

itemSchema.virtual('users', {
  ref: User.modelName,
  localField: '_id',
  foreignField: 'task'
})

const Item = mongoose.model('Item', itemSchema)
module.exports = Item;
