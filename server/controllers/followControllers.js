const User = require('../models/userModels');


let getFollow = (req, res) => {
  User.update({
    _id: req.getData.id
  },{
    $push: {
      follows:{ 
        userID: req.params.id 
      }
    }
  })
  .then((getFolower)=>{
    User.update({
      _id: req.params.id
    },{
      $push: {
        followers: {
          userID: req.getData.id
        }
      }
    })
    .then((result)=>{
      User.findById(req.getData.id)
      .populate('followers.userID')
      .populate('follows.userID')
      .then((get) => {
        res.status(200).json({
          msg: 'sukses',
          data: get
        })
      })
    })
  })
  .catch((error)=>{
    res.status(403).json(error);
  })
}

let unFollow = (req, res) => {
  User.update({
    _id: req.getData.id
  },{
    $pull: {
      follows:{ 
        userID: req.params.id 
      }
    }
  })
  .then((result)=>{
    User.update({
      _id: req.params.id
    },{
      $pull: {
        followers: {
          userID: req.getData.id
        }
      }
    })
    .then((result)=>{
      User.findById(req.getData.id)
      .populate('followers.userID')
      .populate('follows.userID')
      .then((get) => {
        res.status(200).json({
          msg: 'sukses',
          data: get
        })
      })
    })
  })
  .catch((error)=>{
    res.status(403).json(error);
  })
}


module.exports = {
  getFollow,
  unFollow
}