const User = require('../models/userModels');


let getFollow = (req, res) => {
  User.update({
    _id:'5a52532d320a8712151c4ae5'
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
          userID: '5a52532d320a8712151c4ae5'
        }
      }
    })
    .then((result)=>{
      res.status(200).json({
        msg: 'Sukses',
        data: result
      });
    })
  })
  .catch((error)=>{
    res.status(403).json(error);
  })
}


module.exports = {
  getFollow
}