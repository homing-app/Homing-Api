const createError = require('http-errors');

module.exports.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    next()
  } else {
    next(createError(403, 'Forbidden'))
  }
}

module.exports.checkHome = (req, res, next) => {
  if (req.isAuthenticated() && req.user.home == req.params.id) {
    next()
  } else {
    next(createError(403, 'Insufficient privileges'))
  }
}