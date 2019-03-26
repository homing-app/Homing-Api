const express = require('express');
const router = express.Router();
const secure = require('../middlewares/secure.mid')
const userController = require('../controllers/user.controller');

router.get('/details',
secure.isAuthenticated,
userController.details
)

router.put('/:id',
secure.isAuthenticated,
userController.edit
)

router.put('/:id/setuphome',
secure.isAuthenticated,
userController.setuphome
)

module.exports = router