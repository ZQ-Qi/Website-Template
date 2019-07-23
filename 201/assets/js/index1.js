$(function(e){
  'use strict'
  /*-----echart2-----*/

  var chartdata = [

    {
      name: 'Sales',
      type: 'line',
	   smooth:true,
      data: [12, 25, 10, 30, 10, 25, 36, 14, 25, 23, 14, 25],
	  lineStyle: {
        normal: { width: 1 }
      },
      symbolSize:10,
	   lineStyle: {
			normal: { width: 3

			}
		},

    },
    {
      name: 'Profits',
      type: 'bar',
	   smooth:true,
      data: [15, 20, 5, 8, 18, 25, 12, 12, 18, 25, 15, 18, 14, 25, 10],
	  lineStyle: {
        normal: { }
      },
	    itemStyle: {
			normal: {
				width: 1 ,
				barBorderRadius: [3 ,3, 0 ,0],
					color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#2ddcd3'},
                            {offset: 1, color: '#2ddcd3'}
                        ]
                    )
			}
		},
    }
  ];

  var chart = document.getElementById('echart1');
  var barChart = echarts.init(chart);

  var option = {
    grid: {
      top: '6',
      right: '0',
      bottom: '17',
      left: '25',
    },
    xAxis: {
      data: ['2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],
      axisLine: {
        lineStyle: {
          color: 'rgba(227, 237, 252,0.01)'
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
    series: chartdata,
    color:[ '#ffa22b', '#2b88ff']
  };

  barChart.setOption(option);

  });
//sparklinecharts
$(function(e){
  'use strict'

	$(".sparkline11").sparkline([3, 4, 3, 4, 5, 4, 5, 4, 3, 4, 6, 2, 4, 3, 4, 5, 4, 5, 4, 3], {
		type: 'bar',
		width: '241',
		height: '43',
		barWidth: 12,
		colorMap: {
			'7': '#a1a1a1'
		},
		barSpacing: 1,
		barColor: '#00e682'
	});

	$(".sparkline11a").sparkline([3, 4, 3, 4, 5, 4, 5, 4, 3, 4, 6, 2, 4, 3, 4, 5, 4, 5, 4, 3], {
		type: 'bar',
		width: '243',
		height: '43',
		barWidth: 12,
		colorMap: {
			'7': '#a1a1a1'
		},
		barSpacing: 1,
		barColor: '#0f75ff'
	});
	$(".sparkline11b").sparkline([3, 4, 3, 4, 5, 4, 5, 4, 3, 4, 6, 2, 4, 3, 4, 5, 4, 5, 4, 3], {
		type: 'bar',
		width: '243',
		height: '43',
		barWidth: 12,
		colorMap: {
			'7': '#a1a1a1'
		},
		barSpacing: 1,
		barColor: '#2ddcd3'
	});
	$(".sparkline11c").sparkline([3, 4, 3, 4, 5, 4, 5, 4, 3, 4, 6, 2, 4, 3, 4, 5, 4, 5, 4, 3], {
		type: 'bar',
		width: '243',
		height: '43',
		barWidth: 12,
		colorMap: {
			'7': '#a1a1a1'
		},
		barSpacing: 1,
		barColor: '#ffa22b'
	});
});
