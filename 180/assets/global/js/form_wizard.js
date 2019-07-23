/*!
 * Prince - v1.0.0
 * @author AtriTheme
 * Copyright (c) 2018
 */
!(function ($) {
    "use strict";

    /*---- Form Wizard ----*/
    $("#simple-wizard").steps({
        headerTag: "h3",
        bodyTag: "div",
        transitionEffect: "slideLeft"
    });

    $("#vertical-wizard").steps({
        headerTag: "h3",
        bodyTag: "div",
        transitionEffect: "slideLeft",
        stepsOrientation: "vertical"
    });

})(jQuery);