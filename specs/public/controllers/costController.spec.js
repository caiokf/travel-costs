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

  it('should set cost according to sliders', function() {
    expect(CostService.getCostFor).return(10);
    expect(scope.cost.amount).to.equal(10);
  });
});