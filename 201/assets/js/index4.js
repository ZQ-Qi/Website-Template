$(function(e){
  'use strict'


  /*-----echart2-----*/
  var chartdata2 = [
    {
      name: 'Male',
      type: 'bar',
	  smooth: true,
      data: [12, 25, 12, 35, 12, 38],
	  color:[ '#2ddcd3']
    },
    {
      name: 'Female',
      type: 'bar',
	  smooth: true,
	  size:10,
      data: [8, 12, 28, 10, 10, 12],
	  color:[ '#ffa22b']
    }
  ];

  var chart2 = document.getElementById('echart2');
  var barChart2 = echarts.init(chart2);

  var option2 = {
    grid: {
      top: '6',
      right: '0',
      bottom: '17',
      left: '25',
    },
    xAxis: {
      data: [ '2013','2014', '2015', '2016', '2017', '2018'],
      axisLine: {
        lineStyle: {
          color: 'rgba(227, 237, 252,0.5)'
        }
      },
      axisLabel: {
        fontSize: 10,
        color: 'rgba(146, 163, 185, 0.9)'
      }
    },
	tooltip: {
		show: true,
		showContent: true,
		alwaysShowContent: true,
		triggerOn: 'mousemove',
		trigger: 'axis',
		axisPointer:
			{
				label: {
					show: false,
				}
			}

	},
    yAxis: {
      splitLine: {
        lineStyle: {
          color: 'rgba(227, 237, 252,0.5)'
        }
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(227, 237, 252,0.5)'
        }
      },
      axisLabel: {
        fontSize: 10,
        color: 'rgba(146, 163, 185, 0.9)'
      }
    },
    series: chartdata2
  };
  barChart2.setOption(option2);


});


$(function(e){
  'use strict'

	$(".sparkline_discreet1").sparkline([4, 6, 7, 7, 4, 3, 2, 1, 4, 4, 2, 4, 3, 7, 8], {
		type: 'discrete',
		barWidth: 3,
		lineColor: '#f44336',
		width: '85',
	});
	$(".sparkline_discreet2").sparkline([4, 6, 7, 7, 4, 3, 2, 1, 4, 4, 2, 4, 3, 7, 8], {
		type: 'discrete',
		barWidth: 3,
		lineColor: '#00e682',
		width: '85',
	});
	$(".sparkline_discreet3").sparkline([4, 6, 7, 7, 4, 3, 2, 1, 4, 4, 2, 4, 3, 7, 8], {
		type: 'discrete',
		barWidth: 3,
		lineColor: '#00e682',
		width: '85',
	});
	$(".sparkline_discreet4").sparkline([4, 6, 7, 7, 4, 3, 2, 1, 4, 4, 2, 4, 3, 7, 8], {
		type: 'discrete',
		barWidth: 3,
		lineColor: '#f44336',
		width: '85',
	});

});