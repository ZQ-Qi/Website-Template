(function ($) {
    "use strict";

    $(function () {
        /* ------------------------------------------------------------------------- *
         * COUNTDOWN
         * ------------------------------------------------------------------------- */
        var $countdown = $('[data-countdown-to]');

        $countdown.each(function () {
            var $t = $(this),
                date = $t.data('countdown-to');
            
            $t.countdown(date, function(e) {
                $(this).html( e.strftime('<li><strong>%D</strong><span>Days</span></li><li><strong>%H</strong><span>Hours</span></li><li><strong>%M</strong><span>Minutes</span></li><li><strong>%S</strong><span>Seconds</span></li>') );
            });
        });
    });
}(jQuery));