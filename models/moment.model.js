const mongoose = require('mongoose');

const momentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  moment: {
    type: Date
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

const Moment = mongoose.model('Moment', momentSchema)
module.exports = Moment;
