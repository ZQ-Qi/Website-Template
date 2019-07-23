//[Dashboard Javascript]


$(function () {

  'use strict';
	

			
	$("#linechart").sparkline([1,4,3,7,6,4,8,9,6,8,12], {
		type: 'line',
		width: '100',
		height: '38',
		lineColor: '#D071E3',
		fillColor: '#ffffff',
		lineWidth: 2,
		minSpotColor: '#F13A2E',
		maxSpotColor: '#F13A2E',
	});

	$("#barchart").sparkline([1,4,3,7,6,4,8,9,6,8,12], {
		type: 'bar',
		height: '38',
		barWidth: 6,
		barSpacing: 4,
		barColor: '#6F88EE',
	});
	$("#discretechart").sparkline([1,4,3,7,6,4,8,9,6,8,12], {
		type: 'discrete',
		width: '50',
		height: '38',
		lineColor: '#21ACE3',
	});
	
	$("#baralc").sparkline([32,24,26,24,32,26,40,34,22,24,22,24,34,32,38,28,36,36,40,38,30,34,38], {
			type: 'bar',
			height: '133',
			barWidth: 6,
			barSpacing: 4,
			barColor: '#ff4c52',
		});
	
/*****E-Charts function end*****/	
// table
	$('#invoice-list').DataTable({
	  'paging'      : true,
	  'lengthChange': false,
	  'searching'   : false,
	  'ordering'    : true,
	  'info'        : true,
	  'autoWidth'   : true,
	});	
	

	
if( $('#e_chart_1').length > 0 ){
		var eChart_1 = echarts.init(document.getElementById('e_chart_1'));
		var data = [];

		for (var i = 0; i <= 100; i++) {
			var theta = i / 100 * 30;
			var r = 5 * (1 + Math.sin(theta / 180 * Math.PI));
			data.push([r, theta]);
		}

		var option1 = {
			polar: {},
			tooltip: {
				trigger: 'axis',
				backgroundColor: 'rgba(33,33,33,1)',
				borderRadius:0,
				padding:10,
				axisPointer: {
					type: 'cross',
					label: {
						backgroundColor: 'rgba(33,33,33,1)'
					}
				}
			},
			angleAxis: {
				type: 'value',
				startAngle: 0,
				axisLine: {
					lineStyle: {
						color: 'rgba(33, 33, 33, 0.1)'
					},
					textStyle: {
						color: '#878787',
						fontSize: 12,
						fontFamily: "'Montserrat', sans-serif",
					}
				},
				axisLabel: {
					textStyle: {
						color: '#878787',
						fontSize: 12,
						fontFamily: "'Montserrat', sans-serif",
					}
				},
			},
			radiusAxis: {
				axisLine: {
					lineStyle: {
						color: 'rgba(33, 33, 33, 0.1)'
					}
				},
				axisLabel: {
					textStyle: {
						color: '#878787',
						fontSize: 12,
						fontFamily: "'Montserrat', sans-serif",
					}
				},
			},
			
			series: [{
				coordinateSystem: 'polar',
				name: 'line',
				type: 'line',
				data: data,
				itemStyle: {
					normal: {
						color: '#ff4c52',
					}
				},
			}]
		};
		eChart_1.setOption(option1);
		eChart_1.resize();
	}	
	
if( $('#e_chart_2').length > 0 ){
		var eChart_2 = echarts.init(document.getElementById('e_chart_2'));
		var option3 = {
			  series: [{
				type: 'liquidFill',
				data: [0.5, 0.4],
				radius: '100%',
				shape: 'circle',
				color: ['#0bb2d4','#7231F5'],
				backgroundStyle: {
					borderWidth: 0,
					color: 'rgba(255,255,255,0)',
					shadowBlur: 0
				},
				itemStyle: {
					normal: {
						shadowBlur: 5,
						shadowColor: 'rgba(0, 0, 0, .5)'
					}
				},
				outline: {
					borderDistance: 1,
					itemStyle: {
						borderWidth: 0,
						borderColor: '#fff',
						shadowBlur: 0,
					}
				},
				label: {
					normal: {
						fontSize: 10
					}
				}
			}]
		};
		eChart_2.setOption(option3);
		eChart_2.resize();
	}	
	
//dashboard_daterangepicker
	
	if(0!==$("#dashboard_daterangepicker").length) {
		var n=$("#dashboard_daterangepicker"),
		e=moment(),
		t=moment();
		n.daterangepicker( {
			startDate:e, endDate:t, opens:"left", ranges: {
				Today: [moment(), moment()], Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")], "Last 7 Days": [moment().subtract(6, "days"), moment()], "Last 30 Days": [moment().subtract(29, "days"), moment()], "This Month": [moment().startOf("month"), moment().endOf("month")], "Last Month": [moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month")]
			}
		}
		, a),
		a(e, t, "")
	}
	function a(e, t, a) {
		var r="",
		o="";
		t-e<100||"Today"==a?(r="Today:", o=e.format("MMM D")): "Yesterday"==a?(r="Yesterday:", o=e.format("MMM D")): o=e.format("MMM D")+" - "+t.format("MMM D"), n.find(".subheader_daterange-date").html(o), n.find(".subheader_daterange-title").html(r)
	}
	
	
}); // End of use strict




                


