const express = require('express');
const router = express.Router();
const getAirportData = require('../bin/airport.js')

// Index
// router.get('/', (req, res)=> {
//   Airports.find((err, foundAirports)=>{
//     res.json(foundAirports);
//   });
// });

// requests airport data using ForeFlight API
router.get('/byAirport/:airport_identifier', (req, res) => {
  console.log(req.params, 'req.params');
	getAirportData(res, req.params.airport_identifier)
  });

module.exports = router;
