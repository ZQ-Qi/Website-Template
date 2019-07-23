$(window).load(function () {
	google.charts.load('upcoming', { 'packages': ['geochart'] });
	google.charts.setOnLoadCallback(drawRegionsMap);
	function drawRegionsMap() {
		"use strict";
		var data = google.visualization.arrayToDataTable([
			['Country', 'Visitors'],
			['Germany', 200],
			['America', 600],
			['Brazil', 100],
			['Canada', 400],
			['France', 190],
			['RU', 210]
		]);
		var options = {};
		var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
		chart.draw(data, options);
	}

	Morris.Area({
		element: 'line-area-example',
		data: [
			{ y: '2013', a: 10, b: 3 },
			{ y: '2014', a: 14, b: 5 },
			{ y: '2015', a: 8, b: 2 },
			{ y: '2016', a: 20, b: 15 }
		],
		xkey: 'y',
		ykeys: ['a', 'b'],
		labels: ['Series A', 'Series B'],
		lineColors: ['#746c9f', '#ababab'],
		lineWidth: '0',
		grid: false,
	});

	// Initialize Combined Chart
	var data5 = [{
		data: [[1, 12], [2, 12], [3, 14], [4, 16], [5, 16], [6, 17], [7, 15], [8, 11], [9, 13], [10, 11], [11, 15], [12, 14]],
		label: 'Sales Report',
		points: {
			show: true,
			radius: 3
		},
		splines: {
			show: true,
			tension: 0.45,
			lineWidth: 3,
			fill: 0
		}
	}, {
		data: [[1, 9], [2, 13], [3, 8], [4, 9], [5, 18], [6, 14], [7, 13], [8, 10], [9, 12], [10, 18], [11, 9], [12, 17]],
		label: 'Annual Revenue',
		bars: {
			show: true,
			barWidth: 0.4,
			lineWidth: 0,
			fillColor: { colors: [{ opacity: 0.6 }, { opacity: 0.8 }] }
		}
	}];

	var options5 = {
		colors: ['#ffdc88', '#a169c9'],
		series: {
			shadowSize: 0
		},
		xaxis: {
			font: {
				color: '#3d4c5a'
			}
		},
		yaxis: {
			font: {
				color: '#3d4c5a'
			}
		},
		grid: {
			hoverable: true,
			clickable: true,
			borderWidth: 0,
			color: '#ccc'
		},
		tooltip: true,
		tooltipOpts: { content: '%s of %x.1 is %y.4', defaultTheme: false, shifts: { x: 0, y: 20 } }
	};

	var plot5 = $.plot($("#combined-chart"), data5, options5);

	// top report chart js
	$(".sparkline").each(function () {
		var $this = $(this);
		$this.sparkline('html', $this.data());
	});

	$('.sparkline-pie').sparkline('html', {
		type: 'pie',
		offset: 90,
		width: '150px',
		height: '150px',
		sliceColors: ['#E91E63', '#00BCD4', '#FFC107']
	})

	// Bar charts using inline values
    $('.sparkbar').sparkline('html', { type: 'bar' });
});