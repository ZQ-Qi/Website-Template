/**
 * @Package: Cryptonia - Bitcoin & Cryptocurrency trading Dashboard
 * @Version: 1.0.0
 */

jQuery(function($) {

    'use strict';

    var CRYPTONIA_SETTINGS = window.CRYPTONIA_SETTINGS || {};

    /*--------------------------------
        Chart Js Chart
     --------------------------------*/
    CRYPTONIA_SETTINGS.chartJS = function() {

        if ($("#bar-chartjs").length) {
            /*Bar Chart*/
            var randomScalingFactor = function() {
                return Math.round(Math.random() * 100)
            };

            var barChartData = {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    fillColor: "rgba(242,163,20,1)",
                    strokeColor: "rgba(242,163,20,0.8)",
                    highlightFill: "rgba(242,163,20,0.8)",
                    highlightStroke: "rgba(242,163,20,1)",
                    data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
                }, {
                    fillColor: "rgba(244,110,15,1.0)",
                    strokeColor: "rgba(244,110,15,0.8)",
                    highlightFill: "rgba(244,110,15,0.8)",
                    highlightStroke: "rgba(244,110,15,1.0)",
                    data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
                }]

            }

            var ctxb = document.getElementById("bar-chartjs").getContext("2d");
            window.myBar = new Chart(ctxb).Bar(barChartData, {
                responsive: true
            });
        }

        /*Line Chart*/
        if ($("#line-chartjs").length) {
            var randomScalingFactor = function() {
                return Math.round(Math.random() * 100)
            };
            var lineChartData = {
                grid: {
                    zlevel: 0,
                    x: 20,
                    x2: 20,
                    y: 20,
                    y2: 20,
                },
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: "My First dataset",
                    fillColor: "rgba(242,163,20,0.5)",
                    strokeColor: "rgba(242,163,20,1)",
                    pointColor: "rgba(242,163,20,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(242,163,20,1)",
                    data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
                }, {
                    label: "My Second dataset",
                    fillColor: "rgba(242, 112, 20,0.5)",
                    strokeColor: "rgba(242, 112, 20,1.0)",
                    pointColor: "rgba(242, 112, 20,1.0)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(242, 112, 20,1.0)",
                    data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
                }]

            }

            var ctx = document.getElementById("line-chartjs").getContext("2d");
            window.myLine = new Chart(ctx).Line(lineChartData, {
                responsive: true
            });

        }

        if ($("#pie-chartjs").length) {
            /*PIE Chart*/

            var pieData = [{
                    value: 300,
                    color: "#E91E63",
                    highlight: "rgba(250,133,100,0.8)",
                    label: "Accent"
                }, {
                    value: 150,
                    color: "rgba(63,81,181,1)",
                    highlight: "rgba(63,81,181,0.8)",
                    label: "Primary"
                }, {
                    value: 50,
                    color: "#FFC107",
                    highlight: "#FFC870",
                    label: "Yellow"
                }, {
                    value: 120,
                    color: "rgba(244,110,15,1.0)",
                    highlight: "rgba(244,110,15,0.8)",
                    label: "Purple"
                }

            ];

            var ctx = document.getElementById("pie-chartjs").getContext("2d");
            window.myPie = new Chart(ctx).Pie(pieData);

        }

        if ($("#donut-chartjs").length) {

            /* Donut Chart*/

            var doughnutData = [{
                    value: 300,
                    color: "#E91E63",
                    highlight: "rgba(250,133,100,0.8)",
                    label: "Accent"
                }, {
                    value: 150,
                    color: "rgba(63,81,181,1)",
                    highlight: "rgba(63,81,181,0.8)",
                    label: "Primary"
                }, {
                    value: 50,
                    color: "#FFC107",
                    highlight: "#FFC870",
                    label: "Yellow"
                }, {
                    value: 120,
                    color: "rgba(244,110,15,1.0)",
                    highlight: "rgba(244,110,15,0.8)",
                    label: "Purple"
                }

            ];

            var ctxd = document.getElementById("donut-chartjs").getContext("2d");
            window.myDoughnut = new Chart(ctxd).Doughnut(doughnutData, {
                responsive: true
            });
        }

    };

    /******************************
     initialize respective scripts 
     *****************************/
    $(document).ready(function() {});

    $(window).resize(function() {});

    $(window).load(function() {
        CRYPTONIA_SETTINGS.chartJS();
    });

});