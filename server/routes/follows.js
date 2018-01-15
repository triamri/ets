const express = require('express');
const Follow = require('../controllers/followControllers');
const Auth = require('../middleware/auto');
const router = express.Router();

/* GET home page. */
router.get('/followers/:id', Auth.isLogin, Follow.getFollow);
// router.get('/show/followers', Ets.showFollowers);
// router.get('/show/follow', Ets.getUser);
// router.get('/unfollowing/:id', Ets.detailUser);

module.exports = router;