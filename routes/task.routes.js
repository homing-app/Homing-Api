const express = require('express');
const router = express.Router();
const secure = require('../middlewares/secure.mid')
const taskController = require('../controllers/task.controller');

router.get('/list',
secure.isAuthenticated,
  taskController.list
)

router.post('/create',
secure.isAuthenticated,
  taskController.create
)

router.get('/:id',
secure.isAuthenticated,
  taskController.details
)

router.put('/:id',
secure.isAuthenticated,
  taskController.edit
)

// router.get('/delete',
// secure.isAuthenticated,
// itemController.delete
// )

module.exports = router