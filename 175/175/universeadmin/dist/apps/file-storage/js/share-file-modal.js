(function ($) {
  'use strict';

  $(document).ready(function() {
    $('#share-file-modal').modal('show');

    $('#sharing-options-change').on('change', function () {
      $('#share-file-modal').toggleClass('file-storage__share-file-modal--sharing');
    });
  });
})(jQuery);
