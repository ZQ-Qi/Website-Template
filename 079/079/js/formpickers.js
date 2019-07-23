(function($) {
  'use strict';
  $('.clockpicker').clockpicker();
  $('.color-picker').asColorPicker();
  $('.datepicker').datepicker();
  $('.datepicker-autoclose').datepicker({
    autoclose: true
  })
  $('input[name="date-range"]').daterangepicker();
  $('input[name="date-time-range"]').daterangepicker({
    timePicker: true,
    timePickerIncrement: 30,
    locale: {
        format: 'MM/DD/YYYY h:mm A'
    }
  });
})(jQuery);
