//[Dashboard chart Javascript]


if( $('#e_chart_1').length > 0 ){
		var eChart_1 = echarts.init(document.getElementById('e_chart_1'));
		var colors = ['#0bb2d4 ', '#ff4c52', '#0bb2d4', '#ff4c52', '#0bb2d4', '#ff4c52', '#0bb2d4', '#0bb2d4', '#ff4c52', '#0bb2d4', '#0bb2d4', '#0bb2d4', '#ff4c52', '#0bb2d4'];
		var aCategorys = ['', '1', '2', ' 3', '4', '5', '6', '7', '8','9','10'];
		var topdata = [0,96, 96, 97, 95, 98, 94, 89, 94, 80];//å³°å€¼data
		var aSeries = [{
			name: 'abc',
			type: 'line',
			symbol:'circle',
			symbolSize:2,
			itemStyle: {
				normal: {
					color: '#0bb2d4',
					borderColor:"#ffffff",
					borderWidth:2
				}
			},
			lineStyle: {
				normal: {
					opacity: 0
				}
			},
			
			data: ['-',96, 96, 97, 95, 98, 75, 94,90,89,'-']
		}, {
			name: 'def',
			type: 'line',
			symbol:'circle',
			symbolSize:5,
			lineStyle: {
				normal: {
					opacity: 0
				}
			},
			itemStyle: {
				normal: {
					color: '#ff4c52',
					borderColor:"#ffffff",
					borderWidth:2
				}
			},
			
			data: ['-',77, 89, 79, 70, 69, 90, 84,70,69,'-']
		}];
		aCategorys.forEach(function(v, i, a) {
			var name = v;
			if (v !== '') {
				var data = [];
				for (var j = 0; j < aCategorys.length; j++) {
					data.push('-');
				}
				data[i - 1] = 0;
				data[i] = topdata[i];
				data[i + 1] = 0;
				aSeries.push({
					name: name,
					type: 'pictorialBar',
					smooth: false,
					legendHoverLink:false,
					symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
					barCategoryGap: '-130%',
					label:{
						normal:{
							show:false
						},
						emphasis:{
							show:false
						}
					},
					areaStyle: {
						normal: {
							color: {
								type: 'linear',
								x: 0,
								y: 0,
								x2: 0,
								y2: 1,
								colorStops: [{
									offset: 0,
									color: colors[i - 1] // 0% å¤„çš„é¢œè‰²
								}, {
									offset: 1,
									color: colors[i - 1] // 100% å¤„çš„é¢œè‰²
								}],
								globalCoord: false // ç¼ºçœä¸º false
							}
						}
					},
					data: data,
				});
			}
		});
		var option3 = {
			color: colors,
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
					fontFamily: "'Montserrat', sans-serif",
					fontSize: 12
				}	
			},
			
			xAxis: [{
				type: 'category',
				boundaryGap: false,
				data: aCategorys,
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
			}],
			grid: {
				left: '3%',
				right: '4%',
				bottom: '3%',
				top: '2%',
				containLabel: true
			},
			yAxis: [{
				type: 'value',
				boundaryGap: false,
				data: aCategorys,
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
			}],
			series: aSeries
		};
		eChart_1.setOption(option3);
		eChart_1.resize();
	}

if( $('#e_chart_2').length > 0 ){
	var eChart_2 = echarts.init(document.getElementById('e_chart_2'));
	var xData = function(){
    var data = [];
    for(var i=1;i<6;i++){
     data.push(i);   
		}
		return data;
	}();

	var option5 = {
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
				fontFamily: "'Montserrat', sans-serif",
				fontSize: 12
			}	
		},
		"grid": {
			show:false,
			top: '2%',
			bottom: 10,
			containLabel: true,
		}, 
		"legend": {
			"x": "right", 
			"data": [ ]
		}, 
		"calculable": true, 
		"xAxis": [
			{
				type: "category", 
				splitLine: {
					"show": false
				}, 
				axisLine: {
					show:false
				},
				axisLabel: {
					textStyle: {
						color: '#878787'
					}
				},
				axisTick: {
					"show": false
				}, 
				splitArea: {
					"show": false
				}, 
				data: xData,
			}
		], 
		"yAxis": [
			{
				type: "value", 
				splitLine: {
					"show": false
				}, 
				axisLine: {
					show:false
				},
				axisLabel: {
					textStyle: {
						color: '#878787'
					}
				},
				axisTick: {
					"show": false
				}, 
				splitArea: {
					"show": false
				}
			}
		], 
		"series": [
			{
				"name": "male", 
				"type": "bar", 
				"stack": "split", 
				"barMaxWidth": 50, 
				"barGap": "10%", 
				"itemStyle": {
					"normal": {
						"barBorderRadius": 0, 
						"color": '#0bb2d4', 
						"label": {
							"show": true, 
							"textStyle": {
								"color": "#fff"
							}, 
							"position": "insideTop",
							formatter : function(p) {
								return p.value > 0 ? (p.value ): '';
							}
						}
					}
				}, 
				"data": [
					370, 
					241, 
					755, 
					555, 
					260, 
				], 
			}, 
			{
				"name": "female", 
				"type": "bar", 
				"stack": "split", 
				"itemStyle": {
					"normal": {
						"color": '#ff4c52', 
						"barBorderRadius": 0, 
						"label": {
							"show": true, 
							"position": "top",
							formatter : function(p) {
								return p.value > 0 ? ('â–¼'
										+ p.value + '')
										: '';
							}
						}
					}
				}, 
				"data": [
					386, 
					20, 
					122, 
					261, 
					171, 
				]
			}, 
		]
	}
	eChart_2.setOption(option5);
	eChart_2.resize();
	}	


	
//------------echarts3
	if( $('#e_chart_3').length > 0 ){
		var eChart_2 = echarts.init(document.getElementById('e_chart_3'));
		var option1 = {
			xAxis: {
				type: 'category',
				boundaryGap: false,
				data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
				axisLine: {
					show:false
				},
				axisLabel: {
					textStyle: {
						color: '#878787',
						fontStyle: 'normal',
						fontWeight: 'normal',
						fontFamily: "'Open Sans', sans-serif",
						fontSize: 12
					}
				},
				splitLine: {
					show: false,
				},
			},
			yAxis: {
				type: 'value',
				axisLine: {
						show:false
				},
				axisLabel: {
					textStyle: {
						color: '#878787',
						fontStyle: 'normal',
						fontWeight: 'normal',
						fontFamily: "'Open Sans', sans-serif",
						fontSize: 12
					}
				},
				splitLine: {
					show: false,
				},
				boundaryGap: [0, '100%']
			},
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
					fontFamily: "'Open Sans', sans-serif",
					fontSize: 12
				}	
			},
			series: [
					{
						name:'Step Start',
						type:'line',
						step: 'start',
						itemStyle: {
							normal: {
								color: '#21ACE3'
							}
						},
						data:[120, 132, 101, 134, 90, 230, 210]
					},
					{
						name:'Step Middle',
						type:'line',
						step: 'middle',
						itemStyle: {
							normal: {
								color: '#0bb2d4'
							}
						},
						data:[220, 282, 201, 234, 290, 430, 410]
					}
			]
		};
		eChart_2.setOption(option1);
		eChart_2.resize();
	}

	
//------------echarts4
	if( $('#e_chart_4').length > 0 ){
		var eChart_4 = echarts.init(document.getElementById('e_chart_4'));
		var data = [];
		for (var i = 0; i <= 10; i++) {
			var theta = i / 100 * 360;
			var r = 5 * (1 + Math.sin(theta / 180 * Math.PI));
			data.push([r, theta]);
		}
		var option4 = {
			polar: {},
			tooltip: {
				trigger: 'axis',
				backgroundColor: 'rgba(33,33,33,1)',
				borderRadius:0,
				padding:10,
				textStyle: {
					color: '#fff',
					fontStyle: 'normal',
					fontWeight: 'normal',
					fontFamily: "'Roboto', sans-serif",
					fontSize: 12
				}	
			},
			angleAxis: {
				type: 'value',
				startAngle: 0,
				axisLine: {
					lineStyle: {
						color: 'rgba(33, 33, 33, 0.1)'
					}
				},
				axisLabel: {
					textStyle: {
						color: '#878787',
						fontSize: 12,
						fontFamily: "'Roboto', sans-serif",
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
						fontFamily: "'Roboto', sans-serif",
					}
				},
			},
			series: [{
				coordinateSystem: 'polar',
				name: 'line',
				type: 'line',
				lineStyle: {
					normal: {
						color: '#667add',
					}
				},
				itemStyle: {
					normal: {
						color: '#667add',
					}
				},
				 areaStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						   offset: 0,
						   color: '#667add'
						   }, {
						   offset: 1,
						   color: '#1F9DCE'
						}])
					}
					},
				
				data: data
			}]
		};
		eChart_4.setOption(option4);
		eChart_4.resize();
	}

	
//------------echarts5	
	
	if( $('#e_chart_5').length > 0 ){
		var eChart_2 = echarts.init(document.getElementById('e_chart_5'));
		var option1 = {
			animation: false,
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
					fontFamily: "'Roboto', sans-serif",
					fontSize: 12
				}	
			},
			color: ['#667add'],	
			grid: {
				top: 60,
				left:40,
				bottom: 30
			},
			xAxis: {
				type: 'value',
				position: 'top',
				axisLine: {
					show:false
				},
				axisLabel: {
					textStyle: {
						color: '#878787'
					}
				},
				splitLine: {
					show:false
				},
			},
			yAxis: {
				splitNumber: 25,
				type: 'category',
				axisLine: {
					show:false
				},
				axisLabel: {
					textStyle: {
						color: '#878787'
					}
				},
				axisTick: {
					show: true
				},
				splitLine: {
					show:false
				},
				data: ['Oct', 'Sep', 'Aug', 'July', 'June', 'May', 'Apr', 'Mar', 'Feb', 'Jan']
			},
			series: [{
				name: 'emp',
				type: 'bar',
				barGap: '-100%',
				label: {
					normal: {
						textStyle: {
							color: '#7231F5'
						},
						position: 'left',
						show: false,
						formatter: '{b}'
					}
				},
				itemStyle: {
					normal: {
						color: '#F13A2E',
					}
				},
				data: [190, 102, 160, 200, 110, 180, 280, 140, 220, 300]
			}, {
				type: 'line',
				silent: true,
				barGap: '-100%',
				data: [100, 100, 400, 170, 200, 300, 100, 200, 120, 200],
				itemStyle: {
					normal: {
						color: '#0bb2d4',

					}
				},

			}]
		}
		eChart_2.setOption(option1);
		eChart_2.resize();
	}	

