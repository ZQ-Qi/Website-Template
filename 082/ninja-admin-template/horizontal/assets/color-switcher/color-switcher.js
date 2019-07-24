/**
 * Color Switcher
 */

(function($) {
	"use strict";

	$('#color-switcher-button').on('click',function(){
		$("#color-switcher-content").stop().toggle(200);
		return false;
	});

	$("#color-switcher-content").on('click','.js__change_color',function(event){
		event.preventDefault();
		if (!$(this).hasClass('active')){
			$("#color-switcher-content .active").removeClass("active");
			if($("#custom-color-themes").length){
				$("#custom-color-themes").remove();
			}
			if ($(this).data('color') != 'blue'){
				$("body").append('<link id="custom-color-themes" rel="stylesheet" href="assets/styles/color/' + $(this).data('color') + '.min.css">');
			}
			$(this).addClass('active');
		}
		return false;
	});

	$("#color-reset").on('click',function(){
		var selector = $('#color-switcher-content .js__change_color[data-color="blue"]');
		if($("#custom-color-themes").length){
			$("#custom-color-themes").remove();
		}
		if (selector.data('color') != 'blue'){
			$("body").append('<link id="custom-color-themes" rel="stylesheet" href="assets/styles/color/' + selector.data('color') + '.min.css">');
		}
		$('#color-switcher-content .js__change_color').removeClass('active');
		selector.addClass('active');
	});

	$("#wrapper").on('click',function(event){
		if ($(event.target).attr('id') == 'color-switcher' || $(event.target).parents('#color-switcher').length){

		}else{
			$("#color-switcher-content").stop().hide(200);
		}
	})

})(jQuery);