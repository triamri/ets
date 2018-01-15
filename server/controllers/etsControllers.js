const Ets = require('../models/etsModels');
const image = require('../helpers/images');

let getAll = (req, res) => {
  Ets.find()
    .populate('userID')
    .then((results) => {
      res.status(200).json({
        msg: 'Sukses',
        data: results
      })
    })
    .catch(err => {
      res.status(500).json(err);
    })
}

let detailAll = (req, res) => {
  Ets.findById(req.params.id)
    .populate('userID')
    .then((result) => {
      res.status(200).json({
        msg: 'Sukses',
        data: results
      })
    })
    .catch(err => {
      res.status(500).json(err);
    })
}

let getUser = (req, res) => {
  Ets.findOne({
      userID: req.getData.id
    })
    .populate('userID')
    .then((results) => {
      res.status(200).json({
        msg: 'Sukses',
        data: results
      })
    })
    .catch(err => {
      res.status(500).json(err);
    })
}

let detailUser = (req, res) => {
  Ets.findOne({
      _id: req.parems.id,
      userID: req.getData.id
    })
    .populate('userID')
    .then((result) => {
      res.status(200).json({
        msg: 'Sukses',
        data: result
      })
    })
    .catch(err => {
      res.status(500).json(err);
    })
}

let postCreate = (req, res) => {
  if (!req.file.cloudStoragePublicUrl) {
    res.status(500).json({
      msg: 'gambar tidak ada'
    })
  }

  const newEts = new Ets({
    userID: req.getData.id,
    foto: req.file.cloudStoragePublicUrl,
    caption: req.body.caption,
    comment: []
  })

  newEts.save()
    .then((result) => {
      Ets.findById(result._id)
      .populate('userID')
      .then((get) => {
        res.status(200).json({
          msg: 'sukses',
          data: get
        })
      })
    })
    .catch(err => {
      res.status(500).json(err);
    })

}

let putUpdate = (req, res) => {
    Ets.findOne({
      _id: req.params.id,
      userID: req.getData.id
    })
    .then((result) => {
      result.caption = req.body.caption || result.caption

      result.save()
        .then((updateData) => {
          res.status(200).json({
            msg: 'sukses',
            data: updateData
          })
        })
        .catch(err => {
          res.status(500).json(err);
        })
    })
    .catch(err => {
      res.status(500).json(err);
    })
}

let putUpdateFoto = (req, res) => {
  Ets.findOne({
      _id: req.params.id,
      userID: req.getData.id
    })
    .then((result) => {
      result.foto = req.file.cloudStoragePublicUrl,
      result.caption = req.body.caption || result.caption

      result.save()
        .then((updateData) => {
          res.status(200).json({
            msg: 'sukses',
            data: updateData
          })
        })
        .catch(err => {
          res.status(500).json(err);
        })
    })
    .catch(err => {
      res.status(500).json(err);
    })
}

let putLike = (req, res) => {
  Ets.update({
      _id: req.params.id
    },{
      $push:{
        like:{
          userID: req.getData.id
        }
      }
    })
    .then((result) => {
      res.status(200).json({
        msg: 'sukses',
        data: result
      })
    })
    .catch(err => {
      res.status(500).json(err);
    })
}

let putUnlike = (req, res) => {
  Ets.update({
      _id: req.params.id
    },{
      $pull:{
        like:{
          userID: req.getData.id
        }
      }
    })
    .then((result) => {
      res.status(200).json({
        msg: 'sukses',
        data: result
      })
    })
    .catch(err => {
      res.status(500).json(err);
    })
}

let putComment = (req, res) => {
  Ets.update({
      _id: req.body.id,
      userID: req.getData.id
    },{
      $push:{
        comment:{
          userID: req.body.userID,
          komentar: req.body.komentar
        }
      }
    })
    .then((result) => {
      res.status(200).json({
        msg: 'sukses',
        data: result
      })
    })
    .catch(err => {
      res.status(500).json(err);
    })
}

let remove = (req, res) => {
  Ets.remove({
      _id: req.params.id,
      userID: req.getData.id
    })
    .then((removedata) => {
      res.status(200).json({
        msg: 'sukses',
        data: removedata
      })
    })
    .catch(err => {
      res.status(500).json(err);
    })
}

module.exports = {
  getAll,
  detailAll,
  getUser,
  detailUser,
  postCreate,
  putUpdate,
  putUpdateFoto,
  putLike,
  putUnlike,
  putComment,
  remove
}