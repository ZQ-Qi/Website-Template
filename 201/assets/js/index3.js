/*---- morrisBar1----*/
$(function(e){
  'use strict';
	new Morris.Area({
	  element: 'morrisBar-chart',
	  behaveLikeLine: true,
	  data: [
		{x: '2018 Q1', y: 0, z: 0},
		{x: '2018 Q2', y: 2, z: 8},
		{x: '2018 Q3', y: 7, z: 2},
		{x: '2018 Q4', y: 2, z: 4},
		{x: '2018 Q5', y: 0, z: 2},
	  ],
	  xkey: 'x',
	  ykeys: ['y', 'z'],
	  lineColors: ['#ffa22b','#2ddcd3'],
	  labels: ['Y', 'Z'],
	  fillOpacity: 0.6,
      hideHover: 'auto',
      behaveLikeLine: true,
      resize: true,
	});
});

$(function(e){
  'use strict';
	new Morris.Donut({
	  element: 'morrisBar-pie',
	  data: [
		{value: 35, label: 'data1'},
		{value: 25, label: 'data2'},
		{value: 15, label: 'data3'}
	  ],
	  backgroundColor: '#fff',
	  labelColor: '#5e7cac',
	  colors: [
		'#00e682',
		'#2b88ff',
		'#ff2b88'

	  ],
	  formatter: function (x) { return x + "%"}
	});
});

$(function(e){
  'use strict';
	new Morris.Bar({
	  element: 'morrisBar-graph',
	  data: [
		{x: '2011 Q1', y: 0},
		{x: '2011 Q2', y: 1},
		{x: '2011 Q3', y: 2},
		{x: '2011 Q4', y: 3},
		{x: '2012 Q1', y: 4},
		{x: '2012 Q2', y: 5},
		{x: '2012 Q3', y: 6},
		{x: '2012 Q4', y: 7},
		{x: '2013 Q1', y: 8}
	  ],
	  xkey: 'x',
	  ykeys: ['y'],
	  labels: ['Y'],
	  barColors: function (row, series, type) {
		if (type === 'bar') {
		  var red = Math.ceil(0 * row.y / this.ymax);
		  return 'rgb( 5, 117, 230 )';
		}
		else {
		  return '#000';
		}
	  }
	});
});

$(function(e){
  'use strict';
	$(".sparkline22").sparkline([2, 4, 3, 4, 7, 5, 4, 3, 5, 6, 2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 6], {
		type: 'line',
		height: '45',
		width: '100%',
		lineColor: '#00e682',
		fillColor: '#ffffff',
		lineWidth: 3,
		spotColor: '#ff2b88',
		minSpotColor: '#ff2b88'
	});
	$(".sparkline22a").sparkline([2, 4, 3, 4, 7, 5, 4, 3, 5, 6, 2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 6], {
		type: 'line',
		height: '45',
		width: '100%',
		lineColor: '#2ddcd3',
		fillColor: '#ffffff',
		lineWidth: 3,
		spotColor: '#2ddcd3',
		minSpotColor: '#2ddcd3'
	});
	$(".sparkline22b").sparkline([2, 4, 3, 4, 7, 5, 4, 3, 5, 6, 2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 6], {
		type: 'line',
		height: '45',
		width: '100%',
		lineColor: '#ffa22b',
		fillColor: '#ffffff',
		lineWidth: 3,
		spotColor: '#ffa22b',
		minSpotColor: '#ffa22b'
	});
});