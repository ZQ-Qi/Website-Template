/*!
 * Prince - v1.0.0
 * @author AtriTheme
 * Copyright (c) 2018
 */
!(function ($) {
    "use strict";

    var seriesData = [[], [], []];
    var random = new Rickshaw.Fixtures.RandomData(150);

    for (var i = 0; i < 150; i++) {
        random.addData(seriesData);
    }

    /*--- Lines & Toggling ---*/
    var graph = new Rickshaw.Graph({
        element: document.getElementById("line-chart"),
        width: 960,
        height: 500,
        renderer: 'line',
        series: [
            {
                color: "#c05020",
                data: seriesData[0],
                name: 'New York'
            }, {
                color: "#30c020",
                data: seriesData[1],
                name: 'London'
            }, {
                color: "#6060c0",
                data: seriesData[2],
                name: 'Tokyo'
            }
        ]
    });

    graph.render();

    var hoverDetail = new Rickshaw.Graph.HoverDetail({
        graph: graph
    });

    var legend = new Rickshaw.Graph.Legend({
        graph: graph,
        element: document.getElementById('legend')

    });

    var shelving = new Rickshaw.Graph.Behavior.Series.Toggle({
        graph: graph,
        legend: legend
    });

    var axes = new Rickshaw.Graph.Axis.Time({
        graph: graph
    });
    axes.render();
    var resize = function () {
        graph.configure({
            width: window.innerWidth * 0.75,
            height: window.innerHeight * 0.75
        });
        graph.render();
    }


    /*----- Scatter Plot with Multiple Series ----*/

    var graph = new Rickshaw.Graph({
        element: document.getElementById("multiple_series"),
        width: 960,
        height: 500,
        renderer: 'scatterplot',
        series: [
            {
                color: "#ff9030",
                data: seriesData[0],
                name: 'New York'
            }, {
                color: "#ff4040",
                data: seriesData[1],
                name: 'London'
            }
        ]
    });
    var legend = new Rickshaw.Graph.Legend({
        graph: graph,
        element: document.getElementById('multiple_series_legend')

    });
    graph.renderer.dotSize = 6;

    new Rickshaw.Graph.HoverDetail({graph: graph});

    graph.render();
    var resize = function () {
        graph.configure({
            width: window.innerWidth * 0.75,
            height: window.innerHeight * 0.75
        });
        graph.render();
    }

    /*---- Y-Axis Tick Marks and Grid Lines ----*/
    var graph = new Rickshaw.Graph({
        element: document.getElementById("y_axis_chart"),
        renderer: 'line',
        height: 300,
        width: 800,
        series: [
            {
                data: [{x: 0, y: 120}, {x: 1, y: 890}, {x: 2, y: 38}, {x: 3, y: 70}, {x: 4, y: 32}],
                color: "#c05020"
            }, {
                data: [{x: 0, y: 80}, {x: 1, y: 200}, {x: 2, y: 100}, {x: 3, y: 520}, {x: 4, y: 133}],
                color: "#30c020"
            }, {
                data: [{x: 0, y: 200}, {x: 1, y: 390}, {x: 2, y: 1000}, {x: 3, y: 200}, {x: 4, y: 230}],
                color: "#6060c0"
            }
        ]
    });

    var y_ticks = new Rickshaw.Graph.Axis.Y({
        graph: graph,
        orientation: 'left',
        tickFormat: Rickshaw.Fixtures.Number.formatKMBT,
        element: document.getElementById('y_axis')
    });

    graph.render();
    var resize = function () {
        graph.configure({
            width: window.innerWidth * 0.75,
            height: window.innerHeight * 0.75
        });
        graph.render();
    }

    /*---- Interpolated Colors ----*/
    var seriesData = [];

    for (i = 0; i < 50; i++) {
        seriesData.push([]);
    }

    var random = new Rickshaw.Fixtures.RandomData(150);

    for (var i = 0; i < 150; i++) {
        random.addData(seriesData);
    }

    var palette = new Rickshaw.Color.Palette( { scheme: 'spectrum2001', interpolatedStopCount: 4 } );

    var series = seriesData.map(function(s) {
        return {
            data: s,
            color: palette.color()
        }
    });

    var graph = new Rickshaw.Graph( {
        element: document.getElementById("color-chart"),
        width: 960,
        height: 500,
        stroke: true,
        renderer: 'area',
        series: series
    } );

    graph.render();
    var resize = function () {
        graph.configure({
            width: window.innerWidth * 0.75,
            height: window.innerHeight * 0.75
        });
        graph.render();
    }

    var legend = document.querySelector('#color-legend');

    /*---- Multiple Renderers ----*/
    var seriesData = [[], [], [], [], []];
    var random = new Rickshaw.Fixtures.RandomData(50);

    for (var i = 0; i < 75; i++) {
        random.addData(seriesData);
    }

    var graph = new Rickshaw.Graph({
        element: document.getElementById("multiple-chart"),
        renderer: 'multi',
        width: 1080,
        height: 500,
        dotSize: 5,
        series: [
            {
                name: 'temperature',
                data: seriesData.shift(),
                color: 'rgba(255, 0, 0, 0.4)',
                renderer: 'stack'
            }, {
                name: 'heat index',
                data: seriesData.shift(),
                color: 'rgba(255, 127, 0, 0.4)',
                renderer: 'stack'
            }, {
                name: 'dewpoint',
                data: seriesData.shift(),
                color: 'rgba(127, 0, 0, 0.3)',
                renderer: 'scatterplot'
            }, {
                name: 'pop',
                data: seriesData.shift().map(function (d) {
                    return {x: d.x, y: d.y / 4}
                }),
                color: 'rgba(0, 0, 127, 0.4)',
                renderer: 'bar'
            }, {
                name: 'humidity',
                data: seriesData.shift().map(function (d) {
                    return {x: d.x, y: d.y * 1.5}
                }),
                renderer: 'line',
                color: 'rgba(0, 0, 127, 0.25)'
            }
        ]
    });

    var slider = new Rickshaw.Graph.RangeSlider.Preview({
        graph: graph,
        element: document.querySelector('#multiple-slider')
    });

    graph.render();

    var resize = function () {
        graph.configure({
            width: window.innerWidth * 0.75,
            height: window.innerHeight * 0.75
        });
        graph.render();
    }

    var detail = new Rickshaw.Graph.HoverDetail({
        graph: graph
    });

    var legend = new Rickshaw.Graph.Legend({
        graph: graph,
        element: document.querySelector('#multiple-legend')
    });

    var highlighter = new Rickshaw.Graph.Behavior.Series.Highlight({
        graph: graph,
        legend: legend,
        disabledColor: function () {
            return 'rgba(0, 0, 0, 0.2)'
        }
    });

    var highlighter = new Rickshaw.Graph.Behavior.Series.Toggle({
        graph: graph,
        legend: legend
    });


})(jQuery);