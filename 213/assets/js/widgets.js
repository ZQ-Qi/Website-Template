
$(function() {
    "use strict";

// chart 1
	
	$('#widget-chart-1').sparkline([5,8,7,10,9,10,8,6,4,6,8,7,6,8,9,10,8,6,4,5,8,7,10,9,5,8,7,9,5,4], {
            type: 'bar',
            height: '35',
            barWidth: '2',
            resize: true,
            barSpacing: '2',
            barColor: '#5e72e4'
        });
		
	// chart 2
	
		$('#widget-chart-2').sparkline([5,8,7,10,9,10,8,6,4,6,8,7,6,8,9,10,8,6,4,5,8,7,10,9,5,8,7,9,5,4], {
            type: 'bar',
            height: '35',
            barWidth: '2',
            resize: true,
            barSpacing: '2',
            barColor: '#2dce89'
        });
		
	// chart 3	
		
		$('#widget-chart-3').sparkline([5,8,7,10,9,10,8,6,4,6,8,7,6,8,9,10,8,6,4,5,8,7,10,9,5,8,7,9,5,4], {
           type: 'bar',
            height: '35',
            barWidth: '2',
            resize: true,
            barSpacing: '2',
            barColor: '#ff2fa0'
        });

		
	// chart 4

 var ctx = document.getElementById('widget-chart-4').getContext('2d');

  var gradientStroke1 = ctx.createLinearGradient(0, 0, 0, 300);
      gradientStroke1.addColorStop(0, '#00b09b');
      gradientStroke1.addColorStop(1, '#96c93d');

      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [{
            label: 'Revenue',
            data: [543, 430, 630, 500, 430, 500, 250],
            pointBorderWidth: 2,
            pointHoverBackgroundColor: gradientStroke1,
            backgroundColor: gradientStroke1,
            borderColor: 'transparent',
            borderWidth: 3
          }]
        },
        options: {
            legend: {
			  position: 'bottom',
              display:false
            },
            tooltips: {
			  displayColors:false,	
              mode: 'nearest',
              intersect: false,
              position: 'nearest',
              xPadding: 10,
              yPadding: 10,
              caretPadding: 10
            }
         }
      });



// chart 5

var ctx = document.getElementById("widget-chart-5").getContext('2d');

  var gradientStroke1 = ctx.createLinearGradient(0, 0, 0, 300);
      gradientStroke1.addColorStop(0, '#ee0979');
      gradientStroke1.addColorStop(1, '#ff6a00');
    
  var gradientStroke2 = ctx.createLinearGradient(0, 0, 0, 300);
      gradientStroke2.addColorStop(0, '#283c86');
      gradientStroke2.addColorStop(1, '#39bd3c');

  var gradientStroke3 = ctx.createLinearGradient(0, 0, 0, 300);
      gradientStroke3.addColorStop(0, '#7f00ff');
      gradientStroke3.addColorStop(1, '#e100ff');

      var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ["Completed", "Pending", "Process"],
          datasets: [{
            backgroundColor: [
              gradientStroke1,
              gradientStroke2,
              gradientStroke3
            ],

             hoverBackgroundColor: [
              gradientStroke1,
              gradientStroke2,
              gradientStroke3
            ],

            data: [50, 50, 50],
      borderWidth: [0, 0, 0]
          }]
        },
        options: {
          cutoutPercentage: 25,
            legend: {
              position: 'bottom',
              display: true,
            labels: {
                boxWidth:8
              }
            },
			tooltips: {
			  displayColors:false,
			},
        }
      });



	  
});		