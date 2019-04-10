const mongoose = require('mongoose');

const User = require('./user.model');
const Room  = require('./room.model');
const Task  = require('./task.model');
const Item  = require('./item.model');
const Moment  = require('./moment.model');
const InfoItem  = require('./infoItem.model');
const itemLog  = require('./itemLog.model');

const homeSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  homeCode: {
    type: String,
    unique: true
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  attachment: {
    type: String
  }
},{
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (doc, ret) => {
      ret.id = doc._id;
      delete ret.__v;
      return ret;
    }
  }
});

homeSchema.virtual('users', {
  ref: User.modelName,
  localField: '_id',
  foreignField: 'home'
})

homeSchema.virtual('rooms', {
  ref: Room.modelName,
  localField: '_id',
  foreignField: 'home'
})

homeSchema.virtual('tasks', {
  ref: Task.modelName,
  localField: '_id',
  foreignField: 'home'
})

homeSchema.virtual('items', {
  ref: Item.modelName,
  localField: '_id',
  foreignField: 'home'
})

homeSchema.virtual('moments', {
  ref: Moment.modelName,
  localField: '_id',
  foreignField: 'home'
})

homeSchema.virtual('info', {
  ref: InfoItem.modelName,
  localField: '_id',
  foreignField: 'home'
})

homeSchema.virtual('log', {
  ref: itemLog.modelName,
  localField: '_id',
  foreignField: 'home'
})

homeSchema.pre('save', function (next) {
  const home = this
  home.homeCode = `${home.name.charAt(0)}${Math.floor(Math.random()*999)}${home.name.length}`
  return next()
})

const Home = mongoose.model('Home', homeSchema)
module.exports = Home;
