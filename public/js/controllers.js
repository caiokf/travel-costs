angular.module('travelCosts.controllers', []).
  
  controller('TravelCostController', function ($scope, $http) {

    $scope.itinerary = [];

    $scope.$on('mapInitialized', function(event, map) {
      $scope.map = map;
      map.setZoom(2);

      var input = (document.getElementById('waypoint'));
      var autocomplete = new google.maps.places.Autocomplete(input);
      autocomplete.bindTo('bounds', map);

      autocomplete.addListener('place_changed', function(e) { 
        var place = autocomplete.getPlace();
        var location = place.geometry.location;

        var marker = new google.maps.Marker({
            map: $scope.map,
            position: location
        });

        $scope.itinerary.push({ place: place, marker: marker });
        $scope.waypoint = '';
        $scope.$apply();
      });
    });
  });