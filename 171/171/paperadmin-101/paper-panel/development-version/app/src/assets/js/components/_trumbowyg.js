require('trumbowyg');
(function() {
    "use strict";
    var element = $("textarea.editor");
    var defaultOptions =  {
        autogrow: true,
        svgPath: "assets/fonts/icons.svg"
    };
    var options = {};
    element.each(function () {
        var $this = $(this);
        if(getDataOptions($this)){
            options = getDataOptions($this);
        }
        $.extend(true, options, defaultOptions);
        $this.trumbowyg(options);
    }).on('tbwinit', function () {
        $('.trumbowyg-box').addClass('p-0 m-0 r-0 b-0 white');
    });
}());
