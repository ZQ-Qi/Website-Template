$(function() {
    "use strict";


// chart 1

  $('#dashboard4-chart-1').sparkline([5,8,7,10,5,8,7,10,5,8,7,10,5,8,7,10,5,8,7,10], {
            type: 'bar',
            height: '40',
            barWidth: '2',
            resize: true,
            barSpacing: '5',
            barColor: '#fff'
        });


  // chart 2

  $('#dashboard4-chart-2').sparkline([5,8,7,10,5,8,7,10,5,8,7,10,5,8,7,10,5,8,7,10], {
            type: 'bar',
            height: '40',
            barWidth: '2',
            resize: true,
            barSpacing: '5',
            barColor: '#fff'
        });


  // chart 3

  $('#dashboard4-chart-3').sparkline([5,8,7,10,5,8,7,10,5,8,7,10,5,8,7,10,5,8,7,10], {
            type: 'bar',
            height: '40',
            barWidth: '2',
            resize: true,
            barSpacing: '5',
            barColor: '#fff'
        });


// chart 4

     var ctx = document.getElementById('dashboard4-chart-4').getContext('2d');
	 
	 var gradientStroke1 = ctx.createLinearGradient(0, 0, 0, 300);
          gradientStroke1.addColorStop(0, '#f80759');
          gradientStroke1.addColorStop(1, '#ffeb3b');
              
       var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
          datasets: [{
            label: 'Sales Report',
            data: [15, 8, 12, 5, 12, 8, 16, 25, 15, 10, 20, 10, 0],
            backgroundColor: gradientStroke1,
            borderColor: '#fff',
            pointBackgroundColor:'#fff',
            pointHoverBackgroundColor:'#fff',
            pointBorderColor :'#2dce89',
            pointHoverBorderColor :'#2dce89',
            pointBorderWidth :2,
            pointRadius :4,
            pointHoverRadius :4,
            borderWidth: 3
          }]
        }
        ,
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

// chart 5
    var ctx = document.getElementById("dashboard4-chart-5").getContext('2d');
   
      var gradientStroke3 = ctx.createLinearGradient(0, 0, 0, 300);
      gradientStroke3.addColorStop(0, '#ff6a00');
      gradientStroke3.addColorStop(1, '#ee0979');

      var gradientStroke4 = ctx.createLinearGradient(0, 0, 0, 300);
      gradientStroke4.addColorStop(0, ' #00b09b');
      gradientStroke4.addColorStop(0.5, '#96c93d');

      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: [1, 2, 3, 4, 5, 6, 7, 8],
          datasets: [{
            label: 'Electronics',
            data: [40, 30, 60, 35, 60, 25, 50, 40],
            borderColor: gradientStroke3,
            backgroundColor: gradientStroke3,
            hoverBackgroundColor: gradientStroke3,
            pointRadius: 0,
            fill: false,
            borderWidth: 1
          }, {
            label: 'Fashion',
            data: [50, 60, 40, 70, 35, 75, 30, 20],
            borderColor: gradientStroke4,
            backgroundColor: gradientStroke4,
            hoverBackgroundColor: gradientStroke4,
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
                boxWidth:8,
				fontColor: '#fff'
              }
            },
			tooltips: {
			  displayColors:false,
			},	
		  scales: {
			  xAxes: [{
				categoryPercentage: .2,
				ticks: {
                    beginAtZero:true,
                    fontColor: '#fff'
                },
				gridLines: {
				  display: true ,
				  color: "rgba(221, 221, 221, 0.08)"
				},
			  }],
			  yAxes: [{ 
			   ticks: {
                    beginAtZero:true,
                    fontColor: '#fff'
                },
				gridLines: {
				  display: true ,
				  color: "rgba(221, 221, 221, 0.08)"
				},
             }]
		     }
		}
      });
	  
	  
	  
	  
  // chart 6
 var ctx = document.getElementById('dashboard4-chart-6').getContext('2d');

  var gradientStroke1 = ctx.createLinearGradient(0, 0, 0, 300);
      gradientStroke1.addColorStop(.3, 'rgba(255, 47, 160, 0.9');
      gradientStroke1.addColorStop(1, 'rgba(255, 255, 255, 0.1)');

      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: [1, 2, 3, 4, 5, 6, 7],
          datasets: [{
            label: 'Views',
            data: [540, 632, 432, 320, 350, 240, 150],
			
            backgroundColor: gradientStroke1,
            borderColor: '#fff',
            borderWidth: 3,
			pointBackgroundColor:'#fe51af',
            pointHoverBackgroundColor:'#fe51af',
            pointBorderColor :'#fff',
            pointHoverBorderColor :'#fff',
            pointBorderWidth :2,
            pointRadius :4,
            pointHoverRadius :4
			
          }]
        },
        options: {
            legend: {
			  position: 'bottom',
              display:false
            },
            tooltips: {
			  displayColors:false
            },
			scales: {
			  xAxes: [{
				ticks: {
                    beginAtZero:true,
                    fontColor: '#fff'
                },
				gridLines: {
				  display: true ,
				  color: "rgba(255, 255, 255, 0.3)"
				},
			  }],
			   yAxes: [{
				ticks: {
                    beginAtZero:true,
                    fontColor: '#fff'
                },
				gridLines: {
				  display: true ,
				  color: "rgba(255, 255, 255, 0.0)"
				},
			  }]
		     }

         }
      });  
	
// world map

jQuery('#dashboard-map').vectorMap(
{
    map: 'world_mill_en',
    backgroundColor: 'transparent',
    borderColor: '#818181',
    borderOpacity: 0.25,
    borderWidth: 1,
    zoomOnScroll: false,
    color: '#009efb',
    regionStyle : {
        initial : {
          fill : '#11cdef'
        }
      },
    markerStyle: {
      initial: {
                    r: 9,
                    'fill': '#fff',
                    'fill-opacity':1,
                    'stroke': '#000',
                    'stroke-width' : 5,
                    'stroke-opacity': 0.4
                },
                },
    enableZoom: true,
    hoverColor: '#009efb',
    markers : [{
        latLng : [21.00, 78.00],
        name : 'I Love My India'
      
      }],
    hoverOpacity: null,
    normalizeFunction: 'linear',
    scaleColors: ['#b6d6ff', '#005ace'],
    selectedColor: '#c9dfaf',
    selectedRegions: [],
    showTooltip: true
	
   });
  


   });	 
   