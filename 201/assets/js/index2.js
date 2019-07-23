$(function(e){
  'use strict'

	/*-----echartArea2-----*/
  var areaData2 = [
    {
      name: 'Sales',
      type: 'line',
      smooth: true,
      data: [12, 65, 33, 45, 45, 78, 19],
	  symbolSize:20,
	   lineStyle: {
			normal: { width: 4 ,

			}
		},

    },
    {
      name: 'Orders',
      type: 'line',
      smooth: true,
      data: [4, 23, 55, 76, 77, 68, 99],
      symbolSize:20,
	   lineStyle: {
			normal: { width: 4 ,

			}
		},
    }
  ];

  var optionArea2 = {
    grid: {
      top: '6',
      right: '12',
      bottom: '17',
      left: '25',
    },
    xAxis: {
      data: [ '2013', '2014', '2015', '2016', '2017', '2018'],
      boundaryGap: false,
      axisLine: {
        lineStyle: { color: '#e3edfc' }
      },
      axisLabel: {
        fontSize: 10,
        color: 'rgba(146, 163, 185, 0.9)',
		display:'false'
      },
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
        lineStyle: { color: '#e3edfc' },
		display:false
      },
      axisLine: {
        lineStyle: { color: '#e3edfc' },
		display:false
      },
      axisLabel: {
        fontSize: 10,
        color: 'rgba(146, 163, 185, 0.9)'
      }
    },
    series: areaData2,
    color:[ '#ffa22b','#2ddcd3']
  };

  var chartArea2 = document.getElementById('echartArea2');
  var areaChart2 = echarts.init(chartArea2);
  areaChart2.setOption(optionArea2);




});

//morris chart
$(function(e){
  'use strict'

	new Morris.Donut({
		  element: 'morrisBar8',
		  data: [
			{value: 15, label: 'Product A'},
			{value: 30, label: 'Product B'},
			{value: 45, label: 'Product C'},
			{value: 20, label: 'Product D'},
		  ],
		  colors: [
		'#00e682', '#2b88ff', '#ff2b88', '#ffa22b'

	  ],
		  formatter: function (x) { return x + "%"}
		}).on('click', function(i, row){
		  console.log(i, row);
	});
});

