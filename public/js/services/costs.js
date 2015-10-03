angular.module('travelCosts.services', [])
  .factory('CostsService', ['$http', function ($http) {

    function multipliers(categoryCosts, slider) {
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

      var cost1 = option1 * categoryCosts.option1;
      var cost2 = option2 * categoryCosts.option2;
      var cost3 = option3 * categoryCosts.option3;
      return {
        option1: cost1, 
        option2: cost2, 
        option3: cost3,
        total: cost1 + cost2 + cost3
      };
    };

    return {
      getCostFor: function (location) {
        return { name: 'Brazil', food: {option1: 3.31, option2: 14.22, option3: 44.41 }, transportation: {option1: 0, option2: 16.2, option3: 24.3 }, accommodation: {option1: 0, option2: 7.60575, option3: 20.0876666666667 }};
      },
      getFactoredCosts: function (costs, foodSlider, accommodationSlider, transportationSlider) {
        var foodCosts = multipliers(costs.food, foodSlider);
        var accommodationCosts = multipliers(costs.accommodation, accommodationSlider);
        var transportationCosts = multipliers(costs.transportation, transportationSlider);

        return {
          food: foodCosts.total,
          accommodation: accommodationCosts.total,
          transportation: transportationCosts.total,
          total: foodCosts.total + accommodationCosts.total + transportationCosts.total
        };
      }
    };

}]);