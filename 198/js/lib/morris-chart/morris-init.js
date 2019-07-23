// Dashboard 1 Morris-chart
$(function() {
    "use strict";
    // Morris bar chart
    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 50,
            b: 100,
            c: 80
        }, {
            y: '2007',
            a: 25,
            b: 57,
            c: 36
        }, {
            y: '2008',
            a: 58,
            b: 57,
            c: 95
        }, {
            y: '2009',
            a: 54,
            b: 21,
            c: 84
        }, {
            y: '2010',
            a: 87,
            b: 51,
            c: 65
        }, {
            y: '2011',
            a: 87,
            b: 98,
            c: 65
        }, {
            y: '2012',
            a: 21,
            b: 32,
            c: 98
        }],
        xkey: 'y',
        ykeys: ['a', 'b', 'c'],
        labels: ['A', 'B', 'C'],
        barColors: ['#26DAD2', '#fc6180', '#4680ff'],
        hideHover: 'auto',
        gridLineColor: '#eef0f2',
        resize: true
    });

    // LINE CHART
    var line = new Morris.Line({
        element: 'morris-line-chart',
        resize: true,
        data: [{
                y: '2011 Q1',
                item1: 3588
            },
            {
                y: '2011 Q2',
                item1: 2545
            },
            {
                y: '2011 Q3',
                item1: 8441
            },
            {
                y: '2011 Q4',
                item1: 14474
            },
            {
                y: '2012 Q1',
                item1: 9874
            },
            {
                y: '2012 Q2',
                item1: 6487
            },
            {
                y: '2012 Q3',
                item1: 14487
            },
            {
                y: '2012 Q4',
                item1: 2147
            },
            {
                y: '2013 Q1',
                item1: 5748
            },
            {
                y: '2013 Q2',
                item1: 3598
            }
        ],
        xkey: 'y',
        ykeys: ['item1'],
        labels: ['Item 1'],
        gridLineColor: '#eef0f2',
        lineColors: ['#4680ff'],
        lineWidth: 1,
        hideHover: 'auto'
    });
    // Morris donut chart

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Downloads",
            value: 15,

        }, {
            label: "Visits",
            value: 25
        }, {
            label: "Sales",
            value: 30
        }, {
            label: "Earnings",
            value: 25
        }],
        resize: true,
        colors: ['#4680ff', '#26DAD2', '#fc6180', '#5c4ac7']
    });


    // Extra chart
    Morris.Area({
        element: 'extra-area-chart',
        data: [{
                period: '2001',
                smartphone: 0,
                windows: 0,
                mac: 0
            }, {
                period: '2002',
                smartphone: 150,
                windows: 80,
                mac: 120
            }, {
                period: '2003',
                smartphone: 40,
                windows: 80,
                mac: 35
            }, {
                period: '2004',
                smartphone: 30,
                windows: 47,
                mac: 17
            }, {
                period: '2005',
                smartphone: 100,
                windows: 40,
                mac: 20
            }, {
                period: '2006',
                smartphone: 25,
                windows: 80,
                mac: 40
            }, {
                period: '2007',
                smartphone: 10,
                windows: 10,
                mac: 10
            }


        ],
        lineColors: ['#26DAD2', '#fc6180', '#4680ff'],
        xkey: 'period',
        ykeys: ['smartphone', 'windows', 'mac'],
        labels: ['Phone', 'Windows', 'Mac'],
        pointSize: 0,
        lineWidth: 0,
        resize: true,
        fillOpacity: 0.8,
        behaveLikeLine: true,
        gridLineColor: '#e0e0e0',
        hideHover: 'auto'

    });
    Morris.Area({
        element: 'morris-area-chart',
        data: [{
                period: '2001',
                smartphone: 0,
                windows: 0,
                mac: 0
            }, {
                period: '2002',
                smartphone: 90,
                windows: 60,
                mac: 25
            }, {
                period: '2003',
                smartphone: 40,
                windows: 80,
                mac: 35
            }, {
                period: '2004',
                smartphone: 30,
                windows: 47,
                mac: 17
            }, {
                period: '2005',
                smartphone: 150,
                windows: 40,
                mac: 120
            }, {
                period: '2006',
                smartphone: 25,
                windows: 80,
                mac: 40
            }, {
                period: '2007',
                smartphone: 10,
                windows: 10,
                mac: 10
            }


        ],
        xkey: 'period',
        ykeys: ['smartphone', 'windows', 'mac'],
        labels: ['Phone', 'Windows', 'Mac'],
        pointSize: 3,
        fillOpacity: 0,
        pointStrokeColors: ['#26DAD2', '#4680ff', '#fc6180'],
        behaveLikeLine: true,
        gridLineColor: '#e0e0e0',
        lineWidth: 3,
        hideHover: 'auto',
        lineColors: ['#26DAD2', '#4680ff', '#fc6180'],
        resize: true

    });

    Morris.Area({
        element: 'morris-area-chart2',
        data: [{
                period: '2010',
                SiteA: 0,
                SiteB: 0,

            }, {
                period: '2011',
                SiteA: 170,
                SiteB: 140,

            }, {
                period: '2012',
                SiteA: 110,
                SiteB: 80,

            }, {
                period: '2013',
                SiteA: 150,
                SiteB: 100,

            }, {
                period: '2014',
                SiteA: 250,
                SiteB: 200,

            }, {
                period: '2015',
                SiteA: 80,
                SiteB: 120,

            },
            {
                period: '2016',
                SiteA: 200,
                SiteB: 180,

            }
        ],
        xkey: 'period',
        ykeys: ['SiteA', 'SiteB'],
        labels: ['Site A', 'Site B'],
        pointSize: 0,
        fillOpacity: 0.4,
        pointStrokeColors: ['#b4becb', '#4680ff'],
        behaveLikeLine: true,
        gridLineColor: '#e0e0e0',
        lineWidth: 0,
        smooth: false,
        hideHover: 'auto',
        lineColors: ['#b4becb', '#4680ff'],
        resize: true

    });


});