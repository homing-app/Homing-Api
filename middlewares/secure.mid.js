const createError = require('http-errors');
const Item = require('../models/item.model')
const Room = require('../models/room.model')
const Task = require('../models/task.model')

module.exports.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    next()
  } else {
    next(createError(403, 'Forbidden'))
  }
}

module.exports.checkHome = (req, res, next) => {
  if (req.isAuthenticated() && req.user.home.toString() === req.params.id.toString()) {
    next()
  } else {
    next(createError(403, 'Insufficient privileges'))
  }
}

module.exports.checkHomeItem = (req, res, next) => {
  if (req.isAuthenticated()) {
    Item.findById(req.params.id)
      .then(item => {
        if (item.home.toString() == req.user.home.toString()) {
          next()
        } else {
          next(createError(403, 'Insufficient privileges'))
        }
      })
      .catch(error => next(error))
  } else {
    next(createError(403, 'Insufficient privileges'))
  }
}

module.exports.checkHomeRoom = (req, res, next) => {
  if (req.isAuthenticated()) {
    Room.findById(req.params.id)
      .then(room => {
        if (room.home.toString() == req.user.home.toString()) {
          next()
        } else {
          next(createError(403, 'Insufficient privileges'))
        }
      })
      .catch(error => next(error))
  } else {
    next(createError(403, 'Insufficient privileges'))
  }
}

module.exports.checkHomeTask = (req, res, next) => {
  if (req.isAuthenticated()) {
    Task.findById(req.params.id)
      .then(task => {
        if (req.user.home.toString() === task.home.toString()) {
          next()
        } else {
          next(createError(403, 'Insufficient privileges'))
        }
      })
      .catch(error => next(error))
  } else {
    next(createError(403, 'Insufficient privileges'))
  }
}

module.exports.checkHomeMoment = (req, res, next) => {
  if (req.isAuthenticated()) {
    Moment.findById(req.params.id)
      .then(moment => {
        if (req.user.home.toString() === moment.home.toString()) {
          next()
        } else {
          next(createError(403, 'Insufficient privileges'))
        }
      })
      .catch(error => next(error))
  } else {
    next(createError(403, 'Insufficient privileges'))
  }
}