const express = require('express');
const app = express();
const bunch = require('express-bunch-middleware');
const getAirportData = require('./bin/airportData.js');
const getAirportWeather = require('./bin/airportWeather.js');

// express-bunch-middleware
app.use('/resources', bunch);

app.get('/dataByAirport/:airport_identifier', (req, res) => {
console.log(req.params, 'req.params');
getAirportData(res, req.params.airport_identifier)
});

app.get('/weatherByAirport/:airport_identifier', (req, res) => {
  console.log(req.params, 'req.params');
  setTimeout(() => {
		getAirportWeather(res, req.params.airport_identifier)
    }, 30)
	});

// end of express-bunch-middleware

app.listen(3000, () => {
  console.log('listening');
});
