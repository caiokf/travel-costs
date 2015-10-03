var CategoryCost = function (json) {
  var option1 = json.option1;
  var option2 = json.option2;
  var option3 = json.option3;

  return {
    option1: option1,
    option2: option2,
    option3: option3,

    sum: function(slider) {
      var total = 0;
      var middle = 5;

      total += option1 * (slider > (middle - 1) ? 0 : middle - slider) * (1 / middle);
      total += option2 * (middle - Math.abs(slider - middle)) * (1 / middle);
      total += option3 * (slider < (middle + 1) ? 0 : slider - middle) * (1 / middle);
    
      return total;
    }
  }
}