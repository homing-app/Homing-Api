const mongoose = require('mongoose');

const itemLogSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  idTask: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  home: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Home'
  }, 
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }, 
},{
  timestamps: true,
});

const ItemLog = mongoose.model('ItemLog', itemLogSchema)
module.exports = ItemLog;
