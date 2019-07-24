(function($) {
  'use strict';
  if(!$('body').hasClass("rtl")) {
    $('#sidebar .nav, .list-wrapper, ul.chats, .product-chart-wrapper, .table-responsive').perfectScrollbar();
    $('.container-scroller').perfectScrollbar( {suppressScrollX: true});
  }
})(jQuery);
