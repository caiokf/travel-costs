angular.module('travelCosts.services', [])
  .factory('CostsService', function () {
    return {
      getCostFor: function (location) {
        return { name: 'Brazil', food: {option1: 3.31, option2: 14.22, option3: 44.41 }, transportation: {option1: 0, option2: 16.2, option3: 24.3 }, accommodation: {option1: 0, option2: 7.60575, option3: 20.0876666666667 }};
      },
      getFactoredCosts: function (costs, foodSlider, accommodationSlider, transportationSlider) {
        var foodCosts = new CategoryCost(costs.food);
        var accommodationCosts = new CategoryCost(costs.accommodation);
        var transportationCosts = new CategoryCost(costs.transportation);

        return {
          food: foodCosts.sum(foodSlider),
          accommodation: accommodationCosts.sum(accommodationSlider),
          transportation: transportationCosts.sum(transportationSlider),
          total: foodCosts.sum(foodSlider) + 
            accommodationCosts.sum(accommodationSlider) + 
            transportationCosts.sum(transportationSlider)
        };
      }
    };

});