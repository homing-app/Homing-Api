const express = require('express');
const router = express.Router();
const secure = require('../middlewares/secure.mid')

const uploader = require('../configs/storage.config')
const homeController = require('../controllers/home.controller');

router.post('/register',
  secure.isAuthenticated,
  homeController.register
)

router.get('/:id',
  secure.isAuthenticated,
  secure.checkHome,
  homeController.details
)

router.put('/:id',
  secure.isAuthenticated,
  // secure.checkHome,
  uploader.single('attachment'),
  homeController.edit
)

module.exports = router