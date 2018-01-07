const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

const etsSchema = new Schema({
  userID: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  foto: {
    type: String,
    require: [true, 'Foto Require']
  },
  caption: {
    type: String
  },
  like:[{
    _id: false,
    userID: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  }],
  comment: [{
    _id: false,
    userID: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    komentar: {
      type: String,
      require: [true, 'Comment Requuired']
    }
  }]
});

const Ets = mongoose.model('Ets', etsSchema);

module.exports = Ets;