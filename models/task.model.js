const mongoose = require('mongoose');
const User = require('./user.model');

const taskSchema = new mongoose.Schema({
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

const Task = mongoose.model('Task', taskSchema)
module.exports = Task;
