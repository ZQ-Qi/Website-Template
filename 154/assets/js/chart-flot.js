/**
 * @Package: Cryptonia - Bitcoin & Cryptocurrency trading Dashboard
 * @Version: 1.0.0
 */

jQuery(function($) {

    'use strict';

    var CRYPTONIA_SETTINGS = window.CRYPTONIA_SETTINGS || {};

    /*--------------------------------
        Flot Chart
     --------------------------------*/
    CRYPTONIA_SETTINGS.chartFlot = function() {

        /*------------------ Real Time ------------------------*/
        if ($("#flot-realtime").length) {
            // We use an inline data source in the example, usually data would
            // be fetched from a server

            var rtdata = [],
                totalPoints = 300;

            function RealTimegetRandomData() {

                if (rtdata.length > 0)
                    rtdata = rtdata.slice(1);

                // Do a random walk

                while (rtdata.length < totalPoints) {

                    var prev = rtdata.length > 0 ? rtdata[rtdata.length - 1] : 50,
                        y = prev + Math.random() * 10 - 5;

                    if (y < 0) {
                        y = 0;
                    } else if (y > 100) {
                        y = 100;
                    }

                    rtdata.push(y);
                }

                // Zip the generated y values with the x values

                var res = [];
                for (var i = 0; i < rtdata.length; ++i) {
                    res.push([i, rtdata[i]])
                }

                return res;
            }

            // Set up the control widget

            var updateInterval = 100;
            $("#updateInterval").val(updateInterval).change(function() {
                var v = $(this).val();
                if (v && !isNaN(+v)) {
                    updateInterval = +v;
                    if (updateInterval < 1) {
                        updateInterval = 1;
                    } else if (updateInterval > 2000) {
                        updateInterval = 2000;
                    }
                    $(this).val("" + updateInterval);
                }
            });

            var realplot = $.plot("#flot-realtime", [RealTimegetRandomData()], {
                series: {
                    shadowSize: 0 // Drawing is faster without shadows
                },
                yaxis: {
                    min: 0,
                    max: 100
                },
                xaxis: {
                    show: false
                },
                colors: ["#e8962e"],
                grid: {
                    tickColor: "#f5f5f5",
                    borderWidth: 1,
                    borderColor: "#eaeaea"
                },
            });

            function realtimeupdate() {

                realplot.setData([RealTimegetRandomData()]);

                // Since the axes don't change, we don't need to call realplot.setupGrid()

                realplot.draw();
                setTimeout(realtimeupdate, updateInterval);
            }

            realtimeupdate();

        }

        /*------------------------ Series Pie -----------------------*/

        /*------------------ Series Toggle ---------------------*/

        if ($("#flot-toggle").length) {
            var togdatasets = {
                "usa": {
                    label: "USA",
                    data: [
                        [1988, 483994],
                        [1989, 479060],
                        [1990, 457648],
                        [1991, 401949],
                        [1992, 424705],
                        [1993, 402375],
                        [1994, 377867],
                        [1995, 357382],
                        [1996, 337946],
                        [1997, 336185],
                        [1998, 328611],
                        [1999, 329421],
                        [2000, 342172],
                        [2001, 344932],
                        [2002, 387303],
                        [2003, 440813],
                        [2004, 480451],
                        [2005, 504638],
                        [2006, 528692]
                    ]
                },
                "russia": {
                    label: "Russia",
                    data: [
                        [1988, 218000],
                        [1989, 203000],
                        [1990, 171000],
                        [1992, 42500],
                        [1993, 37600],
                        [1994, 36600],
                        [1995, 21700],
                        [1996, 19200],
                        [1997, 21300],
                        [1998, 13600],
                        [1999, 14000],
                        [2000, 19100],
                        [2001, 21300],
                        [2002, 23600],
                        [2003, 25100],
                        [2004, 26100],
                        [2005, 31100],
                        [2006, 34700]
                    ]
                },
                "uk": {
                    label: "UK",
                    data: [
                        [1988, 62982],
                        [1989, 62027],
                        [1990, 60696],
                        [1991, 62348],
                        [1992, 58560],
                        [1993, 56393],
                        [1994, 54579],
                        [1995, 50818],
                        [1996, 50554],
                        [1997, 48276],
                        [1998, 47691],
                        [1999, 47529],
                        [2000, 47778],
                        [2001, 48760],
                        [2002, 50949],
                        [2003, 57452],
                        [2004, 60234],
                        [2005, 60076],
                        [2006, 59213]
                    ]
                },
                "germany": {
                    label: "Germany",
                    data: [
                        [1988, 55627],
                        [1989, 55475],
                        [1990, 58464],
                        [1991, 55134],
                        [1992, 52436],
                        [1993, 47139],
                        [1994, 43962],
                        [1995, 43238],
                        [1996, 42395],
                        [1997, 40854],
                        [1998, 40993],
                        [1999, 41822],
                        [2000, 41147],
                        [2001, 40474],
                        [2002, 40604],
                        [2003, 40044],
                        [2004, 38816],
                        [2005, 38060],
                        [2006, 36984]
                    ]
                },
                "denmark": {
                    label: "Denmark",
                    data: [
                        [1988, 3813],
                        [1989, 3719],
                        [1990, 3722],
                        [1991, 3789],
                        [1992, 3720],
                        [1993, 3730],
                        [1994, 3636],
                        [1995, 3598],
                        [1996, 3610],
                        [1997, 3655],
                        [1998, 3695],
                        [1999, 3673],
                        [2000, 3553],
                        [2001, 3774],
                        [2002, 3728],
                        [2003, 3618],
                        [2004, 3638],
                        [2005, 3467],
                        [2006, 3770]
                    ]
                },
                "sweden": {
                    label: "Sweden",
                    data: [
                        [1988, 6402],
                        [1989, 6474],
                        [1990, 6605],
                        [1991, 6209],
                        [1992, 6035],
                        [1993, 6020],
                        [1994, 6000],
                        [1995, 6018],
                        [1996, 3958],
                        [1997, 5780],
                        [1998, 5954],
                        [1999, 6178],
                        [2000, 6411],
                        [2001, 5993],
                        [2002, 5833],
                        [2003, 5791],
                        [2004, 5450],
                        [2005, 5521],
                        [2006, 5271]
                    ]
                },
                "norway": {
                    label: "Norway",
                    data: [
                        [1988, 4382],
                        [1989, 4498],
                        [1990, 4535],
                        [1991, 4398],
                        [1992, 4766],
                        [1993, 4441],
                        [1994, 4670],
                        [1995, 4217],
                        [1996, 4275],
                        [1997, 4203],
                        [1998, 4482],
                        [1999, 4506],
                        [2000, 4358],
                        [2001, 4385],
                        [2002, 5269],
                        [2003, 5066],
                        [2004, 5194],
                        [2005, 4887],
                        [2006, 4891]
                    ]
                }
            };

            // hard-code color indices to prevent them from shifting as
            // countries are turned on/off

            var i = 0;
            $.each(togdatasets, function(key, val) {
                val.color = i;
                ++i;
            });

            // insert checkboxes 
            var choiceContainer = $("#choices");
            $.each(togdatasets, function(key, val) {
                choiceContainer.append("<br/><input class='iCheck' type='checkbox' name='" + key +
                    "' checked='checked' id='id" + key + "'></input>" +
                    "<label class='form-label' for='id" + key + "'>" + val.label + "</label>");
            });

            // if icheck is not applied, then use this code below
            //choiceContainer.find("input").click(plotAccordingToChoices);

            if ($.isFunction($.fn.iCheck)) {
                $('#choices input').on('ifChanged', function(event) {
                    plotAccordingToChoices();
                });
            }

            function plotAccordingToChoices() {

                var data = [];

                choiceContainer.find("input:checked").each(function() {
                    var key = $(this).attr("name");
                    if (key && togdatasets[key]) {
                        data.push(togdatasets[key]);
                    }
                });

                if (data.length > 0) {
                    $.plot("#flot-toggle", data, {
                        yaxis: {
                            min: 0
                        },
                        xaxis: {
                            tickDecimals: 0
                        },
                        series: {
                            shadowSize: 0 // Drawing is faster without shadows
                        },
                        colors: ["#f46e0f", "#e8962e", "#E91E63", "#FFC107", "#797979"],
                        grid: {
                            tickColor: "#f5f5f5",
                            borderWidth: 1,
                            borderColor: "#eaeaea"
                        },

                    });
                }
            }

            plotAccordingToChoices();

        }

        /*------------------- Tracking -------------------------*/

        if ($("#flot-track").length) {

            var sin = [],
                cos = [];
            for (var i = 0; i < 14; i += 0.1) {
                sin.push([i, Math.sin(i)]);
                cos.push([i, Math.cos(i)]);
            }

            var trackplot = $.plot("#flot-track", [{
                data: sin,
                label: "sin(x) = -0.00"
            }, {
                data: cos,
                label: "cos(x) = -0.00"
            }], {
                series: {
                    lines: {
                        show: true
                    }
                },
                crosshair: {
                    mode: "x"
                },
                grid: {
                    hoverable: true,
                    autoHighlight: true,
                    tickColor: "#f5f5f5",
                    borderWidth: 1,
                    borderColor: "#eaeaea"
                },
                yaxis: {
                    min: -1.2,
                    max: 1.2
                },
                colors: ["#f46e0f", "#e8962e", "#E91E63", "#FFC107", "#797979"],
            });

            var legends = $("#flot-track .legendLabel");

            legends.each(function() {
                // fix the widths so they don't jump around
                $(this).css('width', $(this).width());
            });

            var updateLegendTimeout = null;
            var latestPosition = null;

            function updateLegend() {

                updateLegendTimeout = null;

                var pos = latestPosition;

                var axes = trackplot.getAxes();
                if (pos.x < axes.xaxis.min || pos.x > axes.xaxis.max ||
                    pos.y < axes.yaxis.min || pos.y > axes.yaxis.max) {
                    return;
                }

                var i, j, trackdataset = trackplot.getData();
                for (i = 0; i < trackdataset.length; ++i) {

                    var series = trackdataset[i];

                    // Find the nearest points, x-wise

                    for (j = 0; j < series.data.length; ++j) {
                        if (series.data[j][0] > pos.x) {
                            break;
                        }
                    }

                    // Now Interpolate

                    var y,
                        p1 = series.data[j - 1],
                        p2 = series.data[j];

                    if (p1 == null) {
                        y = p2[1];
                    } else if (p2 == null) {
                        y = p1[1];
                    } else {
                        y = p1[1] + (p2[1] - p1[1]) * (pos.x - p1[0]) / (p2[0] - p1[0]);
                    }

                    legends.eq(i).text(series.label.replace(/=.*/, "= " + y.toFixed(2)));
                }
            }

            $("#flot-track").bind("plothover", function(event, pos, item) {
                latestPosition = pos;
                if (!updateLegendTimeout) {
                    updateLegendTimeout = setTimeout(updateLegend, 50);
                }
            });

        }

        /*------------------- Visitor -------------------------*/
        if ($("#flot-visitors").length) {

            var visitd = [
                [1196463600000, 0],
                [1196550000000, 0],
                [1196636400000, 0],
                [1196722800000, 77],
                [1196809200000, 3636],
                [1196895600000, 3575],
                [1196982000000, 2736],
                [1197068400000, 1086],
                [1197154800000, 676],
                [1197241200000, 1205],
                [1197327600000, 906],
                [1197414000000, 710],
                [1197500400000, 639],
                [1197586800000, 540],
                [1197673200000, 435],
                [1197759600000, 301],
                [1197846000000, 575],
                [1197932400000, 481],
                [1198018800000, 591],
                [1198105200000, 608],
                [1198191600000, 459],
                [1198278000000, 234],
                [1198364400000, 1352],
                [1198450800000, 686],
                [1198537200000, 279],
                [1198623600000, 449],
                [1198710000000, 468],
                [1198796400000, 392],
                [1198882800000, 282],
                [1198969200000, 208],
                [1199055600000, 229],
                [1199142000000, 177],
                [1199228400000, 374],
                [1199314800000, 436],
                [1199401200000, 404],
                [1199487600000, 253],
                [1199574000000, 218],
                [1199660400000, 476],
                [1199746800000, 462],
                [1199833200000, 448],
                [1199919600000, 442],
                [1200006000000, 403],
                [1200092400000, 204],
                [1200178800000, 194],
                [1200265200000, 327],
                [1200351600000, 374],
                [1200438000000, 507],
                [1200524400000, 546],
                [1200610800000, 482],
                [1200697200000, 283],
                [1200783600000, 221],
                [1200870000000, 483],
                [1200956400000, 523],
                [1201042800000, 528],
                [1201129200000, 483],
                [1201215600000, 452],
                [1201302000000, 270],
                [1201388400000, 222],
                [1201474800000, 439],
                [1201561200000, 559],
                [1201647600000, 521],
                [1201734000000, 477],
                [1201820400000, 442],
                [1201906800000, 252],
                [1201993200000, 236],
                [1202079600000, 525],
                [1202166000000, 477],
                [1202252400000, 386],
                [1202338800000, 409],
                [1202425200000, 408],
                [1202511600000, 237],
                [1202598000000, 193],
                [1202684400000, 357],
                [1202770800000, 414],
                [1202857200000, 393],
                [1202943600000, 353],
                [1203030000000, 364],
                [1203116400000, 215],
                [1203202800000, 214],
                [1203289200000, 356],
                [1203375600000, 399],
                [1203462000000, 334],
                [1203548400000, 348],
                [1203634800000, 243],
                [1203721200000, 126],
                [1203807600000, 157],
                [1203894000000, 288]
            ];

            // first correct the timestamps - they are recorded as the daily
            // midnights in UTC+0100, but Flot always displays dates in UTC
            // so we have to add one hour to hit the midnights in the plot

            for (var i = 0; i < visitd.length; ++i) {
                visitd[i][0] += 60 * 60 * 1000;
            }

            // helper for returning the weekends in a period

            function weekendAreas(axes) {

                var markings = [],
                    d = new Date(axes.xaxis.min);

                // go to the first Saturday

                d.setUTCDate(d.getUTCDate() - ((d.getUTCDay() + 1) % 7))
                d.setUTCSeconds(0);
                d.setUTCMinutes(0);
                d.setUTCHours(0);

                var i = d.getTime();

                // when we don't set yaxis, the rectangle automatically
                // extends to infinity upwards and downwards

                do {
                    markings.push({
                        xaxis: {
                            from: i,
                            to: i + 2 * 24 * 60 * 60 * 1000
                        }
                    });
                    i += 7 * 24 * 60 * 60 * 1000;
                } while (i < axes.xaxis.max);

                return markings;
            }

            var options = {
                xaxis: {
                    mode: "time",
                    tickLength: 5
                },
                selection: {
                    mode: "x"
                },
                colors: ["#f46e0f", "#e8962e", "#E91E63", "#FFC107", "#797979"],
                grid: {
                    markings: weekendAreas,
                    tickColor: "#f5f5f5",
                    borderWidth: 1,
                    borderColor: "#eaeaea"
                }

            };

            var visitplot = $.plot("#flot-visitors", [visitd], options);

            var overview = $.plot("#flot-visit-overview", [visitd], {
                series: {
                    lines: {
                        show: true,
                        lineWidth: 1
                    },
                    shadowSize: 0
                },
                xaxis: {
                    ticks: [],
                    mode: "time"
                },
                yaxis: {
                    ticks: [],
                    min: 0,
                    autoscaleMargin: 0.1
                },
                selection: {
                    mode: "x"
                },
                colors: ["#f46e0f", "#e8962e", "#E91E63", "#FFC107", "#797979"],
                grid: {
                    tickColor: "#f5f5f5",
                    borderWidth: 1,
                    borderColor: "#eaeaea"
                }

            });

            // now connect the two

            $("#flot-visitors").bind("plotselected", function(event, ranges) {

                // do the zooming
                $.each(visitplot.getXAxes(), function(_, axis) {
                    var opts = axis.options;
                    opts.min = ranges.xaxis.from;
                    opts.max = ranges.xaxis.to;
                });
                visitplot.setupGrid();
                visitplot.draw();
                visitplot.clearSelection();

                // don't fire event on the overview to prevent eternal loop

                overview.setSelection(ranges, true);
            });

            $("#flot-visit-overview").bind("plotselected", function(event, ranges) {
                visitplot.setSelection(ranges);
            });

        }

        /* ------------------ Area Chart ------------------------*/
        if ($("#demoarea-chart #demoarea-container").length) {

            var data7_1 = [
                [1354586111100, 23],
                [1354587111100, 57],
                [1354588111100, 42],
                [1354589111100, 23],
                [1354590000000, 110],
                [1354591111100, 143],
                [1354592111100, 170],
                [1354593111100, 124],
                [1354594111100, 200],
                [1354595111100, 129],
                [1354596111100, 148],
                [1354597111100, 36]
            ];
            var data7_2 = [
                [1354586111100, 153],
                [1354587111100, 65],
                [1354588111100, 398],
                [1354589111100, 263],
                [1354590111000, 280],
                [1354591111100, 189],
                [1354592111100, 320],
                [1354593111100, 474],
                [1354594111100, 323],
                [1354595111100, 79],
                [1354596111100, 488],
                [1354597111100, 636]
            ];

            $.plot($("#demoarea-chart #demoarea-container"), [{
                data: data7_1,
                label: "This month",
                lines: {
                    fill: true
                }
            }, {
                data: data7_2,
                label: "Total balance",

                points: {
                    show: true
                },
                lines: {
                    show: true
                },
                yaxis: 2
            }], {
                series: {
                    lines: {
                        show: true,
                        fill: false
                    },
                    points: {
                        show: true,
                        lineWidth: 2,
                        fill: true,
                        fillColor: "#ffffff",
                        symbol: "circle",
                        radius: 5
                    },
                    shadowSize: 0
                },
                grid: {
                    hoverable: true,
                    clickable: true,
                    tickColor: "#f9f9f9",
                    borderWidth: 1,
                    borderColor: "#eeeeee"
                },
                colors: ["#e8962e", "#f46e0f", "#E91E63", "#FFC107", "#797979"],
                tooltip: true,
                tooltipOpts: {
                    defaultTheme: true
                },
                xaxis: {
                    mode: "time"
                },
                yaxes: [{
                    /* First y axis */
                }, {
                    /* Second y axis */
                    position: "right" /* left or right */
                }]
            });

        }

        /*-----------------------------------------------------*/
    };

    function labelFormatter(label, series) {
        return "<div style='font-size:8pt; text-align:center; padding:2px; color:white;'>" + label + "<br/>" + Math.round(series.percent) + "%</div>";
    }

    /******************************
     initialize respective scripts 
     *****************************/
    $(document).ready(function() {
        CRYPTONIA_SETTINGS.chartFlot();
    });

    $(window).resize(function() {});

    $(window).load(function() {});

});