const express = require('express');
const router = express.Router();
const secure = require('../middlewares/secure.mid')
const itemController = require('../controllers/item.controller');

router.get('/list',
secure.isAuthenticated,
  itemController.list
)

router.post('/create',
secure.isAuthenticated,
  itemController.create
)

router.get('/:id',
secure.isAuthenticated,
  itemController.details
)

router.put('/:id',
secure.isAuthenticated,
  itemController.edit
)

// router.get('/delete',
// itemController.delete
// )

module.exports = router