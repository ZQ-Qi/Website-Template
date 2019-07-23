/*
Template Name: Admin Pro Admin
Author: Wrappixel
Email: niravjoshi87@gmail.com
File: js
*/
$(function () {
    "use strict";
    // ============================================================== 
    // Sales chart
    // ============================================================== 
    Morris.Area({
        element: 'sales-chart',
        data: [{
                period: '2011',
                Sales: 0,
                Earning: 0,
                Marketing: 0
            }, {
                period: '2012',
                Sales: 130,
                Earning: 100,
                Marketing: 80
            }, {
                period: '2013',
                Sales: 80,
                Earning: 60,
                Marketing: 70
            }, {
                period: '2014',
                Sales: 70,
                Earning: 200,
                Marketing: 140
            }, {
                period: '2015',
                Sales: 180,
                Earning: 150,
                Marketing: 140
            }, {
                period: '2016',
                Sales: 105,
                Earning: 100,
                Marketing: 80
            },
            {
                period: '2017',
                Sales: 250,
                Earning: 150,
                Marketing: 200
            }
        ],
        xkey: 'period',
        ykeys: ['Sales', 'Earning'],
        labels: ['Site A', 'Site B'],
        pointSize: 0,
        fillOpacity: 0.7,
        pointStrokeColors: ['#6772e5', '#20aee3', '#6772e5'],
        behaveLikeLine: true,
        gridLineColor: '#e0e0e0',
        lineWidth: 0,
        hideHover: 'auto',
        lineColors: ['#8fd9cd', '#20aee3', '#6772e5'],
        resize: true

    });
    // ============================================================== 
    // Our Income
    // ==============================================================
    var chart = c3.generate({
        bindto: '#income',
        data: {
            columns: [
                ['Growth Income', 250, 200, 100, 250, 300],
                ['Net Income', 190, 100, 140, 200, 190]
            ],
            type: 'bar'
        },
         bar: {
            space: 0.2,
            // or
            width: 15 // this makes bar width 100px
        },
        axis: {
            y: {
            tick: {
                count : 4,
                
                outer: false
                }
            }
        },
        legend: {
          hide: true
          //or hide: 'data1'
          //or hide: ['data1', 'data2']
        },
        grid: {
        x: {
            show: false
        },
        y: {
            show: true
        }
    },
        size: {
            height:400
        },
        color: {
              pattern: [ '#24d2b5', '#20aee3']
        }
    });

    
    
});
