const createError = require('http-errors');
const cors = require('cors');

const allowedOrigins = ['https://homing-web.herokuapp.com/']

module.exports = cors({
  origin: (origin, next) => {
    const isAllowed = !origin || allowedOrigins.some(o => o === origin);
    if(isAllowed) {
      next(null, isAllowed)
    } else {
      next(createError(401, "Not allowed by CORS"))
    }
  },
  credentials: true
})