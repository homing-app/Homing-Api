const User = require('../models/user.model');
const Home = require('../models/home.model')
const createError = require('http-errors');

module.exports.details = (req, res, next) => {
    //Cuando esté el front, el findById será req.user.id, pero para que funcione con postman debe ser req.body
  User.findById(req.body)
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

// module.exports.edit = (req, res, next) => {
//   User.findByIdAndUpdate(req.params.id, req.body, {new: true})
//   .then(user => {
//     if(!user) {
//       throw createError(404, 'User not found!')
//     } else {
//       res.json(user)
//     }
//   })
// }

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
  console.log(req.user)
  Home.findOne({homeCode: req.body.homeCode})
    .then(home => {
      if(!home) {
        throw createError (404, 'house not found')
      } else {
        console.log(home)
        req.user.home = home.id
        req.user.save()
          .then(response => res.json(response))
      }
    })
    .catch(error => next(error))
}

