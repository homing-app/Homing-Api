const createError = require('http-errors');
const cors = require('cors');

const allowedOrigins = process.env.CORS_ORIGINS || ['http://localhost:3000']

module.exports = {
  origin: function (origin, cb) {
      const allowed = allowedOrigins.indexOf(origin) !== -1;
      cb(null, allowed);
  },
  credentials: true,
}

// module.exports = cors({
//   origin: (origin, next) => {
//     const isAllowed = !origin || allowedOrigins.some(o => o === origin);
//     if(isAllowed) {
//       next(null, isAllowed)
//     } else {
//       next(createError(401, "Not allowed by CORS"))
//     }
//   },
//   credentials: true
// })