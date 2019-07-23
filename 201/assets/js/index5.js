( function ( $ ) {
	"use strict";
    var ctx = document.getElementById( "lineChart1" );
    ctx.height = 100;

    var myChart = new Chart( ctx, {
        type: 'line',
        data: {
            labels: ["2012", "2013", "2014", "2015", "2016", "2017", "2018"],
            datasets: [
                {
                    label: "Data1",
                    borderColor: "rgb(45, 220, 211)",
                    borderWidth: "5",
                    backgroundColor: "rgb(45, 220, 211, 0.8)",
                    data:[20, 20, 47, 20, 49, 20, 50]
                            },
                {
                    label: "Data2",
                    borderColor: "rgb(255,162,43)",
                    borderWidth: "5",
                    backgroundColor: "rgba(255,162,43, 0.8)",
                    pointHighlightStroke: "rgba(255,162,43, 1)",
                    data: [26, 46, 30, 71, 20, 35, 20],
                            }
                        ]
        },
        options: {
            responsive: true,
            tooltips: {
                mode: 'index',
                intersect: false,

            },
			tooltips: {

				},
            hover: {
                mode: 'nearest',
                intersect: true
            }

        }
    } );
} )( jQuery );

$(function(e){
  'use strict'
	$(".sparkline12").sparkline([3, 4, 3, 4, 5, 4, 5, 4, 3, 4, 6, 2, 4, 3, 4, 5, 4, 5, 4, 3, 3, 4, 3, 4, 5, 4, 5, 4, 3, 4, 6], {
		type: 'bar',
		width: '270',
		height: '43',
		barWidth: 12,
		colorMap: {
			'7': '#a1a1a1'
		},
		barSpacing: 1,
		barColor: '#00e682'
	});
	$(".sparkline11a").sparkline([3, 4, 3, 4, 5, 4, 5, 4, 3, 4, 6, 2, 4, 3, 4, 5, 4, 5, 4, 3,3, 4, 3, 4, 5, 4, 5, 4, 3, 4, 6], {
		type: 'bar',
		width: '270',
		height: '43',
		barWidth: 12,
		colorMap: {
			'7': '#a1a1a1'
		},
		barSpacing: 1,
		barColor: '#2ddcd3'
	});
	$(".sparkline11b").sparkline([3, 4, 3, 4, 5, 4, 5, 4, 3, 4, 6, 2, 4, 3, 4, 5, 4, 5, 4, 3,3, 4, 3, 4, 5, 4, 5, 4, 3, 4, 6], {
		type: 'bar',
		width: '270',
		height: '43',
		barWidth: 12,
		colorMap: {
			'7': '#a1a1a1'
		},
		barSpacing: 1,
		barColor: '#ffa22b'
	});
});