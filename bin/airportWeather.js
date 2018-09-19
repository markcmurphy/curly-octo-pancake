const express = require('express');
const request = require('request');
const getAirportWeather = (res, airport_identifier) => {
  const responseToClient = (res, data) => {
    res.send(data)
  }
  request("https://qa.foreflight.com/weather/report/" + airport_identifier, function(error, response, body) {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    // Print the response status code if a response was received
    console.log('body:', body);
    console.log(typeof body)
    const parsedBody = JSON.parse(body)
    responseToClient(res, body)
    console.log(parsedBody.results)
  });

  // end of const getAirportWeather
}

module.exports = getAirportWeather;
