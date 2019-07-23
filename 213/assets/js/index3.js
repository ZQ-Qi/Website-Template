$(function() {
    "use strict";

// chart 1

var ctx = document.getElementById("dashboard3-chart-1").getContext('2d');

      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: [1, 2, 3, 4, 5, 6, 7, 8],
          datasets: [{
            label: 'New Orders',
            data: [40, 30, 60, 35, 60, 25, 50, 40],
            borderColor: '#11cdef',
            backgroundColor: '#11cdef',
            hoverBackgroundColor: '#11cdef',
            pointRadius: 0,
            fill: false,
            borderWidth: 1
          }, {
            label: 'Pending',
            data: [50, 60, 40, 70, 35, 75, 30, 20],
            borderColor: '#e8e8e8',
            backgroundColor: '#e8e8e8',
            hoverBackgroundColor: '#e8e8e8',
            pointRadius: 0,
            fill: false,
            borderWidth: 1
          }]
        },
    options:{
      legend: {
        position: 'bottom',
              display: true,
        labels: {
                boxWidth:12,
				fontColor: '#ddd'
              }
            },  
      scales: {
        xAxes: [{
        stacked: true,
        barPercentage: .5,
		  ticks: {
                    beginAtZero:true,
                    fontColor: '#ddd'
                },
				gridLines: {
				  display: true ,
				  color: "rgba(221, 221, 221, 0.08)"
				},
        }],
          yAxes: [{ 
            stacked: true,
			ticks: {
                    beginAtZero:true,
                    fontColor: '#ddd'
                },
				gridLines: {
				  display: true ,
				  color: "rgba(221, 221, 221, 0.08)"
				},
             }]
         },
      tooltips: {
        displayColors:false,
      }
    }
      });



// chart 2

 var ctx = document.getElementById("dashboard3-chart-2").getContext('2d');

      var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ["Jeans", "T-Shirts", "Shoes", "Lingerie", "Laptops", "Mobiles"],
          datasets: [{
            backgroundColor: [
              '#5e72e4',
              '#ff2fa0',
              '#2dce89',
              '#f5365c',
              '#fb6340',
              '#11cdef'
            ],
            hoverBackgroundColor: [
              '#5e72e4',
              '#ff2fa0',
              '#2dce89',
              '#f5365c',
              '#fb6340',
              '#11cdef'
            ],
            data: [25, 50, 25, 25, 15, 10],
      borderWidth: [1, 1, 1, 1, 1, 1]
          }]
        },
        options: {
      cutoutPercentage: 25,
            legend: {
        position: 'right',
              display: true,
        labels: {
                boxWidth:12,
				fontColor: '#ddd'
              }
            },
      tooltips: {
        displayColors:false,
      }
        }
      });

	
// chart 3

       var ctx = document.getElementById('dashboard3-chart-3').getContext('2d');
	   
	    var gradientStroke1 = ctx.createLinearGradient(0, 0, 0, 300);
          gradientStroke1.addColorStop(0, 'rgba(37, 117, 252, 0.9)');
          gradientStroke1.addColorStop(1, 'rgba(106, 17, 203, 0.5)');
      
       var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
          datasets: [{
            label: 'Sales Report',
            data: [6, 4, 6, 5, 12, 8, 12, 15, 6, 8, 6, 12, 20, 10, 15, 8, 16, 10, 15, 6, 5, 12, 8, 10, 17, 6, 7, 6, 10, 0],
            backgroundColor: gradientStroke1,
            borderColor: gradientStroke1,
            pointBackgroundColor:'#fff',
            pointHoverBackgroundColor:gradientStroke1,
            pointBorderColor :gradientStroke1,
            pointHoverBorderColor :gradientStroke1,
            pointBorderWidth :2,
            pointRadius :4,
            pointHoverRadius :4,
            lineTension :'0',
            borderWidth: 3
          }]
        },
        options: {
            legend: {
        position: false,
              display: true,
            },
			scales: {
			  xAxes: [{
				ticks: {
                    beginAtZero:true,
                    fontColor: '#ddd'
                },
				gridLines: {
				  display: true ,
				  color: "rgba(221, 221, 221, 0.08)"
				},
			  }],
			   yAxes: [{
				ticks: {
                    beginAtZero:true,
                    fontColor: '#ddd'
                },
				gridLines: {
				  display: true ,
				  color: "rgba(221, 221, 221, 0.08)"
				},
			  }]
		     },
           tooltips: {
              displayColors:false,
             }
        }
      });

   
 //donut

    $("span.donut").peity("donut",{
          width: 120,
          height: 120 
      });







   });	 
   