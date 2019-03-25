const express = require('express');
const router = express.Router();

const taskController = require('../controllers/task.controller');

router.get('/list',
  taskController.list
)

router.post('/create',
  taskController.create
)

router.get('/details',
  taskController.details
)

router.post('/edit',
  taskController.edit
)

// router.get('/delete',
// itemController.delete
// )

module.exports = router