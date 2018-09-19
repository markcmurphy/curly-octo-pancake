const express = require('express');
const router = express.Router();
const getAirportData = require('../bin/airportData.js');
const getAirportWeather = require('../bin/airportWeather.js');

// Index
// router.get('/', (req, res)=> {
//   Airports.find((err, foundAirports)=>{
//     res.json(foundAirports);
//   });
// });

// requests airport data using ForeFlight API
router.get('/dataByAirport/:airport_identifier', (req, res) => {
  console.log(req.params, 'req.params');
	getAirportData(res, req.params.airport_identifier)
  });

// requests airport data using ForeFlight API
router.get('/weatherByAirport/:airport_identifier', (req, res) => {
  console.log(req.params, 'req.params');
	getAirportWeather(res, req.params.airport_identifier)
  });

module.exports = router;
