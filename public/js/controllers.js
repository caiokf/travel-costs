angular.module('travelCosts.controllers', ['travelCosts.services']).
  
  controller('TravelCostController', function ($scope, $http, CostsService) {

    $scope.itinerary = [];
    $scope.cost = {
      amount: 0,
      currency: 'USD'
    }

    $scope.$watch('sliderFood', function() { $scope.cost.amount = $scope.calculateCost(); });
    $scope.$watch('sliderTransportation', function() { $scope.cost.amount = $scope.calculateCost(); });
    $scope.$watch('sliderAccommodation', function() { $scope.cost.amount = $scope.calculateCost(); });
    $scope.$watch('itinerary', function() { $scope.cost.amount = $scope.calculateCost(); });

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
      $scope.cost.amount = $scope.calculateCost();
      $scope.waypoint = '';
      $scope.$apply();
    };

    $scope.deleteWaypoint = function (waypoint, i) {
      $scope.itinerary.splice(i, 1);
      waypoint.marker.setMap(null);
      $scope.cost.amount = $scope.calculateCost();
    };

    $scope.calculateCost = function () {
      var costs = CostsService.getCostFor('location');

      function multipliers(slider) {
        var option1, option2, option3;

        if (slider == 10) {
          option1 = 0;
          option2 = 0;
          option3 = 1;
        } else if (slider == 0) {
          option1 = 1;
          option2 = 0;
          option3 = 0;
        } else if (slider == 5) {
          option1 = 0;
          option2 = 1;
          option3 = 0;
        } else {
          option1 = (5 - slider) > 0 ? ((5 - slider) * 0.2) : 0;
          option3 = (slider - 5) > 0 ? ((slider - 5) * 0.2) : 0;

          if (slider > 5) {
            option2 = (10 - slider) * 0.2;
          } else {
            option2 = (slider) * 0.2;
          }
        }

        return {option1: option1, option2: option2, option3: option3 };
      };

      if ($scope.itinerary.length === 0) {
        return 0;
      }

      var foodCost = 0;
      var foodMultipliers = multipliers($scope.sliderFood);
      foodCost += costs.food.option1 * foodMultipliers.option1;
      foodCost += costs.food.option2 * foodMultipliers.option2;
      foodCost += costs.food.option3 * foodMultipliers.option3;

      var accommodationCost = 0;
      var accommodationMultipliers = multipliers($scope.sliderAccommodation);
      accommodationCost += costs.accommodation.option1 * accommodationMultipliers.option1;
      accommodationCost += costs.accommodation.option2 * accommodationMultipliers.option2;
      accommodationCost += costs.accommodation.option3 * accommodationMultipliers.option3;

      var transportationCost = 0;
      var transportationMultipliers = multipliers($scope.sliderTransportation);
      transportationCost += costs.transportation.option1 * transportationMultipliers.option1;
      transportationCost += costs.transportation.option2 * transportationMultipliers.option2;
      transportationCost += costs.transportation.option3 * transportationMultipliers.option3;

      return foodCost + transportationCost + accommodationCost;
    };
  });
