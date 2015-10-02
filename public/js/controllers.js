angular.module('travelCosts.controllers', []).
  
  controller('TravelCostController', function ($scope, $http) {

    $scope.itinerary = [
      'Porto Alegre',
      'Buenos Aires',
      'Mendoza',
      'Santiago',
      'Cusco',
      'Lima',
      'Bogota'
    ];
    
    $scope.$on('mapInitialized', function(event, map) {
      map.setCenter(0,0);
      map.setZoom(2);
    });

    $scope.init = function () {

      var transportationSlider = document.getElementById('slider-transportation');
      noUiSlider.create(transportationSlider, {
        start: [ 4000 ],
        range: {
          'min': [  2000 ],
          'max': [ 10000 ]
        }
      });

      var foodSlider = document.getElementById('slider-food');
      noUiSlider.create(foodSlider, {
        start: [ 4000 ],
        range: {
          'min': [  2000 ],
          'max': [ 10000 ]
        }
      });

      var accommodationSlider = document.getElementById('slider-accommodation');
      noUiSlider.create(accommodationSlider, {
        start: [ 4000 ],
        range: {
          'min': [  2000 ],
          'max': [ 10000 ]
        }
      });
    }
    
    $scope.init();

  });