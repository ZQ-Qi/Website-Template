(function($) {
  'use strict';

  $(document).ready(function() {
    $('.sidenav__nav-link').on('click', function(event) {
      var el = $(this);
      var item = el.parent();
      var pervActiveItem = $('.sidenav__nav-item.is-active');

      if (item.hasClass('is-active')) {
        item.find('.sidenav__subnav').slideUp(150);
        item.removeClass('is-active');
      } else {
        pervActiveItem.find('.sidenav__subnav').slideUp(150);
        item.addClass('is-active');
        $('.sidenav__nav-item').not(item).removeClass('is-active');

        var height = item.find('.sidenav__subnav').height();
        item.find('.sidenav__subnav').hide().css('height', height);
        item.find('.sidenav__subnav').slideDown(150);
      }
    });

    $('.float-aside__toggler').on('click', function() {
      $('.float-aside').toggleClass('is-opened');
    });

    $(document).on('click', function(e) {
      if (!$(e.target).closest('.float-aside').length) {
        $('.float-aside').removeClass('is-opened');
      }
    });
  });
})(jQuery);
