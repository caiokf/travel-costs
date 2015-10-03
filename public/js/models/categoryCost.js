var CategoryCost = function (json) {
  var option1 = json.option1;
  var option2 = json.option2;
  var option3 = json.option3;
  
  return {
    option1: option1,
    option2: option2,
    option3: option3,

    sum: function(slider) {
      function multipliers(categoryCosts, slider) {
        var option1, option2, option3;

        if (slider == 10) {
          option1 = 0;
          option2 = 0;
          option3 = 1;
        } else if (slider == 0) {
          option1 = 1;
          option2 = 0;
          option3 = 0;
        } else if (slider == 5) {
          option1 = 0;
          option2 = 1;
          option3 = 0;
        } else {
          option1 = (5 - slider) > 0 ? ((5 - slider) * 0.2) : 0;
          option3 = (slider - 5) > 0 ? ((slider - 5) * 0.2) : 0;

          if (slider > 5) {
            option2 = (10 - slider) * 0.2;
          } else {
            option2 = (slider) * 0.2;
          }
        }

        var cost1 = option1 * categoryCosts.option1;
        var cost2 = option2 * categoryCosts.option2;
        var cost3 = option3 * categoryCosts.option3;
        return {
          option1: cost1, 
          option2: cost2, 
          option3: cost3,
          total: cost1 + cost2 + cost3
        };
      };

      return multipliers({ option1: option1, option2:option2, option3:option3 }, slider).total;
    }
  }
}