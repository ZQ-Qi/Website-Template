/* SPARKLINES */
require('jquery-sparkline');
(function() {
    "use strict";
    var element = $(".sparkline");
    var options = {};
    element.each(function () {
        var $this = $(this);
        options = getDataOptions($this);
        var values = $this.data('values');
        $this.sparkline(values,options);
    });
}());

