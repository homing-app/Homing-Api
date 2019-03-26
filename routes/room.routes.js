const express = require('express');
const router = express.Router();
const secure = require('../middlewares/secure.mid')
const roomController = require('../controllers/room.controller');

router.get('/list',
  secure.isAuthenticated,
  secure.checkHomeRoom,
  roomController.list
)

router.post('/create',
  secure.isAuthenticated,
  secure.checkHomeRoom,
  roomController.create
)

router.get('/:id',
  secure.isAuthenticated,
  secure.checkHomeRoom,
  roomController.details
)

router.put('/:id',
  secure.isAuthenticated,
  secure.checkHomeRoom,
  roomController.edit
)

router.delete('/:id',
  secure.isAuthenticated,
  secure.checkHomeRoom,
  roomController.delete
)

module.exports = router