const express = require('express');
const Follow = require('../controllers/followControllers');

const router = express.Router();

/* GET home page. */
router.get('/followers/:id', Follow.getFollow);
// router.get('/following/:id', Ets.detailAll);
// router.get('/unfollower/:id', Ets.getUser);
// router.get('/unfollowing/:id', Ets.detailUser);

module.exports = router;