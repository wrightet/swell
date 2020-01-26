const axios = require('axios');
const express = require("express");
const router = express.Router();

router.post('/', 
  (req, res) => {
    const url = `http://api.spitcast.com/api/spot-forecast/search?longitude=${req.body.long}&latitude=${req.body.lat}&distance=5`;
    axios
      .get(url)
      .then((spots) => res.json(spots.data))
  })

module.exports = router;

