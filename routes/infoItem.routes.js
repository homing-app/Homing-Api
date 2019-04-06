const express = require('express');
const router = express.Router();
const secure = require('../middlewares/secure.mid')
const infoItemController = require('../controllers/infoItem.controller');

router.get('/list',
  secure.isAuthenticated,
  // secure.checkHomeItem,
  infoItemController.list
)

router.post('/create',
  secure.isAuthenticated,
  // secure.checkHomeItem,
  infoItemController.create
)

router.get('/:id',
  secure.isAuthenticated,
  // secure.checkHomeItem,
  infoItemController.details
)

router.put('/:id',
  secure.isAuthenticated,
  // secure.checkHomeItem,
  infoItemController.edit
)

router.delete('/:id',
  secure.isAuthenticated,
  infoItemController.delete
)

module.exports = router