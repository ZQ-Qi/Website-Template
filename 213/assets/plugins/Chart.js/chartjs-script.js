
(function(window, document, $, undefined) {
	  "use strict";
	$(function() {


	   if ($('#lineChart').length) {
		   var ctx = document.getElementById('AreaChart').getContext('2d');
		   
		   var gradientStroke1 = ctx.createLinearGradient(0, 0, 0, 300);
            gradientStroke1.addColorStop(0, '#4facfe');
            gradientStroke1.addColorStop(1, '#00f2fe');
		   
		   var myChart = new Chart(ctx, {
				type: 'line',
				data: {
					labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
					datasets: [{
						label: 'Revenue',
						data: [10, 8, 6, 5, 12, 8, 16, 17, 6, 7, 6, 10, 0],
						backgroundColor: 'rgba(94, 114, 228, 0.3)',
						borderColor: '#5e72e4',
						borderWidth: 3
					}]
				}
			});
		}

		if ($('#lineChart').length) {
			var ctx = document.getElementById('lineChart').getContext('2d');
			var myChart = new Chart(ctx, {
				type: 'line',
				data: {
					labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
					datasets: [{
						label: 'Google',
						data: [0, 30, 60, 25, 60, 25, 50, 0],
						backgroundColor: "transparent",
						borderColor: "#2dce89",
						borderWidth: 3
						
					}, {
						label: 'Facebook',
						data: [0, 60, 25, 80, 35, 75, 30, 0],
						backgroundColor: "transparent",
						borderColor: "#ff2fa0",
						borderWidth: 3

					}]
				}
			});
		}


		if ($('#barChart').length) {
			var ctx = document.getElementById("barChart").getContext('2d');
			var myChart = new Chart(ctx, {
				type: 'bar',
				data: {
					labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
					datasets: [{
						label: 'Samsung',
						data: [12, 19, 3, 5, 10, 5, 13, 17, 11, 8, 11, 9],
						backgroundColor: "#ff2fa0"
					}, {
						label: 'Nokia',
						data: [10, 11, 7, 5, 9, 13, 10, 16, 7, 8, 12, 5],
						backgroundColor: "#5e72e4"
					}]
				}, options: {
				  scales: {
				    xAxes: [{ 
				    	barPercentage: .7
				    	 }]
				  }
				}
			});
		}

		if ($('#HorizontalbarChart').length) {
			var ctx = document.getElementById("HorizontalbarChart").getContext('2d');
			var myChart = new Chart(ctx, {
				type: 'horizontalBar',
				data: {
					labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
					datasets: [{
						label: 'Google',
						data: [13, 20, 4, 18, 29, 25, 8],
						backgroundColor: "#172b4d"
					}, {
						label: 'Facebook',
						data: [31, 30, 6, 6, 21, 4, 11],
						backgroundColor: "#fb6340"
					}]
				}
			});
		}


		if ($('#StackedbarChart').length) {
			
			var ctx = document.getElementById("StackedbarChart").getContext('2d');
			var myChart = new Chart(ctx, {
				type: 'bar',
				data: {
					labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
					datasets: [{
						label: 'Google',
						data: [65, 59, 80, 81,65, 59, 80, 81,59, 80, 81,65],
						backgroundColor: "#ff2fa0"
					}, {
						label: 'Facebook',
						data: [28, 48, 40, 19,28, 48, 40, 19,40, 19,28, 48],
						backgroundColor: "#2dce89"
					}, {
						label: 'Twitter',
						data: [35, 50, 75, 50, 60, 35, 25, 40, 55, 45, 35, 50],
						backgroundColor: "#5e72e4"
					}]
				}, options: {
				  scales: {
				    xAxes: [{ 
				    	stacked: true,
				    	barPercentage: .3
				    	 }],
				    yAxes: [{ 
				    	stacked: true
				    	 }]
				  }
				}
			});
		}

		if ($('#radarChart').length) {
			var ctx = document.getElementById("radarChart");
			var myChart = new Chart(ctx, {
				type: 'radar',
				data: {
					labels: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
					datasets: [{
						label: 'Twitter',
						backgroundColor: "rgba(17, 205, 239, 0.3)",
						borderColor: "#11cdef",
						data: [13, 20, 4, 18, 29, 25, 8]
					}, {
						label: 'Linkedin',
						backgroundColor: "rgba(94, 114, 228, 0.3)",
						borderColor: "#5e72e4",
						data: [31, 30, 6, 6, 21, 4, 11]
					}]
				},
		        options: {
		            legend: {
					  position: 'bottom',
		              display: true,
					  labels: {
		                boxWidth:40
		              }
		            }
		        }
			});
		}


		if ($('#polarChart').length) {
			var ctx = document.getElementById("polarChart").getContext('2d');
			var myChart = new Chart(ctx, {
				type: 'polarArea',
				data: {
					labels: ["Primary", "Success", "Danger", "Info"],
					datasets: [{
						backgroundColor: [
							"#5e72e4",
							"#2dce89",
							"#f5365c",
							"#11cdef"
						],
						data: [14, 11, 16, 7]
					}]
				},
		        options: {
		            legend: {
					  position: 'bottom',
		              display: true,
					  labels: {
		                boxWidth:40
		              }
		            }
		        }
			});
		}


		if ($('#pieChart').length) {
			var ctx = document.getElementById("pieChart").getContext('2d');
			var myChart = new Chart(ctx, {
				type: 'pie',
				data: {
					labels: ["Primary", "Success", "Info", "Secondary", "Danger", "Dark"],
					datasets: [{
						backgroundColor: [
							"#5e72e4",
							"#2dce89",
							"#11cdef",
							"#ff2fa0",
							"#f5365c",
							"#172b4d"
						],
						data: [12, 19, 3, 5, 2, 3]
					}]
				},
		        options: {
		            legend: {
					  position: 'bottom',
		              display: true,
					  labels: {
		                boxWidth:40
		              }
		            }
		        }
			});
		}


		if ($('#doughnutChart').length) {
			var ctx = document.getElementById("doughnutChart").getContext('2d');
			var myChart = new Chart(ctx, {
				type: 'doughnut',
				data: {
					labels: ["Primary", "Success", "Info", "Secondary", "Danger", "Dark"],
					datasets: [{
						backgroundColor: [
							"#5e72e4",
							"#2dce89",
							"#11cdef",
							"#ff2fa0",
							"#f5365c",
							"#172b4d"
						],
						data: [12, 19, 3, 5, 2, 3]
					}]
				},
		        options: {
		            legend: {
					  position: 'bottom',
		              display: true,
					  labels: {
		                boxWidth:40
		              }
		            }
		        }
			});
		}


	});

})(window, document, window.jQuery);