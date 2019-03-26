const express = require('express');
const router = express.Router();
const secure = require('../middlewares/secure.mid')
const taskController = require('../controllers/task.controller');

router.get('/list',
  secure.isAuthenticated,
  secure.checkHomeTask,
  taskController.list
)

router.post('/create',
  secure.isAuthenticated,
  secure.checkHomeTask,
  taskController.create
)

router.get('/:id',
  secure.isAuthenticated,
  secure.checkHomeTask,
  taskController.details
)

router.put('/:id',
  secure.isAuthenticated,
  secure.checkHomeTask,
  taskController.edit
)

// router.get('/delete',
//secure.checkHomeTask,
// itemController.delete
// )

module.exports = router