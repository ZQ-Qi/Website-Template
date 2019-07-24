/* 
 Dashboard beta custom js file
 */
$(document).ready(function () {
    $(function () {
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

        //sparkline
        $("#sparkline1").sparkline([34, 43, 43, 35, 44, 32, 15, 22, 46, 33, 86, 54, 73, 53, 12, 53, 23, 65, 23, 63, 53, 42, 34, 56, 76, 15, 54, 23, 44], {
            type: 'line',
            lineWidth: "2",
            lineColor: '#23b7e5',
            fillColor: '#fff',
            height: "40",
            width: "100%"
        });
        $("#sparkline2").sparkline([43, 56, 34, 76, 54, 34, 21, 25, 46, 33, 86, 54, 73, 53, 12, 53, 23, 65, 23, 63, 53, 65, 43, 56, 46, 15, 54, 23, 44], {
            type: 'line',
            lineWidth: "2",
            lineColor: '#4CAF50',
            fillColor: '#fff',
            height: "40",
            width: "100%"
        });
 //sparkline
        $("#sparkline3").sparkline([34, 43, 43, 35, 44, 32, 15, 22, 46, 33, 86, 54, 73, 53, 12, 53, 23, 65, 23, 63, 53, 42, 34, 56, 76, 15, 54, 23, 44], {
            type: 'line',
            lineWidth: "2",
            lineColor: '#FF7043',
            fillColor: '#fff',
            height: "40",
            width: "100%"
        });
 $("#sparkline4").sparkline([43, 56, 34, 76, 54, 34, 21, 25, 46, 33, 86, 54, 73, 53, 12, 53, 23, 65, 23, 63, 53, 65, 43, 56, 46, 15, 54, 23, 44], {
            type: 'line',
            lineWidth: "2",
            lineColor: '#F44336',
            fillColor: '#fff',
            height: "40",
            width: "100%"
        });
    });
    
//world map
jQuery('#world-map-markers').vectorMap(
{
    map: 'world_mill_en',
    backgroundColor: '#fff',
    borderColor: '#818181',
    borderOpacity: 0.25,
    borderWidth: 1,
    color: '#f4f3f0',
    regionStyle : {
        initial : {
          fill : '#ddd'
        }
      },
    markerStyle: {
      initial: {
                    r: 9,
                    'fill': '#fff',
                    'fill-opacity':1,
                    'stroke': '#000',
                    'stroke-width' : 5,
                    'stroke-opacity': 0.4
                }
                },
    enableZoom: true,
    hoverColor: '#c9dfaf',
    markers : [{
        latLng : [21.00, 78.00],
        name : 'Marker title'
      
      }],
    hoverOpacity: null,
    normalizeFunction: 'linear',
    scaleColors: ['#b6d6ff', '#005ace'],
    selectedColor: '#c9dfaf',
    selectedRegions: [],
    showTooltip: true,
    onRegionClick: function(element, code, region)
    {
        var message = 'You clicked "'
            + region
            + '" which has the code: '
            + code.toUpperCase();

        alert(message);
    }
});
});