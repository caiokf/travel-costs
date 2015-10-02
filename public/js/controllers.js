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
    ]

  });