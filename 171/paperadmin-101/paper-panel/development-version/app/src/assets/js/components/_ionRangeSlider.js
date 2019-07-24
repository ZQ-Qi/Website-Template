require('ion-rangeslider');
(function() {
    "use strict";
    var element = $(".range-slider");
    element.each(function () {
        var $this = $(this);
        var options = getDataOptions($this);
        $this.ionRangeSlider(options);
    });
}());


