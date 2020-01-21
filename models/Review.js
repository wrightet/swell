const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
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
  quality: {
    type: Number,
    required: true
  },
  difficulty: {
    type: Number,
    required: true
  },
  title: {
    type: String
  },
  body: {
    type: String
  }
})

const Review = mongoose.model('Review', ReviewSchema);
module.exports = Review;