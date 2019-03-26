const express = require('express');
const router = express.Router();
const secure = require('../middlewares/secure.mid')
const itemController = require('../controllers/item.controller');

router.get('/list',
  secure.isAuthenticated,
  secure.checkHomeItem,
  itemController.list
)

router.post('/create',
  secure.isAuthenticated,
  secure.checkHomeItem,
  itemController.create
)

router.get('/:id',
  secure.isAuthenticated,
  secure.checkHomeItem,
  itemController.details
)

router.put('/:id',
  secure.isAuthenticated,
  secure.checkHomeItem,
  itemController.edit
)

// router.get('/delete',
// secure.checkHomeItem,
// itemController.delete
// )

module.exports = router