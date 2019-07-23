// Dashboard 1 Morris-chart
$( function () {
	"use strict";

	// Morris Area chart
		Morris.Area( {
		element: 'morris-area-chart1',
		data: [ {
				period: '2012',
				bitcoin: 0,
        }, {
				period: '2013',
				bitcoin: 190,
        }, {
				period: '2014',
				bitcoin: 40,
        }, {
				period: '2015',
				bitcoin: 30,
        }, {
				period: '2016',
				bitcoin: 150,
        }, {
				period: '2017',
				bitcoin: 25,
        }, {
				period: '2018',
				bitcoin: 210,
        }


        ],
		xkey: 'period',
		grid: false,
		ykeys: [ 'bitcoin'],
		labels: [ 'BTC'],
		pointSize: 3,
		fillOpacity: 0,
		pointStrokeColors: [ '#f7931a'],
		behaveLikeLine: true,
		gridLineColor: '#e0e0e0',
		lineWidth: 3,
		hideHover: 'auto',
		lineColors: [ '#f7931a',],
		resize: true

	} );


	// Morris Area chart

	Morris.Area( {
		element: 'morris-area-chart2',
		data: [ {
				period: '2012',
				btc: 0,
				ltc: 0,
        }, {
				period: '2013',
				btc: 90,
				ltc: 60,
        }, {
				period: '2014',
				btc: 40,
				ltc: 80,
        }, {
				period: '2015',
				btc: 30,
				ltc: 47,
        }, {
				period: '2016',
				btc: 150,
				ltc: 40,
        }, {
				period: '2017',
				btc: 25,
				ltc: 80,
        }, {
				period: '2018',
				btc: 10,
				ltc: 10,
        }


        ],
		xkey: 'period',
		grid: false,
		ykeys: [ 'btc', 'ltc'],
		labels: [ 'BTC', 'LTC'],
		pointSize: 3,
		fillOpacity: 0,
		pointStrokeColors: [ '#f7931a', '#838383'],
		behaveLikeLine: true,
		gridLineColor: '#e0e0e0',
		lineWidth: 3,
		hideHover: 'auto',
		lineColors: [ '#f7931a', '#838383'],
		resize: true

	} );

	// Morris Area chart

	Morris.Area( {
		element: 'morris-area-chart3',
		data: [ {
				period: '2012',
				btc: 0,
				ltc: 0,
				neo: 0
        }, {
				period: '2013',
				btc: 90,
				ltc: 60,
				neo: 25
        }, {
				period: '2014',
				btc: 40,
				ltc: 80,
				neo: 35
        }, {
				period: '2015',
				btc: 30,
				ltc: 47,
				neo: 17
        }, {
				period: '2016',
				btc: 150,
				ltc: 40,
				neo: 120
        }, {
				period: '2017',
				btc: 25,
				ltc: 80,
				neo: 40
        }, {
				period: '2018',
				btc: 10,
				ltc: 10,
				neo: 10
        }


        ],
		xkey: 'period',
		grid: false,
		ykeys: [ 'btc', 'ltc', 'neo' ],
		labels: [ 'BTC', 'LTC', 'NEO' ],
		pointSize: 3,
		fillOpacity: 0,
		pointStrokeColors: [ '#f7931a', '#838383', '#58bf00' ],
		behaveLikeLine: true,
		gridLineColor: '#e0e0e0',
		lineWidth: 3,
		hideHover: 'auto',
		lineColors: [ '#f7931a', '#838383', '#58bf00' ],
		resize: true

	} );

// Morris Area chart

	Morris.Area( {
		element: 'morris-area-chart4',
		data: [ {
				period: '2012',
				btc: 0,
				ltc: 0,
				neo: 0,
				dash:0
        }, {
				period: '2013',
				btc: 90,
				ltc: 60,
				neo: 25,
				dash:10
        }, {
				period: '2014',
				btc: 40,
				ltc: 80,
				neo: 35,
				dash:30
        }, {
				period: '2015',
				btc: 30,
				ltc: 47,
				neo: 17,
				dash:80
        }, {
				period: '2016',
				btc: 10,
				ltc: 40,
				neo: 10,
				dash:20
        }, {
				period: '2017',
				btc: 25,
				ltc: 80,
				neo: 40,
				dash:150
        }, {
				period: '2018',
				btc: 10,
				ltc: 10,
				neo: 10,
				dash:90
        }


        ],
		xkey: 'period',
		grid: false,
		ykeys: [ 'btc', 'ltc', 'neo', 'dash' ],
		labels: [ 'BTC', 'LTC', 'NEO', 'DASH' ],
		pointSize: 3,
		fillOpacity: 0,
		pointStrokeColors: [ '#f7931a', '#838383', '#58bf00', '#1c75bc' ],
		behaveLikeLine: true,
		gridLineColor: '#e0e0e0',
		lineWidth: 3,
		hideHover: 'auto',
		lineColors: [ '#f7931a', '#838383', '#58bf00', '#1c75bc' ],
		resize: true

	} );

// Morris Area chart

	Morris.Area( {
		element: 'morris-area-chart5',
		data: [ {
				period: '2012',
				btc: 0,
				ltc: 0,
				neo: 0,
				dash:0,
				eth:0
        }, {
				period: '2013',
				btc: 90,
				ltc: 60,
				neo: 25,
				dash:10,
				eth:35
        }, {
				period: '2014',
				btc: 40,
				ltc: 80,
				neo: 35,
				dash:30,
				eth:65
        }, {
				period: '2015',
				btc: 30,
				ltc: 47,
				neo: 17,
				dash:80,
				eth:25
        }, {
				period: '2016',
				btc: 10,
				ltc: 40,
				neo: 10,
				dash:20,
				eth:95
        }, {
				period: '2017',
				btc: 25,
				ltc: 80,
				neo: 40,
				dash:150,
				eth:125
        }, {
				period: '2018',
				btc: 10,
				ltc: 10,
				neo: 10,
				dash:90,
				eth:5
        }


        ],
		xkey: 'period',
		grid: false,
		ykeys: [ 'btc', 'ltc', 'neo', 'dash', 'eth' ],
		labels: [ 'BTC', 'LTC', 'NEO', 'DASH', 'ETH' ],
		pointSize: 3,
		fillOpacity: 0,
		pointStrokeColors: [ '#f7931a', '#838383', '#58bf00', '#1c75bc', '#282828' ],
		behaveLikeLine: true,
		gridLineColor: '#e0e0e0',
		lineWidth: 3,
		hideHover: 'auto',
		lineColors: [ '#f7931a', '#838383', '#58bf00', '#1c75bc', '#282828' ],
		resize: true

	} );

// Morris Area chart

	Morris.Area( {
		element: 'morris-area-chart6',
		data: [ {
				period: '2012',
				btc: 0,
				ltc: 0,
				neo: 0,
				dash:0,
				eth:0,
				xrp:7
        }, {
				period: '2013',
				btc: 90,
				ltc: 60,
				neo: 25,
				dash:10,
				eth:35,
				xrp:47
        }, {
				period: '2014',
				btc: 40,
				ltc: 80,
				neo: 35,
				dash:30,
				eth:65,
				xrp:77
        }, {
				period: '2015',
				btc: 30,
				ltc: 47,
				neo: 17,
				dash:80,
				eth:25,
				xrp:17
        }, {
				period: '2016',
				btc: 10,
				ltc: 40,
				neo: 10,
				dash:20,
				eth:95,
				xrp:87
        }, {
				period: '2017',
				btc: 25,
				ltc: 80,
				neo: 40,
				dash:150,
				eth:125,
				xrp:37
        }, {
				period: '2018',
				btc: 10,
				ltc: 10,
				neo: 10,
				dash:90,
				eth:5,
				xrp:127
        }


        ],
		xkey: 'period',
		grid: false,
		ykeys: [ 'btc', 'ltc', 'neo', 'dash', 'eth', 'xrp' ],
		labels: [ 'BTC', 'LTC', 'NEO', 'DASH', 'ETH', 'XRP' ],
		pointSize: 3,
		fillOpacity: 0,
		pointStrokeColors: [ '#f7931a', '#838383', '#58bf00', '#1c75bc', '#282828', '#346aa9' ],
		behaveLikeLine: true,
		gridLineColor: '#e0e0e0',
		lineWidth: 3,
		hideHover: 'auto',
		lineColors: [ '#f7931a', '#838383', '#58bf00', '#1c75bc', '#282828', '#346aa9' ],
		resize: true

	} );


} );
