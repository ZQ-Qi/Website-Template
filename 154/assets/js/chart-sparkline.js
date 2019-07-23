/**
* @Package: Cryptonia - Bitcoin & Cryptocurrency trading Dashboard
* @Version: 1.0.0
*/

jQuery(function($) {
    'use strict';
    var CRYPTONIA_SETTINGS=window.CRYPTONIA_SETTINGS || {}
    ;
    /*--------------------------------
        Sparkline Chart
     --------------------------------*/
    CRYPTONIA_SETTINGS.chartSparkline=function() {
        if ($.isFunction($.fn.sparkline)) {
            var myvalues=[10, 8, 5, 7, 4, 4, 7, 5, 2, 8, 3, 4, 5];
            var sidebargraph1=[7, 6, 4, 7, 5, 3, 5, 7, 3, 4];
            var sidebargraph2=[4, 7, 5, 5, 7, 3, 5, 7, 4, 2];
            $('.inlinesparkline').sparkline(myvalues, {
                type: 'line', width: '100%', height: '200', lineWidth: 2, lineColor: '#e8962e', fillColor: 'rgba(242,163,20,0.5)', highlightSpotColor: '#f46e0f', highlightLineColor: '#673AB7', spotRadius: 4,
            }
            );
            var myvalues=[10, 5, 2, 8, 3, 8, 5, 7, 4, 4, 7, 4, 5];
            $('.inlinesparkline2').sparkline(myvalues, {
                type: 'line', width: '100%', height: '200', lineWidth: 3, lineColor: '#e8962e', fillColor: 'rgba(242,163,20,0)', highlightSpotColor: '', highlightLineColor: '', spotRadius: 2,
            }
            );
            var myvalues=[1, 2, 13, 4, 5, 16, 7, 8, 19, 10, 11];
            $('.inlinesparkline3').sparkline(myvalues, {
                type: 'line', width: '100%', height: '200', lineWidth: 3, lineColor: '#e8962e', fillColor: 'rgba(242,163,20,1)', highlightSpotColor: '', highlightLineColor: '', spotRadius: 2,
            }
            );
            /* The second argument gives options such as specifying you want a bar chart */
            $('.dynamicbar').sparkline(myvalues, {
                type: 'bar', barColor: '#e8962e', height: '200', barWidth: '25', barSpacing: 4
            }
            );
            // Bar charts using inline values
            $('.negativebar').sparkline([8, 4, 3, 0, -2, -6, -3, 3, -2, 4, 3, 0, -2, -6, -3, 3, -2, 4, 6, -4, 4], {
                type: 'bar', barColor: '#e8962e', height: '200', barWidth: '18', barSpacing: 2, zeroAxis: true, negBarColor: '#f46e0f', zeroColor: '#673AB7'
            }
            );
            // Bar charts using inline values
            $('.stackedbar').sparkline([ [1, 2, 2], [2, 4, 3], [4, 2, 4], [4, 5, 1], [4, 1, 2], [6, 6, 4], [2, 3, 2], [3, 2, 6], [2, 0, 2], [6, 2, 4], [7, 4, 2], [3, 4, 1], [2, 3, 2], [3, 2, 6], [2, 0, 2], [6, 2, 4], [7, 4, 2], [3, 4, 1], [3, 7, 4]], {
                type: 'bar', barColor: '#e8962e', height: '200', barWidth: '18', barSpacing: 2, zeroAxis: true, negBarColor: '#f46e0f', zeroColor: '#673AB7', stackedBarColor: ['#673AB7', '#e8962e', '#f46e0f'],
            }
            );
            // sidebar bottom graphs
            $('.sidebar_orders').sparkline(sidebargraph1, {
                type: 'bar', barColor: '#e8962e', height: '20', barWidth: '4', barSpacing: 1,
            }
            );
            $('.sidebar_visitors').sparkline(sidebargraph2, {
                type: 'bar', barColor: '#f46e0f', height: '20', barWidth: '4', barSpacing: 1,
            }
            );
            // Bar + line composite charts
            $('#compositebar').sparkline([4, 6, 7, 7, 4, 3, 2, 4, 6, 7, 7, 4, 3, 2, 3, 1, 4, 6, 5, 9], {
                type: 'bar', barColor: '#e8962e', height: '200', barWidth: '25', barSpacing: 5,
            }
            );
            $('#compositebar').sparkline([4, 1, 5, 7, 9, 9, 8, 4, 6, 7, 7, 4, 3, 2, 8, 4, 2, 5, 6, 7], {
                composite: true, fillColor: 'rgba(244,110,15,0.3)', type: 'line', width: '100%', height: '200', lineWidth: 2, lineColor: '#f46e0f', highlightSpotColor: '#f46e0f', highlightLineColor: '#673AB7', spotRadius: 4,
            }
            );
            // Line charts taking their values from the tag
            $('.sparkline').sparkline();
            // Larger line charts for the docs
            $('.largeline').sparkline('html', {
                type: 'line', height: '2.5em', width: '4em'
            }
            );
            // Customized line chart
            $('#linecustom').sparkline('html', {
                height: '1.5em', width: '8em', lineColor: '#f00', fillColor: '#ffa', minSpotColor: false, maxSpotColor: false, spotColor: '#77f', spotRadius: 3
            }
            );
            $('.barformat').sparkline([1, 3, 5, 3, 8], {
                type: 'bar', tooltipFormat: '{{value:levels}} - {{value}}', tooltipValueLookups: {
                    levels: $.range_map( {
                        ':2': 'Low', '3:6': 'Medium', '7:': 'High'
                    }
                    )
                }
            }
            );

            // Composite line charts, the second using values supplied via javascript
            $('#compositeline').sparkline([6,5,4,6,6,9,1,3,4,6,4,2,6,2,3,7,1,2,2,8,10], {
                fillColor: false, changeRangeMin: 0, chartRangeMax: 10, type: 'line', width: '100%', height: '200', lineWidth: 2, lineColor: '#e8962e', highlightSpotColor: '#f46e0f', highlightLineColor: '#673AB7', spotRadius: 4,
            }
            );
            $('#compositeline').sparkline([4, 1, 5, 4, 6, 7, 3, 5, 6, 6, 4, 2, 6, 4, 3, 2, 2, 5, 6, 3], {
                composite: true, fillColor: false, changeRangeMin: 0, chartRangeMax: 10, type: 'line', width: '100%', height: '200', lineWidth: 2, lineColor: '#f46e0f', highlightSpotColor: '#f46e0f', highlightLineColor: '#673AB7', spotRadius: 4,
            }
            );
            // Line charts with normal range marker
            $('#normalline').sparkline([5, 4, 0, 0, 0, 0, 1, 4, 4, 10, 10, 10, 10, 0, 0, 0, 4, 6, 5, 9, 10], {
                fillColor: false, normalRangeMin: -1, normalRangeMax: 8, type: 'line', width: '100%', height: '200', lineWidth: 2, lineColor: '#f46e0f', highlightSpotColor: '#f46e0f', highlightLineColor: '#673AB7', normalRangeColor: '#eaeaea', spotRadius: 4,
            }
            );
            $('#normalExample').sparkline('html', {
                fillColor: false, normalRangeMin: 80, normalRangeMax: 95, normalRangeColor: '#4f4'
            }
            );     
          
        }
    };

    /******************************
     initialize respective scripts 
     *****************************/
    $(document).ready(function() {
        CRYPTONIA_SETTINGS.chartSparkline();
    }
    );
    $(window).resize(function() {}
    );
    $(window).load(function() {}
    );
}

);