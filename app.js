require('dotenv').config();

const createError = require('http-errors')
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport')

const authRoutes = require('./routes/auth.routes');
const homeRoutes = require('./routes/home.routes');
const userRoutes = require('./routes/user.routes');
const roomRoutes = require('./routes/room.routes');
const taskRoutes = require('./routes/task.routes');
const itemRoutes = require('./routes/item.routes');
const momentRoutes = require('./routes/moment.routes');
const infoItemRoutes = require('./routes/infoItem.routes');
const itemLogRoutes = require('./routes/itemLog.routes');

require('./configs/db.config');
const session = require('./configs/session.config');
const cors = require('./configs/cors.config');
require('./configs/passport.config')

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors)

app.use(session);
app.use(passport.initialize())
app.use(passport.session())


app.use('/room', roomRoutes);
app.use('/moment', momentRoutes);
app.use('/infoitem', infoItemRoutes);
app.use('/itemlog', itemLogRoutes);
app.use('/task', taskRoutes);
app.use('/item', itemRoutes);
app.use('/home', homeRoutes);
app.use('/user', userRoutes);
app.use('/', authRoutes)

app.use((req, res, next) => {
  res.locals.session = req.user;
  next();
})

// 404
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (error, req, res, next) {
  console.error(error);

  res.status(error.status || 500);

  const data = {}

  if (error instanceof mongoose.Error.ValidationError) {
    res.status(400);
    for (field of Object.keys(error.errors)) {
      error.errors[field] = error.errors[field].message
    }
    data.errors = error.errors
  } else if (error instanceof mongoose.Error.CastError) {
    error = createError(404, 'Resource not found')
  }

  data.message = error.message;
  res.json(data);
});

module.exports = app;
