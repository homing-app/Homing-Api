const express = require('express');
const router = express.Router();

const taskController = require('../controllers/task.controller');

router.get('/list',
  taskController.list
)

router.post('/create',
  taskController.create
)

router.get('/:id',
  taskController.details
)

router.put('/:id',
  taskController.edit
)

// router.get('/delete',
// itemController.delete
// )

module.exports = router