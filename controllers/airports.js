const express = require('express');
const router = express.Router();
const fetch = require('node-fetch')
// const getAirportData = require('../bin/airportweather.js');
// const getAirportWeather = require('../bin/airportWeather.js');
const Airports = require('../models/airport-model.js');
const request = require('request');
const bunch = require('express-bunch-middleware');


// router.get('/:airport_identifier', (req, res, data) => {
//   // request("https://qa.foreflight.com/airports/" + airport_identifier,
// 	// function (error, response, body) {
// 		// console.log(body);
//   //     // const parsedBody = JSON.parse(body);
//   //     res.send(body);
// 	res.send(data);
//     }
//   )
// ;
//
// router.get('/weatherByAirport/:airport_identifier', (req, res, data) => {
//   // request("https://qa.foreflight.com/weather/report/" + airport_identifier,
// 	// function(error, response, body) {
// 		// console.log(body);
//       // const parsedBody = JSON.parse(body);
//       // const results = filter.apply(parsedBody);
//       res.send(data);
//     }
//
// );
//
// function get(url) {
//   return new Promise((resolve, reject) => {
//     fetch(url)
//       .then(res => res.json())
//       .then(data => resolve(data))
//       .catch(err => reject(err))
//   })
// }

// router.get('/:airport_identifier', (req, res, data) => {
//   Promise.all([
//       get(`https://qa.foreflight.com/weather/report/:airport_identifier`),
//       get(`https://qa.foreflight.com/weather/report/:airport_identifier`)
//     ]).then(([weatherByAirport, {dataByAirport}]) =>
//       res.send({
// 				weatherByAirport,
// 				dataByAirport
// 			})
//     )
//     .catch(err => res.send('Ops, something has gone wrong'))
// });

// Index
// router.get('/', (req, res)=> {
//   Airports.find((err, foundAirports)=>{
//     res.json(foundAirports);
//   });
// });

// Create
// router.post('/', (req, res)=>{
//   console.log(req.body);
//   Airports.create(req.body, (err, createdAirport)=>{
//     res.json(createdAirport);
//   });
// });

// requests airport data using ForeFlight API
// router.get('/dataByAirport/:airport_identifier', (req, res) => {
// console.log(req.params, 'req.params');
// getAirportData(res, req.params.airport_identifier)
// });

// async.parallel({
// 	callOne: function(callback) {
// 		router.get('/weatherByAirport/:airport_identifier', (req, res) => {
// 		getAirportWeather(res, req.params.airport_identifier)
// 	})
// },
// 	callTwo: function(callback) {
// 		router.get('/dataByAirport/:airport_identifier', (req, res) => {
// 		  console.log(req.params, 'req.params');
// 			getAirportData(res, req.params.airport_identifier)
// 	}
// )},
// function (err, results) {
// 	console.log(results);
// }
// });

// router.get('/weatherByAirport/:airport_identifier', (req, res) => {
// async.parallel({
// callOne: function(callback) {
// getAirportWeather(res, req.params.airport_identifier)
// },
// callTwo: function(callback) {
// getAirportData(res, req.params.airport_identifier)
// }
// )},
// function (err, results) {
// console.log(results);
// console.log(results.CallTwo);
// }
// })
// });

// requests airport data using ForeFlight API
// router.get('/weatherByAirport/:airport_identifier', (req, res) => {

// console.log(req.params.airport_identifier, 'req.params');
// getAirportWeather(res, req.params.airport_identifier)},
// getAirportData(res, req.params.airport_identifier)}
//
// });

// module.exports = router;
