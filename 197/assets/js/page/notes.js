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
         * NOTES APP
         * ------------------------------------------------------------------------- */
        var $noteList = $('.note--list'),
            $noteListActive = $noteList.find('li.active > .view-item');

        // Remove Item
        $noteList.on('click', '.remove-item', function (e) {
            e.preventDefault();

            var $el = $(this),
                $parent = $el.parent('li');

            $parent.fadeOut('slow', function () {
                $(this).remove();
            });

            if ( $parent.hasClass('active') ) {
                $parent.next().addClass('active');
            }
        });

        var $noteLabel = $('.note--label'),
            $noteLabelTrigger = $noteLabel.children('.dropdown-toggle');

        // Changing Note Label
        $noteLabel.on('click', 'li', function () {
            var $el = $(this),
                targetValue = $el.data('value');

            $noteLabelTrigger.add( $noteListActive ).attr('class', function (i, classList) {
                var $t = $(this),
                    curValue = $t.data('value');

                $t.data('value', targetValue);

                return classList.replace(curValue, targetValue);
            });
        });
    });

}(jQuery));
