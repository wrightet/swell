const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FavoriteSchema = new Schema({
  creatorId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  spotId: {
    type: Schema.Types.ObjectId,
    ref: 'Sport'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const Favorite = mongoose.model('Favorite', FavoriteSchema);
module.exports = Favorite;