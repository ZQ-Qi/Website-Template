/*!
 * Prince - v1.0.0
 * @author AtriTheme
 * Copyright (c) 2018
 */
!(function ($) {
    "use strict";

    var prince = prince || {};

    prince.function = {

        /*---- Wave Effect ----*/
        WavesEffects: function() {
            if (typeof Waves !== 'undefined') {
                Waves.attach('.flat-buttons', ['waves-button']);
                Waves.attach('.float-buttons', ['waves-button', 'waves-float']);
                Waves.attach('.float-button-light', ['waves-button', 'waves-float', 'waves-light']);
                Waves.attach('.flat-icon', ['waves-circle']);
                Waves.attach('.float-icon', ['waves-circle', 'waves-float']);
                Waves.attach('.float-icon-light', ['waves-circle', 'waves-float', 'waves-light']);
                Waves.init();
            }
        }
    }

    prince.onReady = {
        init: function () {
            prince.function.WavesEffects();
        }
    };

    prince.onResize = {
        init: function () {
        }
    };

    $(document).ready(prince.onReady.init);
    $(document).ready(prince.onResize.init);



/*---- Loader ----*/
$(window).on('load', function(){
    $('body').addClass('loadbar');
});

/*---- Scroll Top ----*/
$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('#scroll').fadeIn();
    } else {
        $('#scroll').fadeOut();
    }
});
$('#scroll').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
});
/*---- fullscreen ----*/
$(function () {
    $('#toggle-fullscreen').click(function () {
        screenfull.toggle($('#container')[0]);
    });
});

/*---- Scroll ----*/
$('.default-scroll').slimScroll({
    opacity: 0,
    color: '#aaa',
    size: '5px'
}).mouseover(function() {
    $(this).next('.slimScrollBar').css('opacity', 0.4);
});

/*---- menu toggle class ----*/
$("#hide-menu-toggle").click(function(){
    $("#top-nav").toggleClass("menu-show");
    jQuery(this).toggleClass('overlayOn');
});

var selector = '#top-nav ul li';

$(document).delegate("#top-nav ul li > a", "click", function (e) {
   $(this).parent().toggleClass("active");
   $(this).parent().children('ul').slideToggle('slow');
});

})(jQuery);