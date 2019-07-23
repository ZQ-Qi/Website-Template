/*!
 * Prince - v1.0.0
 * @author AtriTheme
 * Copyright (c) 2018
 */
!(function ($) {
    "use strict";

    /*---- Line chart ----*/
    $('.sparkline').sparkline('html', {
        height: "100px",
        width: "200px",
        lineColor: ['#a4c6f8'],
        fillColor: ['#4390ff']
    });

    /*---- Bar chart ----*/
    $('.sparkbar').sparkline('html', {
        type: 'bar',
        height: "100px",
        barWidth: 10,
        barSpacing: 5,
    });

    /*---- composite line chart ----*/

    $('#compositeline').sparkline('html', {
        fillColor: false,
        height: "100px",
        width: "200px",
        changeRangeMin: 0,
        chartRangeMax: 10
    });
    $('#compositeline').sparkline([4, 1, 5, 7, 9, 9, 8, 7, 6, 6, 4, 7, 8, 4, 3, 2, 2, 5, 6, 7], {
        composite: true,
        height: "100px",
        width: "200px",
        fillColor: false,
        lineColor: 'red',
        changeRangeMin: 0,
        chartRangeMax: 10
    });

    /*---- normalline ----*/
    $('#normalline').sparkline('html', {
        height: "100px",
        width: "200px",
        fillColor: false,
        normalRangeMin: -1,
        normalRangeMax: 8
    });
    $('#normalExample').sparkline('html', {
        height: "100px",
        width: "200px",
        fillColor: false,
        normalRangeMin: 80,
        normalRangeMax: 95,
        normalRangeColor: '#4f4'
    });

    /*---- compositebar ----*/
    $('#compositebar').sparkline('html', {
        height: "100px",
        width: "200px",
        type: 'bar',
        barWidth: 10,
        barSpacing: 5,
        barColor: '#aaf'
    });
    $('#compositebar').sparkline([4, 1, 5, 7, 9, 9, 8, 7, 6, 6, 4, 7, 8, 4, 3, 2, 2, 5, 6, 7], {
        height: "100px",
        width: "200px",
        composite: true,
        fillColor: false,
        lineColor: 'red'
    });

    /*---- discrete ----*/
    $('.discrete1').sparkline('html', {
        type: 'discrete',
        height: "100px",
        lineColor: 'blue',
        xwidth: 32
    });

    $('#discrete2').sparkline('html', {
        height: "100px",
        type: 'discrete',
        lineColor: 'blue',
        thresholdColor: 'red',
        thresholdValue: 4
    });

    /*---- linecustom ----*/
    $('#linecustom').sparkline('html', {
        height: '100px',
        width: '200px',
        lineColor: '#f00',
        fillColor: '#ffa',
        minSpotColor: false,
        maxSpotColor: false,
        spotColor: '#77f',
        spotRadius: 3
    });

    /*---- tristate ----*/
    $('.sparktristate').sparkline('html', {
        type: 'tristate',
        height: "100px",
        barWidth: 10,
        barSpacing: 5
    });

    $('.sparktristatecols').sparkline('html', {
        type: 'tristate',
        height: "100px",
        barWidth: 10,
        barSpacing: 5,
        colorMap: {'-2': '#fa7', '2': '#44f'}
    });

    /*---- box ----*/
    $('.sparkboxplot').sparkline('html', {
        type: 'box',
        height: "100px",
        width: "200px"
    });

    $('.sparkboxplotraw').sparkline([1, 3, 5, 8, 10, 15, 18], {
        type: 'box',
        height: "100px",
        width: "200px",
        raw: true,
        showOutliers: true,
        target: 6
    });

    /*---- Pie charts ----*/
    $('.sparkpie').sparkline('html', {
        type: 'pie',
        height: '80px'
    });

    /*---- Bullet charts ----*/
    $('.sparkbullet').sparkline('html', {
        type: 'bullet',
        height: "30px",
        width: "150px",
    });

})(jQuery);