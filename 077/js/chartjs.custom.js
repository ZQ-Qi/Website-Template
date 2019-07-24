$(function () {
    /**
     * Options for Line chart
     */
    var lineData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "Example dataset",
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [32, 52, 67, 64, 67, 77, 54]
            },
            {
                label: "Example dataset",
                fillColor: "rgba(23,112,233,0.5)",
                strokeColor: "rgba(23,112,233,0.7)",
                pointColor: "rgba(23,112,233,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(23,112,233,1)",
                data: [18, 34, 44, 32, 42, 53, 34]
            }
        ]
    };

    var lineOptions = {
        scaleShowGridLines: true,
        scaleGridLineColor: "rgba(0,0,0,.00)",
        scaleGridLineWidth: 1,
        bezierCurve: true,
        bezierCurveTension: 0.4,
        pointDot: true,
        pointDotRadius: 4,
        pointDotStrokeWidth: 1,
        pointHitDetectionRadius: 20,
        datasetStroke: false,
        datasetStrokeWidth: 1,
        datasetFill: true,
        responsive: true
    };
    var ctx = document.getElementById("linechart").getContext("2d");
    var myNewChart = new Chart(ctx).Line(lineData, lineOptions);

    /**
     * Options for Bar chart
     */
    var barOptions = {
        scaleBeginAtZero: true,
        scaleShowGridLines: true,
        scaleGridLineColor: "rgba(0,0,0,.00)",
        scaleGridLineWidth: 1,
        barShowStroke: false,
        barStrokeWidth: 1,
        barValueSpacing: 5,
        barDatasetSpacing: 1,
        responsive: true
    };

    /**
     * Data for Bar chart
     */
    var barData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "First dataset",
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,0.8)",
                highlightFill: "rgba(220,220,220,0.75)",
                highlightStroke: "rgba(220,220,220,1)",
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: "Second dataset",
                fillColor: "rgba(23,112,233,0.5)",
                strokeColor: "rgba(23,112,233,0.8)",
                highlightFill: "rgba(23,112,233,0.75)",
                highlightStroke: "rgba(23,112,233,1)",
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    };

    var ctx = document.getElementById("barchart").getContext("2d");
    var myNewChart = new Chart(ctx).Bar(barData, barOptions);

    /**
     * Options for Single Bar chart
     */
    var singleBarOptions = {
        scaleBeginAtZero: true,
        scaleShowGridLines: true,
        scaleGridLineColor: "rgba(0,0,0,.00)",
        scaleGridLineWidth: 1,
        barShowStroke: false,
        barStrokeWidth: 1,
        barValueSpacing: 5,
        barDatasetSpacing: 1,
        responsive: true
    };

    /**
     * Data for Bar chart
     */
    var singleBarData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "My Second dataset",
                fillColor: "rgba(23,112,233,0.5)",
                strokeColor: "rgba(23,112,233,0.8)",
                highlightFill: "rgba(23,112,233,0.75)",
                highlightStroke: "rgba(23,112,233,1)",
                data: [10, 20, 30, 40, 30, 50, 60]
            }
        ]
    };

    var ctx = document.getElementById("singleBarchat").getContext("2d");
    var myNewChart = new Chart(ctx).Bar(singleBarData, singleBarOptions);

    /**
     * Options for Sharp Line chart
     */
    var sharpLineData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "Example dataset",
                fillColor: "rgba(23,112,233,0.5)",
                strokeColor: "rgba(23,112,233,0.7)",
                pointColor: "rgba(23,112,233,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(23,112,233,1)",
                data: [33, 48, 40, 19, 54, 27, 54]
            }
        ]
    };

    var sharpLineOptions = {
        scaleShowGridLines: true,
        scaleGridLineColor: "rgba(0,0,0,.00)",
        scaleGridLineWidth: 1,
        bezierCurve: false,
        pointDot: true,
        pointDotRadius: 4,
        pointDotStrokeWidth: 1,
        pointHitDetectionRadius: 20,
        datasetStroke: false,
        datasetStrokeWidth: 1,
        datasetFill: true,
        responsive: true
    };

    var ctx = document.getElementById("sharpLinechart").getContext("2d");
    var myNewChart = new Chart(ctx).Line(sharpLineData, sharpLineOptions);

    var radarData = {
        labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(140,181,244,0.2)",
                strokeColor: "rgba(140,181,244,1)",
                pointColor: "rgba(140,181,244,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#23b7e5",
                data: [65, 59, 66, 45, 56, 55, 40]
            },
            {
                label: "My Second dataset",
                fillColor: "rgba(23,112,233,0.4)",
                strokeColor: "rgba(23,112,233,1)",
                pointColor: "rgba(23,112,233,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#23b7e5",
                data: [28, 12, 40, 19, 63, 27, 87]
            }
        ]
    };
   /**
     * Radar type chart
     */
    var radarOptions = {
        scaleShowLine: true,
        angleShowLineOut: true,
        scaleShowLabels: false,
        scaleBeginAtZero: true,
        angleLineColor: "rgba(0,0,0,.1)",
        angleLineWidth: 1,
        pointLabelFontFamily: "'Arial'",
        pointLabelFontStyle: "normal",
        pointLabelFontSize: 10,
        pointLabelFontColor: "#666",
        pointDot: true,
        pointDotRadius: 2,
        pointDotStrokeWidth: 1,
        pointHitDetectionRadius: 20,
        datasetStroke: true,
        datasetStrokeWidth: 1,
        datasetFill: true,
        responsive: true
    };

    var ctx = document.getElementById("radarChart").getContext("2d");
    var myNewChart = new Chart(ctx).Radar(radarData, radarOptions);

 /**
     * doughnut chart
     */
        var doughnutData = [
            {
                value: 20,
                color:"#50cdf4",
                highlight: "#ddd",
                label: "App"
            },
            {
                value: 120,
                color: "#23b7e5",
                highlight: "#ddd",
                label: "Software"
            },
            {
                value: 100,
                color: "#ddd",
                highlight: "#eee",
                label: "Laptop"
            }
        ];

        var doughnutOptions = {
            segmentShowStroke: true,
            segmentStrokeColor: "#fff",
            segmentStrokeWidth: 2,
            percentageInnerCutout: 45, // This is 0 for Pie charts
            animationSteps: 100,
            animationEasing: "easeOutBounce",
            animateRotate: true,
            animateScale: false,
            responsive: true
        };


        var ctx = document.getElementById("doughnutChart").getContext("2d");
        var myNewChart = new Chart(ctx).Doughnut(doughnutData, doughnutOptions);
 /**
     * polar chart
     */
var polarData = [
            {
                value: 120,
                color:"#50cdf4",
                highlight: "#ddd",
                label: "Amaze"
            },
            {
                value: 140,
                color: "#23b7e5",
                highlight: "#ddd",
                label: "Float"
            },
            {
                value: 100,
                color: "#ddd",
                highlight: "#eee",
                label: "Amaze WP"
            }
        ];

        var polarOptions = {
            scaleShowLabelBackdrop: true,
            scaleBackdropColor: "rgba(255,255,255,0.75)",
            scaleBeginAtZero: true,
            scaleBackdropPaddingY: 1,
            scaleBackdropPaddingX: 1,
            scaleShowLine: true,
            segmentShowStroke: true,
            segmentStrokeColor: "#fff",
            segmentStrokeWidth: 2,
            animationSteps: 100,
            animationEasing: "easeOutBounce",
            animateRotate: true,
            animateScale: false,
            responsive: true,

        };

        var ctx = document.getElementById("polarOptions").getContext("2d");
        var myNewChart = new Chart(ctx).PolarArea(polarData, polarOptions);


});


