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
         * TODO APP
         * ------------------------------------------------------------------------- */
        var $todoApp = $('[data-todoapp="items"]');

        $todoApp
            .on('click', '[data-todoapp="del:item"]', function (e) {
                e.preventDefault();

                $(this).parents('[data-todoapp="item"]').slideUp(function () {
                    $(this).remove();
                });
            })
            .on('click', '[data-todoapp="checkbox"]', function () {
                var $t = $(this),
                    $traget = $t.parents('[data-todoapp="item"]').find('[data-todoapp="done:item"]'),
                    $data = $t.is(':checked') ? [true, 'Undone'] : [false, 'Done'];

                if ( $t.parents('[data-todoapp="header"]').length ) {
                    $traget = $todoApp.find('[data-todoapp="done:item"]');

                    $todoApp.find('[data-todoapp="checkbox"]').prop('checked', $data[0]);
                }

                $traget.text( $data[1] );
            })
            .on('click', '[data-todoapp="done:item"]', function (e) {
                e.preventDefault();

                var $t = $(this),
                    $checkbox = $t.parents('[data-todoapp="item"]').find('[data-todoapp="checkbox"]'),
                    $data = $checkbox.is(':checked') ? [false, 'Done'] : [true, 'Undone'];

                $checkbox.prop( 'checked', $data[0] );
                $t.text( $data[1] );
            });
    });

}(jQuery));
