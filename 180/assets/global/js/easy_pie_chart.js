/*!
 * Prince - v1.0.0
 * @author AtriTheme
 * Copyright (c) 2018
 */
!(function ($) {
    "use strict";

    /*---- Easy pie chart ----*/
    $('[data-plugin="easyPieChart"]').each(function () {
        var $this = $(this),
            $options = $.extend({}, $this.data());
        $this.easyPieChart($options);
    });

})(jQuery);