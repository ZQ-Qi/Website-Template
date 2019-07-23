// bar chart

var day_data = [
    {"elapsed": "I", "value": 8},
    {"elapsed": "II", "value": 34},
    {"elapsed": "III", "value": 53},
    {"elapsed": "IV", "value": 12},
    {"elapsed": "V", "value": 13},
    {"elapsed": "VI", "value": 22},
    {"elapsed": "VII", "value": 5},
    {"elapsed": "VIII", "value": 26},
    {"elapsed": "IX", "value": 12},
    {"elapsed": "X", "value": 19}
];




// line chart

Morris.Line({
    element: 'line-chart',
    data: day_data,
    xkey: 'elapsed',
    ykeys: ['value'],
    labels: ['value'],
    gridLineColor: '#e5ebf8',
    lineColors:['#FF518A'],
    parseTime: false,
    lineWidth: 1
});


