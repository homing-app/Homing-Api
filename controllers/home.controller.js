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
  console.log("home details => ",req.user.home)
  //Cuando esté el front, el findById será req.user.home, pero para que funcione con postman debe ser req.body
  Home.findById(req.params.id)
    .populate('users rooms tasks items')
    .then(home => res.json(home))
}
