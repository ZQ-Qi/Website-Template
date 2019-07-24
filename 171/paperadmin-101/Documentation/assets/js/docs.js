/*
 * Documentation JS script
 */

jQuery(document).ready(function($) {
    "use strict";

    /* ******************************************************************** */
    /*                        PRELOADER                                     */
    /* ******************************************************************** */

    $(window).load(function() {
        if ($('.xdocs-pre-loader').length) {
            // Animate loader off screen
            $(".xdocs-pre-loader").fadeOut("slow");
        }
    });



    /* ******************************************************************** */
    /*                        Sticky                                        */
    /* ******************************************************************** */

    $('.content-wrapper').stickem({
        item: '.stickem',
        container: '.stickem-container',
        stickClass: 'stickit',
        endStickClass: 'stickit-end',
        offset: 100,
        onStick: null,
        onUnstick: null
    });

    /* ******************************************************************** */
    /*                        SMOOTH SCROLL                                 */
    /* ******************************************************************** */
    if ($('.nav').length) {

        $(".nav a[href^='#'], .header-link").click(function() {
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top - 0
            }, 1500, function() {});
            return false;
        });
    }

    if ($('.steps').length) {

        $(".steps a[href^='#']").click(function() {
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top - 0
            }, 1500, function() {});
            return false;
        });
    }

});