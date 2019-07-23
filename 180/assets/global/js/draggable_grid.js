/*!
 * Prince - v1.0.0
 * @author AtriTheme
 * Copyright (c) 2018
 */
!(function ($) {
    "use strict";

    /*---- Draggable grid ----*/
    $('.grid-stack').gridstack({
        width: 12,
        alwaysShowResizeHandle: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
        resizable: {
            handles: 'e, se, s, sw, w'
        }
    });

})(jQuery);