angular.module('travelCosts.directives', [])
  .directive('slider', function() {
    return {
      restrict: 'E',
      template: '<div class="slider" />',
      replace: true,
      scope: {
        min: "=min",
        max: "=max",
        start: "=start",
        ngModel: '='
      },

      link: function (scope, element, attr) {
        noUiSlider.create(element[0], {
          start: [ scope.start ],
          step: 1,
          range: {
            'min': [ scope.min ],
            'max': [ scope.max ]
          }
        });

        element[0].noUiSlider.on('update', function(values, handle) {
          var value = values[handle];
          if (handle) {
            scope.ngModel = value;
          } else {
            scope.ngModel = Math.round(value);
          }
          setTimeout(function(){ scope.$apply(); });
        });
      }
    }
  });