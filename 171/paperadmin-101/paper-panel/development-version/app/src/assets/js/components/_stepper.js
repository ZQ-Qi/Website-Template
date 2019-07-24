require('smartwizard');
(function() {
    "use strict";
    var element = $(".stepper");
    element.each(function () {
        var $this = $(this);
        var options = getDataOptions($this);
        $this.smartWizard(options);
    });
}());
