const app = angular.module('AirportApp', [])

app.controller('MyController', ['$http', function($http) {
  const controller = this;
  this.airports = [];
  this.weather = {};
  this.airport_identifier = {};
  this.airport_name = {};
  this.available_runways = {};


  this.getData = function() {
      $http({
        method: 'GET',
        url: '/airports'
      }).then(
        function(res) {
          controller.airports = res.data
          console.log(controller.airports);
        },
        function(err) {
          console.log(err);
        }
      );
    };

  this.createReport = function() {
  $http({
    method: 'POST',
    url: '/airports',
    data: {
      Id: this._id,
      airport_identifier: this.airport_identifier
    }
  }).then (response => {
        console.log(response.data);
        controller.formdata = {};
        this.getData();
      })
      .catch(err => console.log(err));
};



  this.getWeatherByAirport = function(airport_identifier) {
      $http({
        method: 'GET',
        url: '/airports' + '/weatherByAirport/' + airport_identifier,
      }).then(
        function(response) {
          console.log(response.data);
          controller.weather[response.data] = response.data;
        })
    },
    function(err) {
      console.log(err);
    };
}]);
