const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 4;

const User = require('./user.model');
const Room  = require('./room.model');
const Task  = require('./task.model');

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
  imageUrl: {
    type: String
  },
  address: {
    vicinity: {
      type: String
    },
    number: {
      type: Number
    },
    door: {
      type: String
    },
    addressCode: {
      type: Number
    }
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
  ref: Task.modelName,
  localField: '_id',
  foreignField: 'home'
})

homeSchema.pre('save', function (next) {
  const home = this
  console.log(home.name)
  home.homeCode = `${home.name.charAt(0)}${Math.floor(Math.random()*999)}${home.name.length}`
  return next()
})

const Home = mongoose.model('Home', homeSchema)
module.exports = Home;
