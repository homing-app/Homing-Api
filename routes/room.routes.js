const express = require('express');
const router = express.Router();

const roomController = require('../controllers/room.controller');

router.get('/list',
  roomController.list
)

router.post('/create',
  roomController.create
)

router.get('/details',
  roomController.details
)

router.put('/:id',
  roomController.edit
)

router.delete('/:id',
roomController.delete
)

module.exports = router