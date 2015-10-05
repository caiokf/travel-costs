describe('Slider Directive', function () {
  var compile, scope;

  function getCompiledElement(template) {
    var element = angular.element(template);
    var compiledElement = compile(element)(scope);
    scope.$digest();
    return compiledElement;
  }

  beforeEach(function(){
    module('travelCosts.directives');
    
    inject(function($compile, $rootScope){
      compile = $compile;
      scope = $rootScope.$new();
    });
  });

  it('should render div with class slider', function () {
    var directiveElem = getCompiledElement('<slider start=5 ng-model="sliderFood" />');
    expect(directiveElem.hasClass('slider')).to.be.true;
  });

  it('should render min attribute to 0', function () {
    var directiveElem = getCompiledElement('<slider start=5 ng-model="sliderFood" />');
    expect(directiveElem.attr('min')).to.equal('0');
  });

  it('should render max attribute to 10', function () {
    var directiveElem = getCompiledElement('<slider start=5 ng-model="sliderFood" />');
    expect(directiveElem.attr('max')).to.equal('10');
  });

  it('should render start attribute to 5', function () {
    var directiveElem = getCompiledElement('<slider start=5 ng-model="sliderFood" />');
    expect(directiveElem.attr('start')).to.equal('5');
  });
});