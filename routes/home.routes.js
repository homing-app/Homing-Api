const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home.controller');

router.post('/register',
  homeController.register
)

router.post('/setUpHome',
  homeController.setUpHome
)

router.get('/details',
homeController.details
)

module.exports = router