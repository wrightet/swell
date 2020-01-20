// users routes
const express = require("express");
const router = express.Router();
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require("../../config/keys");
const passport = require('passport')


router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
  res.json({
      id: req.user.id,
      handle: req.user.handle,
      email: req.user.email
  });
});
// signup controller
router.post('/signup', (req, res) => {
    //see if user already exists
    User.findOne({email: req.body.email})
        .then(user => {
            if (user) {
                return res.status(400).json({email: "Email has already been taken"})
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

//login controller
router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email})
        .then(user => {
            if(!user) {
                return res.status(404).json({email: 'That surfer does not exist'})
            }
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(isMatch) {
                        const payload = {
                            id: user.id, 
                            handle: user.handle
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

module.exports = router;