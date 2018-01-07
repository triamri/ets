const express = require('express');
const User = require('../controllers/userControllers');

const router = express.Router();

/* GET users listing. */
router.post('/signin', User.signIn);
router.post('/signout', User.signOut);

module.exports = router;