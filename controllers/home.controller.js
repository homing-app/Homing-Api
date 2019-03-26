const Home = require('../models/home.model');
const createError = require('http-errors');

module.exports.register = (req,res,next) => {
  Home.findOne({email: req.body.email})
    .then(home => {
      if(home) {
        throw createError(409, 'Home already registered')
      } else {
        const home = new Home(req.body)
        if(req.file){
          home.imageUrl = req.file.secure_url
        }
        return home.save()
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
  Home.findById(req.user.home)
    .populate('users rooms tasks items')
    .then(home => res.json(home))
}
