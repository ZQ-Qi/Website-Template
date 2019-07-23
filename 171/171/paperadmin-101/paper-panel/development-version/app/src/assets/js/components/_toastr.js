(function() {
    "use strict";
    var toastr = require('toastr');

    var element = $(".toast");
    $('.toast-action').on('click',function () {
        var $this = $(this);
        toastrInit($this);
    });

    element.each(function () {
        var $this = $(this);
        toastrInit($this);
    });

    function toastrInit(el) {
        if (el) {
            var shortCutFunction = el.data('type');
            var msg = el.data('message');
            var title = el.data('title') || '';
            var $showDuration = el.data('show-duration');
            var $hideDuration = el.data('hide-duration');
            var $timeOut = el.data('time-out');
            var $extendedTimeOut = el.data('extended-time-out');
            var $showEasing = el.data('show-easing');
            var $hideEasing = el.data('hide-easing');
            var $showMethod = el.data('show-duration');
            var $hideMethod = el.data('hide-method');
            var $positionClass = el.data('position-class');

            if ($showDuration) {
                toastr.options.showDuration = $showDuration;
            }
            if ($hideDuration) {
                toastr.options.hideDuration = $hideDuration;
            }
            if ($timeOut) {
                toastr.options.timeOut = addClear ? 0 : $timeOut;
            }
            if ($extendedTimeOut) {
                toastr.options.extendedTimeOut = addClear ? 0 : $extendedTimeOut;
            }
            if ($showEasing) {
                toastr.options.showEasing = $showEasing;
            }
            if ($hideEasing) {
                toastr.options.hideEasing = $hideEasing;
            }
            if ($showMethod) {
                toastr.options.showMethod = $showMethod;
            }
            if ($hideMethod) {
                toastr.options.hideMethod = $hideMethod;
            }
            if ($positionClass) {
                toastr.options.positionClass = $positionClass;
            }

            var $toast = toastr[shortCutFunction](msg, title);

        }
    }
}());