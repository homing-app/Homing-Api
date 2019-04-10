const express = require('express');
const router = express.Router();
const secure = require('../middlewares/secure.mid')
const itemLogController = require('../controllers/itemLog.controller');

router.post('/create',
  secure.isAuthenticated,
  // secure.checkHomeItem,
  itemLogController.create
)

// router.get('/list',
//   secure.isAuthenticated,
//   // secure.checkHomeItem,
//   itemLogController.list
// )

// router.get('/:id',
//   secure.isAuthenticated,
//   secure.checkHomeItem,
//   itemLogController.details
// )

// router.put('/:id',
//   secure.isAuthenticated,
//   secure.checkHomeItem,
//   itemLogController.edit
// )

// router.delete('/:id',
//   secure.isAuthenticated,
//   itemLogController.delete
// )

module.exports = router