const express = require('express');
const router = express.Router();
const post_Controller = require('../controllers/post_controller');

console.log("my post");

router.get('/',post_Controller.mypost);
module.exports = router;
