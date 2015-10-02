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
      //map.setCenter(0,0);
      map.setZoom(2);
    });

    $scope.init = function () {

    }
    
    $scope.init();

  });