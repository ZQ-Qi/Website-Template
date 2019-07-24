/**
* Theme: Montran Admin Template
* Author: Coderthemes
* Chart Js Page
* 
*/

!function($) {
    "use strict";

    var ChartJs = function() {};

    ChartJs.prototype.respChart = function respChart(selector,type,data, options) {
        // get selector by context
        var ctx = selector.get(0).getContext("2d");
        // pointing parent container to make chart js inherit its width
        var container = $(selector).parent();

        // enable resizing matter
        $(window).resize( generateChart );

        // this function produce the responsive Chart JS
        function generateChart(){
            // make chart width fit with its container
            var ww = selector.attr('width', $(container).width() );
            switch(type){
                case 'Line':
                    new Chart(ctx).Line(data, options);
                    break;
                case 'Doughnut':
                    new Chart(ctx).Doughnut(data, options);
                    break;
                case 'Pie':
                    new Chart(ctx).Pie(data, options);
                    break;
                case 'Bar':
                    new Chart(ctx).Bar(data, options);
                    break;
                case 'Radar':
                    new Chart(ctx).Radar(data, options);
                    break;
                case 'PolarArea':
                    new Chart(ctx).PolarArea(data, options);
                    break;
            }
            // Initiate new chart or Redraw

        };
        // run function - render chart at first load
        generateChart();
    },
    //init
    ChartJs.prototype.init = function() {
        //creating lineChart
        var data = {
            labels : ["January","February","March","April","May","June","July"],
            datasets : [
                {
                    fillColor : "#2b4049",
                    strokeColor : "#2b4049",
                    pointColor : "transparent",
                    pointStrokeColor : "transparent",
                    data : [33,52,63,92,50,53,46]
                },
                
                {
                    fillColor : "#2b9ac9",
                    strokeColor : "#2b9ac9",
                    pointColor : "transparent",
                    pointStrokeColor : "transparent",
                    data : [15,25,40,35,32,9,33]
                }

            ]
        };
        
        this.respChart($("#lineChart"),'Line',data);

        //donut chart
        var data1 = [
            {
                        value: 80,
                        color:"#2b4049"
                    },
                    {
                        value : 50,
                        color : "#2b9ac9"
                    },
                    {
                        value : 80,
                        color : "#58c9c7"
                    },
                    {
                        value : 50,
                        color : "#6c85bd"
                    }

        ]
        this.respChart($("#doughnut"),'Doughnut',data1);


        //Pie chart
        var data2 = [
            {
                value: 40,
                color:"#2b4049"
            },
            {
                value : 80,
                color : "#2b9ac9"
            },
            {
                value : 70,
                color : "#58c9c7"
            }
        ]
        this.respChart($("#pie"),'Pie',data2);


        //barchart
        var data3 = {
            labels : ["January","February","March","April","May","June","July"],
                    datasets : [
                        {
                            fillColor : "#2b4049",
                            strokeColor : "#2b4049",
                            data : [65,59,90,81,56,55,40]
                        },
                        {
                            fillColor : "#2b9ac9",
                            strokeColor : "#2b9ac9",
                            data : [28,48,40,19,96,27,100]
                        }
                    ]
        }
        this.respChart($("#bar"),'Bar',data3);

        //radar chart
        var data4 = {
            labels : ["Eating","Drinking","Sleeping","Designing","Coding","Partying","Running"],
            datasets : [
                {
                    fillColor : "#2b4049",
                    strokeColor : "#2b4049",
                    pointColor : "transparent",
                    pointStrokeColor : "transparent",
                    data : [65,59,90,81,56,55,40]
                },
                {
                    fillColor : "#2b9ac9",
                    strokeColor : "#2b9ac9",
                    pointColor : "transparent",
                    pointStrokeColor : "transparent",
                    data : [28,48,40,19,96,27,100]
                }
            ]
        }
        this.respChart($("#radar"),'Radar',data4);

        //Polar area chart
        var data5 = [
            {
                value : 30,
                color: "#2b4049"
            },
            {
                value : 90,
                color: "#2b9ac9"
            },
            {
                value : 24,
                color: "#58c9c7"
            },
            {
                value : 58,
                color: "#6c85bd"
            },
            {
                value : 82,
                color: "#317eeb"
            },
            {
                value : 8,
                color: "#1ca8dd"
            }
        ]
        this.respChart($("#polarArea"),'PolarArea',data5);
    },
    $.ChartJs = new ChartJs, $.ChartJs.Constructor = ChartJs

}(window.jQuery),

//initializing 
function($) {
    "use strict";
    $.ChartJs.init()
}(window.jQuery);