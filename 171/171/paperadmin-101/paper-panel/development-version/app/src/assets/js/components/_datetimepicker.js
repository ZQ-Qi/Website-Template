require('jquery-datetimepicker');
(function() {
    "use strict";
    var element = $(".date-time-picker");
    element.each(function () {
        var $this = $(this);
        var options = getDataOptions($this);
        $this.datetimepicker(options);
    });
}());
