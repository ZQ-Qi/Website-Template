require('chart.js');
(function() {
    "use strict";
    
    var Charts = {
        _HYPHY_REGEX: /-([a-z])/g,
        _cleanAttr: function (t) {
            delete t.chart, delete t.datasets, delete t.datasetsOptions, delete t.labels, delete t.options
        },
        doughnut: function (element) {
            var attrData = $.extend({}, $(element).data()),
                data = attrData.dataset ? eval(attrData.dataset) : {},
                dataOptions = attrData.datasetOptions ? eval("(" + attrData.datasetOptions + ")") : {},
                labels = attrData.labels ? eval(attrData.labels) : {},
                options = attrData.options ? eval("(" + attrData.options + ")") : {};

            Charts._cleanAttr(attrData);
            var datasets = $.extend({
                    data: data,
                    borderWidth: 2,
                    hoverBorderColor: "transparent"
                }, dataOptions),
                options = $.extend({
                    cutoutPercentage: 80,
                    legend: {
                        display: !1
                    },
                    animation: {
                        animateRotate: !1,
                        duration: 0
                    }
                }, options);
            new Chart(element.getContext("2d"), {
                type: "doughnut",
                data: {
                    datasets: [datasets],
                    labels: labels
                },
                options: options
            })
        },
        "spark": function (element) {
            var attrData = $.extend({}, $(element).data()),
          
                data = attrData.dataset ? eval(attrData.dataset) : [],
                datasetOptions = attrData.datasetOptions ? eval(attrData.datasetOptions) : [],
                labels = attrData.labels ? eval(attrData.labels) : {},
                options = attrData.options ? eval("(" + attrData.options + ")") : {},
                data = {
                    labels: labels,
                    datasets: data.map(function (t, a) {
                        return $.extend({
                            data: t,
                            fill: !0,
                            backgroundColor: "rgba(255,255,255,.3)",
                            borderColor: "#fff",
                            pointBorderColor: "#fff",
                            lineTension: .25,
                            pointRadius: 0
                        }, datasetOptions[a])
                    })
                };
            Charts._cleanAttr(attrData);
            var options = $.extend({
                animation: {
                    duration: 0
                },
                legend: {
                    display: !1
                },
                scales: {
                    xAxes: [{
                        display: !1
                    }],
                    yAxes: [{
                        display: !1
                    }]
                },
                tooltips: {
                    enabled: !1
                }
            }, options);
         
            new Chart(element.getContext("2d"), {
                type: $(element).data().chartType,
                data: data,
                options: options
            })
        },
        line: function (element) {
            var attrData = $.extend({}, $(element).data()),
                data = attrData.dataset ? eval(attrData.dataset) : [],
                datasetOptions = attrData.datasetOptions ? eval(attrData.datasetOptions) : [],
                labels = attrData.labels ? eval(attrData.labels) : {},
                options = attrData.options ? eval("(" + attrData.options + ")") : {},
                isDark = !!attrData.dark,
                data = {
                    labels: labels,
                    datasets: data.map(function (t, a) {
                        return $.extend({
                            data: t,
                            fill: !0,
                            backgroundColor: isDark ? "rgba(28,168,221,.03)" : "rgba(66,165,245,.2)",
                            borderColor: "#42a5f5",
                            pointBorderColor: "#fff",
                            lineTension: .25,
                            pointRadius: 0,
                            pointHoverRadius: 0,
                            pointHitRadius: 20
                        }, datasetOptions[a])
                    })
                };
            Charts._cleanAttr(attrData);
            var options = $.extend({
                maintainAspectRatio: !1,
                animation: {
                    duration: 0
                },
                legend: {
                    display: !1
                },
                scales: {
                    yAxes: [{
                        gridLines: {
                            color: isDark ? "rgba(255,255,255,.05)" : "rgba(0,0,0,.05)",
                            zeroLineColor: isDark ? "rgba(255,255,255,.05)" : "rgba(0,0,0,.05)",
                            drawBorder: !1
                        },
                        ticks: {
                            beginAtZero: !1,
                            fixedStepSize: 1e3,
                            fontColor: isDark ? "#a2a2a2" : "rgba(0,0,0,.4)",
                            fontSize: 14
                        }
                    }],
                    xAxes: [{
                        gridLines: {
                            display: !1
                        },
                        ticks: {
                            fontColor: isDark ? "#a2a2a2" : "rgba(0,0,0,.4)",
                            fontSize: 14
                        }
                    }]
                },
                tooltips: {
                    enabled: !0,
                    bodyFontSize: 14,
                    callbacks: {
                        title: function () {
                            return ""
                        },
                        labelColor: function () {
                            return {
                                backgroundColor: "#42a5f5",
                                borderColor: "#42a5f5"
                            }
                        }
                    }
                }
            }, options);
            new Chart(element.getContext("2d"), {
                type: "line",
                data: data,
                options: options
            })
        },
        bar: function (element) {
            var attrData = $.extend({}, $(element).data()),
                data = attrData.dataset ? eval(attrData.dataset) : [],
                datasetOptions = attrData.datasetOptions ? eval(attrData.datasetOptions) : [],
                labels = attrData.labels ? eval(attrData.labels) : {},
                options = attrData.options ? eval("(" + attrData.options + ")") : {},
                isDark = !!attrData.dark,
                data = {
                    labels: labels,
                    datasets: data.map(function (t, a) {
                        return $.extend({
                            data: t,
                            fill: !0,
                            backgroundColor: a % 2 ? "#42a5f5" : "#1bc98e",
                            borderColor: "transparent"
                        }, datasetOptions[a])
                    })
                };
            Charts._cleanAttr(attrData);
            var options = $.extend({
                maintainAspectRatio: !1,
                animation: {
                    duration: 0
                },
                legend: {
                    display: !1
                },
                scales: {
                    yAxes: [{
                        gridLines: {
                            color: isDark ? "rgba(255,255,255,.05)" : "rgba(0,0,0,.05)",
                            zeroLineColor: isDark ? "rgba(255,255,255,.05)" : "rgba(0,0,0,.05)",
                            drawBorder: !1
                        },
                        ticks: {
                            fixedStepSize: 25,
                            fontColor: isDark ? "#a2a2a2" : "rgba(0,0,0,.4)",
                            fontSize: 14
                        }
                    }],
                    xAxes: [{
                        gridLines: {
                            display: !1
                        },
                        ticks: {
                            fontColor: isDark ? "#a2a2a2" : "rgba(0,0,0,.4)",
                            fontSize: 14
                        }
                    }]
                },
                tooltips: {
                    enabled: !0,
                    bodyFontSize: 14
                }
            }, options);
            new Chart(element.getContext("2d"), {
                type: "bar",
                data: data,
                options: options
            })
        },
        pie: function (element) {
            var attrData = $.extend({}, $(element).data()),
                data = attrData.dataset ? eval(attrData.dataset) : [],
                datasetOptions = attrData.datasetOptions ? eval(attrData.datasetOptions) : [],
                labels = attrData.labels ? eval(attrData.labels) : {},
                options = attrData.options ? eval("(" + attrData.options + ")") : {},
                isDark = !!attrData.dark,
                data = {
                    labels: labels,
                    datasets: data.map(function (t, a) {
                        return $.extend({
                            data: t,
                            fill: !0,
                            backgroundColor: a % 2 ? "#42a5f5" : "#1bc98e",
                            borderColor: "transparent"
                        }, datasetOptions[a])
                    })
                };
            Charts._cleanAttr(attrData);
            var options = $.extend({
                maintainAspectRatio: !1,
                animation: {
                    duration: 0
                },
              
             
                tooltips: {
                    enabled: !0,
                    bodyFontSize: 14
                }
            }, options);
            new Chart(element.getContext("2d"), {
                type: "pie",
                data: data,
                options: options
            })
        },
        radar: function (element) {
            var attrData = $.extend({}, $(element).data()),
                data = attrData.dataset ? eval(attrData.dataset) : [],
                datasetOptions = attrData.datasetOptions ? eval(attrData.datasetOptions) : [],
                labels = attrData.labels ? eval(attrData.labels) : {},
                options = attrData.options ? eval("(" + attrData.options + ")") : {},
                isDark = !!attrData.dark,
                data = {
                    labels: labels,
                    datasets: data.map(function (t, a) {
                        return $.extend({
                            data: t,
                            fill: !0,
                            backgroundColor: a % 2 ? "#42a5f5" : "#1bc98e",
                            borderColor: "transparent"
                        }, datasetOptions[a])
                    })
                };
            Charts._cleanAttr(attrData);
            var options = $.extend({
                maintainAspectRatio: !1,
                animation: {
                    duration: 0
                },
                legend: {
                    display: !1
                },
                scales: {
                    yAxes: [{
                        gridLines: {
                            color: isDark ? "rgba(255,255,255,.05)" : "rgba(0,0,0,.05)",
                            zeroLineColor: isDark ? "rgba(255,255,255,.05)" : "rgba(0,0,0,.05)",
                            drawBorder: !1
                        },
                        ticks: {
                            fixedStepSize: 25,
                            fontColor: isDark ? "#a2a2a2" : "rgba(0,0,0,.4)",
                            fontSize: 14
                        }
                    }],
                    xAxes: [{
                        gridLines: {
                            display: !1
                        },
                        ticks: {
                            fontColor: isDark ? "#a2a2a2" : "rgba(0,0,0,.4)",
                            fontSize: 14
                        }
                    }]
                },
                tooltips: {
                    enabled: !0,
                    bodyFontSize: 14
                }
            }, options);
            new Chart(element.getContext("2d"), {
                type: "radar",
                data: data,
                options: options
            })
        }
    };

    var initCharts = function (){
        $("[data-chart]").each(function () {
            $(this).is(":visible")
            && !$(this).hasClass("js-chart-drawn")
            && (Charts[$(this).attr("data-chart")](this), $(this).addClass("js-chart-drawn"))
        })
    };

    initCharts();

    //if chart inside a tab
    $('a[data-toggle="tab"], a[data-toggle="pill"]').on('shown.bs.tab', function (e) {
        initCharts();
    });
   
}());

