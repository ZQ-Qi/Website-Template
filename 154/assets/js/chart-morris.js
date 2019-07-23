/**
* @Package: Cryptonia - Bitcoin & Cryptocurrency trading Dashboard
* @Version: 1.0.0
*/

jQuery(function($) {
    'use strict';
    var CRYPTONIA_SETTINGS=window.CRYPTONIA_SETTINGS || {}
    ;
    /*--------------------------------
        Morris Chart
     --------------------------------*/
    CRYPTONIA_SETTINGS.chartMorris=function() {
        if($("#morris_area_graph").length) {
            /*Area Graph*/
            // Use Morris.Area instead of Morris.Line
            Morris.Area( {
                element: 'morris_area_graph', data: [ {
                    x: '2017 Q4', y: 3, z: 7
                }
                , {
                    x: '2018 Q1', y: 3, z: 4
                }
                , {
                    x: '2018 Q2', y: null, z: 1
                }
                , {
                    x: '2018 Q3', y: 2, z: 5
                }
                , {
                    x: '2018 Q4', y: 8, z: 2
                }
                , {
                    x: '2018 Q1', y: 4, z: 4
                }
                ], resize: true, redraw: true, xkey: 'x', ykeys: ['y', 'z'], labels: ['Y', 'Z'], lineColors: ['#e8962e', '#f46e0f'], pointFillColors: ['#f46e0f']
            }
            ).on('click', function(i, row) {
                console.log(i, row);
            }
            );
        }
        if($("#morris_bar_graph").length) {
            /*Bar Graph*/
            // Use Morris.Bar
            Morris.Bar( {
                element: 'morris_bar_graph', data: [ {
                    x: '2018 Q1', y: 3, z: 2, a: 3
                }
                , {
                    x: '2018 Q2', y: 2, z: null, a: 1
                }
                , {
                    x: '2018 Q3', y: 0, z: 2, a: 4
                }
                , {
                    x: '2018 Q4', y: 2, z: 4, a: 3
                }
                ], resize: true, redraw: true, xkey: 'x', ykeys: ['y', 'z', 'a'], labels: ['Y', 'Z', 'A'], barColors: ['#e8962e', '#3F51B5', '#f46e0f']
            }
            ).on('click', function(i, row) {
                console.log(i, row);
            }
            );
        }
        if($("#morris_line_graph").length) {
            /*Line Graph*/
            /* data stolen from http://howmanyleft.co.uk/vehicle/jaguar_'e'_type */
            var day_data=[ {
                "period": "2018-10-01", "licensed": 5000, "sorned": 2660
            }
            , {
                "period": "2018-09-30", "licensed": 3784, "sorned": 1655
            }
            , {
                "period": "2018-09-29", "licensed": 2536, "sorned": 1732
            }
            , {
                "period": "2018-09-20", "licensed": 4782, "sorned": 2661
            }
            , {
                "period": "2018-09-19", "licensed": 2212, "sorned": 1230
            }
            , {
                "period": "2018-09-18", "licensed": 4898, "sorned": 2738
            }
            , {
                "period": "2018-09-17", "licensed": 3171, "sorned": 1238
            }
            , {
                "period": "2018-09-16", "licensed": 3171, "sorned": 2676
            }
            , {
                "period": "2018-09-15", "licensed": 3974, "sorned": 989
            }
            , {
                "period": "2018-09-10", "licensed": 4676, "sorned": 3100
            }
            ];
            Morris.Line( {
                element: 'morris_line_graph', data: day_data, resize: true, xkey: 'period', ykeys: ['licensed', 'sorned'], labels: ['Registered', 'Purchase'], lineColors: ['#e8962e', '#3F51B5'], pointFillColors: ['#f46e0f']
            }
            );
        }
        if($("#morris_donut_graph").length) {
            /*Donut Graph*/
            Morris.Donut( {
                element: 'morris_donut_graph', data: [ {
                    value: 45, label: 'active deals'
                }
                , {
                    value: 55, label: 'unconfiremed'
                }
                ], resize: true, redraw: true, backgroundColor: '#ffffff', labelColor: '#999999', colors: [ "40-#e8962e-#e45131:70-#e45131-#e45131:90-#e45131", '#f7f7f7']
            }
            );
        }
        if($("#morris_negative_graph").length) {
            /*Negative Line Graph*/
            var neg_data=[ {
                "period": "2018-08-12", "a": 100
            }
            , {
                "period": "2018-03-03", "a": 75
            }
            , {
                "period": "2017-08-08", "a": 50
            }
            , {
                "period": "2017-05-10", "a": 25
            }
            , {
                "period": "2017-03-14", "a": 0
            }
            , {
                "period": "2017-01-10", "a": -25
            }
            , {
                "period": "2009-12-10", "a": -50
            }
            , {
                "period": "2009-10-07", "a": -75
            }
            , {
                "period": "2009-09-25", "a": -100
            }
            ];
            Morris.Line( {
                element: 'morris_negative_graph', data: neg_data, resize: true, redraw: true, xkey: 'period', ykeys: ['a'], labels: ['Series A'], lineColors: ['#e8962e', '#3F51B5'], units: '%'
            }
            );
        }
        if($("#morris_nogrid_graph").length) {
            /*No Grid Line Graph*/
            /* data stolen from http://howmanyleft.co.uk/vehicle/jaguar_'e'_type */
            var day_data=[ {
                "period": "2018-10-01", "licensed": 3407, "sorned": 660
            }
            , {
                "period": "2018-09-30", "licensed": 3351, "sorned": 629
            }
            , {
                "period": "2018-09-29", "licensed": 3269, "sorned": 618
            }
            , {
                "period": "2018-09-20", "licensed": 3246, "sorned": 661
            }
            , {
                "period": "2018-09-19", "licensed": 3257, "sorned": 667
            }
            , {
                "period": "2018-09-18", "licensed": 3248, "sorned": 627
            }
            , {
                "period": "2018-09-17", "licensed": 3171, "sorned": 660
            }
            , {
                "period": "2018-09-16", "licensed": 3171, "sorned": 676
            }
            , {
                "period": "2018-09-15", "licensed": 3201, "sorned": 656
            }
            , {
                "period": "2018-09-10", "licensed": 3215, "sorned": 622
            }
            ];
            Morris.Line( {
                element: 'morris_nogrid_graph', grid: false, resize: true, redraw: true, data: day_data, xkey: 'period', ykeys: ['licensed', 'sorned'], labels: ['Licensed', 'SORN'], lineColors: ['#e8962e', '#3F51B5']
            }
            );
        }
        if($("#morris_noncontinuous_graph").length) {
            /*Non Continuous Line Graph*/
            /* data stolen from http://howmanyleft.co.uk/vehicle/jaguar_'e'_type */
            var day_data=[ {
                "period": "2018-10-01", "licensed": 3407
            }
            , {
                "period": "2018-09-30", "sorned": 0
            }
            , {
                "period": "2018-09-29", "sorned": 618
            }
            , {
                "period": "2018-09-20", "licensed": 3246, "sorned": 661
            }
            , {
                "period": "2018-09-19", "licensed": 3257, "sorned": null
            }
            , {
                "period": "2018-09-18", "licensed": 3248, "other": 1000
            }
            , {
                "period": "2018-09-17", "sorned": 0
            }
            , {
                "period": "2018-09-16", "sorned": 0
            }
            , {
                "period": "2018-09-15", "licensed": 3201, "sorned": 656
            }
            , {
                "period": "2018-09-10", "licensed": 3215
            }
            ];
            Morris.Line( {
                element: 'morris_noncontinuous_graph', data: day_data, resize: true, redraw: true, xkey: 'period', ykeys: ['licensed', 'sorned', 'other'], labels: ['Licensed', 'SORN', 'Other'], lineColors: ['#e8962e', '#3F51B5'], /* custom label formatting with `xLabelFormat` */
                xLabelFormat: function(d) {
                    return (d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear();
                }
                , /* setting `xLabels` is recommended when using xLabelFormat */
                xLabels: 'day'
            }
            );
        }
        if($("#morris_stackedbar_graph").length) {
            /* Stacked Bar Graph*/
            // Use Morris.Bar
            Morris.Bar( {
                element: 'morris_stackedbar_graph', data: [ {
                    x: '2018 Q1', y: 3, z: 2, a: 3
                }
                , {
                    x: '2018 Q2', y: 2, z: null, a: 1
                }
                , {
                    x: '2018 Q3', y: 0, z: 2, a: 4
                }
                , {
                    x: '2018 Q4', y: 2, z: 4, a: 3
                }
                ], resize: true, redraw: true, xkey: 'x', ykeys: ['y', 'z', 'a'], labels: ['Y', 'Z', 'A'], barColors: ['#e8962e', '#3F51B5', '#f46e0f'], stacked: true
            }
            );
        }
    }
    ;
    /******************************
     initialize respective scripts 
     *****************************/
    $(document).ready(function() {
        CRYPTONIA_SETTINGS.chartMorris();
    }
    );
    $(window).resize(function() {}
    );
    $(window).load(function() {}
    );
}

);