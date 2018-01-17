const express = require('express');
const User = require('../controllers/userControllers');
const Auth = require('../middleware/auto')
const router = express.Router();

/* GET users listing. */
router.post('/signin', User.signIn);
router.post('/signout', User.signOut);
router.get('/user', Auth.isLogin, User.getUser);
router.get('/all', Auth.isLogin, User.getUserAll);

module.exports = router;