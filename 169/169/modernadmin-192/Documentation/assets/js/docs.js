$( document ).ready(function() {
    
    $('pre').addClass('prettyprint');
    prettyPrint();
    
    // Slimscroll
    $('.slimscroll').slimscroll({
        allowPageScroll: true
    });
    
    // tooltips
    $( '[data-toggle~="tooltip"]' ).tooltip({
        container: 'body'
    });
    
    $('.panel-remove').click(function(){
        $(this).closest(".panel").hide();
    });
    
    // Push Menu
    $('.push-sidebar').click(function(){
        var hidden = $('.sidebar'),
            sidebarWidth = $('.sidebar').width();
        
        if (hidden.hasClass('visible')){
            hidden.removeClass('visible');
            $('.page-inner').removeClass('sidebar-visible');
        } else {
            hidden.addClass('visible');
            $('.page-inner').addClass('sidebar-visible');
        }
    });
    
    // Sidebar Menu
    $('.sidebar .accordion-menu li .sub-menu').slideUp(0);
    $('.sidebar .accordion-menu li.open .sub-menu').slideDown(0);
    $('.small-sidebar .sidebar .accordion-menu li.open .sub-menu').hide(0);
    $('.sidebar .accordion-menu li.droplink > a').click(function(){
        
        if($('body').hasClass('.small-sidebar')) {
            return;
        };
        
        if($('body').hasClass('.page-horizontal-bar')) {
            return;
        };
        
        var menu = $('.sidebar .menu'),
            sidebar = $('.page-sidebar-inner'),
            page = $('.page-content'),
            sub = $(this).next(),
            el = $(this);
        
        menu.find('li').removeClass('open');
        $('.sub-menu').slideUp(150);
        
        if (!sub.is(':visible')) {
            $(this).parent('li').addClass('open');
            $(this).next('.sub-menu').slideDown(150);
        } else {
            sub.slideUp(150);
        }
        
        return false;
    });
    
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);
        var scrollTo = $target.offset().top - 80

        $('html, body').stop().animate({
            'scrollTop': scrollTo
        }, 1000, 'easeInOutExpo');
    });
    
});