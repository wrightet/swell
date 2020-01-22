// session routes

const express = require('express');
const router = express.Router({mergeParams: true});
const SurfSession = require('../../models/SurfSession');
const jwt = require('jsonwebtoken');
const passport = require('passport');

// get all surf sessions
router.get('/', passport.authenticate('jwt', {session: false}), (req, res) => {
    SurfSession
        .find({creatorId: req.params.id})
        .sort({ createdAt: -1})
        .then(sessions => res.json(sessions))
        .catch( err => res.status(400).json(err))
})

router.post("/",
    passport.authenticate('jwt', {session: false}),
    (req, res) => {
        const newSession  = new SurfSession({
            creatorId: req.user.id,
            spotId: req.body.spotId,
            body: req.body.body,
            coSurfers: req.body.coSurfers
        });
        newSession.save().then(session => res.json(session));
    }
)

router.delete('/:id',
 passport.authenticate("jwt", {session: false}),
 (req, res) => {
     SurfSession
        .findById(req.params.id)
        .then(session => {
            if(!session) {
                return res.status(404).json({error: "Cannot find that surf session"})
            }
            SurfSession.deleteOne(session, req.body)
            .then(session => res.status(200).json({msg: "session deleted"}))
            .catch(err => console.log(err));
        });
 });


module.exports = router;