const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');

router.get('/details',
userController.details
)

router.put('/:id',
userController.edit
)

router.put('/:id/setuphome',
userController.setuphome
)

module.exports = router