/*!
 * Prince - v1.0.0
 * @author AtriTheme
 * Copyright (c) 2018
 */
!(function ($) {
    "use strict";

    /*-------------Line Chart---------------------*/
    Morris.Line({
        element: 'line_chart',
        resize: true,
        data: [
            {year: '2008', value: 20},
            {year: '2009', value: 10},
            {year: '2010', value: 5},
            {year: '2011', value: 5},
            {year: '2012', value: 20}
        ],
        xkey: 'year',
        ykeys: ['value'],
        labels: ['Value'],
        lineColors: ['#4390ff']
    });

    /*-------------Area Chart---------------------*/
    Morris.Area({
        element: 'area_chart',
        resize: true,
        data: [
            {x: '2010 Q4', y: 3, z: 7},
            {x: '2011 Q1', y: 3, z: 4},
            {x: '2011 Q2', y: null, z: 1},
            {x: '2011 Q3', y: 2, z: 5},
            {x: '2011 Q4', y: 8, z: 2},
            {x: '2012 Q1', y: 4, z: 4}
        ],
        xkey: 'x',
        ykeys: ['y', 'z'],
        labels: ['Y', 'Z'],
        lineColors: ['#4390ff', 'z']
    }).on('click', function (i, row) {
        console.log(i, row);
    });

    /*-------------Bar Chart---------------------*/
    Morris.Bar({
        element: 'bar_chart',
        resize: true,
        data: [
            {x: '2011 Q1', y: 3, z: 2, a: 3},
            {x: '2011 Q2', y: 2, z: null, a: 1},
            {x: '2011 Q3', y: 0, z: 2, a: 4},
            {x: '2011 Q4', y: 2, z: 4, a: 3}
        ],
        xkey: 'x',
        ykeys: ['y', 'z', 'a'],
        labels: ['Y', 'Z', 'A'],
        barColors: ['#4390ff', '#7a92a3', '#4da74d']
    }).on('click', function (i, row) {
        console.log(i, row);
    });

    /*-------------Stacked Bar Chart---------------------*/
    Morris.Bar({
        element: 'stacked_bar_chart',
        resize: true,
        data: [
            {x: '2011 Q1', y: 3, z: 2, a: 3},
            {x: '2011 Q2', y: 2, z: null, a: 1},
            {x: '2011 Q3', y: 0, z: 2, a: 4},
            {x: '2011 Q4', y: 2, z: 4, a: 3}
        ],
        xkey: 'x',
        ykeys: ['y', 'z', 'a'],
        labels: ['Y', 'Z', 'A'],
        barColors: ['#4390ff', '#7a92a3', '#4da74d'],
        stacked: true
    });

    /*-------------Negative Values---------------------*/
    var neg_data = [
        {"period": "2011-08-12", "a": 100},
        {"period": "2011-03-03", "a": 75},
        {"period": "2010-08-08", "a": 50},
        {"period": "2010-05-10", "a": 25},
        {"period": "2010-03-14", "a": 0},
        {"period": "2010-01-10", "a": -25},
        {"period": "2009-12-10", "a": -50},
        {"period": "2009-10-07", "a": -75},
        {"period": "2009-09-25", "a": -100}
    ];
    Morris.Line({
        element: 'negative_value',
        resize: true,
        data: neg_data,
        xkey: 'period',
        ykeys: ['a'],
        labels: ['Series A'],
        units: '%',
        lineColors: ['#4390ff']
    });

    /*-------------Formatting Dates---------------------*/
    var year_data = [
        {"period": "2012", "licensed": 3407, "sorned": 660},
        {"period": "2011", "licensed": 3351, "sorned": 629},
        {"period": "2010", "licensed": 3269, "sorned": 618},
        {"period": "2009", "licensed": 3246, "sorned": 661},
        {"period": "2008", "licensed": 3257, "sorned": 667},
        {"period": "2007", "licensed": 3248, "sorned": 627},
        {"period": "2006", "licensed": 3171, "sorned": 660},
        {"period": "2005", "licensed": 3171, "sorned": 676},
        {"period": "2004", "licensed": 3201, "sorned": 656},
        {"period": "2003", "licensed": 3215, "sorned": 622}
    ];
    Morris.Line({
        element: 'formatting_dates',
        resize: true,
        data: year_data,
        xkey: 'period',
        ykeys: ['licensed', 'sorned'],
        labels: ['Licensed', 'SORN'],
        lineColors: ['#4390ff', 'z']
    });

    /*-------------Donut Chart---------------------*/
    Morris.Donut({
        element: 'donut_chart',
        resize: true,
        data: [
            {value: 70, label: 'foo'},
            {value: 15, label: 'bar'},
            {value: 10, label: 'baz'},
            {value: 5, label: 'A really really long label'}
        ],
        formatter: function (x) {
            return x + "%"
        }
    }).on('click', function (i, row) {
        console.log(i, row);
    });

    /*-------------Donut Colors---------------------*/
    Morris.Donut({
        element: 'donut_colors',
        resize: true,
        data: [
            {value: 70, label: 'foo'},
            {value: 15, label: 'bar'},
            {value: 10, label: 'baz'},
            {value: 5, label: 'A really really long label'}
        ],
        backgroundColor: '#ccc',
        labelColor: '#4390ff',
        colors: ['#4390ff', '#5cb85c', '#f0ad4e', '#d9534f'],
        formatter: function (x) {
            return x + "$"
        }
    });

})(jQuery);