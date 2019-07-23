//[widget charts Javascript]

//Project:	Unique Admin - Responsive Admin Template
//Primary use:   Used only for the  widget charts



$( document ).ready(function() {
    "use strict";
	

	if( $('#bubble-chart').length > 0 ){
		var ctx5 = document.getElementById("bubble-chart").getContext("2d");
		var data5 = {
			datasets: [
				{
					label: 'First Dataset',
					data: [
						{
							x: 80,
							y: 60,
							r: 10
						},
						{
							x: 40,
							y: 40,
							r: 10
						},
						{
							x: 30,
							y: 40,
							r: 20
						},
						{
							x: 20,
							y: 10,
							r: 10
						},
						{
							x: 50,
							y: 30,
							r: 10
						}
					],
					backgroundColor:"#3e8ef7",
					hoverBackgroundColor: "#3e8ef7",
				},
				{
					label: 'Second Dataset',
					data: [
						{
							x: 40,
							y: 30,
							r: 10
						},
						{
							x: 25,
							y: 20,
							r: 10
						},
						{
							x: 35,
							y: 30,
							r: 10
						}
					],
					backgroundColor:"#ffd600",
					hoverBackgroundColor: "#ffd600",
				}]
		};
		
		var bubbleChart = new Chart(ctx5,{
			type:"bubble",
			data:data5,
			options: {
				elements: {
					points: {
						borderWidth: 1,
						borderColor: 'rgb(33, 33, 33)'
					}
				},
				scales: {
					xAxes: [
					{
						ticks: {
							min: -10,
							max: 100,
							fontFamily: "Nunito Sans",
							fontColor:"#878787"
						},
						gridLines: {
							color: "rgba(135,135,135,0)",
						}
					}],
					yAxes: [
					{
						ticks: {
							fontFamily: "Nunito Sans",
							fontColor:"#878787"
						},
						gridLines: {
							color: "rgba(135,135,135,0)",
						}
					}]
				},
				animation: {
					duration:	3000
				},
				responsive: true,
				legend: {
					labels: {
					fontFamily: "Nunito Sans",
					fontColor:"#878787"
					}
				},
				tooltip: {
					backgroundColor:'rgba(33,33,33,1)',
					cornerRadius:0,
					footerFontFamily:"'Nunito Sans'"
				}
			}
		});
	}

	if( $('#pie-chart').length > 0 ){
		var ctx6 = document.getElementById("pie-chart").getContext("2d");
		var data6 = {
			 labels: [
			"lab 1",
			"lab 2",
			"lab 3"
		],
		datasets: [
			{
				data: [300, 50, 100],
				backgroundColor: [
					"#17b3a3",
					"#ffd600",
					"#3e8ef7"
				],
				hoverBackgroundColor: [
					"#17b3a3",
					"#ffd600",
					"#3e8ef7"
				]
			}]
		};
		
		var pieChart  = new Chart(ctx6,{
			type: 'pie',
			data: data6,
			options: {
				animation: {
					duration:	3000
				},
				responsive: true,
				legend: {
					labels: {
					fontFamily: "Nunito Sans",
					fontColor:"#878787"
					}
				},
				tooltip: {
					backgroundColor:'rgba(33,33,33,1)',
					cornerRadius:0,
					footerFontFamily:"'Nunito Sans'"
				},
				elements: {
					arc: {
						borderWidth: 0
					}
				}
			}
		});
	}

	if( $('#doughnut-chart').length > 0 ){
		var ctx7 = document.getElementById("doughnut-chart").getContext("2d");
		var data7 = {
			 labels: [
			"lab 1",
			"lab 2",
			"lab 3"
		],
		datasets: [
			{
				data: [300, 50, 100],
				backgroundColor: [
					"#ff4c52",
					"#0bb2d4",
					"#17b3a3"
				],
				hoverBackgroundColor: [
					"#ff4c52",
					"#0bb2d4",
					"#17b3a3"
				]
			}]
		};
		
		var doughnutChart = new Chart(ctx7, {
			type: 'doughnut',
			data: data7,
			options: {
				animation: {
					duration:	3000
				},
				responsive: true,
				legend: {
					labels: {
					fontFamily: "Nunito Sans",
					fontColor:"#878787"
					}
				},
				tooltip: {
					backgroundColor:'rgba(33,33,33,1)',
					cornerRadius:0,
					footerFontFamily:"'Nunito Sans'"
				},
				elements: {
					arc: {
						borderWidth: 0
					}
				}
			}
		});
	}
	
	// Bar chart
	new Chart(document.getElementById("bar-chart1"), {
		type: 'bar',
		data: {
		  labels: ["January", "February", "March", "April", "May"],
		  datasets: [
			{
			  label: "Dataset",
			  backgroundColor: ["#17b3a3", "#ff4c52","#0bb2d4","#3e8ef7","#ffd600"],
			  data: [8545,6589,5894,4985,1548]
			}
		  ]
		},
		options: {
		  legend: { display: false },
		  title: {
			display: true,
			text: 'My dataset'
		  }
		}
	});
	
	if( $('#bar-chart2').length > 0 ){
		var ctx2 = document.getElementById("bar-chart2").getContext("2d");
		var data2 = {
			labels: ["January", "February", "March", "April", "May", "June", "July"],
			datasets: [
				{
					label: "My First dataset",
					backgroundColor: "#17b3a3",
					borderColor: "#17b3a3",
					data: [15, 20, 70, 51, 36, 85, 50]
				},
				{
					label: "My Second dataset",
					backgroundColor: "#ff4c52",
					borderColor: "#ff4c52",
					data: [28, 48, 40, 19, 86, 27, 90]
				},
				{
					label: "My Third dataset",
					backgroundColor: "#0bb2d4",
					borderColor: "#0bb2d4",
					data: [8, 28, 50, 29, 76, 77, 40]
				}
			]
		};
		
		var hBar = new Chart(ctx2, {
			type:"bar",
			data:data2,
			
			options: {
				tooltips: {
					mode:"label"
				},
				scales: {
					yAxes: [{
						stacked: true,
						gridLines: {
							color: "rgba(135,135,135,0)",
						},
						ticks: {
							fontFamily: "Nunito Sans",
							fontColor:"#878787"
						}
					}],
					xAxes: [{
						stacked: true,
						gridLines: {
							color: "rgba(135,135,135,0)",
						},
						ticks: {
							fontFamily: "Nunito Sans",
							fontColor:"#878787"
						}
					}],
					
				},
				elements:{
					point: {
						hitRadius:40
					}
				},
				animation: {
					duration:	3000
				},
				responsive: true,
				maintainAspectRatio:false,
				legend: {
					display: false,
				},
				
				tooltip: {
					backgroundColor:'rgba(33,33,33,1)',
					cornerRadius:0,
					footerFontFamily:"'Nunito Sans'"
				}
				
			}
		});
	};


	// Horizental Bar Chart
	new Chart(document.getElementById("bar-chart-horizontal1"), {
		type: 'horizontalBar',
		data: {
		  labels: ["January", "February", "March", "April", "May"],
		  datasets: [
			{
			  label: "Dataset",
			  backgroundColor: ["#17b3a3", "#ff4c52","#0bb2d4","#3e8ef7","#ffd600"],
			  data: [8545,6589,5894,4985,1548]
			}
		  ]
		},
		options: {
		  legend: { display: false },
		  title: {
			display: true,
			text: 'My dataset'
		  }
		}
	});
	
	if( $('#bar-chart-horizontal2').length > 0 ){
		var ctx2 = document.getElementById("bar-chart-horizontal2").getContext("2d");
		var data2 = {
			labels: ["January", "February", "March", "April", "May", "June", "July"],
			datasets: [
				{
					label: "My First dataset",
					backgroundColor: "#3e8ef7",
					borderColor: "#3e8ef7",
					data: [10, 59, 40, 75, 50, 45, 80]
				},
				{
					label: "My Second dataset",
					backgroundColor: "#ff4c52",
					borderColor: "#ff4c52",
					data: [48, 88, 50, 58, 34, 67, 65]
				}
			]
		};
		
		var hBar = new Chart(ctx2, {
			type:"horizontalBar",
			data:data2,
			
			options: {
				tooltips: {
					mode:"label"
				},
				scales: {
					yAxes: [{
						stacked: true,
						gridLines: {
							color: "rgba(135,135,135,0)",
						},
						ticks: {
							fontFamily: "Nunito Sans",
							fontColor:"#878787"
						}
					}],
					xAxes: [{
						stacked: true,
						gridLines: {
							color: "rgba(135,135,135,0)",
						},
						ticks: {
							fontFamily: "Nunito Sans",
							fontColor:"#878787"
						}
					}],
					
				},
				elements:{
					point: {
						hitRadius:40
					}
				},
				animation: {
					duration:	3000
				},
				responsive: true,
				legend: {
					display: false,
				},
				tooltip: {
					backgroundColor:'rgba(33,33,33,1)',
					cornerRadius:0,
					footerFontFamily:"'Nunito Sans'"
				}
				
			}
		});
	}

	//Polar Chart
	new Chart(document.getElementById("polar-chart1"), {
		type: 'polarArea',
		data: {
		  labels: ["January", "February", "March", "April"],
		  datasets: [
			{
			  label: "Dataset",
			  backgroundColor: ["#0bb2d4", "#17b3a3","#3e8ef7","#ffd600","#ff4c52"],
			  data: [2584,5698,5987,3485]
			}
		  ]
		},
		options: {
		  title: {
			display: true,
			text: 'Mt Dataset'
		  }
		}
	});

	if( $('#polar-chart2').length > 0 ){
		var ctx4 = document.getElementById("polar-chart2").getContext("2d");
		var data4 = {
			datasets: [{
				data: [
					11,
					16,
					7,
					3,
					14
				],
				backgroundColor: [
					"#17b3a3",
					"#ffd600",
					"#3e8ef7",
					"#ff4c52",
					"#0bb2d4"
				],
				hoverBackgroundColor: [
					"#17b3a3",
					"#ffd600",
					"#3e8ef7",
					"#ff4c52",
					"#0bb2d4"
				],
				label: 'My dataset' // for legend
			}],
			labels: [
				"lab 1",
				"lab 2",
				"lab 3",
				"lab 4",
				"lab 5"
			]
		};
		var polarChart = new Chart(ctx4, {
			type: "polarArea",
			data: data4,
			options: {
				elements: {
					arc: {
						borderColor: "#fff",
						borderWidth: 0
					}
				},
				scale: {
					ticks: {
						beginAtZero: true,
						fontFamily: "Nunito Sans",
						
					},
					gridLines: {
						color: "rgba(135,135,135,0)",
					}
				},
				animation: {
					duration:	3000
				},
				responsive: true,
				legend: {
					labels: {
					fontFamily: "Nunito Sans",
					fontColor:"#878787"
					}
				},
				tooltip: {
					backgroundColor:'rgba(33,33,33,1)',
					cornerRadius:0,
					footerFontFamily:"'Nunito Sans'"
				}
			}
		});
	}

	//Radar chart
	new Chart(document.getElementById("radar-chart1"), {
		type: 'radar',
		data: {
		  labels: ["January", "February", "March", "April", "May"],
		  datasets: [
			{
			  label: "250",
			  fill: true,
			  backgroundColor: "rgba(179,181,198,0.2)",
			  borderColor: "rgba(179,181,198,1)",
			  pointBorderColor: "#fff",
			  pointBackgroundColor: "rgba(179,181,198,1)",
			  data: [8.77,55.61,21.69,6.62,6.82]
			}, {
			  label: "4050",
			  fill: true,
			  backgroundColor: "rgba(239, 72, 62, 0.2)",
			  borderColor: "rgba(239, 72, 62, 1)",
			  pointBorderColor: "#fff",
			  pointBackgroundColor: "#ff4c52",
			  pointBorderColor: "#fff",
			  data: [25.48,54.16,7.61,8.06,4.45]
			}
		  ]
		},
		options: {
		  title: {
			display: true,
			text: 'My dataset'
		  }
		}
	});

	if( $('#radar-chart2').length > 0 ){
		var ctx3 = document.getElementById("radar-chart2").getContext("2d");
		var data3 = {
			labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
			datasets: [
				{
					label: "My First dataset",
					backgroundColor: "rgba(116, 96, 238, 0.6)",
					borderColor: "rgba(116, 96, 238, 0.6)",
					pointBackgroundColor: "rgba(116, 96, 238, 0.6)",
					pointBorderColor: "#fff",
					pointHoverBackgroundColor: "#fff",
					pointHoverBorderColor: "rgba(116, 96, 238, 0.6)",
					data: [65, 59, 90, 81, 56, 55, 40]
				},
				{
					label: "My Second dataset",
					backgroundColor: "rgba(57, 139, 247, 1)",
					borderColor: "rgba(57, 139, 247, 1)",
					pointBackgroundColor: "rgba(57, 139, 247, 1)",
					pointBorderColor: "#fff",
					pointHoverBackgroundColor: "#fff",
					pointHoverBorderColor: "rgba(57, 139, 247, 1)",
					data: [28, 48, 40, 19, 96, 27, 100]
				}
			]
		};
		var radarChart = new Chart(ctx3, {
			type: "radar",
			data: data3,
			options: {
					scale: {
						ticks: {
							beginAtZero: true,
							fontFamily: "Nunito Sans",
							
						},
						gridLines: {
							color: "rgba(135,135,135,0)",
						},
						pointLabels:{
							fontFamily: "Nunito Sans",
							fontColor:"#878787"
						},
					},
					
					animation: {
						duration:	3000
					},
					responsive: true,
					legend: {
							labels: {
							fontFamily: "Nunito Sans",
							fontColor:"#878787"
							}
						},
						elements: {
							arc: {
								borderWidth: 0
							}
						},
						tooltip: {
						backgroundColor:'rgba(33,33,33,1)',
						cornerRadius:0,
						footerFontFamily:"'Nunito Sans'"
					}
			}
		});
	}
	//Line Chart
	
	new Chart(document.getElementById("line-chart1"), {
	  type: 'line',
	  data: {
		labels: [4500,3500,3200,3050,2700,2450,2200,1750,1499,2050],
		datasets: [{ 
			data: [86,114,106,106,107,111,133,221,783,2478],
			label: "January",
			borderColor: "#0bb2d4",
			fill: false
		  }, { 
			data: [282,350,411,502,635,809,947,1402,3700,5267],
			label: "February",
			borderColor: "#17b3a3",
			fill: false
		  }, { 
			data: [168,170,178,190,203,276,408,547,675,734],
			label: "March",
			borderColor: "#3e8ef7",
			fill: false
		  }, { 
			data: [40,20,10,16,24,38,74,167,508,784],
			label: "April",
			borderColor: "#ffd600",
			fill: false
		  }, { 
			data: [6,3,2,2,7,26,82,172,312,433],
			label: "May",
			borderColor: "#ff4c52",
			fill: false
		  }
		]
	  },
	  options: {
		title: {
		  display: true,
		  text: 'My Dateset'
		}
	  }
	});
	
	if( $('#line-chart2').length > 0 ){
		var ctx1 = document.getElementById("line-chart2").getContext("2d");
		var data1 = {
			labels: ["January", "February", "March", "April", "May", "June", "July"],
			datasets: [
			{
				label: "fir",
				backgroundColor: "#ffd600",
				borderColor: "#ffd600",
				pointBorderColor: "#ffd600",
				pointHighlightStroke: "#ffd600",
				data: [0, 59, 40, 75, 50, 45, 80]
			},
			{
				label: "sec",
				backgroundColor: "#17b3a3",
				borderColor: "#17b3a3",
				pointBorderColor: "#17b3a3",
				pointBackgroundColor: "#17b3a3",
				data: [48, 88, 50, 58, 34, 67, 65],
			}
			
		]
		};
		
		var areaChart = new Chart(ctx1, {
			type:"line",
			data:data1,
			
			options: {
				tooltips: {
					mode:"label"
				},
				elements:{
					point: {
						hitRadius:90
					}
				},
				
				scales: {
					yAxes: [{
						stacked: true,
						gridLines: {
							color: "rgba(135,135,135,0)",
						},
						ticks: {
							fontFamily: "Nunito Sans",
							fontColor:"#878787"
						}
					}],
					xAxes: [{
						stacked: true,
						gridLines: {
							color: "rgba(135,135,135,0)",
						},
						ticks: {
							fontFamily: "Nunito Sans",
							fontColor:"#878787"
						}
					}]
				},
				animation: {
					duration:	3000
				},
				responsive: true,
				legend: {
					display: false,
				},
				tooltip: {
					backgroundColor:'rgba(33,33,33,1)',
					cornerRadius:0,
					footerFontFamily:"'Nunito Sans'"
				}
				
			}
		});
	}

	
}); // End of use strict
