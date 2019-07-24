(function($) {
  'use strict';
  $(function() {
    var body = $('body');
    $('[data-toggle="minimize"]').on("click", function () {
      if((body.hasClass('sidebar-toggle-display'))||(body.hasClass('sidebar-absolute'))) {
        body.toggleClass('sidebar-hidden');
      }
      else {
        body.toggleClass('sidebar-icon-only');
      }
    });
  });
})(jQuery);
