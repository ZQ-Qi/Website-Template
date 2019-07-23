$(function() {
    skinChanger();
    activateNotificationAndTasksScroll();
    setSkinListHeightAndScroll();
    customslimscroll();
    $(window).resize(function() {
        setSkinListHeightAndScroll();
    });
});

//Skin changer
function skinChanger() {
    $('.right-sidebar .choose-skin li').on('click', function() {
        var $body = $('body');
        var $this = $(this);

        var existTheme = $('.right-sidebar .choose-skin li.active').data('theme');
        $('.right-sidebar .choose-skin li').removeClass('active');
        $body.removeClass('theme-' + existTheme);
        $this.addClass('active');

        $body.addClass('theme-' + $this.data('theme'));
    });
}

//Skin tab content set height and show scroll
function setSkinListHeightAndScroll() {
    var height = $(window).height() - ($('.navbar').innerHeight() + $('.right-sidebar .nav-tabs').outerHeight());
    var $el = $('.right_menu');

    $el.slimScroll({
        destroy: true
    }).height('auto');
    $el.parent().find('.slimScrollBar, .slimScrollRail').remove();

    $el.slimscroll({
        height: height + 'px',
        color: 'rgba(0,0,0,0.4)',
        size: '3px',
        alwaysVisible: false,
        borderRadius: '3px',
        railBorderRadius: '3px'
    });
}

function setSkinListHeightAndScroll() {
    var height = $(window).height() - ($('.navbar').innerHeight() + $('.sidebar .user-info').outerHeight());
    var $el = $('.sidebar .menu');

    $el.slimScroll({
        destroy: true
    }).height('auto');
    $el.parent().find('.slimScrollBar, .slimScrollRail').remove();

    $el.slimscroll({
        height: height + 'px',
        color: 'rgba(0,0,0,0.3)',
        size: '3px',
        alwaysVisible: false,
        borderRadius: '3px',
        railBorderRadius: '3px'
    });
}
//Activate notification and task dropdown on top right menu
function activateNotificationAndTasksScroll() {
    $('.navbar-right .dropdown-menu .body .menu').slimscroll({
        height: '254px',
        color: 'rgba(0,0,0,0.3)',
        size: '3px',
        alwaysVisible: false,
        borderRadius: '3px',
        railBorderRadius: '3px'
    });
}

function customslimscroll() {
    $('.chat-widget').slimscroll({
        height: '300px',
        color: 'rgba(0,0,0,0.4)',
        size: '3px',
        alwaysVisible: false,
        borderRadius: '3px',
        railBorderRadius: '3px'
    });
    // Chat App List
    $('.chat-app .chat .chat-history').slimscroll({
        height: '400px',
        color: 'rgba(0,0,0,0.5)',
        size: '4px',
        alwaysVisible: false,
        borderRadius: '3px',
        railBorderRadius: '0'
    });
    $('.chat-app .people-list .chat-list').slimscroll({
        height: '550px',
        color: 'rgba(0,0,0,0.5)',
        size: '4px',
        alwaysVisible: false,
        borderRadius: '3px',
        railBorderRadius: '0'
    });
}
