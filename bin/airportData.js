const express = require('express');
const request = require('request');

const getAirportData = (res, airport_identifier) => {
  const responseToClient = (res, data) => {
    res.send(data)
  }
  request("https://qa.foreflight.com/airports/" + airport_identifier, function(error, response, body) {
    const parsedBody = JSON.parse(body);
    var newResponse = function() {

    const airportICAO = {
    'Airport Identifier' :
    parsedBody.airport.results.icao
  }
    const airportName = {
      'Airport Name' : parsedBody.airport.results.name
    }
    const airportRunways = {
      'Available Runways' :
    parsedBody.airport.results.runways
  }
    const airportLatitude = {
      'Airport Latitude' :
      parsedBody.airport.results.latitude
}
    const airportLongitude = {
      'Airport Longitude' : parsedBody.airport.results.longitude
}
  return [
    airportICAO,
    airportName,
    airportRunways,
    airportLatitude,
    airportLongitude
  ];
}


    responseToClient(res, newResponse());
  });

  // end of const getAirportData
}

module.exports = getAirportData;
