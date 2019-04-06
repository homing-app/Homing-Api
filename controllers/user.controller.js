const User = require('../models/user.model');
const Home = require('../models/home.model')
const createError = require('http-errors');

module.exports.details = (req, res, next) => {
  User.findById(req.user.id)
    .populate('tasks items')
    .then(user => {
      if (!user) {
        throw createError(404, 'User not found')
      } else {
        res.json(user)
      }
    })
    .catch(error => next(error))
} 

module.exports.edit = (req, res, next) => {
delete req.body.email;
const user = req.user;

Object.keys(req.body).forEach(prop => user[prop] = req.body[prop])

if(req.file) user.imageUrl = req.file.secure_url;

user.save()
  .then(user => res.status(202).json(user))
  .catch(error => next(error))
}

module.exports.setuphome = (req, res, next) => {
  Home.findOne({homeCode: req.body.homeCode})
    .then(home => {
      if(!home) {
        throw createError (404, 'house not found')
      } else {
        req.user.home = home.id
        req.user.save()
          .then(response => res.json(response))
      }
    })
    .catch(error => next(error))
}

