/*Bootstrap wysihtml5 Init*/

$(document).ready(function () {
	"use strict";
	
	$('.textarea_editor').wysihtml5({
		toolbar: {
		  fa: true,
		  "link": true,
		}
	});
	
});
$(window).load(function(){
	$("iframe.wysihtml5-sandbox").contents().find("body").attr("style","direction:rtl;")
});