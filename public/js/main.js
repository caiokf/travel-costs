$(document).ready(function() {

  if (document.getElementById('map-canvas')) {
    var map = new google.maps.Map(document.getElementById('map-canvas'), {
      center: {lat: 0, lng: 0},
      zoom: 2
    });

    var transportationSlider = document.getElementById('slider-transportation');
    noUiSlider.create(transportationSlider, {
      start: [ 4000 ],
      range: {
        'min': [  2000 ],
        'max': [ 10000 ]
      }
    });

    var foodSlider = document.getElementById('slider-food');
    noUiSlider.create(foodSlider, {
      start: [ 4000 ],
      range: {
        'min': [  2000 ],
        'max': [ 10000 ]
      }
    });

    var accommodationSlider = document.getElementById('slider-accommodation');
    noUiSlider.create(accommodationSlider, {
      start: [ 4000 ],
      range: {
        'min': [  2000 ],
        'max': [ 10000 ]
      }
    });
  }

});