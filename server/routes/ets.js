const express = require('express');
const Ets = require('../controllers/etsControllers');
const Image = require('../helpers/images');
const Auth = require('../middleware/auto');
const router = express.Router();

/* GET home page. */
router.get('/all', Ets.getAll);
router.get('/detailall', Auth.isLogin, Ets.detailAll);
router.get('/alluser', Auth.isLogin, Ets.getUser);
router.get('/detailuser', Auth.isLogin, Ets.detailUser);
router.get('/likes/:id', Auth.isLogin, Ets.putLike);
router.get('/unlike/:id', Auth.isLogin, Ets.putUnlike);
router.put('/comment', Auth.isLogin, Ets.putComment);
router.post('/create', Auth.isLogin, Image.multer.single('foto'), Image.sendUploadToGCS, Ets.postCreate);
router.put('/update/:id', Auth.isLogin, Ets.putUpdate);
router.put('/updatefoto/:id', Auth.isLogin, Image.multer.single('foto'), Image.sendUploadToGCS, Ets.putUpdateFoto);
router.delete('/remove/:id', Auth.isLogin, Ets.remove);

module.exports = router;