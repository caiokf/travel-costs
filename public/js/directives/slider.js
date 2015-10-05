angular.module('travelCosts.directives', [])
  .directive('slider', function() {

    var min = 0;
    var max = 10;

    return {
      restrict: 'E',
      template: '<div class="slider" min=' + min + ' max=' + 10 + ' />',
      replace: true,
      scope: {
        start: "=start",
        ngModel: '='
      },

      link: function (scope, element, attr) {
        noUiSlider.create(element[0], {
          start: [ scope.start ],
          step: 1,
          range: {
            'min': [ min ],
            'max': [ max ]
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