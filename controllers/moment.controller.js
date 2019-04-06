const Moment = require('../models/moment.model')
const createError = require('http-errors')

module.exports.list = (req, res, next) => {
  Moment.find()
    .then(moments => {
      res.json(moments)
    })
    .catch(error => next(error))
}

module.exports.create = (req, res, next) => {
  const moment = new Moment(req.body)
  
  moment.save()
    .then(moment => res.status(201).json(moment))
    .catch(error => next(error))
}

module.exports.details = (req, res, next) => {
  Moment.findById(req.params.id)
    .populate('user')
    .then(moment => {
      if(!moment) {
        throw createError(404, 'Moment not found!')
      } else {
        res.json(moment)
      }
    })
    .catch(error => next(error))
}

module.exports.edit = (req, res, next) => {
  Moment.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(moment => {
      if(!moment) {
        throw createError(404, 'Moment not found!')
      } else {
        res.json(moment)
      }
    })
}

module.exports.delete = (req, res, next) => {
  Moment.findByIdAndDelete(req.params.id)
    .then(moment => {
      if(!moment) {
        throw createError(404, 'Moment not found!')
      } else {
        res.json("Moment deleted!")
      }
    })
}