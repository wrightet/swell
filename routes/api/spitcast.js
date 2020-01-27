const axios = require('axios');
const express = require("express");
const router = express.Router();
const keys = require("../../config/keys");
const surfKey = keys.surfAPI;

router.post('/', 
  (req, res) => {
    const url = `http://api.worldweatheronline.com/premium/v1/marine.ashx?key=${surfKey}&q=${req.body.lat}, ${req.body.long}&format=json`;
    axios
      .get(url)
      .then((spots) => res.json(spots.data.data.weather[0]))
  })

module.exports = router;

