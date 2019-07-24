$(function () {
'use strict';
    $('#nav-accordion').dcAccordion({
        eventType: 'click',
        autoClose: true,
        saveState: true,
        disableLink: true,
        speed: 'slow',
        showCount: false,
        autoExpand: true,
        classExpand: 'dcjq-current-parent'
    });
});
var Script = function () {
'use strict';
    jQuery('#sidebar .sub-menu > a').click(function () {
        var o = ($(this).offset());
     //   diff = 250 - o.top;
		 var offset = o.top - $('#sidebar').height() / 2;
		 offset=offset+150;
		// alert(offset);
		$('#sidebar').animate({scrollTop: offset}, 500);
       
    });
    $(function () {
        function responsiveView() {
            var wSize = $(window).width();
            if (wSize <= 768) {
                $('#container').addClass('sidebar-close');
                $('#sidebar > ul').hide();
            }
            if (wSize > 768) {
                $('#container').removeClass('sidebar-close');
                $('#sidebar > ul').show();
            }
        }
        $(window).on('load', responsiveView);
        $(window).on('resize', responsiveView);
    });
    $('.fa-bars').click(function () {
        if ($('#sidebar > ul').is(":visible") === true) {
            $('#main-content').css({
                'margin-left': '0px'
            });
            $('#sidebar').css({
                'margin-left': '-210px'
            });
            $('#sidebar > ul').hide();
            $("#container").addClass("sidebar-closed");
        } else {
            $('#main-content').css({
                'margin-left': '210px'
            });
            $('#sidebar > ul').show();
            $('#sidebar').css({
                'margin-left': '0'
            });
            $("#container").removeClass("sidebar-closed");
        }
    });
    $("#sidebar").niceScroll({
        styler: "fb",
        cursorcolor: "#72d0eb",
        cursorwidth: '8',
        cursorborderradius: '10px',
        background: '#116077',
        spacebarenabled: false,
        cursorborder: '',
		zindex: '1000'
    });
    $("html").niceScroll({
        styler: "fb",
        cursorcolor: "#72d0eb",
        cursorwidth: '6',
        cursorborderradius: '10px',
        background: '#116077',
        spacebarenabled: false,
        cursorborder: '',
        zindex: '1000'
    });
    jQuery('.panel .tools .fa-chevron-down').click(function () {
        var el = jQuery(this).parents(".panel").children(".panel-body");
        if (jQuery(this).hasClass("fa-chevron-down")) {
            jQuery(this).removeClass("fa-chevron-down").addClass("fa-chevron-up");
            el.slideUp(200);
        } else {
            jQuery(this).removeClass("fa-chevron-up").addClass("fa-chevron-down");
            el.slideDown(200);
        }
    });
    jQuery('.panel .tools .fa-times').click(function () {
        jQuery(this).parents(".panel").parent().remove();
    });
    $('.tooltips').tooltip();
    $('.popovers').popover();
    if ($(".custom-bar-chart")) {
        $(".bar").each(function () {
            var i = $(this).find(".value").html();
            $(this).find(".value").html("");
            $(this).find(".value").animate({
                height: i
            }, 2000)
        })
    }
}();