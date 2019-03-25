const express = require('express');
const router = express.Router();
const secure = require('../middlewares/secure.mid')
const homeController = require('../controllers/home.controller');

router.post('/register',
  secure.isAuthenticated,
  homeController.register
)

router.get('/:id',
  secure.isAuthenticated,
  homeController.details
)

router.put('/:id',
  secure.isAuthenticated,
  homeController.edit
)

module.exports = router