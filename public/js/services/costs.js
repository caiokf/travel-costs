angular.module('travelCosts.services', [])
  .factory('CostsService', ['$http', function ($http) {

    return {
      getCostFor: function (location) {
        return { name: 'Brazil', food: {option1: 3.31, option2: 14.22, option3: 44.41 }, transportation: {option1: 0, option2: 16.2, option3: 24.3 }, accommodation: {option1: 0, option2: 7.60575, option3: 20.0876666666667 }};
      }
    };

}]);