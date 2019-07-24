/* SPARKLINES */
require('jqvmap');
require('jqvmap/dist/maps/jquery.vmap.world');
require('jqvmap/dist/maps/jquery.vmap.usa');

(function() {
    "use strict";
    const sample_data = require('jqvmap/examples/js/jquery.vmap.sampledata');
    var init_jqvmap = function () {
        var element = $(".jvmap");
        element.each(function () {
            var $this = $(this);
            var options = getDataOptions($this);
            $this.vectorMap(options);
        });
    };

    init_jqvmap();

    //if chart inside a tab
    $('a[data-toggle="tab"], a[data-toggle="pill"]').on('shown.bs.tab', function (e) {
        init_jqvmap();
    });
}());


