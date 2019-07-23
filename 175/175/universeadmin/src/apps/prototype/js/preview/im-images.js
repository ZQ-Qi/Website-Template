(function ($) {
  'use strict';

  setTimeout(function() {
    $('.m-im-sidenav__images-block').masonry({
      itemSelector: '.m-im-sidenav__image',
      columnWidth: 100
    });
  }, 200);
})(jQuery);
