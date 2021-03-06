// users routes
const express = require("express");
const router = express.Router();
const User = require('../../models/User');
const Favorite = require('../../models/Favorite');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require("../../config/keys");
const passport = require('passport')
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
const sessions = require('./session');

//User profile route
router.get('/:id', 
  passport.authenticate('jwt', { session: false }), 
  (req, res) => {
    User
        .findById(req.params.id)
        .then(user => {
            if (!user) {
                return res.status(404).json({ error: "Can't find profile" })
            }
            return res.json(user)
        })
      })

//do we need this?
router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
  res.json({
      id: req.user.id,
      handle: req.user.handle,
      email: req.user.email
  });
});

// signup route
router.post('/signup', (req, res) => {
    //deconstruct validation errors
    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }
    //see if user already exists
    User.findOne({email: req.body.email})
        .then(user => {
            if (user) {
                errors.email = 'Email already exists';
                return res.status(400).json(errors);
            } else {
                const newUser = new User ({
                    handle: req.body.handle,
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    password: req.body.password
                })
                //generate password salt
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if(err) throw err;
                        newUser.password = hash
                        newUser.save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err));
                    })
                })
            }
        })
})

//login route
router.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({email})
    .then(user => {
      if(!user) {
        errors.email = "Can't find that surfer"
        return res.status(404).json(errors);
      }
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if(isMatch) {
            const payload = {
              id: user.id,
              email: user.email, 
              handle: user.handle,
              firstName: user.firstName,
              lastName: user.lastName,
              location: user.location,
              bio: user.bio,
              gear: user.gear
            };
            jwt.sign(
                payload,
                keys.secretOrKey,
                //key expires in one hour
                {expiresIn: 3600},
                (err, token) => {
                  res.json({
                    success: true,
                    token: 'Bearer ' + token
                  });
                }
            );
          } else {
              return res.status(400).json({password: 'Incorrect password'})
            }
        })
    })
})

//update user profile
router.patch('/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    User
      .findByIdAndUpdate(
        req.user.id, 
        req.body, 
        { new: true }
        ).then(user => res.json(user))
          .catch(err => console.log(err));
  });

// user's favorites route
router.get('/:id/favorites', 
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Favorite
      .find({ creatorId: req.params.id })
      .sort({ createdAt: -1 })
      .then(favorites => res.json(favorites))
      .catch(err => res.status(400).json(err))
    })

router.use("/:id/sessions", sessions)

module.exports = router;