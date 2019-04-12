const createError = require('http-errors');
const cors = require('cors');

const allowedOrigins = process.env.ALLOWED_ORIGINS
? process.env.ALLOWED_ORIGINS.split(',')
: ['http://localhost:3000']

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