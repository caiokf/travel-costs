describe('CategoryCost', function() {

  describe('parsing', function() {
    var categoryCost;

    beforeEach(function () {
      categoryCost = new CategoryCost({option1: 10, option2: 20, option3: 30 });
    });

    it('should parse option 1', function() {
      expect(categoryCost.option1).to.equal(10);
    });

    it('should parse option 2', function() {
      expect(categoryCost.option2).to.equal(20);
    });

    it('should parse option 3', function() {
      expect(categoryCost.option3).to.equal(30);
    });
  });

  describe('summed cost', function () {
    var categoryCost;

    beforeEach(function () {
      categoryCost = new CategoryCost({option1: 10, option2: 20, option3: 40 });
    });

    it('should work for exactly option 1', function() {
      expect(categoryCost.sum(0)).to.equal(categoryCost.option1);
    });

    it('should work for exactly option 2', function() {
      expect(categoryCost.sum(5)).to.equal(categoryCost.option2);
    });

    it('should work for exactly option 3', function() {
      expect(categoryCost.sum(10)).to.equal(categoryCost.option3);
    });

    it('should work for a mix of option 1 and 2', function() {
      expect(categoryCost.sum(1)).to.equal((0.8 * categoryCost.option1) + (0.2 * categoryCost.option2));
      expect(categoryCost.sum(2)).to.equal((0.6 * categoryCost.option1) + (0.4 * categoryCost.option2));
      expect(categoryCost.sum(3)).to.equal((0.4 * categoryCost.option1) + (0.6 * categoryCost.option2));
      expect(categoryCost.sum(4)).to.equal((0.2 * categoryCost.option1) + (0.8 * categoryCost.option2));
    });

    it('should work for a mix of option 2 and 3', function() {
      expect(categoryCost.sum(6)).to.equal((0.8 * categoryCost.option2) + (0.2 * categoryCost.option3));
      expect(categoryCost.sum(7)).to.equal((0.6 * categoryCost.option2) + (0.4 * categoryCost.option3));
      expect(categoryCost.sum(8)).to.equal((0.4 * categoryCost.option2) + (0.6 * categoryCost.option3));
      expect(categoryCost.sum(9)).to.equal((0.2 * categoryCost.option2) + (0.8 * categoryCost.option3));
    });
  });
});