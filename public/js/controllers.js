angular.module('travelCosts.controllers', ['travelCosts.services']).
  
  controller('TravelCostController', function ($scope, $http, CostsService) {

    $scope.itinerary = [];

    $scope.$on('mapInitialized', function(event, map) {
      $scope.map = map;
      map.setZoom(2);

      var input = (document.getElementById('waypoint'));
      var autocomplete = new google.maps.places.Autocomplete(input, {types: ['(regions)']});
      autocomplete.bindTo('bounds', map);

      autocomplete.addListener('place_changed', function(e) { 
        $scope.addWaypoint(autocomplete.getPlace());
      });
    });

    $scope.addWaypoint = function (waypoint) {
      var location = waypoint.geometry.location;

      var marker = new google.maps.Marker({
          map: $scope.map,
          position: location
      });

      $scope.itinerary.push({ place: waypoint, marker: marker });
      $scope.calculateCost();
      $scope.waypoint = '';
      $scope.$apply();
    };

    $scope.deleteWaypoint = function (waypoint, i) {
      $scope.itinerary.splice(i, 1);
      waypoint.marker.setMap(null);
    };

    $scope.calculateCost = function () {
      var costs = CostsService.getCostFor('location');
    };
  });