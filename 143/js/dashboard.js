/* List 
1. Bar Chart
2. Date Range Picker
3. Date Table
4. CountTo
5. Area Chart
6. Polar Area Chart
7. Doughnut Chart
8. Radar Chart
9. Vectro Map
10. Real Time Chart
*/

$(document).ready(function(){
"use strict";
// ------------------- 1.Bar Chart -------------------
var canvas = document.getElementById('barChart');

var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [
        {
            label: "Sale",
            backgroundColor:'#663ab8',
            borderColor:'#663ab8',
            borderWidth: 1,
            data: [95, 64, 70, 55, 56, 45, 52, 59, 57, 50, 68, 82],
        },

        {
            label: "User",
            backgroundColor:'#8461c6',
            borderColor:'#8461c6',
            borderWidth: 1,
            data: [80, 58, 50, 43, 46, 39, 46, 50, 50, 47, 62, 73 ],
        },
    ]
};//bar data

var option = {
maintainAspectRatio: false,
responsive: true,
    legend:{
    display:false,
    }
};
var myBarChart = Chart.Bar(canvas,{
data:data,
options:option
});

// ------------------- 2. Date Range Picker -------------------
$('#date').daterangepicker({
"ranges": {
    "Today": [
        moment("2016-09-09T11:06:15.319Z"),
        moment("2016-10-02T11:06:15.319Z")
    ],
    "Yesterday": [
        moment("2016-09-08T11:06:15.319Z"),
        moment("2016-10-01T11:06:15.319Z")
    ],
    "Last 7 Days": [
        moment("2016-09-02T11:06:15.319Z"),
        moment("2016-09-27T11:06:15.319Z")
    ],
    "Last 30 Days": [
        moment("2016-08-09T11:06:15.319Z"),
        moment("2016-09-02T11:06:15.319Z")
    ],
    "This Month": [
        moment("2016-09-01T19:00:00.000Z"),
        moment("2016-09-30T18:59:59.999Z")
    ],
    "Last Month": [
        moment("2016-08-01T19:00:00.000Z"),
        moment("2016-08-31T18:59:59.999Z")
    ]
},
    locale: {
    format: 'DD-MM-YYYY'
    },
    "startDate": "09-09-2016",
    "endDate": "03-10-2016",
    "minDate": "01-01-1970",
    "maxDate": "19-01-2038",
    "opens": "left",
    "applyClass": "btn btn-sm bg-green",
    "cancelClass": "btn btn-sm bg-red"
}, function(start, end, label) {
  console.log("New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')");
});

// ------------------- 3. Date Table -------------------
$('#orders-table').DataTable( {
    "paging":   false,
    "ordering": true,
    "info":     false,
    "searching": false,
    dom: 'Bfrtip',
            buttons: [
                { extend:'excel', className: 'btn-xs btn-table m-r-10'},
                { extend:'csv', className: 'btn-xs btn-table m-r-10'},
                { extend:'print', className: 'btn-xs btn-table'}
            ],

    columnDefs: [ {
        targets: [ 0 ],
        orderData: [ 0, 1 ]
    }, {
        targets: [ 1 ],
        orderData: [ 1, 0 ]
    }, {
        targets: [ 4 ],
        orderData: [ 4, 0 ]
    } ]
});

// ------------------- 4. CountTo -------------------
$('.statistics').countTo();

// ------------------- 5.Area Chart -------------------
Morris.Line({
element: 'line-chart',
data: [
{
    period: '2015-12',
    Example1: 50,
    Example2: 130
},
{
    period: '2016-01',
    Example1: 90,
    Example2: 40
},
   {
    period: '2016-02',
    Example1: 70,
    Example2: 40
},
   {
    period: '2016-03',
    Example1: 110,
    Example2: 150
},
   {
    period: '2016-04',
    Example1: 70,
    Example2: 40
},
{
    period: '2016-05',
    Example1: 130,
    Example2: 160
}, {
    period: '2016-06',
    Example1:104,
    Example2: 69
}, {
    period: '2016-07',
    Example1:120,
    Example2: 161
}, {
    period: '2016-08',
    Example1: 78,
    Example2: 48
}

],
xkey: 'period',
ykeys: ['Example1', 'Example2'],
labels: ['Example1', 'Example2'],
pointSize: 10,
pointFillColors: [ '#ffffff', '#ffffff'],
pointStrokeColors:[ '#663ab8', '#9375cd'],
hideHover: 'auto',
lineColors:[ '#663ab8', '#9375cd'],
lineWidth:2,
resize: true
});

// ------------------- 6. Polar Area Chart -------------------
var canvas = document.getElementById('polarAreaChart');
var data = {
    datasets: [{
        data: [
            19,
            14,
            9,
        ],
        borderColor: "rgba(0,0,0,0)",
        backgroundColor: [
            "rgba(91,52,165,0.5)",
            "rgba(117,77,191,0.7)",
            "rgba(147,117,205,0.5) ",
        ],
        label: 'My dataset' // for legend
    }],
    labels: [
        "Firefox",
        "Chrome",
        "Safari"
    ]
    
};

var option = {
    maintainAspectRatio: false, 
    responsive:true,
  scale: {
        ticks: {
            beginAtZero: true,
            backdropColor:'rgba(0,0,0,0)',
            fontColor:'rgba(0,0,0,0)'
        }
    }
};

var myPolarAreaChart = Chart.PolarArea (canvas,{
data:data,
options:option,
});

// ------------------- 7. Doughnut Chart -------------------
var canvas = document.getElementById('doughnutChart');
var data = {
    labels: [
        "Firefox",
        "Chrome",
    ],
    datasets: [
        {
            data: [45,55],
            borderWidth:0,
            backgroundColor: [
                "#9375cd", //label1
                "#663ab8"  //label2
            ],
            hoverBackgroundColor: [
                "#987cd1",  //label2
                "#5c34a4" //label1
            ]
        }]
};//doughunut data

var option = {
maintainAspectRatio: false,
responsive: true
};

var myDoughnutChart = Chart.Doughnut(canvas,{
data:data,
options:option
});

// ------------------- 8. Radar Chart -------------------
var canvas = document.getElementById('radarChart');
var data = {
labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
datasets: [
    {
        backgroundColor: "rgba(179,181,198,0)",
        borderColor: "#9375cd",
        pointBackgroundColor: "rgba(147,117,205,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(147,117,205,1)",
        data : [65,59,90,81,56,55,40],
        fill:true
    },
    {
        backgroundColor: "rgba(179,181,198,0)",
        borderColor:"#663ab8",
        pointBackgroundColor: "rgba(102,58,184,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(102,58,184,1)",
        data : [28,48,40,19,96,27,100],
        fill:true
    }
]
};//radar data

var option = {
maintainAspectRatio: false,    
responsive:true,

legend:{
display:false,
},

scale: {          
    ticks: {
        beginAtZero: true,
        showLabelBackdrop:false,
        display:false
    }//ticks
}//scale

};//option

var myRadarChart = Chart.Radar (canvas,{
data:data,
options:option,
});


// ------------------- 9. Vectro Map -------------------
$('#vmap').vectorMap({
map: 'usa_en',
backgroundColor: '#ffffff',
borderColor: '#6320ee',
borderOpacity: 0.25,
borderWidth: 1,
color: '#f2f2f2',
enableZoom: true,
showTooltip: true,
selectedColor: null,
hoverColor: null,
colors: {
mo: '#663ab8',
fl: '#663ab8',
or: '#663ab8',
ak: '#663ab8',
ny: '#663ab8',
co: '#663ab8',
nd: '#663ab8',
},
    onRegionClick: function(event, code, region){
    event.preventDefault();
    }
});

// ------------------- 10. Real Time Chart -------------------
$(function() {

// We use an inline data source in the example, usually data would
// be fetched from a server

var data = [],
    totalPoints = 300;

function getRandomData() {

    if (data.length > 0)
        data = data.slice(1);

    // Do a random walk

    while (data.length < totalPoints) {

        var prev = data.length > 0 ? data[data.length - 1] : 50,
            y = prev + Math.random() * 10 - 5;

        if (y < 0) {
            y = 0;
        } else if (y > 100) {
            y = 100;
        }

        data.push(y);
    }

    // Zip the generated y values with the x values

    var res = [];
    for (var i = 0; i < data.length; ++i) {
        res.push([i, data[i]])
    }

    return res;
}

// Set up the control widget

var updateInterval = 30;
$("#updateInterval").val(updateInterval).change(function () {
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

var plot = $.plot("#flot-server-usage", [ getRandomData() ], {
    series: {
        shadowSize: 0,   // Drawing is faster without shadows
        show: true,
        fill: true,
        fillColor: { colors: [{ opacity: 1 }] }
    },
    grid: {
    borderWidth:1,
    borderColor:"#cecece"
    },
    colors: ["#663ab8"], // Change Line Color
    yaxis: {
        min: 0,
        max: 100
    },
    xaxis: {
        show: false
    }
});

function update() {

    plot.setData([getRandomData()]);

    // Since the axes don't change, we don't need to call plot.setupGrid()

    plot.draw();
    setTimeout(update, updateInterval);
}

update();

});

});//end
