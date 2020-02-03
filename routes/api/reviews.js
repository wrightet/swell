const express = require("express");
const router = express.Router({mergeParams: true});
const Review = require("../../models/Review");
const passport = require("passport");

//fetch reviews
router.get(
  "/", 
  (req, res) => {
   
  Review.find({ spotId: req.params.spotId })
    .sort({ createdAt: -1 })
    .then(reviews => res.json(reviews))
    .catch(err => res.status(400).json(err));
});

//create review
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const newReview = new Review({
      creatorId: req.user.id,
      spotId: req.params.spotId,
      quality: req.body.quality,
      difficulty: req.body.difficulty,
      title: req.body.title,
      body: req.body.body
    });
    newReview
      .save()
      .then(review => res.json(review))
      .catch(err => res.status(400).json(err));
  }
);

//delete review
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Review.findById(req.params.id).then(review => {
      if (!review) {
        return res.status(404).json({ error: "Can't find that review" });
      }
      Review.deleteOne(review)
        .then(() => res.status(200).json({ msg: "review deleted" }))
        .catch(err => console.log(err));
    });
  }
);

//update review
router.patch(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Review.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(review => res.json(review))
      .catch(err => console.log(err));
  }
);

module.exports = router;