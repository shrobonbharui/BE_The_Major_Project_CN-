const express = require('express');
const router = express.Router();
const user_Controller = require('../controllers/user_controller')

console.log("ROUTING USER");

router.get('/proofile', user_Controller.proofile);

module.exports = router;