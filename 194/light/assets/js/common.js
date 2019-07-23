$(function() {
	"use strict";
	skinChanger();
	initSparkline();
	$.Mplify.rightSideBar.activate();
    
    setTimeout(function() {
        $('.page-loader-wrapper').fadeOut();
	}, 50);
	
});
$.Mplify = {};

$(document).ready(function() {
	"use strict";

	// sidebar navigation
	$('#main-menu').metisMenu();

	// sidebar nav scrolling
	$('#leftsidebar .sidebar-scroll').slimScroll({
		height: 'calc(100vh - 65px)',
		wheelStep: 10,
		touchScrollStep: 50,
		color: '#efefef',
		size: '2px',
		borderRadius: '3px',
		alwaysVisible: false,
		position: 'right',
	});

	// sidebar nav scrolling
	$('#rightsidebar .sidebar-scroll').slimScroll({
		height: 'calc(100vh - 60px)',
		wheelStep: 10,
		touchScrollStep: 50,
		color: '#efefef',
		size: '2px',
		borderRadius: '3px',
		alwaysVisible: false,
		position: 'right',
	});

	// cwidget scroll
	$('.cwidget-scroll').slimScroll({
		height: '300px',
		wheelStep: 10,
		touchScrollStep: 50,
		color: '#efefef',
		size: '2px',
		borderRadius: '3px',
		alwaysVisible: false,
		position: 'right',
	});

	// toggle fullwidth layout
	$('.btn-toggle-fullwidth').on('click', function() {
		if(!$('body').hasClass('menu-icon')) {
			$('body').addClass('menu-icon');

			// Small menu hover add class
			$('.menu-icon .metismenu li').hover(
				function(){ $(this).addClass('hover')},
				function(){ $(this).removeClass('hover')}
			)

		} else {
			$('body').removeClass('menu-icon');
		}
	});

	// off-canvas menu toggle
	$('.btn-toggle-offcanvas').on('click', function() {
		$('body').toggleClass('offcanvas-active');
	});

	$('#main-content').on('click', function() {
		$('body').removeClass('offcanvas-active');
	});

	// Bootstrap tooltip init
	if($('[data-toggle="tooltip"]').length > 0) {
		$('[data-toggle="tooltip"]').tooltip();
	}

	if($('[data-toggle="popover"]').length > 0) {
		$('[data-toggle="popover"]').popover();
	}

	$(window).on('load', function() {
		// for shorter main content
		if($('#main-content').height() < $('#leftsidebar').height()) {
			$('#main-content').css('min-height', $('#leftsidebar').innerHeight() - $('footer').innerHeight());
		}
	});

	$(window).on('load resize', function() {
		if($(window).innerWidth() < 420) {
			$('.navbar-brand logo.svg').attr('src', '../assets/images/logo-icon.svg');
		} else {
			$('.navbar-brand logo-icon.svg').attr('src', '../assets/images/logo.svg');
		}
	});

	$(".navbar-nav .icon-menu").hover(function () {
        $(this).toggleClass("animated jello");
	});

	 // (Optional) Active an item if it has the class "is-active"	
	 $(".accordion2 > .accordion-item.is-active").children(".accordion-panel").slideDown();
        
	 $(".accordion2 > .accordion-item").click(function() {
		 // Cancel the siblings
		 $(this).siblings(".accordion-item").removeClass("is-active").children(".accordion-panel").slideUp();
		 // Toggle the item
		 $(this).toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out");
	 });


	 // Mega menu
	 $('a.mega_menu').on('click', function() {
		$('.mega_menubar').toggleClass('open animated bounceIn');
	});

	// Wait card Js
	$('[data-toggle="cardloading"]').on('click', function () {
		var effect = $(this).data('loadingEffect');
		var $loading = $(this).parents('.card').waitMe({
			effect: effect,
			text: 'Loading...',
			bg: 'rgba(255,255,255,0.90)',
			color: '#555'
		});

		setTimeout(function () {
			//Loading hide
			$loading.waitMe('hide');
		}, 2000);
	});
    
    // Full screen class 
	$('.full-screen').on('click', function() {
		$(this).parents('.card').toggleClass('fullscreen');
	});

});

// Sparkline
function initSparkline() {
	$(".sparkline").each(function() {
		var $this = $(this);
		$this.sparkline('html', $this.data());
	});
}

//Skin changer
function skinChanger() {
	$('.choose-skin li').on('click', function() {
	    var $body = $('body');
	    var $this = $(this);
  
	    var existTheme = $('.choose-skin li.active').data('theme');
	    $('.choose-skin li').removeClass('active');
	    $body.removeClass('theme-' + existTheme);
	    $this.addClass('active');
	    $body.addClass('theme-' + $this.data('theme'));
	});
}

// toggle function
$.fn.clickToggle = function( f1, f2 ) {
	return this.each( function() {
		var clicked = false;
		$(this).bind('click', function() {
			if(clicked) {
				clicked = false;
				return f2.apply(this, arguments);
			}

			clicked = true;
			return f1.apply(this, arguments);
		});
	});

};

// Select all checkbox
$('.select-all').on('click',function(){
   
	if(this.checked){
		$(this).parents('table').find('.checkbox-tick').each(function(){
		this.checked = true;
		});
	}else{
		$(this).parents('table').find('.checkbox-tick').each(function(){
		this.checked = false;
		});
	}
	});

	$('.checkbox-tick').on('click',function(){ 
	if($(this).parents('table').find('.checkbox-tick:checked').length == $(this).parents('table').find('.checkbox-tick').length){
		$(this).parents('table').find('.select-all').prop('checked',true);
	}else{
		$(this).parents('table').find('.select-all').prop('checked',false);
	}
});

/* Right Sidebar - Function */
$.Mplify.rightSideBar = {
    activate: function() {
        var _this = this;
        var $sidebar = $('#rightsidebar');
        var $overlay = $('.overlay');

        //Close sidebar
        $(window).on('click',function(e) {
            var $target = $(e.target);
            if (e.target.nodeName.toLowerCase() === 'i') {
                $target = $(e.target).parent();
            }

            if (!$target.hasClass('js-right-sidebar') && _this.isOpen() && $target.parents('#rightsidebar').length === 0) {
                if (!$target.hasClass('bars')) $overlay.fadeOut();
                $sidebar.removeClass('open');
            }
        });

        $('.js-right-sidebar').on('click', function() {
            $sidebar.toggleClass('open');
            if (_this.isOpen()) {
                $overlay.fadeIn();
            } else {
                $overlay.fadeOut();
            }
        });
    },
    isOpen: function() {
        return $('.right-sidebar').hasClass('open');
    }
}