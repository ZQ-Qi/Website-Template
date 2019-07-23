/*!
 * Prince - v1.0.0
 * @author AtriTheme
 * Copyright (c) 2018
 */
$(function () {
    'use strict';

    /*---- Gallery ----*/
        var selectedClass = "";
        $(".fil-cat").click(function(){
            selectedClass = $(this).attr("data-rel");
            $("#portfolio").fadeTo(100, 0.1);
            $("#portfolio div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
            setTimeout(function() {
                $("."+selectedClass).fadeIn().addClass('scale-anm');
                $("#portfolio").fadeTo(300, 1);
            }, 300);

        });

}());