var color = Chart.helpers.color;
	function createConfig(legendPosition, colorName) {
		return {
			type: 'line',
			data: {
				labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
				datasets: [{
					label: 'My First dataset',
					data: [
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor()
					],
					backgroundColor: color(window.chartColors[colorName]).alpha(0.5).rgbString(),
					borderColor: window.chartColors[colorName],
					borderWidth: 1
				}]
			},
			
			options: {
				responsive: true,
				legend: {
					position: legendPosition,
				},
				
				scales: {
					xAxes: [{
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'Month'
						}
					}],
					yAxes: [{
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'Value'
						}
					}]
				},
				
			}
		};
	}

	window.onload = function() {
		[{
			id: 'chart-legend-top',
			legendPosition: 'top',
			color: 'blue'
		}, {
			id: 'chart-legend-right',
			legendPosition: 'right',
			color: 'purple'
		}, {
			id: 'chart-legend-bottom',
			legendPosition: 'bottom',
			color: 'yellow'
		}, {
			id: 'chart-legend-left',
			legendPosition: 'left',
			color: 'pink'
		}].forEach(function(details) {
			var ctx = document.getElementById(details.id).getContext('2d');
			var config = createConfig(details.legendPosition, details.color);
			new Chart(ctx, config);
		});
	};