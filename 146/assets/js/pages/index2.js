$(function () {
    "use strict";   
    initDonutChart();
    initSparkline();
    getMorris('bar', 'bar_chart');
});


function initSparkline() {
    $(".sparkline").each(function () {
        var $this = $(this);
        $this.sparkline('html', $this.data());
    });
}

function initDonutChart() {
    Morris.Donut({
        element: 'donut_chart',
        data: [{
            label: 'Chrome',
            value: 37
        }, {
            label: 'Firefox',
            value: 30
        }, {
            label: 'Safari',
            value: 18
        }, {
            label: 'Opera',
            value: 12
        },
        {
            label: 'Other',
            value: 3
        }],
        colors: ['rgb(233, 30, 99)', 'rgb(0, 188, 212)', 'rgb(255, 152, 0)', 'rgb(0, 150, 136)', 'rgb(96, 125, 139)'],
        formatter: function (y) {
            return y + '%'
        }
    });
}


function getMorris(type, element) {
    if (type === 'bar') {
        Morris.Bar({
            element: element,
            data: [{
                x: '2017 Q1',
                y: 3,
                z: 2,
                a: 3
            }, {
                    x: '2017 Q2',
                    y: 2,
                    z: null,
                    a: 1
                }, {
                    x: '2017 Q3',
                    y: 0,
                    z: 2,
                    a: 4
                }, {
                    x: '2017 Q4',
                    y: 2,
                    z: 4,
                    a: 3
                }],
            xkey: 'x',
            ykeys: ['y', 'z', 'a'],
            labels: ['Y', 'Z', 'A'],
            barColors: ['rgb(125, 125, 250)', 'rgb(236, 192, 15)', 'rgb(85, 203, 140)'],
        });
    }
}

