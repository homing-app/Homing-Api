const Home = require('../models/home.model');
const createError = require('http-errors');

module.exports.register = (req,res,next) => {
  Home.findOne({email: req.body.email})
    .then(home => {
      if(home) {
        throw createError(409, 'home already registered')
      } else {
        return new Home(req.body).save()
      }
    })
    .then(home => res.status(201).json(home))
    .catch(next)
}

module.exports.setUpHome = (req, res, next) => {
  Home.findOne({homeCode: req.body.homeCode})
    .then(home => {
      if(!home) {
        throw createError (404, 'house not found')
      } else {
        req.user.home = home.homeCode
      }
    })
    .catch(error => next(error))
}

module.exports.edit = (req, res, next) => {
  Home.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(home => {
      if(!home) {
        throw createError(404, 'Home not found!')
      } else {
        res.json(home)
      }
    })
}

module.exports.details = (req, res, next) => {
  //Cuando esté el front, el findById será req.user.home, pero para que funcione con postman debe ser req.body
  Home.findById(req.body)
    .populate('users rooms tasks')
    .then(home => res.json(home))
}
