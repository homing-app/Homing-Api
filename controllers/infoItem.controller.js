const InfoItem = require('../models/infoItem.model')
const createError = require('http-errors');

module.exports.list = (req, res, next) => {
  InfoItem.find()
    .then(items => {
      res.json(items)
    })
    .catch(error => next(error))
}

module.exports.create = (req, res, next) => {
  const infoItem = new InfoItem(req.body)
  infoItem.save()
    .then(item => res.status(201).json(item))
    .catch(error => next(error))
}

module.exports.details = (req, res, next) => {
  InfoItem.findById(req.params.id)
    .then(item => {
      if(!item) {
        throw createError(404, 'Item not found!')
      } else {
        res.json(item)
      }
    })
    .catch(error => next(error))
}

module.exports.edit = (req, res, next) => {
  InfoItem.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(item => {
      if(!item) {
        throw createError(404, 'Item not found!')
      } else {
        res.json(item)
      }
    })
}

module.exports.delete = (req, res, next) => {
  InfoItem.findByIdAndDelete(req.params.id)
    .then(item => {
      if(!item) {
        throw createError(404, 'Item not found!')
      } else {
        res.json("Item deleted!")
      }
    })
}