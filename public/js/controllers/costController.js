angular.module('travelCosts.controllers', ['travelCosts.services']).
  
  controller('TravelCostController', function ($scope, CostsService) {

    $scope.itinerary = [];
    $scope.cost = {
      amount: 0,
      currency: 'USD'
    }

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

    $scope.$watch('sliderFood', function() { $scope.setCost(); });
    $scope.$watch('sliderTransportation', function() { $scope.setCost(); });
    $scope.$watch('sliderAccommodation', function() { $scope.setCost(); });
    $scope.$watch('itinerary', function() { $scope.setCost(); });

    $scope.addWaypoint = function (waypoint) {
      var location = waypoint.geometry.location;

      var marker = new google.maps.Marker({
          map: $scope.map,
          position: location
      });

      $scope.itinerary.push({ place: waypoint, marker: marker });
      $scope.setCost();
      $scope.waypoint = '';
      $scope.$apply();
    };

    $scope.deleteWaypoint = function (waypoint, i) {
      $scope.itinerary.splice(i, 1);
      waypoint.marker.setMap(null);
      $scope.setCost();
    };

    $scope.setCost = function () {
      $scope.cost.amount = $scope.calculateCost();
    };

    $scope.calculateCost = function () {
      if ($scope.itinerary.length === 0) {
        return 0;
      }

      var costs = CostsService.getCostFor('location');
      var factoredCosts = CostsService.getFactoredCosts(costs, $scope.sliderFood, $scope.sliderAccommodation, $scope.sliderTransportation);

      return factoredCosts.total;
    };
  });
