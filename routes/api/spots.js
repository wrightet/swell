// surfspots routes
const express = require("express");
const router = express.Router();
const Spot = require('../../models/Spot');
const Review = require('../../models/Review');
const Favorite = require('../../models/Favorite');
const jwt = require('jsonwebtoken');
const keys = require("../../config/keys");
const passport = require('passport');

// create surf spot
// require user to be logged in to create surf spot
// add validation checks 
router.post("/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // const { isValid, errors } = validateTweetInput(req.body);
    // if (!isValid) {
    //   return res.status(400).json(errors);
    // }
    const newSpot = new Spot({
      name: req.body.name,
      coordinates: req.body.coordinates.split(',').map(coord => parseFloat(coord, 10)),
      description: req.body.description,
      creatorId: req.user.id,
      createdAt: req.body.createdAt
    });
    newSpot.save()
      .then(spot => res.json(spot))
      .catch(err => res.status(400).json(err))
  }
)

// index route (all surf spots)
router.get('/', (req, res) => {
  Spot
    .find()
    .sort({ createdAt: -1})
    .then( spots => res.json(spots))
    .catch( err => res.status(400).json(err))
})

// show route (one surf spot)
router.get('/:id', (req, res) => {
  Spot
    .findById(req.params.id)
    .then(spot => {
      if(!spot) {
        return res.status(404).json({error: "Can't find that spot"})
      }
      return res.json(spot)
    })
})

// delete route
router.delete('/:id', 
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
  Spot
    .findById(req.params.id)
    .then( spot => {
      if(!spot) {
        return res.status(404).json({error: "Can't find that spot"})
      }
      Spot.deleteOne(spot)
        .then(spot => res.status(200).json({msg: "spot deleted"}))
        .catch(err => console.log(err));
    });
  });

// update route
router.patch('/:id',
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Spot
      .findById(req.params.id)
      .then(spot => {
        if (!spot) {
          return res.status(404).json({ error: "Can't find that spot" })
        }
        Spot.updateOne(spot, req.body)
          .then(spot => res.json(spot))
          .catch(err => console.log(err));
      });
  });

// get all reviews for a surf spot
router.get('/:id/reviews', (req, res) => {
  Review
    .find({ spotId: req.params.id })
    .sort({ createdAt: -1 })
    .then(reviews => res.json(reviews))
    .catch(err => res.status(400).json(err));
})

// create a review for a surf spot
router.post('/:id/reviews', 
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const newReview = new Review ({
      creatorId: req.user.id,
      spotId: req.params.id,
      quality: req.body.quality,
      difficulty: req.body.difficulty,
      title: req.body.title,
      body: req.body.body
    });
    newReview.save()
      .then( review => res.json(review))
      .catch(err => res.status(400).json(err))
  });

// delete a review
router.delete('/:id/reviews/:reviewId',
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Review
      .findById(req.params.reviewId)
      .then(review => {
        if (!review) {
          return res.status(404).json({ error: "Can't find that review" })
        }
        Review.deleteOne(review)
          .then(review => res.status(200).json({ msg: "review deleted" }))
          .catch(err => console.log(err));
      });
  })

// update a review
router.patch('/:id/reviews/:reviewId',
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Review
      .findById(req.params.reviewId)
      .then(review => {
        if (!review) {
          return res.status(404).json({ error: "Can't find that review" })
        }
        Review.updateOne(review, req.body)
          .then(review => res.status(200).json({ msg: "review updated" }))
          .catch(err => console.log(err));
      });
  })

// get spot's favorites
router.get('/:id/favorites',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Favorite
      .find({ spotId: req.params.id })
      .sort({ createdAt: -1 })
      .then(favorites => res.json(favorites))
      .catch(err => res.status(400).json(err))
  })

// create a favorite
router.post('/:id/favorites',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const newFavorite = new Favorite({
      creatorId: req.user.id,
      spotId: req.params.id,
    });
    newFavorite.save()
      .then(favorite => res.json(favorite))
      .catch(err => res.status(400).json(err))
  });

// delete a favorite

module.exports = router;

