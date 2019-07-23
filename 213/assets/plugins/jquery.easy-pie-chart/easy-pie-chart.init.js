!function($) {
    "use strict";

    var EasyPieChart = function() {};

    EasyPieChart.prototype.init = function() {
    	//initializing various types of easy pie charts
    	$('.easy-pie-chart-1').easyPieChart({
			easing: 'easeOutBounce',
			barColor : '#5e72e4',
			lineWidth: 4,
			animate: 1000,
            lineCap: '#e5e5e5',
            trackColor: '#e5e5e5',
			onStep: function(from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
		});

		$('.easy-pie-chart-2').easyPieChart({
			easing: 'easeOutBounce',
			barColor : '#2dce89',
			lineWidth: 4,
			trackColor : '#e5e5e5',
			lineCap : '#e5e5e5',
			onStep: function(from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
		});

		$('.easy-pie-chart-3').easyPieChart({
			easing: 'easeOutBounce',
			barColor : '#11cdef',
			lineWidth: 4,
			trackColor : '#e5e5e5',
			lineCap : '#e5e5e5',
			onStep: function(from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
		});

		$('.easy-pie-chart-4').easyPieChart({
			easing: 'easeOutBounce',
			barColor : '#f5365c',
			lineWidth: 4,
			trackColor : '#e5e5e5',
			lineCap : '#e5e5e5',
			onStep: function(from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
		});

		$('.easy-pie-chart-5').easyPieChart({
			easing: 'easeOutBounce',
			barColor : '#ff2fa0',
			lineWidth: 4,
			scaleColor: false,
			onStep: function(from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
		});

		$('.easy-pie-chart-6').easyPieChart({
			easing: 'easeOutBounce',
			barColor : '#fb6340',
			lineWidth: 4,
			scaleColor: false,
			onStep: function(from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
		});


		$('.easy-pie-chart-7').easyPieChart({
			easing: 'easeOutBounce',
			barColor : '#172b4d',
			lineWidth: 4,
			scaleColor: false,
			onStep: function(from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
		});

		$('.easy-pie-chart-8').easyPieChart({
			easing: 'easeOutBounce',
			barColor : '#5e72e4',
			lineWidth: 4,
			scaleColor: false,
			onStep: function(from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
		});


    },
    //init
    $.EasyPieChart = new EasyPieChart, $.EasyPieChart.Constructor = EasyPieChart
}(window.jQuery),

//initializing
function($) {
    "use strict";
    $.EasyPieChart.init()
}(window.jQuery);