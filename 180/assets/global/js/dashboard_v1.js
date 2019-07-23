/*!
 * Prince - v1.0.0
 * @author AtriTheme
 * Copyright (c) 2018
 */
!(function ($) {
    "use strict";
        /*------------ line basic ---------------------*/

        var ctx5 = document.getElementById('line-basic').getContext('2d');
        window.myLine = new Chart(ctx5, {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'BTH',
                    backgroundColor: window.chartColors.red,
                    borderColor: window.chartColors.red,
                    data: [
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor()
                    ],
                    fill: false,
                }, {
                    label: 'ETH',
                    fill: false,
                    backgroundColor: window.chartColors.blue,
                    borderColor: window.chartColors.blue,
                    data: [
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor()
                    ],
                }]
            },
            options: {
                responsive: true,
                title: {
                    display: true,
                    text: 'Transaction Summary'
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
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
                }
            }
        });

    /*-------------- Bar chart --------------*/
    $('.sparkbar').sparkline('html', {
        type: 'bar',
        height: "100px",
        width: '100%',
        barWidth: 15,
        barSpacing: 2,
    });
    /*-------------- Pie charts --------------*/
    $('.sparkpie').sparkline('html', {
        type: 'pie',
        height: '100px'
    });

    /*-------------- World map --------------*/
    $('#world-map').vectorMap({
        map: 'world_en',
        color: '#ffffff',
        hoverOpacity: 0.7,
        backgroundColor: '#f5f5f5',
        selectedColor: '#4390ff',
        borderOpacity: 0.25,
        borderColor:'#fff',
        enableZoom: true,
        showTooltip: true,
        values: sample_data,
        scaleColors: ['#C8EEFF', '#4390ff'],
        normalizeFunction: 'polynomial'
    });
})(jQuery);