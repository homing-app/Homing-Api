const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home.controller');

router.post('/register',
  homeController.register
)

router.get('/:id',
homeController.details
)

router.put('/:id',
homeController.edit
)

module.exports = router