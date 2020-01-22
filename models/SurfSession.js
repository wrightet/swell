const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SurfSessionSchema = new Schema({
  creatorId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  spotId: {
    type: Schema.Types.ObjectId,
<<<<<<< HEAD
    ref: 'Sport',
=======
    ref: 'Spot',
>>>>>>> d819945c5f491230cbe46e19c4f6d2c9fb9724c7
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  body: {
    type: String,
    required: true
  },
<<<<<<< HEAD
  coSurfers: {
    type: Array,
    default: []
  }
=======
  coSurfers: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ]
>>>>>>> d819945c5f491230cbe46e19c4f6d2c9fb9724c7
})

const SurfSession = mongoose.model('SurfSession', SurfSessionSchema);
module.exports = SurfSession;