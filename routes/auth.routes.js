const express = require('express');
const router = express.Router();

const uploader = require('../configs/storage.config')
const authController = require('../controllers/auth.controller');

router.post('/authenticate',
  authController.authenticate
)

router.post('/register',
uploader.single('attachment'),
  authController.register
)

router.post('/logout',
  authController.logout
)

module.exports = router;