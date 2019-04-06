
const express = require('express');
const router = express.Router();
const secure = require('../middlewares/secure.mid')
const momentController = require('../controllers/moment.controller');

router.get('/list',
  secure.isAuthenticated,
  // secure.checkHomeMoment,
  momentController.list
)

router.post('/create',
  secure.isAuthenticated,
  // secure.checkHomeMoment,
  momentController.create
)

router.get('/:id',
  secure.isAuthenticated,
  secure.checkHomeMoment,
  momentController.details
)

router.put('/:id',
  secure.isAuthenticated,
  secure.checkHomeMoment,
  momentController.edit
)

// router.get('/delete',
//secure.checkHomeMoment,
// itemController.delete
// )

module.exports = router