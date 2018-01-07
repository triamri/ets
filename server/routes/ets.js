const express = require('express');
const Ets = require('../controllers/etsControllers');
const Image = require('../helpers/images');

const router = express.Router();

/* GET home page. */
router.get('/all', Ets.getAll);
router.get('/detailall', Ets.detailAll);
router.get('/alluser', Ets.getUser);
router.get('/detailuser', Ets.detailUser);
router.get('/likes/:id', Ets.putLike);
router.get('/unlike/:id', Ets.putUnlike);
router.put('/comment', Ets.putComment);
router.post('/create', Image.multer.single('foto'), Image.sendUploadToGCS, Ets.postCreate);
router.put('/update', Ets.putUpdate);
router.delete('/remove', Ets.remove);

module.exports = router;