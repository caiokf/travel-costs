describe('Costs Service', function() {

  var CostsService;

  beforeEach(module('travelCosts.services'));

  beforeEach(inject(function (_CostsService_) {
    CostsService = _CostsService_;
  }));

  describe('get cost for', function () {
    it('should return json', function () {
      var result = CostsService.getCostFor('');
      expect(result).to.be.an('object');
    });

    it('should return different costs for different cities', function () {
      var resultPortoAlegre = CostsService.getCostFor('Porto Alegre, Brazil');
      var resultZurich = CostsService.getCostFor('Zurich, Switzerland');

      expect(resultPortoAlegre).to.not.equal(resultZurich);
    });
  });

  describe('get factored costs', function () {
    it('should return costs according to slider', function () {
      var costs = { 
        food: {option1: 1, option2: 2, option3: 3 }, 
        transportation: {option1: 1, option2: 2, option3: 3 }, 
        accommodation: {option1: 1, option2: 2, option3: 3 }
      };

      var result = CostsService.getFactoredCosts(costs, 0, 0, 0);

      expect(result.food).to.equal(1);
      expect(result.transportation).to.equal(1);
      expect(result.accommodation).to.equal(1);
      expect(result.total).to.equal(3);
    });
  });
});