const express = require('express');
const router = express.Router();
const Airports = require('../models/airport-model.js');

// Index
router.get('/', (req, res)=> {
  Airports.find((err, foundAirports)=>{
    res.json(foundAirports);
  });
});

module.exports = router;
