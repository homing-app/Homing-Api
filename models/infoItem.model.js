const mongoose = require('mongoose');

const infoItemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  home: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Home'
  }
},{
  timestamps: true,
});

const InfoItem = mongoose.model('InfoItem', infoItemSchema)
module.exports = InfoItem;
