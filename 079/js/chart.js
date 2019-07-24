$(function () {
    /* ChartJS
     * -------
     * Data and config for chartjs
     */
    'use strict';
    var data = {
        labels: ["2013", "2014", "2014", "2015", "2016", "2017"],
        datasets: [{
            label: '# of Votes',
            data: [10, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    };
    var multiLineData = {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: 'Dataset 1',
            data: [12, 19, 3, 5, 2, 3],
            borderColor: [
                '#587ce4'
            ],
            borderWidth: 2,
            fill: false
        },
        {
            label: 'Dataset 2',
            data: [5, 23, 7, 12, 42, 23],
            borderColor: [
                '#ede190'
            ],
            borderWidth: 2,
            fill: false
        },
        {
            label: 'Dataset 3',
            data: [15, 10, 21, 32, 12, 33],
            borderColor: [
                '#f44252'
            ],
            borderWidth: 2,
            fill: false
        }
      ]
    };
    var options = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        legend: {
            display: false
        },
        elements: {
          point: {
              radius: 0
          }
        }

    };
    var doughnutPieData ={
      datasets: [{
        data: [30, 40, 30],
        backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)'
        ],
        borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
      }],

      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: [
          'Pink',
          'Blue',
          'Yellow',
      ]
    };
    var doughnutPieOptions = {
      responsive: true,
      animation: {
          animateScale: true,
          animateRotate: true
      }
    };
    var areaData = {
        labels: ["2013", "2014", "2015", "2016", "2017"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            fill: 'origin',      // 0: fill to 'origin'
            fill: '+2',          // 1: fill to dataset 3
            fill: 1,             // 2: fill to dataset 1
            fill: false,         // 3: no fill
            fill: '-2'          // 4: fill to dataset 2
        }]
    };

    var areaOptions = {
        plugins: {
            filler: {
                propagate: true
            }
        }
    }

    var salesCalcData = {
        labels: ["2013", "2014", "2015", "2016", "2017"],
        datasets: [{
            data: [3, 12, 4, 13, 5, 12],
            backgroundColor: [
                'rgba(255, 99, 132, 0)'
            ],
            borderColor: [
                '#ea2c54',
            ],
            borderWidth: 1
        }]
    };

    var salesCalcOptions = {
        legend: false,
        plugins: {
            filler: {
                propagate: true
            }
        }
    }

    var productCalcData = {
        labels: ["0", "4", "8", "12", "16", "20", "24", "28"],
        datasets: [{
            label: '2016',
            data: ['0000','3000','0000','6000','1000','8000','0000','4000'],
            borderColor: ['rgb(92,208,105)'],
            backgroundColor: ['rgba(92,208,105,0.5)'],
            borderWidth: 1,
            fill: true
        },
        {
            label: '2017',
            data: ['0000','5000','2000','8000','0000','12000','10000','4000'],
            borderColor: ['rgb(0,158,251)'],
            backgroundColor: ['rgba(0,158,251,0.5)'],
            borderWidth: 1,
            fill: true
        }
      ]
    };

    var productCalcOptions = {
        plugins: {
            filler: {
                propagate: true
            }
        },
        responsive: true,
        maintainAspectRatio: false,
        legend: false,
        scales: {
            yAxes: [{

                stacked: true,
                 ticks: {
                    min: 0,
                    stepSize: 2000,
                    max: 22000
                }

            }]
        }
    }

    var scatterChartData = {
        datasets: [{
            label: 'First Dataset',
            data: [
                {
                    x: -10,
                    y: 0
                },
                {
                    x: 0,
                    y: 3
                },
                {
                    x: -25,
                    y: 5
                },
                {
                    x: 40,
                    y: 5
                }
            ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)'
            ],
            borderWidth: 1
        },
        {
            label: 'Second Dataset',
            data: [
                {
                    x: 10,
                    y: 5
                },
                {
                    x: 20,
                    y: -30
                },
                {
                    x: -25,
                    y: 15
                },
                {
                    x: -10,
                    y: 5
                }
            ],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
        }
        ]
    }

    var scatterChartOptions = {
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom'
            }]
        }
    }

    var salesChartData ={
      datasets: [{
        data: [30, 40, 30],
        backgroundColor: [
            '#745af2',
            '#5cd069',
            '#fecb01'
        ]
      }],

      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: [
          'Organic Sale',
          'Search Engine',
          'Marketing',
      ]
    };
    var salesChartOptions = {
      responsive: true,
      cutoutPercentage: 80,
      legend : false,
      animation: {
          animateScale: true,
          animateRotate: true
      }
    };
    // Top products chart in dashboard 2
    var topProductsChartData ={
      datasets: [{
        data: [30, 30, 40],
        backgroundColor: [
            '#002388',
            '#5cd069',
            '#ea2c54'
        ]
      }],

      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: [
          'Viber',
          'Wechat',
          'Gmail',
      ]
    };
    var topProductsChartOptions = {
      responsive: true,
      legend: false,
      animation: {
          animateScale: true,
          animateRotate: true
      }
    };
    // Get context with jQuery - using jQuery's .get() method.
    if($("#barChart").length) {
      var barChartCanvas = $("#barChart").get(0).getContext("2d");
      // This will get the first returned node in the jQuery collection.
      var barChart = new Chart(barChartCanvas, {
        type: 'bar',
        data: data,
        options: options
      });
    }

    if($("#lineChart").length) {
      var lineChartCanvas = $("#lineChart").get(0).getContext("2d");
      var lineChart = new Chart(lineChartCanvas, {
        type: 'line',
        data: data,
        options: options
      });
    }

    if($("#linechart-multi").length) {
      var multiLineCanvas = $("#linechart-multi").get(0).getContext("2d");
      var lineChart = new Chart(multiLineCanvas, {
        type: 'line',
        data: multiLineData,
        options: options
      });
    }

    if($("#product-calc-chart").length) {
      var productCalcCanvas = $("#product-calc-chart").get(0).getContext("2d");
      productCalcCanvas.height = 500;
      var productCalcChart = new Chart(productCalcCanvas, {
        type: 'line',
        data: productCalcData,
        options: productCalcOptions
      });
      $("#product-calc-chart-legend").html(productCalcChart.generateLegend());
    }

    if($("#doughnutChart").length) {
      var doughnutChartCanvas = $("#doughnutChart").get(0).getContext("2d");
      var doughnutChart = new Chart(doughnutChartCanvas, {
        type: 'doughnut',
        data: doughnutPieData,
        options: doughnutPieOptions
      });
    }

    if($("#sales-chart").length) {
      var salesChartCanvas = $("#sales-chart").get(0).getContext("2d");
      var salesChart = new Chart(salesChartCanvas, {
        type: 'doughnut',
        data: salesChartData,
        options: salesChartOptions
      });
      $("#sales-chart-legend").html(salesChart.generateLegend());
    }

    if($("#top-products-chart").length) {
      var topProductsChartCanvas = $("#top-products-chart").get(0).getContext("2d");
      var topProductsChart = new Chart(topProductsChartCanvas, {
        type: 'doughnut',
        data: topProductsChartData,
        options: topProductsChartOptions
      });
      $("#top-products-chart-legend").html(topProductsChart.generateLegend());
    }

    if($("#pieChart").length) {
      var pieChartCanvas = $("#pieChart").get(0).getContext("2d");
      var pieChart = new Chart(pieChartCanvas, {
        type: 'pie',
        data: doughnutPieData,
        options: doughnutPieOptions
      });
    }

    if($("#areaChart").length) {
      var areaChartCanvas = $("#areaChart").get(0).getContext("2d");
      var areaChart = new Chart(areaChartCanvas, {
        type:'line',
        data: areaData,
        options: areaOptions
      });
    }

    if($("#sales-calc-chart").length) {
      var salesCalcChartCanvas = $("#sales-calc-chart").get(0).getContext("2d");
      var salesCalcChart = new Chart(salesCalcChartCanvas, {
        type:'line',
        data: salesCalcData,
        options: salesCalcOptions
      });
    }

    if($("#scatterChart").length) {
      var scatterChartCanvas = $("#scatterChart").get(0).getContext("2d");
      var scatterChart = new Chart(scatterChartCanvas, {
        type: 'scatter',
        data: scatterChartData,
        options: scatterChartOptions
      });
    }

    if($("#browserTrafficChart").length) {
      var doughnutChartCanvas = $("#browserTrafficChart").get(0).getContext("2d");
      var doughnutChart = new Chart(doughnutChartCanvas, {
        type: 'doughnut',
        data: browserTrafficData,
        options: doughnutPieOptions
      });
    }
  });
