const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FavoriteSchema = new Schema({
  creatorId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  spotId: {
    type: Schema.Types.ObjectId,
<<<<<<< HEAD
    ref: 'Sport'
=======
    ref: 'Spot'
>>>>>>> d819945c5f491230cbe46e19c4f6d2c9fb9724c7
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const Favorite = mongoose.model('Favorite', FavoriteSchema);
module.exports = Favorite;