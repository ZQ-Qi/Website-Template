$( document ).ready(function() {   
    

    // Wow
    new WOW().init();
    
    // Smooth scroll
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);
        var scrollTo = $target.offset().top

        $('html, body').stop().animate({
            'scrollTop': scrollTo
        }, 1000, 'easeInOutExpo');
    });
    
    $('body').mousewheel(function(event, delta) {
        if (delta > 0) {
            $('#cd-vertical-nav ul li a.is-selected').parent().prev().children('a').click();
        } else {
            $('#cd-vertical-nav ul li a.is-selected').parent().next().children('a').click();
        }
                                         
        event.preventDefault();
    });
});