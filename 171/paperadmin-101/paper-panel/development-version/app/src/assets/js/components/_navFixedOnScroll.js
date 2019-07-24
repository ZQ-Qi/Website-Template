(function() {
    "use strict";

    var $logoSticky, $logo;
    $logo = $('.navbar-brand img').attr('src');

    window.onscroll = function () {
        var $ele = $('.nav-sticky');
        var $classes;
        if ($ele.length > 0) {
            $classes = ($ele.data('nav-sticky-classes')) ? $ele.data('nav-sticky-classes') : 'white';
            if ($(window).scrollTop() > 50) {
                if ($logoSticky = $ele.data('nav-sticky-logo')) {
                    $('.navbar-brand img').attr('src', $logoSticky)
                }
                $ele.addClass('sticky shadow ' + $classes);
            } else {
                $ele.removeClass('sticky shadow ' + $classes);
                $('.navbar-brand img').attr('src', $logo);
            }
        }
    };
}());