const User = require('../models/user.model');
const createError = require('http-errors');

module.exports.details = (req, res, next) => {
    //Cuando esté el front, el findById será req.user.id, pero para que funcione con postman debe ser req.body
  User.findById(req.body)
    .populate('tasks')
    .then(user => {
      if (!user) {
        throw createError(404, 'User not found')
      } else {
        res.json(user)
      }
    })
} 