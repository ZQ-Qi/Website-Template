//[Dashboard chart Javascript]

//Project:	Crypto Admin - Responsive Admin Template


if( $('#e_chart_1').length > 0 ){
		var eChart_1 = echarts.init(document.getElementById('e_chart_1'));
		var option3 = {
			timeline: {
				data: ['91', '92', '93', '94', '95', '96', '97', '98', '99', '91'],
				axisType: 'category',
				show: false,
				autoPlay: true,
				playInterval: 1000,
			},
			options: [{
				tooltip: {
					trigger: 'axis',
					backgroundColor: 'rgba(33,33,33,1)',
					borderRadius:0,
					padding:10,
					textStyle: {
						color: '#ffffff',
						fontStyle: 'normal',
						fontWeight: 'normal',
						fontFamily: "'Montserrat', sans-serif",
						fontSize: 12
					}	
				},
				calculable: true,
				grid: {
					show:false
				},
				xAxis: [{
					'type': 'category',
					axisLabel: {
						textStyle: {
							color: '#878787',
							fontStyle: 'normal',
							fontWeight: 'normal',
							fontFamily: "'Montserrat', sans-serif",
							fontSize: 12
						}
					},
					axisLine: {
						show:false
					},
					splitLine:{
						show:false
					},
					'data': [
						'x1', ' x2', 'x3', 'x4', 'x5', 'x6', 'x7', 'x8'
					]
				}],
				yAxis: [{
					'type': 'value',
					'max': 200,
					axisLine: {
						show:false
					},
					axisLabel: {
						textStyle: {
							color: '#878787',
							fontStyle: 'normal',
							fontWeight: 'normal',
							fontFamily: "'Montserrat', sans-serif",
							fontSize: 12
						}
					},
					splitLine: {
						show: false,
					},
				}, {
					'type': 'value',
					axisLine: {
						show:false
					},
					splitLine: {
						show: false,
					},
					axisLabel: {
						textStyle: {
							color: '#878787',
							fontStyle: 'normal',
							fontWeight: 'normal',
							fontFamily: "'Montserrat', sans-serif",
							fontSize: 12
						}
					},
				}],
				series: [{
					'name': 'tq',
					'yAxisIndex': 1,
					'type': 'line',
					'data': [5, 6, 8, 28, 8, 24, 11, 16],
					itemStyle: {
						normal: {
							color: new echarts.graphic.LinearGradient(
								0, 1, 0, 0, [{
									offset: 0,
									color: '#635bd6'
								}, {
									offset: 1,
									color: '#f742aa'
								}]
							),
							barBorderRadius: 4
						},
						emphasis: {
							color: new echarts.graphic.LinearGradient(
								0, 1, 0, 0, [{
									offset: 0,
									color: '#635bd6'
								}, {
									offset: 1,
									color: '#878787'
								}]
							),
							barBorderRadius: 4
						}
					},
					label: {
						normal: {
							show: true,
							position: 'top',
							formatter: '{c}',
							color: '#878787',
							fontStyle: 'normal',
							fontWeight: 'normal',
							fontFamily: "'Montserrat', sans-serif",
							fontSize: 12
						}
					},
				}]
			}, {
				series: [{
					'data': [45, 43, 64, 134, 188, 43, 109, 12]
				}]
			}, {
				series: [{
					'data': [110, 32, 111, 176, 73, 59, 181, 9]
				}]
			}, {
				series: [{
					'data': [94, 37, 64, 55, 56, 41, 70, 17]
				}]
			}, {
				series: [{
					'data': [5, 6, 5, 28, 8, 24, 11, 16]
				}]
			}, {
				series: [{
					'data': [45, 34, 64, 134, 188, 43, 109, 12]
				}]
			}, {
				series: [{
					'data': [5, 6, 34, 28, 8, 24, 11, 16]
				}]
			}, {
				series: [{
					'data': [94, 37, 64, 55, 56, 41, 70, 17]
				}]
			}, {
				series: [{
					'data': [45, 40, 64, 134, 188, 43, 109, 12]
				}]
			}, {
				series: [{
					'data': [5, 6, 10, 28, 8, 24, 11, 16]
				}]
			}, ]
		};
		eChart_1.setOption(option3);
		eChart_1.resize();
	}

if( $('#e_chart_2').length > 0 ){
		var eChart_2 = echarts.init(document.getElementById('e_chart_2'));
		var option = {
			color: ['#6F88EE', '#21ACE3', '#D071E3', '#F13A2E'],		
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
				},
				textStyle: {
					color: '#fff',
					fontStyle: 'normal',
					fontWeight: 'normal',
					fontFamily: "'Nunito Sans', sans-serif",
					fontSize: 12
				}	
			},
			toolbox: {
				show: true,
				orient: 'vertical',
				left: 'right',
				top: 'center',
				showTitle: false,
				feature: {
					mark: {show: true},
					magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
					restore: {show: true},
				}
			},
			grid: {
				left: '1%',
				right: '9%',
				bottom: '5%',
				containLabel: true
			},
			xAxis : [
				{
					type : 'category',
					data : ['FB','TW','G+','INSTA','IN','BE'],
					axisLine: {
						show:false
					},
					axisLabel: {
						textStyle: {
							color: '#878787'
						}
					},
				}
			],
			yAxis : [
				{
					type : 'value',
					axisLine: {
						show:false
					},
					axisLabel: {
						textStyle: {
							color: '#878787'
						}
					},
					splitLine: {
						show: false,
					}
				}
			],
			series : [
				{
					name:'Active',
					type:'bar',
					data:[485, 545, 412, 512, 398, 474]
				},
				{
					name:'Closed',
					type:'bar',
					stack: 'st1',
					data:[210, 102, 159, 200, 158, 48]
				},
				{
					name:'Hold',
					type:'bar',
					stack: 'st1',
					data:[248, 248, 154, 235, 128, 325]
				},
				{
					name:'Pending',
					type:'bar',
					stack: 'st1',
					data:[154, 125, 254, 189, 245, 342]
				}
			]
		};

		eChart_2.setOption(option);
		eChart_2.resize();
	}


//***************************
       // Stacked Area chart
       //***************************
        var stackedbarcolumnChart = echarts.init(document.getElementById('stacked-column'));
        var option = {
            
             // Setup grid
                grid: {
                    x: 40,
                    x2: 20,
                    y: 80,
                    y2: 25
                },

                // Add tooltip
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // Axis indicator axis trigger effective
                        type : 'shadow'        // The default is a straight line, optionally: 'line' | 'shadow'
                    }
                },

                // Add legend
                legend: {
                    data: [  'Data1', 'Data2', 'Data3', 'Data4', 'Data5', 'Data7']
                },

                // Add custom colors
                color: ['#17b3a3', '#0bb2d4', '#3e8ef7', '#faa700', '#ff4c52'],

                // Enable drag recalculate
                calculable: true,

                // Horizontal axis
                xAxis: [{
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                }],

                // Vertical axis
                yAxis: [{
                    type: 'value',
                }],

                // Add series
                series : [
                    
                    {
                        name:'Data1',
                        type:'bar',
                        stack: 'data1',
                        data:[178, 241, 210, 147, 299, 358, 487]
                    },
                    {
                        name:'Data2',
                        type:'bar',
                        data:[875, 845, 985, 1254, 1425, 1235, 1425],
                        markLine : {
                            itemStyle:{
                                normal:{
                                    lineStyle:{
                                        type: 'dashed'
                                    }
                                }
                            },
                            data : [
                                [{type : 'min'}, {type : 'max'}]
                            ]
                        }
                    },
                    {
                        name:'Data3',
                        type:'bar',
                        barWidth : 12,
                        stack: 'data',
                        data:[654, 758, 754, 854, 1245, 1100, 1140]
                    },
                    {
                        name:'Data4',
                        type:'bar',
                        stack: 'data',
                        data:[104, 134, 125, 158, 245, 236, 278]
                    },
                    {
                        name:'Data5',
                        type:'bar',
                        stack: 'data',
                        data:[54, 123, 147, 85, 165, 158, 123]
                    },
                    {
                        name:'Data6',
                        type:'bar',
                        stack: 'data',
                        data:[21, 84, 79, 86, 135, 158, 210]
                    }
                ]
                // Add series
                
        };
        stackedbarcolumnChart.setOption(option);
	
	
	var o = c3.generate({
        bindto: "#simple-xy",
        size: { height: 350 },
        point: { r: 4 },
        color: { pattern: ["#0bb2d4", "#17b3a3"] },
        data: {
            x: "x",
            columns: [
                ['x', 30, 50, 100, 230, 300, 310],
				['data1', 30, 200, 100, 400, 150, 250],
				['data2', 130, 300, 200, 300, 250, 450]
            ]
        },
        grid: { y: { show: !0 } }
    });
    setTimeout(function() {
        o.load({
            columns: [
                ['data1', 100, 250, 150, 200, 100, 350]
            ]
        })
    }, 1e3), setTimeout(function() {
        o.load({
            columns: [
                ['data3', 80, 150, 100, 180, 80, 150]
            ]
        })
    }, 1500), setTimeout(function() { o.unload({ ids: "data2" }) }, 2e3)
