angular.module('travelCosts.directives', [])
  .directive('slider', function() {
    return {
      restrict: 'E',
      template: '<div class="slider" />',
      replace: true,
      scope: {
        min: "=min",
        max: "=max",
        start: "=start"
      },

      link: function (scope, element, attr) {
        noUiSlider.create(element[0], {
          start: [ scope.start ],
          range: {
            'min': [ scope.min ],
            'max': [ scope.max ]
          }
        });
      }
    }
  });