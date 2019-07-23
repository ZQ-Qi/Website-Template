/*!
 * Prince - v1.0.0
 * @author AtriTheme
 * Copyright (c) 2018
 */
!(function ($) {
    "use strict";

    /*---- Accordions ----*/
    $('.accordion a').click(function(){
        $(this).toggleClass('active');
        $(this).next('.content').slideToggle(400);
    });

    $('.collapse.in').prev('.panel-heading').addClass('active');
    $('#accordion2')
        .on('show.bs.collapse', function(a) {
            $(a.target).prev('.panel-heading').addClass('active');
        })
        .on('hide.bs.collapse', function(a) {
            $(a.target).prev('.panel-heading').removeClass('active');
        });

})(jQuery);