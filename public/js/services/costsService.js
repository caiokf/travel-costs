angular.module('travelCosts.services', [])
  .factory('CostsService', function () {

    var defaultCost = {
      name: '',
      food: {option1: 0, option2: 0, option3: 0 },
      transportation: {option1: 0, option2: 0, option3: 0 },
      accommodation: {option1: 0, option2: 0, option3: 0 }
    };

    var data = [
      { name: 'Brazil', food: {option1: 3.31, option2: 14.22, option3: 44.41 }, transportation: {option1: 0, option2: 16.2, option3: 24.3 }, accommodation: {option1: 0, option2: 7.60575, option3: 20.0876666666667 }},
      { name: 'Porto Alegre, Brazil', food: {option1: 3.81, option2: 13.72, option3: 54.14 }, transportation: {option1: 0, option2: 16.4, option3: 24.6 }, accommodation: {option1: 0, option2: 7.94175, option3: 17.4673333333333 }},
      { name: 'Zurich, Switzerland', food: {option1: 18.6933333333333, option2: 64.34, option3: 229.77 }, transportation: {option1: 0, option2: 31.8, option3: 47.7 }, accommodation: {option1: 0, option2: 46.8555, option3: 114.258333333333 }}
    ];

    return {
      getCostFor: function (location) {
        var countryComponent = location.split(', ')[1];

        var results = _.filter(data, function(x) { return x.name == location; });

        if (results.length === 0) {
          var countryAttempt = _.filter(data, function(x) { return x.name == countryComponent; });
          if (countryAttempt.length > 0) {
            return countryAttempt[0];
          }
          return defaultCost;
        } else {
          return results[0];
        }
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