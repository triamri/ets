const express = require('express');
const Follow = require('../controllers/followControllers');
const Auth = require('../middleware/auto');
const router = express.Router();

/* GET home page. */
router.get('/followers/:id', Auth.isLogin, Follow.getFollow);
router.get('/unfolow/:id', Auth.isLogin, Follow.unFollow);

module.exports = router;