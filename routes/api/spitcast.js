const axios = require('axios');
const express = require("express");
const router = express.Router();

router.get('/', 
  (req, res) => {
    const url = `http://api.spitcast.com/api/spot-forecast/search?longitude=${req.long}&latitude=${req.lat}&distance=${distance}`;
    axios
      .get(url)
      .then(spitcastSpots => res.json(spitcastSpots.data));
  })

module.exports = router;

