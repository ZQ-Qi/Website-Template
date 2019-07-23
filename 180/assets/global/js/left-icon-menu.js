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
        WavesEffects: function () {
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


    function init_sidebar() {
        var a = function () {
            $right_color.css("min-height", $(window).height());
            var a = $BODY.outerHeight(), b = $BODY.hasClass("footer_fixed") ? -10 : $FOOTER.height(),
                c = $left_color.eq(1).height() + $SIDEBAR_FOOTER.height(), d = a < c ? c : a;
            d -= $NAV_MENU.height() + b, $right_color.css("min-height", d)
        };
        $SIDEBAR_MENU.find(".side-menu > li > a").on("mouseenter", function (b) {
            console.log('hover');
            var c = $(this).parent();
            c.is(".active") ? (c.removeClass("active active-sm"), $("ul:first", c).slideUp(function () {
                a()
            })) : (c.parent().is(".child_menu") ? $BODY.is(".nav-small") && ($SIDEBAR_MENU.find("li").removeClass("active active-sm"), $SIDEBAR_MENU.find("li ul").slideUp()) : ($SIDEBAR_MENU.find("li").removeClass("active active-sm"), $SIDEBAR_MENU.find("li ul").slideUp()), c.addClass("active"), $("ul:first", c).slideDown(function () {
                a()
            }))
        }), $MENU_TOGGLE.on("click", function () {
            $BODY.hasClass("nav-medium") ? ($SIDEBAR_MENU.find("li.active ul").hide(), $SIDEBAR_MENU.find("li.active").addClass("active-sm").removeClass("active")) : ($SIDEBAR_MENU.find("li.active-sm ul").show(), $SIDEBAR_MENU.find("li.active-sm").addClass("active").removeClass("active-sm")), $BODY.toggleClass("nav-medium nav-small"), a()
        }), $SIDEBAR_MENU.find('a[href="' + CURRENT_URL + '"]').parent("li").addClass("current-page"), $SIDEBAR_MENU.find("a").filter(function () {
            return this.href == CURRENT_URL
        }).parent("li").addClass("current-page").parent().addClass("active"), $(window).smartresize(function () {
            a();
            if ($(window).width() < 992) {
                $BODY.addClass("nav-medium")
                $BODY.removeClass("nav-small")
            }
            else{
                $BODY.addClass("nav-small")
                $BODY.removeClass("nav-medium")
            }
        })
        if ($(window).width() < 992) {
            $BODY.toggleClass("nav-medium nav-small")
        }

    }

    !function (a, b) {
        var c = function (a, b, c) {
            var d;
            return function () {
                function h() {
                    c || a.apply(f, g), d = null
                }

                var f = this, g = arguments;
                d ? clearTimeout(d) : c && a.apply(f, g), d = setTimeout(h, b || 100)
            }
        };
        jQuery.fn[b] = function (a) {
            return a ? this.bind("resize", c(a)) : this.trigger(b)
        }
    }(jQuery, "smartresize");
    var CURRENT_URL = window.location.href.split("#")[0].split("?")[0], $BODY = $("body"),
        $MENU_TOGGLE = $("#menu_toggle"),
        $SIDEBAR_MENU = $("#sidebar-menu"), $SIDEBAR_FOOTER = $(".sidebar-footer"), $left_color = $(".left_color"),
        $right_color = $(".right_color"), $NAV_MENU = $(".nav_menu"), $FOOTER = $("footer"), randNum = function () {
            return Math.floor(21 * Math.random()) + 20
        };
    $(document).ready(function () {
        init_sidebar()
    });

    /*---- Loader ----*/
    $(window).on('load', function () {
        $('body').addClass('loadbar');
    });

    /*---- fullscreen ----*/
    $(function () {
        $('.toggle-fullscreen').click(function () {
            screenfull.toggle($('#container')[0]);
        });
    });

    /*---- Scroll Top ----*/
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function () {
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });

    /*---- Scroll ----*/
    $('.default-scroll').slimScroll({
        opacity: 0,
        color: '#aaa',
        size: '5px'
    }).mouseover(function() {
        $(this).next('.slimScrollBar').css('opacity', 0.4);
    });

    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });

})(jQuery);