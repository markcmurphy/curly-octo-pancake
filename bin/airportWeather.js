const express = require('express');
const request = require('request');

const getAirportWeather = (res, airport_identifier) => {
  const responseToClient = (res, data) => {
    res.send(data)
  }
  request("https://qa.foreflight.com/weather/report/" + airport_identifier, function(error, response, body) {
    const parsedBody = JSON.parse(body);
    var newResponse = function() {

      // convert tempC to Fahrenheit
      const tempF = {
        'Current Temperature' : (((parsedBody.report.conditions.tempC) * (9 / 5)) + 32)
      };

      // relativeHumidity
      const relativeHumidity = {
        'Relative Humidity' : parsedBody.report.conditions.relativeHumidity
      }

      // Summary of cloud coverage
      const cloudCoverage = {
        'Cloud Coverage' : parsedBody.report.conditions.cloudLayers
      }

      // Visibility (Statute Miles)
      const visibility = {
        'Visibility (Statute Miles)' : parsedBody.report.conditions.visibility.distancesm
      }

      // Wind Speed (MPH)
      const windSpeedKts = parsedBody.report.forecast.conditions[1].wind.speedKts;
      const windSpeedKtsToMPH = {'Wind Speed (MPH)' : (windSpeedKts * 1.15077945)
    }

      // Wind Direction (cardinal to secondary-intercardinal)
      // conversion formula from https://gist.github.com/basarat/4670200

      function degToCompass(num) {
        var val = Math.floor((num / 22.5) + 0.5);
        var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
        return arr[(val % 16)];
      };
      const windDirectionCardinal = {'Wind Direction' : degToCompass(parsedBody.report.conditions.wind.direction)
    }

      // Period End and Period Start Offset for Second Forecast Node
      const timeStart1 = new Date(parsedBody.report.forecast.conditions[1].period.dateStart);
      const timeEnd1 = new Date(parsedBody.report.forecast.conditions[1].period.dateEnd);
      const diff1 = new Date(timeEnd1 - timeStart1);
      const timeOffset1 = {'Time Offset' : (diff1.getUTCHours() + " : " + diff1.getUTCMinutes())
    };


      // convert tempC to Fahrenheit
      const tempFNode2 = {
        Temperature: (((parsedBody.report.forecast.conditions[1].tempC) * (9 / 5)) + 32)
      };


      // Knots to MPH for Second Forecast Node
      const forecastNode2Knots = parsedBody.report.forecast.conditions[1].wind.speedKts;

      const forecastNode2KnotsToMPH = { 'Wind Speed (MPH)' : (forecastNode2Knots * 1.15077945)
    };

      // Wind Direction for Second Forecast Node
      const forecastNode2WindDirection = {'Wind Direction' : parsedBody.report.forecast.conditions[1].wind.direction
    };


      // Period End and Period Start Offset for Third Forecast Node
      const timeStart2 = new Date(parsedBody.report.forecast.conditions[2].period.dateStart);
      const timeEnd2 = new Date(parsedBody.report.forecast.conditions[2].period.dateEnd);
      const diff2 = new Date(timeEnd2 - timeStart2);
      const timeOffset2 = {'Time Offset' : diff2.getUTCHours() + " : " + diff2.getUTCMinutes()
    };

      // convert tempC to Fahrenheit
      const tempFNode3 = {
        Temperature: (((parsedBody.report.forecast.conditions[2].tempC) * (9 / 5)) + 32)
      };

      // Knots to MPH for Third Forecast Node
      const forecastNode3Knots = parsedBody.report.forecast.conditions[2].wind.speedKts;
      const forecastNode3KnotsToMPH = { 'Wind Speed (MPH)' : (forecastNode3Knots * 1.15077945)
    };

      // Wind Direction for Third Forecast Node
      const forecastNode3WindDirection = {'Wind Direction' : parsedBody.report.forecast.conditions[2].wind.direction
};

      return [
        tempF,
        relativeHumidity,
        cloudCoverage,
        visibility,
        windSpeedKtsToMPH,
        windDirectionCardinal,
        timeOffset1,
        tempFNode2,
        forecastNode2KnotsToMPH,
        forecastNode2WindDirection,
        timeOffset2,
        tempFNode3,
        forecastNode3KnotsToMPH,
        forecastNode3WindDirection
      ];
}

    responseToClient(res, newResponse());
  });

  // end of const getAirportWeather
}

module.exports = getAirportWeather;
