require('.././libs/jquery.easypiechart');
(function() {
    "use strict";
    var element = $(".easy-pie-chart");
    element.each(function () {
        var $this = $(this);
        var options = getDataOptions($this);
        $this.easyPieChart(options);
    });
}());

