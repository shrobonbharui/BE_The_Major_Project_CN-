const express = require('express');
const router = express.Router();
const home_Controller = require('../controllers/home_controller')

console.log("ROUTING");

router.get('/', home_Controller.home);
router.use('/users', require('./user'));
router.use('/post', require('./post'));

module.exports = router;