const express = require('express');
const router = express.Router();

const itemController = require('../controllers/item.controller');

router.get('/list',
  itemController.list
)

router.post('/create',
  itemController.create
)

router.get('/:id',
  itemController.details
)

router.put('/:id',
  itemController.edit
)

// router.get('/delete',
// itemController.delete
// )

module.exports = router