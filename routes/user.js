const express = require('express');
const router = express.Router();
const user_Controller = require('../controllers/user_controller')

router.get('/proofile', user_Controller.proofile);

router.get('/sign_up', user_Controller.signUp);

router.get('/sign_in', user_Controller.signIn);

router.post('/create', user_Controller.create);

router.post('/create_session', user_Controller.createSession);

module.exports = router;