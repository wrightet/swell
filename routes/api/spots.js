//surfspots routes
const express = require("express");
const router = express.Router();
const Spot = require('../../models/Spot');
const jwt = require('jsonwebtoken');
const keys = require("../../config/keys");
const passport = require('passport')

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

module.exports = router;

