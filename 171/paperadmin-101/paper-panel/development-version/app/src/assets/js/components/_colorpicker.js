require('bootstrap-colorpicker');
(function() {
    "use strict";
    var picker = $(".color-picker");
    picker.each(function () {
        var $this = $(this);
        var options = getDataOptions($this);
        $this.colorpicker(options);
    });
}());
