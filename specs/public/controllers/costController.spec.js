describe('Travel Costs Controller', function() {
  var scope, controller, CostsService;

  beforeEach(function() {
    module('travelCosts.controllers');

    inject(function($rootScope, $controller, _CostsService_) {
      scope = $rootScope.$new();
      CostService = _CostsService_;
      controller = $controller('TravelCostController', {'$scope': scope, 'CostsService': CostsService });
    });
  });

  it('should start with an empty itinerary list', function() {
    expect(scope.itinerary.length).to.equal(0);
  });

  it('should start with a zero cost', function() {
    expect(scope.cost.amount).to.equal(0);
  });

  it('should have USD as default currency', function() {
    expect(scope.cost.currency).to.equal('USD');
  });

  describe('watches', function () {
    var called;

    beforeEach(function() {
      called = false;
      scope.setCost = function() { called = true; };
    });

    it('should watch for itinerary changes', function() {
      scope.itinerary = 'different value';
      scope.$apply();

      expect(called).to.be.true;
    });

    it('should watch for food slider changes', function() {
      scope.sliderFood = 2;
      scope.$apply();

      expect(called).to.be.true;
    });

    it('should watch for accommodation slider changes', function() {
      scope.sliderAccommodation = 2;
      scope.$apply();

      expect(called).to.be.true;
    });

    it('should watch for transportation slider changes', function() {
      scope.sliderTransportation = 2;
      scope.$apply();

      expect(called).to.be.true;
    });
  });
});