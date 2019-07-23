$(document).ready(function(){
'use strict'

// ------------------- 1. Area Chart -------------------
Morris.Area({
  element: 'area-chart',
  data: [
    { y: '2006', a: 100, b: 90 },
    { y: '2007', a: 75,  b: 65 },
    { y: '2008', a: 50,  b: 40 },
    { y: '2009', a: 75,  b: 65 },
    { y: '2010', a: 50,  b: 40 },
    { y: '2011', a: 75,  b: 65 },
    { y: '2012', a: 100, b: 90 }
  ],
  xkey: 'y',
  ykeys: ['a', 'b'],
  labels: ['Series A', 'Series B']
});

// ------------------- 2. Bar Chart -------------------
Morris.Bar({
  element: 'bar-chart',
  data: [
    {x: '2011 Q1', y: 3, z: 2, a: 3},
    {x: '2011 Q2', y: 2, z: null, a: 1},
    {x: '2011 Q3', y: 0, z: 2, a: 4},
    {x: '2011 Q4', y: 2, z: 4, a: 3}
  ],
  xkey: 'x',
  ykeys: ['y', 'z', 'a'],
  labels: ['Y', 'Z', 'A']
}).on('click', function(i, row){
  console.log(i, row);
});

// ------------------- 3. Donut Chart -------------------
Morris.Donut({
  element: 'donut-chart',
  data: [
    {value: 70, label: 'foo'},
    {value: 15, label: 'bar'},
    {value: 10, label: 'baz'},
    {value: 5, label: 'A really really long label'}
  ],
  formatter: function (x) { return x + "%"}
}).on('click', function(i, row){
  console.log(i, row);
});

// ------------------- 4. Line Chart with data -------------------
var timestamp_data = [
  {"period": 1349046000000, "licensed": 3407, "sorned": 660},
  {"period": 1313103600000, "licensed": 3351, "sorned": 629},
  {"period": 1299110400000, "licensed": 3269, "sorned": 618},
  {"period": 1281222000000, "licensed": 3246, "sorned": 661},
  {"period": 1273446000000, "licensed": 3257, "sorned": 667},
  {"period": 1268524800000, "licensed": 3248, "sorned": 627},
  {"period": 1263081600000, "licensed": 3171, "sorned": 660},
  {"period": 1260403200000, "licensed": 3171, "sorned": 676},
  {"period": 1254870000000, "licensed": 3201, "sorned": 656},
  {"period": 1253833200000, "licensed": 3215, "sorned": 622}
];
Morris.Line({
  element: 'line-chart',
  data: timestamp_data,
  xkey: 'period',
  ykeys: ['licensed', 'sorned'],
  labels: ['Licensed', 'SORN'],
  dateFormat: function (x) { return new Date(x).toDateString(); }
});

});//end
