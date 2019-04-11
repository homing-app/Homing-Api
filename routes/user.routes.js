const express = require('express');
const router = express.Router();
const secure = require('../middlewares/secure.mid')
const uploader = require('../configs/storage.config')
const userController = require('../controllers/user.controller');

router.get('/:id',
secure.isAuthenticated,
userController.details
)

router.put('/:id',
secure.isAuthenticated,
uploader.single('attachment'),
userController.edit
)

router.put('/:id/setuphome',
secure.isAuthenticated,
userController.setuphome
)

router.put('/:id/removehome',
// secure.isAuthenticated,
userController.removeHome
)

module.exports = router