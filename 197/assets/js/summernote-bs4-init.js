(function ($) {
    "use strict";

    $(function () {
        /* ------------------------------------------------------------------------- *
         * SUMMERNOTE
         * ------------------------------------------------------------------------- */
        var $summerNote = $('[data-trigger="summernote"]');

        if ( $summerNote.length ) {
            $summerNote.summernote({
                height: 180
            });
        }
    });
}(jQuery));