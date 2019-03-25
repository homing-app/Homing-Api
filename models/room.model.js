const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
    enum: ["clean","medium","dirty"]
  },
  home: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Home'
  }
},{
  timestamps: true,
});

const Room = mongoose.model('Room', roomSchema)
module.exports = Room;
