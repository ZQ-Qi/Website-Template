/*!
 * Prince - v1.0.0
 * @author AtriTheme
 * Copyright (c) 2018
 */
!(function ($) {
    "use strict";

    /*---- Form input ----*/
    $(document).ready(function(){
        var formInputs = $('input,textarea');
        formInputs.focus(function() {
            $(this).parent().children('p.formLabel').addClass('formTop');
        });
        formInputs.focusout(function() {
            if ($.trim($(this).val()).length == 0){
                $(this).parent().children('p.formLabel').removeClass('formTop');
            }
        });
        formInputs.each(function() {
            if ($.trim($(this).val()).length == 0){
                $(this).parent().children('p.formLabel').removeClass('formTop');
            }
            else{
                $(this).parent().children('p.formLabel').addClass('formTop');
            }
        });

        $('p.formLabel').click(function(){
            $(this).parent().children('.form-style').focus();
        });
    });

})(jQuery);