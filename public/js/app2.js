const app = angular.module('MyApp', []);

app.controller('MyController', function(){
this.foo = 'bar';
});

app.controller('AppController', ['$http', function($http) {
  const controller = this;
  // this.toggle = true;
  // this.temp = {},
  // this.edit = 1,

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

    // weather methods, can be broken out into own controller
    this.getWeatherByAirport = function(airport_identifier) {
      console.log(controller.min);
      $http({
        method: 'GET',
        url: '/airports' + '/weatherByAirport/' + airport_identifier,
        data: {
                  Id: this._id,
                  location: this.location,
                }
      }).then(
        function(response) {
          controller.temp[response.data.name] = response.data;
          }
        },
        function(err) {
          console.log(err);
        }
      );
    });
