const User = require('../models/userModels');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


let signIn = (req, res) => {
  const newUser = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    follower: [],
    following: [],
    password: req.body.password
  })

  newUser.save()
    .then((result) => {
      res.status(200).json({
        msg: 'Sukses',
        data: result
      });
    })
    .catch(err => {
      res.status(500).json(err);
    })

}

let signOut = (req, res) => {
  console.log(req.body.email);
  User.findOne({
      email: req.body.email
    })
    .then((result) => {
      if (!result) {
        res.status(403).json({
          msg: 'Maaf User Tidak Ada',
          login: false
        })
      }

      if (!bcrypt.compareSync(req.body.password, result.password)) {
        res.status(403).json({
          msg: 'Maaf Password Anda Salah',
          login: false
        })
      }

      jwt.sign({
        id: result._id,
        email: result.email,
        first: result.first_name
      }, process.env.SECRET_KEY, (err, token) => {
        res.status(200).json({
          msg: 'Login Sukses',
          data: result,
          token: token
        })
      });

    })
    .catch((err) => {
      res.status(500).json(err);
    })
}

let getUser = (req, res) => {
  User.findById(req.getData.id)
  .populate('followers.userID')
  .populate('follows.userID')
  .then((results) => {
    res.status(200).json({
      msg: 'sukses',
      data: results
    })
  })
  .catch(err => {
    res.status(500).json(err)
  })
}

module.exports = {
  signIn,
  signOut,
  getUser
}