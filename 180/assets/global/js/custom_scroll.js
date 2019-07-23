/*!
 * Prince - v1.0.0
 * @author AtriTheme
 * Copyright (c) 2018
 */
!(function ($) {
    "use strict";

    /*---- Custom Scroll ----*/
    $('#default-scroll').slimScroll({
        opacity: 0
    }).mouseover(function() {
        $(this).next('.slimScrollBar').css('opacity', 0.4);
    });

    $('#visible-scroll').slimScroll({
        alwaysVisible: true
    });

    $('#color-scroll').slimScroll({
        color: '#00f',
        opacity: 0
    }).mouseover(function() {
        $(this).next('.slimScrollBar').css('opacity', 0.4);
    });

    $('#left-scroll').slimScroll({
        position: 'left',
        opacity: 0
    }).mouseover(function() {
        $(this).next('.slimScrollBar').css('opacity', 0.4);
    });

    $('#size-scroll').slimscroll({
        size: '15px',
        opacity: 0
    }).mouseover(function() {
        $(this).next('.slimScrollBar').css('opacity', 0.4);
    });

    $('#rail-scroll').slimScroll({
        alwaysVisible: true,
        railVisible: true
    });

    $('#height-width-scroll').slimscroll({
        height: '200px',
        width: '300px',
        opacity: 0
    }).mouseover(function() {
        $(this).next('.slimScrollBar').css('opacity', 0.4);
    });

    $('#background-scroll').slimscroll({
        height: '250px'
    }).parent().css({
        background: '#4390ff',
        color: '#fff',
        border: '2px dashed #184055'
    });

    $('#programmatic-scrolling').slimscroll({
        height: '250px',
        opacity: 0
    }).mouseover(function() {
        $(this).next('.slimScrollBar').css('opacity', 0.4);
    });

    $('#scrollDown').click(function(){
        $('#programmatic-scrolling').slimScroll({ scrollBy: '50px' });
    });

    $('#scrollUp').click(function(){
        $('#programmatic-scrolling').slimScroll({ scrollBy: '-50px' });
    });

})(jQuery);