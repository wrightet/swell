const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SpotSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  coordinates: {
    type: Array,
    required: true
  },
  description: {
    type: String
  },
  creatorId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const Spot = mongoose.model('Spot', SpotSchema);
module.exports = Spot;