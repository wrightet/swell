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
    ref: 'Spot',
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
  coSurfers: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ]
})

const SurfSession = mongoose.model('SurfSession', SurfSessionSchema);
module.exports = SurfSession;