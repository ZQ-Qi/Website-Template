/*

Project     : DAdmin - Responsive Bootstrap HTML Admin Dashboard
Version     : 1.1
Author      : ThemeLooks
Author URI  : https://themeforest.net/user/themelooks

*/

(function ($) {
    "use strict";
    
    /* ------------------------------------------------------------------------- *
     * COMMON VARIABLES
     * ------------------------------------------------------------------------- */
    var $wn = $(window),
        $document = $(document),
        $body = $('body');

    $(function () {

        /* ------------------------------------------------------------------------- *
         * CHAT
         * ------------------------------------------------------------------------- */
        var $chatItems = $('.chat--items');

        if ( $chatItems.length ) {
            $chatItems.scrollTop( $chatItems.outerHeight() );
        }
    });

}(jQuery));
