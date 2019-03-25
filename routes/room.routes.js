const express = require('express');
const router = express.Router();
const secure = require('../middlewares/secure.mid')
const roomController = require('../controllers/room.controller');

router.get('/list',
secure.isAuthenticated,
  roomController.list
)

router.post('/create',
secure.isAuthenticated,
  roomController.create
)

router.get('/:id',
secure.isAuthenticated,
  roomController.details
)

router.put('/:id',
secure.isAuthenticated,
  roomController.edit
)

router.delete('/:id',
secure.isAuthenticated,
roomController.delete
)

module.exports = router