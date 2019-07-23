require('bootstrap-tagsinput');
(function() {
    "use strict";
    var defaultOptions =  {"tagClass": 'badge badge-primary' };
    var options = {};
    var element = $(".tags-input");
    element.each(function () {
        var $this = $(this);
        if(getDataOptions($this)){
            options = getDataOptions($this);
        }
        $.extend(true, options, defaultOptions);
        $this.tagsinput(options);
    });
}());


