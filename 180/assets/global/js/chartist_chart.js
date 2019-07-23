/*!
 * Prince - v1.0.0
 * @author AtriTheme
 * Copyright (c) 2018
 */
!(function ($) {
    "use strict";

    /*---- Simple line chart ----*/
    new Chartist.Line('.simple-line-chart', {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        series: [
            [12, 9, 7, 8, 5],
            [2, 1, 3.5, 7, 3],
            [1, 3, 4, 5, 6]
        ]
    }, {
        fullWidth: true,
        chartPadding: {
            right: 40
        }
    });

    /*---- Only whole numbers ----*/
    new Chartist.Line('.whole-chart', {
        labels: [1, 2, 3, 4, 5, 6, 7, 8],
        series: [
            [1, 2, 3, 1, -2, 0, 1, 0],
            [-2, -1, -2, -1, -3, -1, -2, -1],
            [0, 0, 0, 1, 2, 3, 2, 1],
            [3, 2, 1, 0.5, 1, 0, -1, -3]
        ]
    }, {
        high: 3,
        low: -3,
        fullWidth: true,
        axisY: {
            onlyInteger: true,
            offset: 20
        }
    });

    /*---- Line chart with area ----*/
    new Chartist.Line('.line-chart', {
        labels: [1, 2, 3, 4, 5, 6, 7, 8],
        series: [
            [5, 9, 7, 8, 5, 3, 5, 4]
        ]
    }, {
        low: 0,
        showArea: true
    });

    /*---- Bi-polar Line chart with area only ----*/
    new Chartist.Line('.polar-chart', {
        labels: [1, 2, 3, 4, 5, 6, 7, 8],
        series: [
            [1, 2, 3, 1, -2, 0, 1, 0],
            [-2, -1, -2, -1, -2.5, -1, -2, -1],
            [0, 0, 0, 1, 2, 2.5, 2, 1],
            [2.5, 2, 1, 0.5, 1, 0.5, -1, -2.5]
        ]
    }, {
        high: 3,
        low: -3,
        showArea: true,
        showLine: false,
        showPoint: false,
        fullWidth: true,
        axisX: {
            showLabel: false,
            showGrid: false
        }
    });

    /*---- Using events to replace graphics ----*/
    var chart = new Chartist.Line('.events-chart', {
        labels: [1, 2, 3, 4, 5],
        series: [
            [12, 9, 7, 8, 5]
        ]
    });

    chart.on('draw', function (data) {
        if (data.type === 'point') {
            var triangle = new Chartist.Svg('path', {
                d: ['M',
                    data.x,
                    data.y - 15,
                    'L',
                    data.x - 15,
                    data.y + 8,
                    'L',
                    data.x + 15,
                    data.y + 8,
                    'z'].join(' '),
                style: 'fill-opacity: 1'
            }, 'ct-area');
            data.element.replace(triangle);
        }
    });

    /*---- Series Overrides ----*/
    var chart = new Chartist.Line('.series-chart', {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
        series: [{
            name: 'series-1',
            data: [5, 2, -4, 2, 0, -2, 5, -3]
        }, {
            name: 'series-2',
            data: [4, 3, 5, 3, 1, 3, 6, 4]
        }, {
            name: 'series-3',
            data: [2, 4, 3, 1, 4, 5, 3, 2]
        }]
    }, {
        fullWidth: true,
        series: {
            'series-1': {
                lineSmooth: Chartist.Interpolation.step()
            },
            'series-2': {
                lineSmooth: Chartist.Interpolation.simple(),
                showArea: true
            },
            'series-3': {
                showPoint: false
            }
        }
    }, [
        ['screen and (max-width: 320px)', {
            series: {
                'series-1': {
                    lineSmooth: Chartist.Interpolation.none()
                },
                'series-2': {
                    lineSmooth: Chartist.Interpolation.none(),
                    showArea: false
                },
                'series-3': {
                    lineSmooth: Chartist.Interpolation.none(),
                    showPoint: true
                }
            }
        }]
    ]);

    /*---- Bi-polar bar chart ----*/
    var data = {
        labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
        series: [
            [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
        ]
    };

    var options = {
        high: 10,
        low: -10,
        axisX: {
            labelInterpolationFnc: function (value, index) {
                return index % 2 === 0 ? value : null;
            }
        }
    };

    new Chartist.Bar('.bar-chart', data, options);

    /*---- Add peak circles using the draw events ----*/

    var chart = new Chartist.Bar('.circles-bar-chart', {
        labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
        series: [
            [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
        ]
    }, {
        high: 10,
        low: -10,
        axisX: {
            labelInterpolationFnc: function (value, index) {
                return index % 2 === 0 ? value : null;
            }
        }
    });

    chart.on('draw', function (data) {
        if (data.type === 'bar') {
            data.group.append(new Chartist.Svg('circle', {
                cx: data.x2,
                cy: data.y2,
                r: Math.abs(Chartist.getMultiValue(data.value)) * 2 + 5
            }, 'ct-slice-pie'));
        }
    });

    /*---- Horizontal bar chart ----*/
    new Chartist.Bar('.horizontal-bar-chart', {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        series: [
            [5, 4, 3, 7, 5, 10, 3],
            [3, 2, 9, 5, 4, 6, 4]
        ]
    }, {
        seriesBarDistance: 10,
        reverseData: true,
        horizontalBars: true,
        axisY: {
            offset: 70
        }
    });

    /*---- Distributed series ----*/
    new Chartist.Bar('.distributed-chart', {
        labels: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        series: [20, 60, 120, 200, 180, 20, 10]
    }, {
        distributeSeries: true
    });

    /*---- Simple pie chart ----*/
    var data = {
        series: [5, 3, 4]
    };

    var sum = function (a, b) {
        return a + b
    };

    new Chartist.Pie('.simple-pie-chart', data, {
        labelInterpolationFnc: function (value) {
            return Math.round(value / data.series.reduce(sum) * 100) + '%';
        }
    });

    /*---- Animating a Donut with Svg.animate ----*/

    var chart = new Chartist.Pie('.animating-donut-chart', {
        series: [10, 20, 50, 20, 5, 50, 15],
        labels: [1, 2, 3, 4, 5, 6, 7]
    }, {
        donut: true,
        showLabel: false
    });

    chart.on('draw', function (data) {
        if (data.type === 'slice') {
            var pathLength = data.element._node.getTotalLength();

            data.element.attr({
                'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
            });

            var animationDefinition = {
                'stroke-dashoffset': {
                    id: 'anim' + data.index,
                    dur: 1000,
                    from: -pathLength + 'px',
                    to: '0px',
                    easing: Chartist.Svg.Easing.easeOutQuint,
                    fill: 'freeze'
                }
            };

            if (data.index !== 0) {
                animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
            }

            data.element.attr({
                'stroke-dashoffset': -pathLength + 'px'
            });

            data.element.animate(animationDefinition, false);
        }
    });

    chart.on('created', function () {
        if (window.__anim21278907124) {
            clearTimeout(window.__anim21278907124);
            window.__anim21278907124 = null;
        }
        window.__anim21278907124 = setTimeout(chart.update.bind(chart), 10000);
    });

    /*---- Gauge chart using fill rather than stroke ----*/
    new Chartist.Pie('.gauge-chart-chart', {
        series: [20, 10, 30, 40]
    }, {
        donut: true,
        donutWidth: 60,
        donutSolid: true,
        startAngle: 270,
        total: 200,
        showLabel: true
    });


})(jQuery);