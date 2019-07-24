/**

 * donutChart
 * SplineArea
 * StackedColumn
 * Spline
 * bubbleChart
 * mapChart
 * navigationActive
 * memberActive
 * lineChart
 * radarChart
 * dropdownMenu
 * tabNav
 * tabMessager
 * toggleInbox
 * scrollbarMember
 * scrollbarMessage
 * scrollbarMessageBox
 * scrollbarTable
 * counter
 * progressBar
 * detectViewport
 * setWidth
 * sendMessage
 * waveButton
 * retinaLogos
 * removePreload

*/
;(function($) {

   'use strict'

        var isMobile = {
            Android: function() {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function() {
                return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
            }
        };

        var donutChart = function() {
            //DONUT CHART
            var donut = new Morris.Donut({
                element: 'sales-chart',
                resize: true,
                colors: ["#ff2d78", "#04aec6", "#4c418b"],
                data: [
                    {label: "CODE", value: 20},
                    {label: "UI DESIGN", value: 35},
                    {label: "UX DESIGN", value: 45}
                ],
                options: {
                    segmentShowStroke : true,
                    StrokeColor : "#c5c5c5",
                    fill: "#c5c5c5",
                    percentageInnerCutout : 50,
                    animationSteps : 100,
                    animationEasing : "easeOutBounce",
                    animateRotate : true,
                    responsive: true,
                    maintainAspectRatio: true,
                    showScale: true,
                    animateScale: true,
                    responsive: true,
                    resize: true,
                    segmentShowStroke : true,
                    segmentStrokeColor : "#fff",
                    segmentStrokeWidth : 0,
                    tooltipCornerRadius: 2,
                },
                hideHover: 'auto',
            });
        }; // Donut Chart

        var SplineArea = function () {
            CanvasJS.addColorSet("greenShades",
                        [//colorSet Array
                        "#6256a9",
                        "#00c7e3",
                        "#7065b6",
                        "#e02c73",            
                        ]);
              
            var chart = new CanvasJS.Chart("chartStatistics",
                {
                    backgroundColor: "transparent",
                    colorSet:  "greenShades",
                    responsive: false,
                    animationEnabled: true,
                    axisX:{
                        gridColor: "#24262a",
                        gridThickness: 1 ,
                        tickColor: "transparent",
                        LabelFontColor: "#898989",
                        labelFontSize: "12",
                        labelFontFamily: "Montserrat",
                        maximum: 75,
                        minimum: 5,
                        lineThickness: 1,
                        lineColor: "#24262a",
                        tickLength: 15,
                        tickColor: "transparent",
                    },
                    axisY:{
                        gridColor: "#24262a" ,
                        gridThickness: 1,
                        tickColor: "transparent",
                        labelFontFamily: "Montserrat",
                        LabelFontColor: "#898989",
                        labelFontSize: "12",
                        maximum: 2000,
                        minimum:0,
                        interval: 500,
                        valueFormatString: "####",
                        lineThickness: 1,
                        lineColor: "#24262a",
                        tickLength: 15,
                        tickColor: "transparent",
                    },
                    data: [{        
                        type: "column",
                        dataPoints: [
                        {label: "JAN", x: 10, y: 0},
                        {label: "FEB", x: 20, y: 0},
                        {label: "MAR", x: 30, y: 2000},
                        {label: "APR", x: 40, y: 0},
                        {label: "MAY", x: 50, y: 0},
                        {label: "JUN", x: 60, y: 0},
                        {label: "JUL", x: 70, y: 0},
                    ]},
                    {        
                        type: "splineArea",
                        markerColor: "transparent",
                        fillOpacity: 0.9,
                        bevelEnabled: true,
                        lineColor:"#04aec6",
                        dataPoints: [
                            {label: "",x: 0, y: 750},
                            {label: "JAN",x: 10, y: 700},
                            {label: "FEB",x: 20, y: 1400},
                            {label: "MAR",x: 30, y: 700},
                            {label: "APR",x: 40, y: 850},
                            {label: "MAY",x: 50, y: 1350},
                            {label: "JUN",x: 60, y: 1000},
                            {label: "JUL",x: 70, y: 900},
                            {label: "JUL",x: 80, y: 1100},
                    ]},
                    {        
                        type: "splineArea",
                        markerColor: "transparent",
                        fillOpacity: 0.9,
                        lineColor:"#6c61b1",
                        bevelEnabled: true,
                        dataPoints: [
                            {label: "",x: 0, y: 1000},
                            {label: "JAN",x: 10, y: 1122},
                            {label: "FEB",x: 20, y: 800},
                            {label: "MAR",x: 30, y: 1397},
                            {label: "APR",x: 40, y: 600},
                            {label: "MAY",x: 50, y: 700},
                            {label: "JUN",x: 60, y: 600},
                            {label: "JUL",x: 70, y: 1010},
                            {label: "JUL",x: 80, y: 1000},
                    ]},
                    {        
                        type: "splineArea",
                        markerColor: "transparent",
                        fillOpacity: 0.9,
                        bevelEnabled: true,
                        lineColor:"#f72771",
                        dataPoints: [
                            {label: "",x: 0, y: 400},
                            {label: "JAN",x: 10, y: 550},
                            {label: "FEB",x: 20, y: 340},
                            {label: "MAR",x: 30, y: 450},
                            {label: "APR",x: 40, y: 250},
                            {label: "MAY",x: 50, y: 900},
                            {label: "JUN",x: 60, y: 550},
                            {label: "JUL",x: 70, y: 700},
                            {label: "",x: 80, y: 600}, 
                    ]}
                    ]
                });
            chart.render();
        }; // Spline Area

        var StackedColumn = function () {
            CanvasJS.addColorSet("greenShades",
                        [//colorSet Array
                        "#4c418b",
                        "#00bcd5"           
                        ]);
            var chart = new CanvasJS.Chart("chart-stackedColumn",
                {
                    backgroundColor: "transparent",
                    colorSet:  "greenShades",
                    animationEnabled: true,
                    dataPointMaxWidth: 55,
                    resize: true,
                    toolTip:{
                        shared: true,
                    },
                    axisX:{
                        gridThickness: 0 ,
                        tickColor: "transparent",
                        LabelFontColor: "#898989",
                        labelFontSize: "12",
                        labelFontFamily: "Montserrat",
                        lineThickness: 0
                    },
                    axisY:{
                        gridThickness: 0,
                        tickColor: "transparent",
                        LabelFontColor: "#898989",
                        labelFontFamily: "Montserrat",
                        labelFontSize: "12",
                        maximum: 2000,
                        interval: 500,
                        valueFormatString: "####",
                        lineThickness: 0
                    },
                    data: [{
                        type: "stackedColumn",
                        name: "UI",
                        dataPoints: [
                            {  y: 800 , label: "Sun"},
                            {  y: 1250, label: "Mon" },
                            {  y: 600, label: "Tue" },
                            {  y: 800, label: "Wed" },
                            {  y: 200, label: "Thu"},
                            {  y: 1150, label: "Fri"},
                            {  y: 650, label: "Sat"}
                    ]}, 
                        {
                        type: "stackedColumn",
                        name: "UX",
                        dataPoints: [
                        {  y: 100 , label: "Sun"},
                        {  y: 400, label: "Mon" },
                        {  y: 1300, label: "Tue" },
                        {  y: 450, label: "Wed" },
                        {  y: 250, label: "Thu"},
                        {  y: 300, label: "Fri"},
                        {  y: 300, label: "Sat"}
                        ]}
                    ]
                });
            chart.render();
        }; // Stacked Column

        var Spline = function () {
            CanvasJS.addColorSet("greenShades",
                        [//colorSet Array
                        "#ff2d78",
                        "#00c7e3",
                        "#7065b6",           
                        ]);
            var chart = new CanvasJS.Chart("chart-spline",
                {
                    backgroundColor: "transparent",
                    colorSet:  "greenShades",
                    animationEnabled: true,
                    toolTip:{
                        shared: true,
                    },
                        axisX:{
                            gridColor: "#24262a",
                            gridThickness: 1 ,
                            tickColor: "transparent",
                            LabelFontColor: "#898989",
                            labelFontSize: "12",
                            labelFontFamily: "Montserrat",
                            maximum: 61,
                            minimum:0,
                            lineThickness: 1,
                            lineColor: "#24262a",
                        },
                        axisY:{
                            gridColor: "#24262a" ,
                            gridThickness: 1,
                            tickColor: "transparent",
                            LabelFontColor: "#898989",
                            labelFontFamily: "Montserrat",
                            labelFontSize: "12",
                            maximum: 50,
                            interval: 10,
                            minimum:0,
                            valueFormatString: "####",
                            lineThickness: 1,
                            lineColor: "#24262a",
                        },
                    data: [{        
                        type: "spline",
                        markerColor: "transparent",
                        fillOpacity: 0.9,
                        bevelEnabled: true,
                        lineColor:"#eee",
                        name: "CODE",
                        dataPoints: [
                            {label: "Sun",x: 0, y: 21},
                            {label: "Mon",x: 10, y: 17},
                            {label: "Tue",x: 20, y: 31},
                            {label: "Wed",x: 30, y: 10},
                            {label: "Thu",x: 40, y: 18},
                            {label: "Fri",x: 50, y: 12},
                            {label: "Sat",x: 60, y: 22},
                        ]
                    },
                    {        
                        type: "spline",
                        markerColor: "transparent",
                        fillOpacity: 0.9,
                        lineColor:"#6c61b1",
                        bevelEnabled: true,
                         name: "UI Design",
                        dataPoints: [
                            {label: "Sun",x: 0, y: 22},
                            {label: "Mon",x: 10, y: 13},
                            {label: "Tue",x: 20, y: 39},
                            {label: "Wed",x: 30, y: 18},
                            {label: "Thu",x: 40, y: 23},
                            {label: "Fri",x: 50, y: 39},
                            {label: "Sat",x: 60, y: 18},
                        ]
                    },
                    {        
                        type: "spline",
                        markerColor: "transparent",
                        fillOpacity: 0.9,
                        bevelEnabled: true,
                        lineColor:"#f72771",
                         name: "UX Design",
                        dataPoints: [
                            {label: "Sun",x: 0, y: 33},
                            {label: "Mon",x: 10, y: 21},
                            {label: "Tue",x: 20, y: 27},
                            {label: "Wed",x: 30, y: 18},
                            {label: "Thu",x: 40, y: 42},
                            {label: "Fri",x: 50, y: 28},
                            {label: "Sat",x: 60, y: 36},
                        ]
                    }]
                });
            chart.render();
        }; // Spline

        var bubbleChart = function () {
            CanvasJS.addColorSet("greenShades",
                        [//colorSet Array
                        "#ff2d78",
                        "#00c7e3",
                        "#7065b6",           
                        ]);
            var chart = new CanvasJS.Chart("bubble-chart",
                {
                  zoomEnabled: true,
                  colorSet:  "greenShades",
                  backgroundColor: "transparent",
                  animationEnabled: true,
                  axisX: {
                    maximum: 204,
                    minimum: -200,
                    gridThickness: 1,
                    tickThickness: 1,
                    gridColor: "#24262a",
                    gridThickness: 1 ,
                    tickColor: "transparent",
                    LabelFontColor: "#898989",
                    labelFontSize: "12",
                    labelFontFamily: "Montserrat",
                    lineThickness: 1,
                    lineColor: "#24262a",
                  },
                  axisY:{              
                    gridColor: "#24262a" ,
                    gridThickness: 1,
                    tickColor: "transparent",
                    LabelFontColor: "#898989",
                    labelFontFamily: "Montserrat",
                    labelFontSize: "12",
                    maximum: 150,
                    interval: 50,
                    minimum: -100,
                    lineThickness: 1,
                    lineColor: "#24262a",
                  },

                  data: [
                  {        
                    type: "bubble",     
                    toolTipContent: "<span style='\"'color: #ff2d78;'\"'><strong>Code</strong></span>",
                    dataPoints: [
                    { x: -145, y: -65, z:7},
                    { x: -142, y: 95, z:2},
                    { x: -127, y: 5, z:4},
                    { x: -70, y: -27, z:3},
                    { x: -78, y: -53, z:7},
                    { x: -60, y: -70, z:1},
                    { x: -60, y: 20, z:4},
                    { x: -70, y: 95, z:1},
                    { x: -60, y: 110, z:7},
                    { x: -35, y: 20, z:12},
                    { x: -20, y: -20, z:3},
                    { x: -8, y: -28, z:1},
                    { x: 16, y: 43, z:4},
                    { x: 24, y: -8, z:6},
                    { x: 46, y: -92, z:1},
                    { x: 68, y: -77, z:5},
                    { x: 115, y: 25, z:3},
                    { x: 120, y: 95, z:8},
                    { x: 126, y: 47, z:2},
                    { x: 130, y: 76, z:1},
                    { x: 130, y: -90, z:4},
                    ]
                    },
                   
                   {
                    type: "bubble",     
                    toolTipContent: "<span style='\"'color: #00c7e3;'\"'><strong>UI Design</strong></span>",
                    dataPoints: [
                    { x: -175, y: 1000, z:100},
                    { x: -175, y: 10, z:4},
                    { x: -148, y: 95, z:2},
                    { x: -130, y: 45, z:8},
                    { x: -140, y: -40, z:12},
                    { x: -85, y: 80, z:8},
                    { x: -75, y: 53, z:4},
                    { x: -52, y: 54, z:12},
                    { x: -52, y: -52, z:10},
                    { x: -30, y: 5, z:12},
                    { x: -32, y: 70, z:4},
                    { x: -25, y: 84, z:4},
                    { x: 2, y: -15, z:8},
                    { x: 2, y: 65, z:8},
                    { x: 16, y: 26, z:12},
                    { x: 20, y: 50, z:4},
                    { x: 18, y: 78, z:4},
                    { x: 40, y: 42, z:8},
                    { x: 40, y: -75, z:8},
                    { x: 54, y: 46, z:8},
                    { x: 70, y: 68, z:3},
                    { x: 126, y: -20, z:10},
                    { x: 138, y: 10, z:8},
                    { x: 160, y: 30, z:4},
                    { x: 162, y: 49, z:2},
                    ]
                    },
                                     {
                    type: "bubble",     
                    toolTipContent: "<span style='\"'color: #7065b6;'\"'><strong>UX Design</strong></span>",
                    dataPoints: [
                    { x: -155, y: 20, z:4},
                    { x: -130, y: 110, z:8},
                    { x: -105, y: 15, z:5},
                    { x: -105, y: 82, z:2},
                    { x: -96, y: -55, z:5},
                    { x: -90, y: -15, z:8},
                    { x: -73, y: -22, z:4},
                    { x: -82, y: 35, z:3},
                    { x: -75, y: 95, z:1},
                    { x: -35, y: -22, z:3},
                    { x: -40, y: 88, z:1},
                    { x: -12, y: 8, z:3},
                    { x: -5, y: 47, z:4},
                    { x: 47, y: 0, z:6},
                    { x: 57, y: -47, z:4},
                    { x: 78, y: -19, z:8},
                    { x: 86, y: -77, z:6},
                    { x: 100, y: 7, z:6},
                    { x: 90, y: 67, z:3},
                    { x: 137, y: 76, z:1},
                    { x: 140, y: 38, z:3},
                    { x: 147, y: 52, z:2},
                    ]
                      },
                  ]
                });
            chart.render();
        }; // Bubble Chart

        var mapChart = function() {
            /**
             * Define SVG path for target icon
             */
            var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

            /**
             * Create the map
             */
            var map = AmCharts.makeChart( "chartdiv", {
              "type": "map",
              "projection": "mercator",
              "theme": "theme",
              "imagesSettings": {
                "rollOverColor": "#fff",
                "rollOverScale": 3,
                "selectedScale": 3,
                "selectedColor": "#fff",
                
              },

              "areasSettings": {
                "unlistedAreasColor": "#2e2f32",
                "outlineThickness": 0.1
              },

              "dataProvider": {
                "map": "worldLow",
                "images": [ {
                  "svgPath": targetSVG,
                  "zoomLevel": 5,
                  "scale": 0.5,
                  "title": "North America",
                  "latitude": 51.980450,
                  "longitude": -85.684635,
                  "color": "#52488b"
                }, {
                  "svgPath": targetSVG,
                  "zoomLevel": 5,
                  "scale": 0.5,
                  "title": "Canada",
                  "latitude": 53.656331,
                  "longitude": -92.694402,
                  "color": "#00afc6"
                }, {
                  "svgPath": targetSVG,
                  "zoomLevel": 5,
                  "scale": 0.5,
                  "title": "United States",
                  "latitude": 49.793445,
                  "longitude": -97.481657,
                  "color": "#ff2d78"
                },
                {
                  "svgPath": targetSVG,
                  "zoomLevel": 5,
                  "scale": 0.5,
                  "title": "South America",
                  "latitude": -2.091623,
                  "longitude": -64.758518,
                  "color": "#00afc6"
                },
                {
                  "svgPath": targetSVG,
                  "zoomLevel": 5,
                  "scale": 0.5,
                  "title": "South Africa",
                  "latitude": -23.851236,
                  "longitude": 23.760990,
                  "color": "#52488b"
                },
                {
                  "svgPath": targetSVG,
                  "zoomLevel": 5,
                  "scale": 0.5,
                  "title": "Bostwana",
                  "latitude": -18.300450,
                  "longitude": 25.132072,
                  "color": "#ff2d78"
                },
                {
                  "svgPath": targetSVG,
                  "zoomLevel": 5,
                  "scale": 0.5,
                  "title": "Turkey",
                  "latitude": 40.399815,
                  "longitude": 40.521479,
                  "color": "#52488b"
                },{
                  "svgPath": targetSVG,
                  "zoomLevel": 5,
                  "scale": 0.5,
                  "title": "Georgia",
                  "latitude": 42.671388,
                  "longitude": 42.299108,
                  "color": "#00afc6"
                },{
                  "svgPath": targetSVG,
                  "zoomLevel": 5,
                  "scale": 0.5,
                  "title": "Rusia",
                  "latitude": 68.657977,
                  "longitude": 129.138220,
                  "color": "#00afc6"
                },{
                  "svgPath": targetSVG,
                  "zoomLevel": 5,
                  "scale": 0.5,
                  "title": "Australia",
                  "latitude": -23.521443,
                  "longitude": 138.949597,
                  "color": "#00afc6"
                },
                ]
              },
              "export": {
                "enabled": true
              }
            } );
        }; // Map Chart

        var lineChart = function() {
            CanvasJS.addColorSet("greenShades",
                        [//colorSet Array
                        "#04aec6",
                        "#ff2d78",
                        "#00c7e3",
                        "#7065b6",           
                        ]);
            var chart = new CanvasJS.Chart("lineChart",
            {
              zoomEnabled: true,
              colorSet:  "greenShades",
              backgroundColor: "transparent",
              animationEnabled: true,
              dataPointMaxWidth: 3,
              axisX: {
                maximum: 111,
                minimum: 0,
                
                gridThickness: 1,
                tickThickness: 1,
                gridColor: "#252628",
                gridThickness: 1 ,
                tickColor: "transparent",
                LabelFontColor: "#898989",
                labelFontSize: "12",
                labelFontFamily: "Montserrat",
                lineThickness: 1,
                lineColor: "#252628",
              },
              axisY:{              
                gridColor: "#252628" ,
                gridThickness: 1,
                tickColor: "transparent",
                LabelFontColor: "#898989",
                labelFontFamily: "Montserrat",
                labelFontSize: "12",
                maximum: 20000,
                interval: 5000,
                valueFormatString: "#,##0,.",
                suffix:"K",
                lineThickness: 1,
                lineColor: "#252628",
              },

               data: [
               {
                type: "column",
                dataPoints: [
                {label: "Jun",x: 0, y: 0},
                {label: "Jul",x: 10, y: 0},
                {label: "Aug",x: 20, y: 0},
                {label: "Sep",x: 30, y: 0},
                {label: "Oct",x: 40, y: 0},
                {label: "Nov",x: 50, y: 0},
                {label: "Dec",x: 60, y: 0},
                {label: "Jan",x: 70, y: 0},
                {label: "Feb",x: 80, y: 0},
                {label: "Mar",x: 90, y: 12550},
                {label: "Apr",x: 100, y: 0},
                {label: "May",x: 110, y: 0},
                ]
              },
              {
                type: "line",

                dataPoints: [
                {label: "Jun",x: 0, y: 1600},
                {label: "Jul",x: 10, y: 2300},
                {label: "Aug",x: 20, y: 1700},
                {label: "Sep",x: 30, y: 3150},
                {label: "Oct",x: 40, y: 2000},
                {label: "Nov",x: 50, y: 2100},
                {label: "Dec",x: 60, y: 1750},
                {label: "Jan",x: 70, y: 2700},
                {label: "Feb",x: 80, y: 4000},
                {label: "Mar",x: 90, y: 4000},
                {label: "Apr",x: 100, y: 5000},
                {label: "May",x: 110, y: 8200},
                ]
              },
              {
                type: "line",

                dataPoints: [
                {label: "Jun",x: 0, y: 5050},
                {label: "Jul",x: 10, y: 4180},
                {label: "Aug",x: 20, y: 5100},
                {label: "Sep",x: 30, y: 6500},
                {label: "Oct",x: 40, y: 5500},
                {label: "Nov",x: 50, y: 7050},
                {label: "Dec",x: 60, y: 6000},
                {label: "Jan",x: 70, y: 6800},
                {label: "Feb",x: 80, y: 7450},
                {label: "Mar",x: 90, y: 12900},
                {label: "Apr",x: 100, y: 13300},
                {label: "May",x: 110, y: 16800},
                ]
              }, {
                type: "line",

                dataPoints: [
                {label: "Jun",x: 0, y: 2800},
                {label: "Jul",x: 10, y: 2700},
                {label: "Aug",x: 20, y: 4200},
                {label: "Sep",x: 30, y: 4250},
                {label: "Oct",x: 40, y: 2650},
                {label: "Nov",x: 50, y: 4000},
                {label: "Dec",x: 60, y: 5300},
                {label: "Jan",x: 70, y: 4100},
                {label: "Feb",x: 80, y: 5000},
                {label: "Mar",x: 90, y: 6200},
                {label: "Apr",x: 100, y: 9100},
                {label: "May",x: 110, y: 12500},
                ]
              }
              ]
            });

            chart.render();
        }; // Line Chart

        var radarChart = function() {
            var ctx6 = document.getElementById("radarChart").getContext("2d");
            var data6 = {
                labels: ["UI", "Psd", "Css", "Designing", "UX", "Java", "Html"],
                datasets: [
                    
                    {
                        fillColor: "rgba(97,100,193,0.8)",
                        strokeColor: "rgba(97,100,193,1)",
                        pointColor: "rgba(97,100,193,1)",
                        pointStrokeColor: "rgba(97,100,193,0)",
                        pointHighlightFill: "rgba(97,100,193,1)",
                        pointHighlightStroke: "rgba(97,100,193,1)",
                        data: [28, 78, 75, 19, 96, 27, 100]
                    },
                    {
                        backgroundColor:"rgba(147, 49, 115, 0.8)",
                        fillColor: "rgba(147, 49, 115, 0.8)",
                        strokeColor: "rgba(147, 49, 115, 0.8)",
                        pointColor: "rgba(147, 49, 115, 0.8)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(147, 49, 115, 0.8)",
                        data: [65, 59, 90, 81, 26, 55, 40]
                    }
                ]
            };
            
            var myRadarChart = new Chart(ctx6).Radar(data6, {
                scaleShowLine : true,
                angleShowLineOut : true,
                scaleShowLabels : false,
                scaleBeginAtZero : true,
                angleLineColor : "rgba(0,0,0,.1)",
                angleLineWidth : 1,
                pointLabelFontFamily : "'Oswald'",
                pointLabelFontStyle : "normal",
                pointLabelFontSize : 12,
                pointLabelFontWeight : 500,
                pointLabelFontColor : "#666",
                pointDot : false,
                pointDotRadius : 3,
                tooltipCornerRadius: 2,
                pointDotStrokeWidth : 1,
                pointHitDetectionRadius : 20,
                datasetStroke : true,
                datasetStrokeWidth : 2,
                datasetFill : true,
                legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
                responsive: true,
            });
        }; // Radar Chart

        var dropdownMenu = function() {
            var pull = $(".box .pull-right i"),
                user = $(".navbar-top ul.info-right li.user")
                pull.on('click',function() {
                    $(this).parent(".pull-right").toggleClass('open');
                    $(this).parent(".pull-right").find('.dropdown-menu').toggleClass('active');
                });
                user.on('click',function() {
                    $(this).toggleClass('open');
                    $(this).find('.dropdown-menu').toggleClass('active');
                });
        }; // Dropdown Menu

        var navigationActive = function() {
            var button = $(".top-button");
            button.on('click',function() {
                $(this).closest('body').children(".vertical-navigation").toggleClass('active').delay(800);
                $(this).closest('body').children('main').toggleClass('active');
                $(this).parent('.curren-menu').children('.logo').toggleClass('active');
                button.toggleClass('active');
                $(this).closest('body').children(".vertical-navigation").toggleClass('show');
            });
            var buttonNav = $('.vertical-navigation.left ul.sidebar-nav > li');
                buttonNav.on('click', function(event) {
                    $(this).closest('body').children(".vertical-navigation").removeClass('active');
                    $(this).closest('body').children('main').removeClass('active');
                    $(this).closest('body').find('.curren-menu').children('.logo').removeClass('active');
                event.preventDefault();
            });
        }; // Navigation Active

        var memberActive = function() {
            var button = $(".button-menu-right");
                button.on('click',function() {
                    $(this).closest('body').children(".member-status").toggleClass('closed');
                     $(this).closest('body').children("main").toggleClass('open');
                    button.toggleClass('active');
                });
        }; // Member Active

        var tabNav = function() {
            var speed = 1000;
            $('.vertical-navigation').each(function() {
                $(this).find('.sidebar-nav').children().first().addClass('active'),
                $(this).closest('body').find('main').children('section').first().show(),
                $(this).find('.sidebar-nav').children('li').on('click', function(e){
                    var liActive = $(this).index();
                    $(this).addClass('active').siblings().removeClass('active');
                    $(this).addClass('active').closest('body').find('main').children('section').eq(liActive).fadeIn(1000).show().siblings().hide();
                    e.preventDefault();
                });
            });
        }; // Tab Nav

        var tabMessager = function() {
            var speed = 1000;
            $('.member-status').each(function() {
            $(this).find('.member-tab').children().first().addClass('active'),
            $(this).children('.sidebar-member').find('.scroll').first().show().siblings().hide(),
            $(this).find('.member-tab').children('li').on('click', function(e){

                var liActive = $(this).index(),
                contentActive = $(this).siblings().removeClass('active').parents('.sidebar-member').children('.content-tab').children().eq(liActive);

                $(this).addClass('active').closest('.sidebar-member').find('.content-tab').children().eq(liActive).fadeIn(1000).show().siblings().hide();
                e.preventDefault();
            });
            });
        }; // Tab Message

        var calendar = function() {       
            $('#box-calendar').fullCalendar({
            header: {
                left: '',
                right: ''
            },
                defaultDate: '2017-11-12',
                navLinks: true, // can click day/week names to navigate views
                editable: true,
                eventLimit: true, // allow "more" link when too many events
                events: [
                    {
                        title: 'EVENT ONE',
                        start: '2017-11-09',
                        end: '2017-11-11',
                        backgroundColor: '#6256a9',
                        borderColor    : '#6256a9'
                    },
                    {
                        id: 999,
                        title: 'EVENT TWO',
                        start: '2017-11-11',
                        end: '2017-11-11',
                        backgroundColor: '#04aec6',
                        borderColor    : '#04aec6'
                    },
                    {
                        id: 999,
                        title: 'EVENT THREE',
                        start: '2017-11-14',
                        end: '2017-11-16',
                        backgroundColor: '#3d5afe',
                        borderColor    : '#3d5afe'
                    },
                    {
                        title: 'EVENT FOUR',
                        start: '2017-11-16',
                        end: '2017-11-18',
                        backgroundColor: '#ff4081',
                        borderColor    : '#ff4081'
                    },
                    {
                        title: 'EVENT FIVE',
                        start: '2017-11-24',
                        end: '2017-11-26',
                        backgroundColor: '#f09238',
                        borderColor    : '#f09238'
                    }
                ]
            });
        }; // Calendar

        var calendar_s2 = function() {
            $(function () {

                /* initialize the external events
                 -----------------------------------------------------------------*/
                function init_events(ele) {
                  ele.each(function () {

                    // create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
                    // it doesn't need to have a start or end
                    var eventObject = {
                      title: $.trim($(this).text()) // use the element's text as the event title
                    }

                    // store the Event Object in the DOM element so we can get to it later
                    $(this).data('eventObject', eventObject)

                    // make the event draggable using jQuery UI
                    $(this).draggable({
                      zIndex        : 1070,
                      revert        : true, // will cause the event to go back to its
                      revertDuration: 0  //  original position after the drag
                    })

                  })
                }

                init_events($('#external-events div.external-event'))

                /* initialize the calendar
                 -----------------------------------------------------------------*/
                //Date for the calendar events (dummy data)
                var date = new Date()
                var d    = date.getDate(),
                    m    = date.getMonth(),
                    y    = date.getFullYear()
                $('#box-calendar').fullCalendar({
                    header    : {
                        left  : '',
                        center: '',
                        right : ''
                    },
                    buttonText: {
                        today: 'today',
                        month: 'month',
                        week : 'week',
                        day  : 'day'
                    },
                    //Random default events
                    events    : [
                        {
                          title          : 'EVENT ONE',
                          start          : new Date(y, m, 9),
                          end            : new Date(y, m, 11),
                          backgroundColor: '#6256a9',
                          borderColor    : '#6256a9'
                        },
                        {
                          title          : 'EVENT TWO',
                          start          : new Date(y, m,11),
                          end            : new Date(y, m, 11),
                          allDay         : false,
                          backgroundColor: '#04aec6', 
                          borderColor    : '#04aec6' 
                        },
                        {
                          title          : 'EVENT THREE',
                          start          : new Date(y, m, 15),
                          end            : new Date(y, m, 17),
                          allDay         : false,
                          backgroundColor: '#3d5afe',
                          borderColor    : '#3d5afe'
                        },
                        {
                          title          : 'EVENT FOUR',
                          start          : new Date(y, m, 17),
                          end            : new Date(y, m, 19),
                          allDay         : false,
                          backgroundColor: '#ff4081',
                          borderColor    : '#ff4081'
                        },
                        {
                          title          : 'EVENT FIVE',
                          start          : new Date(y, m, 24),
                          end            : new Date(y, m, 26),
                          allDay         : false,
                          backgroundColor: '#f09238', 
                          borderColor    : '#f09238' 
                        }
                    ],
                    editable  : true,
                    droppable : true, // this allows things to be dropped onto the calendar !!!
                    drop      : function (date, allDay) { 

                        // this function is called when something is dropped
                        // retrieve the dropped element's stored Event Object
                        var originalEventObject = $(this).data('eventObject')

                        // we need to copy it, so that multiple events don't have a reference to the same object
                        var copiedEventObject = $.extend({}, originalEventObject)

                        // assign it the date that was reported
                        copiedEventObject.start           = date
                        // copiedEventObject.allDay          = allDay
                        copiedEventObject.backgroundColor = $(this).css('background-color')
                        copiedEventObject.borderColor     = $(this).css('border-color')

                        // render the event on the calendar
                        // the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
                        $('#calendar').fullCalendar('renderEvent', copiedEventObject, true)

                        // is the "remove after drop" checkbox checked?
                        if ($('#drop-remove').is(':checked')) {
                          // if so, remove the element from the "Draggable Events" list
                            $(this).remove()
                        }
                    }
                })

                /* ADDING EVENTS */
                var currColor = '#3c8dbc' //Red by default
                //Color chooser button
                var colorChooser = $('#color-chooser-btn')
                $('#color-chooser > li > a').on('click', function(e) {
                    e.preventDefault()
                    //Save color
                    currColor = $(this).css('color')
                    //Add color effect to button
                    $('#add-new-event').css({ 'background-color': currColor, 'border-color': currColor })
                })
                $('#add-new-event').on('click', function(e) {
                    e.preventDefault()
                    //Get value and make sure it is not null
                    var val = $('#new-event').val()
                    if (val.length == 0) {
                    return
                    }

                //Create events
                var event = $('<div />')
                event.css({
                    'background-color': currColor,
                    'border-color'    : currColor,
                    'color'           : '#fff'
                    }).addClass('external-event')
                    event.html(val)
                    $('#external-events').prepend(event)

                    //Add draggable funtionality
                    init_events(event)

                    //Remove event from text input
                    $('#new-event').val('');
                })
            })
        }; // Calendar S2

        var toggleInbox = function() {
            $( ".box-message .box-header" ).on('click', function() {
                $(this).toggleClass('active');
              $( ".box-message .box-content" ).slideToggle(300);
            });
        }; // Toggle Inbox

        var sendMessage = function() {
            $('textarea[name="message"]').each(function() {
                var text = $('textarea[name="message"]');
                $('.btn-send button').on('click', function(e) {
                    if (text.val() == '') {
                        alert('Please type in the box to chat!');
                    } else {
                        $('<div class="clearfix"></div><div class="message-in"><div class="message-pic"><img src="images/avatar/message-06.png" alt=""><div class="status-color purple"></div></div><div class="message-body"><div class="message-text"><p>' + text.val() + '</p></div></div></div>').appendTo('div.message-box .mCustomScrollBox .mCSB_container');
                        text.val('');
                        var heights = $('div.message-box .mCustomScrollBox .mCSB_container').height(),
                            agv = heights - 644;
                         $('div.message-box .mCustomScrollBox .mCSB_container').css({
                             top: -(agv),
                         });                    };
                     e.preventDefault();
                });
                $(this).keyup(function(event){
                var keycode = (event.keyCode ? event.keyCode : event.which);
                    if(keycode == '13'){
                        if (text.val() == '') {
                             alert('Please type in the box to chat!');
                        } else {
                            $('<div class="clearfix"></div><div class="message-in"><div class="message-pic"><img src="images/avatar/message-06.png" alt=""><div class="status-color purple"></div></div><div class="message-body"><div class="message-text"><p>' + text.val() + '</p></div></div></div>').appendTo('div.message-box .mCustomScrollBox .mCSB_container');
                            text.val('');
                             var heights = $('div.message-box .mCustomScrollBox .mCSB_container').height(),
                                agv = heights - 644;
                             $('div.message-box .mCustomScrollBox .mCSB_container').css({
                                 top: -(agv),
                             });
                        };
                    };
                    event.preventDefault();
                });
            });
        }; // Send Message

        var scrollbarMember = function() {
            if ( $().mCustomScrollbar ) {
               $(".member-status .sidebar-member .scroll").mCustomScrollbar({
                scrollInertia:400,
               });
            }
        }; // Scrollbar Member

        var scrollbarMessage = function() {
            if ( $().mCustomScrollbar ) {
               $(".box-message .box-content .scroll").mCustomScrollbar({
                scrollInertia:400,
               });
            }
        }; // Scrollbar Message

        var scrollbarMessageBox = function() {
            if ( $().mCustomScrollbar ) {
               $("#message .message-info .scroll").mCustomScrollbar({
                scrollInertia:400,
               });
            }
        }; // Scrollbar MessageBox

        var scrollbarTable = function() {
            $(".box-project .box-content").mCustomScrollbar({
                axis:"x",
                advanced:{autoExpandHorizontalScroll:true},
                scrollInertia:400,
            });
        }; // Scrollbar MessageBox

        var scrollbarCalendar = function() {
            $(window).on('load resize', function() {
                if ( matchMedia( 'only screen and (max-width: 1900px)' ).matches ) {
                    $(".box.calendar").find('#box-calendar').removeClass('active');
                    $(".box.calendar").mCustomScrollbar({
                        axis:"x",
                        theme:"light-3",
                        advanced:{autoExpandHorizontalScroll:true},
                        scrollInertia:400,
                    });
                } else {
                    $(".box.calendar").find('#box-calendar').addClass('active');
                }
            });
        }; // Scrollbar MessageBox

        var counter = function() {
            $('.status-bar').on('on-appear', function() {             
                $(this).find('.numb').each(function() { 
                    var to = parseInt( ($(this).attr('data-to')),10 ), speed = parseInt( ($(this).attr('data-speed')),10 );
                    if ( $().countTo ) {
                        $(this).countTo({
                            to: to,
                            speed: speed
                        });
                    }
                });
           });
        }; // Counter

        var progressBar = function(){
            $('td.bg').waypoint(function() {
                $('span').each( function() {
                    var percent = $(this).data('percent');
                     $(this).animate({
                        "width": percent + '%'
                    },1500); 
                });
            }, {offset: '100%'});
        };// Progress Bar

        var detectViewport = function() {
            $('[data-waypoint-active="yes"]').waypoint(function() {
                $(this).trigger('on-appear');
            }, { offset: '90%', triggerOnce: true });
             $(window).on('load', function() {
                setTimeout(function() {
                    $.waypoints('refresh');
                }, 100);
            });
        }; // Detect Viewport

        var setWidth = function() {
            $('.box.right').on('resize', function() {
                var w1 = $('.box.right').children('.box-content').width();
                $(this).find('canvas').css({
                    width: w1,
                });
            });
            $(window).on("resize", function () {
                // Set .right's width to the window width minus 480 pixels
                $("canvas").width( $(this).parent().width() );
            // Invoke the resize event immediately
            }).resize();
        }; // Set Width

        var waveButton = function () {
            Waves.attach('.button', ['waves-button', 'waves-float']);
            Waves.init();
        }; // Wave Button

        var retinaLogos = function() {
            var retina = window.devicePixelRatio > 1 ? true : false;
            if(retina) {
                $('.header .logo').find('img').attr( {src:'./images/logo@2x.png',width:'94',height:'47'} );   
            }
        }; // Retina Logos

        var removePreload = function() { 
            $(window).load(function() { 
                setTimeout(function() {
                    $('.loader').hide(); }, 300           
                ); 
            });
        }; //remove Preloader

    $(function() {
        donutChart();
        SplineArea();
        StackedColumn();
        Spline();
        bubbleChart();
        mapChart();
        navigationActive();
        memberActive();
        lineChart();
        radarChart();
        dropdownMenu();
        tabNav();
        tabMessager();
        // calendar();
        calendar_s2();
        toggleInbox();
        scrollbarMember();
        scrollbarMessage();
        scrollbarMessageBox();
        scrollbarTable();
        scrollbarCalendar();
        counter();
        progressBar();
        detectViewport();
        setWidth();
        sendMessage();
        waveButton();
        retinaLogos();
        removePreload();
    });

})(jQuery);

