const Room = require('../models/room.model')

module.exports.list = (req, res, next) => {
  Room.find()
    .then(rooms => {
      res.json(rooms)
    })
    .catch(error => next(error))
}

module.exports.create = (req, res, next) => {
  const room = new Room(req.body)
  
  room.save()
    .then(room => res.status(201).json(room))
    .catch(error => next(error))
}

module.exports.details = (req, res, next) => {
  Room.findById(req.params.id)
    .then(room => {
      if(!room) {
        throw createError(404, 'Room not found!')
      } else {
        res.json(room)
      }
    })
}

module.exports.edit = (req, res, next) => {
  Room.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(room => {
      if(!room) {
        throw createError(404, 'card not found!')
      } else {
        res.json(room)
      }
    })
}

module.exports.delete = (req, res, next) => {
  Room.findByIdAndDelete(req.params.id)
    .then(room => {
      if(!room) {
        throw createError(404, 'card not found!')
      } else {
        res.json("Room deleted!")
      }
    })
}