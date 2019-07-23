(function () {

    'use strict';

    /*-------------------------------------
     window...
     --------------------------------------*/

    var window_w = $(window).width(); // Window Width
    var window_h = $(window).height(); // Window Height
    var window_s = $(window).scrollTop(); // Window Scroll Top

    var $html = $('html'); // HTML
    var $body = $('body'); // Body


    if ($("#docs").length) {
        $('#docs').popover('show');
    }

    /*-------------------------------------
     Smooth Scroll
     --------------------------------------*/

    if ($(".scroll").length > 0 || $(".scroll a[href^='#']").length > 0) {
        $('.scroll, .scroll a[href^="#"]').on('click', function () {
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top - 30
            }, 1500, function () {
            });
            return false;
        });
    }

    /*-------------------------------------
     Woo-Quantity
     --------------------------------------*/

    $("body").on("click", ".xv-qyt", function (e) {
        e.preventDefault();
        var $add = parseInt($(this).attr("data-value")),
            $input = $(this).siblings("input.qty"),
            cVal = parseInt($input.val());
        if (cVal >= 1) {
            if ($add === -1 && cVal === 1)
                return false;
            $input.val(cVal + $add);
        }
    });

    /*-------------------------------------
     Custom Select
     --------------------------------------*/
    $('.custome-select select').on('change', function () {
        var p = $(this).parent(".custome-select");
        p.find('span').html($(this).val());
    });

    /*-------------------------------------
      Go TO Top
      --------------------------------------*/
    if ($('.js-gotop').length) {
        $('.js-gotop').on('click', function (event) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $('html').offset().top
            }, 500, 'easeInOutExpo');
            return false;
        });

        $(window).scroll(function () {
            var $win = $(window);
            if ($win.scrollTop() > 200) {
                $('.js-top').addClass('active');
            } else {
                $('.js-top').removeClass('active');
            }
        });

    }


    /* Input - Function ========================================================================================================
    *  You can manage the inputs(also textareas) with name of class 'form-control'
    *
    */
    if($('.form-control').length){
        //On focus event
        $('.form-control').focus(function () {
            $(this).parent().addClass('focused');
        });

        //On focusout event
        $('.form-control').focusout(function () {
            var $this = $(this);
            if ($this.parents('.form-group').hasClass('form-float')) {
                if ($this.val() == '') { $this.parents('.form-line').removeClass('focused'); }
            }
            else {
                $this.parents('.form-line').removeClass('focused');
            }
        });

        //On label click
        $('body').on('click', '.form-float .form-line .form-label', function () {
            $(this).parent().find('input').focus();
        });

        //Not blank form
        $('.form-control').each(function () {
            if ($(this).val() !== '') {
                $(this).parents('.form-line').addClass('focused');
            }
        });
    }
}());