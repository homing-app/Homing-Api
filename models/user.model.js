const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 4;
const Item = require('./item.model');
const Task = require('./task.model');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  phone:{
    type: Number,
  },
  name: {
    type: String,
    unique: true
  },
  attachment: {
    type: String
  },
  home: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Home'
  }
},{
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (doc, ret) => {
      ret.id = doc._id;
      delete ret.password,
      delete ret._id;
      delete ret.__v;
      return ret;
    }
  }
});

userSchema.virtual('items', {
  ref: Item.modelName,
  localField: '_id',
  foreignField: 'user'
})

userSchema.virtual('tasks', {
  ref: Task.modelName,
  localField: '_id',
  foreignField: 'user'
})

userSchema.pre('save', function (next) {
  const user = this
  if(!user.isModified('password')){
    next();
  } else {
    bcrypt.genSalt(SALT_WORK_FACTOR)
      .then(salt => {
        return bcrypt.hash(user.password, salt)
          .then(hash => {
            user.password = hash;
            next()
          })
      })
      .catch(next)
  }
})

userSchema.methods.checkPassword = function (password){
  return bcrypt.compare(password, this.password)
}

const User = mongoose.model('User', userSchema)
module.exports = User;
