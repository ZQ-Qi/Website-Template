(function($) {
    'use strict';
    var startSlider = document.getElementById('ui-slider');
    noUiSlider.create(startSlider, {
        start: [20, 80],
        range: {
            'min': [0],
            'max': [100]
        }
    });
    var connectSlider = document.getElementById('ui-slider-colored');
    noUiSlider.create(connectSlider, {
        start: 40,
        connect: [true, false],
        range: {
            'min': 0,
            'max': 100
        }
    });

    var connectSlideCustom = document.getElementById('ui-slider-custom');
    noUiSlider.create(connectSlideCustom, {
        start: 40,
        connect: [true, false],
        range: {
            'min': 0,
            'max': 100
        }
    });




    var slider = document.getElementById('ui-slider-multi-colored');
    noUiSlider.create(slider, {
        start: [4000, 8000, 12000, 16000],
        connect: [false, true, true, true, true],
        range: {
            'min': [2000],
            'max': [20000]
        }
    });
    var connect = slider.querySelectorAll('.noUi-connect');
    var classes = ['c-1-color', 'c-2-color', 'c-3-color', 'c-4-color', 'c-5-color'];
    for (var i = 0; i < connect.length; i++) {
        connect[i].classList.add(classes[i]);
    }

})(jQuery);
