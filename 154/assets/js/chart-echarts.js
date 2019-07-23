/**
* @Package: Cryptonia - Bitcoin & Cryptocurrency trading Dashboard
* @Version: 1.0.0
 */

jQuery(function($) {
    'use strict';
    var CRYPTONIA_SETTINGS=window.CRYPTONIA_SETTINGS || {}
    ;
    /*--------------------------------
         Window Based Layout
     --------------------------------*/
    CRYPTONIA_SETTINGS.dashboardEcharts=function() {
        /*------------- Chart 1 ----------------*/
        if($("#browser_type").length) {
            // Initialize after dom ready
            var myChart=echarts.init(document.getElementById('browser_type'));
            var option= {
                // Setup grid
                grid: {
                    zlevel: 0, x: 20, x2: 20, y: 20, y2: 20, borderWidth: 0, backgroundColor: 'rgba(0,0,0,0)', borderColor: 'rgba(0,0,0,0)',
                }
                , // Add tooltip
                tooltip: {
                    trigger: 'axis', axisPointer: {
                        type: 'shadow', // line|shadow
                        lineStyle: {
                            color: 'rgba(0,0,0,.5)', width: 1
                        }
                        , shadowStyle: {
                            color: 'rgba(0,0,0,.1)'
                        }
                    }
                }
                , // Add legend
                legend: {
                    data: []
                }
                , toolbox: {
                    orient: 'vertical', show: true, showTitle: true, color: ['#bdbdbd', '#bdbdbd', '#bdbdbd', '#bdbdbd'], feature: {
                        mark: {
                            show: false
                        }
                        , dataZoom: {
                            show: true, title: {
                                dataZoom: 'Data Zoom', dataZoomReset: 'Reset Zoom'
                            }
                        }
                        , dataView: {
                            show: false, readOnly: true
                        }
                        , magicType: {
                            show: true, title: {
                                line: 'Area', bar: 'Bar'
                            }
                            , type: ['line', 'bar']
                        }
                        , restore: {
                            show: false
                        }
                        , saveAsImage: {
                            show: true, title: 'Save as Image'
                        }
                    }
                }
                , // Enable drag recalculate
                calculable: true, // Horizontal axis
                xAxis: [ {
                    type: 'category', boundaryGap: false, data: ['Chrome', 'Firefox', 'Safari', 'Opera', 'IE'], axisLine: {
                        show: true, onZero: true, lineStyle: {
                            color: '#e77512', type: 'solid', width: '2', shadowColor: 'rgba(0,0,0,0)', shadowBlur: 5, shadowOffsetX: 3, shadowOffsetY: 3,
                        }
                        ,
                    }
                    , axisTick: {
                        show: false,
                    }
                    , splitLine: {
                        show: false, lineStyle: {
                            color: '#fff', type: 'solid', width: 0, shadowColor: 'rgba(0,0,0,0)',
                        }
                        ,
                    }
                    ,
                }
                ], // Vertical axis
                yAxis: [ {
                    type: 'value', splitLine: {
                        show: false, lineStyle: {
                            color: 'fff', type: 'solid', width: 0, shadowColor: 'rgba(0,0,0,0)',
                        }
                        ,
                    }
                    , axisLabel: {
                        show: false,
                    }
                    , axisTick: {
                        show: false,
                    }
                    , axisLine: {
                        show: false, onZero: true, lineStyle: {
                            color: '#ff0000', type: 'solid', width: '0', shadowColor: 'rgba(0,0,0,0)', shadowBlur: 5, shadowOffsetX: 3, shadowOffsetY: 3,
                        }
                        ,
                    }
                    ,
                }
                ], // Add series
                series: [ {
                    name: 'Total Visits', type: 'line', smooth: true, symbol:'none', symbolSize:2, showAllSymbol: true, itemStyle: {
                        normal: {
                            color:'#e77512', borderWidth:4, borderColor:'#e77512', areaStyle: {
                                color: '#e77512', type: 'default'
                            }
                        }
                    }
                    , data: [500, 200, 322, 212, 99]
                }
                ]
            }
            ;
            // Load data into the ECharts instance 
            myChart.setOption(option);
        }
        /*-------------- Chart 2 ---------------*/
        if($("#user_type").length) {
            // Initialize after dom ready
            var myChart=echarts.init(document.getElementById('user_type'));
            var option= {
                // Setup grid
                grid: {
                    zlevel: 0, x: 20, x2: 20, y: 20, y2: 20, borderWidth: 0, backgroundColor: 'rgba(0,0,0,0)', borderColor: 'rgba(0,0,0,0)',
                }
                , // Add tooltip
                tooltip: {
                    trigger: 'axis', axisPointer: {
                        type: 'shadow', // line|shadow
                        lineStyle: {
                            color: 'rgba(0,0,0,.5)', width: 1
                        }
                        , shadowStyle: {
                            color: 'rgba(0,0,0,.1)'
                        }
                    }
                }
                , // Add legend
                legend: {
                    data: []
                }
                , toolbox: {
                    orient: 'vertical', show: true, showTitle: true, color: ['#bdbdbd', '#bdbdbd', '#bdbdbd', '#bdbdbd'], feature: {
                        mark: {
                            show: false
                        }
                        , dataZoom: {
                            show: true, title: {
                                dataZoom: 'Data Zoom', dataZoomReset: 'Reset Zoom'
                            }
                        }
                        , dataView: {
                            show: false, readOnly: true
                        }
                        , magicType: {
                            show: true, title: {
                                line: 'Area', bar: 'Bar', stack: 'Stacked Bar', tiled: 'Tiled Bar'
                            }
                            , type: ['line', 'bar', 'stack', 'tiled']
                        }
                        , restore: {
                            show: false
                        }
                        , saveAsImage: {
                            show: true, title: 'Save as Image'
                        }
                    }
                }
                , // Enable drag recalculate
                calculable: true, // Horizontal axis
                xAxis: [ {
                    type: 'category', boundaryGap: false, data: ['2018-06-01', '2018-05-01', '2018-04-01', '2018-03-01', '2018-02-01'], axisLine: {
                        show: true, onZero: true, lineStyle: {
                            color: '#e77512', type: 'solid', width: '2', shadowColor: 'rgba(0,0,0,0)', shadowBlur: 5, shadowOffsetX: 3, shadowOffsetY: 3,
                        }
                        ,
                    }
                    , axisTick: {
                        show: false,
                    }
                    , splitLine: {
                        show: false, lineStyle: {
                            color: '#fff', type: 'solid', width: 0, shadowColor: 'rgba(0,0,0,0)',
                        }
                        ,
                    }
                    ,
                }
                ], // Vertical axis
                yAxis: [ {
                    type: 'value', splitLine: {
                        show: false, lineStyle: {
                            color: 'fff', type: 'solid', width: 0, shadowColor: 'rgba(0,0,0,0)',
                        }
                        ,
                    }
                    , axisLabel: {
                        show: false,
                    }
                    , axisTick: {
                        show: false,
                    }
                    , axisLine: {
                        show: false, onZero: true, lineStyle: {
                            color: '#e8952e', type: 'solid', width: '0', shadowColor: 'rgba(0,0,0,0)', shadowBlur: 5, shadowOffsetX: 3, shadowOffsetY: 3,
                        }
                        ,
                    }
                    ,
                }
                ], // Add series
                series: [ {
                    name: 'Registered Users', type: 'line', smooth: true, symbol:'none', symbolSize:2, showAllSymbol: true, barWidth:15, barGap:'10%', itemStyle: {
                        normal: {
                            color:'#e77512', borderWidth:2, borderColor:'#e77512', areaStyle: {
                                color: '#e77512', type: 'default'
                            }
                        }
                    }
                    , data: [2323, 2144, 4534, 1989, 3232, 2323, 2144, 4534, 1989, 3232, 2323, 2144, 4534, 1989, 3232]
                }
                , {
                    name: 'Guest Visitors', type: 'line', smooth: true, symbol:'none', symbolSize:2, showAllSymbol: true, barWidth:15, barGap:'10%', itemStyle: {
                        normal: {
                            color:'#e8952e', borderWidth:2, borderColor:'#e8952e', areaStyle: {
                                color: '#e8952e', type: 'default'
                            }
                        }
                    }
                    , data: [5656, 6567, 7675, 3423, 4343, 5656, 6567, 7675, 3423, 4343, 5656, 6567, 7675, 3423, 4343]
                }
                , ]
            }
            ;
            // Load data into the ECharts instance 
            myChart.setOption(option);
        }
        /*----------------- Chart 4 ------------------*/
        if($("#page_views_today").length) {
            // Initialize after dom ready
            var myChart=echarts.init(document.getElementById('page_views_today'));
            var option= {
                // Setup grid
                grid: {
                    zlevel: 0, x: 20, x2: 20, y: 20, y2: 20, borderWidth: 0, backgroundColor: 'rgba(0,0,0,0)', borderColor: 'rgba(0,0,0,0)',
                }
                , // Add tooltip
                tooltip: {
                    trigger: 'axis', axisPointer: {
                        type: 'shadow', // line|shadow
                        lineStyle: {
                            color: 'rgba(0,0,0,.5)', width: 1
                        }
                        , shadowStyle: {
                            color: 'rgba(0,0,0,.1)'
                        }
                    }
                }
                , // Add legend
                legend: {
                    data: []
                }
                , toolbox: {
                    orient: 'vertical', show: true, showTitle: true, color: ['#bdbdbd', '#bdbdbd', '#bdbdbd', '#bdbdbd'], feature: {
                        mark: {
                            show: false
                        }
                        , dataZoom: {
                            show: true, title: {
                                dataZoom: 'Data Zoom', dataZoomReset: 'Reset Zoom'
                            }
                        }
                        , dataView: {
                            show: false, readOnly: true
                        }
                        , magicType: {
                            show: true, title: {
                                line: 'Line', bar: 'Bar',
                            }
                            , type: ['line', 'bar'], option: {
                                /*line: {
                                itemStyle: {
                                  normal: {
                                    color:'rgba(3,1,1,1.0)', 
                                  }
                                },
                                data: [1,2,3,4,5,6,7,8,9,10,11,12]
                            }*/
                            }
                        }
                        , restore: {
                            show: false
                        }
                        , saveAsImage: {
                            show: true, title: 'Save as Image'
                        }
                    }
                }
                , // Enable drag recalculate
                calculable: true, // Horizontal axis
                xAxis: [ {
                    type: 'category', boundaryGap: false, data: [ '0h-2h', '2h-4h', '4h-6h', '6h-8h', '8h-10h', '10h-12h', '12h-14h', '14h-16h', '16h-18h', '18h-20h', '20h-22h', '22h-24h'], axisLine: {
                        show: true, onZero: true, lineStyle: {
                            color: '#e77512', type: 'solid', width: '2', shadowColor: 'rgba(0,0,0,0)', shadowBlur: 5, shadowOffsetX: 3, shadowOffsetY: 3,
                        }
                        ,
                    }
                    , axisTick: {
                        show: false,
                    }
                    , splitLine: {
                        show: false, lineStyle: {
                            color: '#fff', type: 'solid', width: 0, shadowColor: 'rgba(0,0,0,0)',
                        }
                        ,
                    }
                    ,
                }
                ], // Vertical axis
                yAxis: [ {
                    type: 'value', splitLine: {
                        show: false, lineStyle: {
                            color: 'fff', type: 'solid', width: 0, shadowColor: 'rgba(0,0,0,0)',
                        }
                        ,
                    }
                    , axisLabel: {
                        show: false,
                    }
                    , axisTick: {
                        show: false,
                    }
                    , axisLine: {
                        show: false, onZero: true, lineStyle: {
                            color: '#ff0000', type: 'solid', width: '0', shadowColor: 'rgba(0,0,0,0)', shadowBlur: 5, shadowOffsetX: 3, shadowOffsetY: 3,
                        }
                        ,
                    }
                    ,
                }
                ], // Add series
                series: [ {
                    name: 'Page Views', type: 'line', smooth: true, symbol:'none', symbolSize:2, showAllSymbol: true, barWidth:10, itemStyle: {
                        normal: {
                            color:'#e77512', borderWidth:2, borderColor:'#e77512', areaStyle: {
                                color: 'rgba(63,81,181,0)', type: 'default'
                            }
                        }
                    }
                    , data: [1545, 1343, 1445, 2675, 2878, 1789, 1745, 2343, 2445, 1675, 1878, 2789, 1545, 1343, 1445, 2675, 2878, 1789, 1745, 2343, 2445, 1675, 1878, 2789]
                }
                ]
            }
            ;
            // Load data into the ECharts instance 
            myChart.setOption(option);
        }
        /*----------------- Chart 5 ------------------*/
        if($("#scatter_chart").length) {
            // Initialize after dom ready
            var myChart=echarts.init(document.getElementById('scatter_chart'));
            var option= {
                color: ['#e77512', '#e8952e'], title: {
                    // text: '',
                    // subtext: ''
                }
                , // Setup grid
                grid: {
                    zlevel: 0, x: 20, x2: 20, y: 20, y2: 20, borderWidth: 0, backgroundColor: 'rgba(0,0,0,0)', borderColor: 'rgba(0,0,0,0)',
                }
                , tooltip: {
                    trigger: 'axis', showDelay: 0, formatter: function (params) {
                        if (params.value.length > 1) {
                            return params.seriesName + '<br/>' + params.value[0] + ' : Social Media<br/>' + params.value[1] + ' : Advertisement';
                        }
                        else {
                            return params.seriesName + ' :<br/>' + params.name + ' : ' + params.value + 'Advertisement';
                        }
                    }
                    , axisPointer: {
                        show: false, type: 'none', lineStyle: {
                            type: 'dashed', width: 0
                        }
                    }
                }
                , legend: {
                    data: ['2018', '2015']
                }
                , toolbox: {
                    show: true, feature: {
                        mark: {
                            show: false
                        }
                        , dataZoom: {
                            show: true
                        }
                        , dataView: {
                            show: false, readOnly: false
                        }
                        , restore: {
                            show: false
                        }
                        , saveAsImage: {
                            show: true
                        }
                    }
                }
                , xAxis: [ {
                    type: 'value', axisLine: {
                        show: true, onZero: true, lineStyle: {
                            color: '#e77512', type: 'solid', width: '2', shadowColor: 'rgba(0,0,0,0)', shadowBlur: 5, shadowOffsetX: 3, shadowOffsetY: 3,
                        }
                        ,
                    }
                    , axisTick: {
                        show: false,
                    }
                    , splitLine: {
                        show: false, lineStyle: {
                            color: '#fff', type: 'solid', width: 0, shadowColor: 'rgba(0,0,0,0)',
                        }
                        ,
                    }
                    , scale:true, axisLabel: {
                        formatter: '{value}'
                    }
                }
                ], yAxis: [ {
                    show:false, type: 'value', axisLine: {
                        show: true, onZero: true, lineStyle: {
                            color: '#e77512', type: 'solid', width: '2', shadowColor: 'rgba(0,0,0,0)', shadowBlur: 5, shadowOffsetX: 3, shadowOffsetY: 3,
                        }
                        ,
                    }
                    , axisTick: {
                        show: false,
                    }
                    , splitLine: {
                        show: false, lineStyle: {
                            color: '#fff', type: 'solid', width: 0, shadowColor: 'rgba(0,0,0,0)',
                        }
                        ,
                    }
                    , scale:true, axisLabel: {
                        formatter: '{value}'
                    }
                }
                ], series: [ {
                    name:'2018', type:'scatter', data: [[161, 51], [167, 59], [159, 49], [157, 63], [155, 53], [170, 59], [159, 47], [166, 69], [176, 66], [160, 75], [172, 55], [170, 54], [172, 62], [153, 42], [160, 50], [147, 49], [168, 49], [175, 73], [157, 47], [167, 68]], markPoint: {
                        show:false, data: [ {
                            type: 'max', name: ''
                        }
                        , {
                            type: 'min', name: ''
                        }
                        ]
                    }
                    , /*markLine : {
                show:false,
                data : [
                    {type : '', name: ''}
                ]
            }*/
                }
                , {
                    name:'2015', type:'scatter', data: [[174, 65], [175, 71], [193, 80], [186, 72], [187, 78], [181, 74], [184, 86], [184, 78], [175, 62], [184, 81], [180, 76], [177, 83], [192, 90], [176, 74], [174, 71], [184, 79], [192, 93], [171, 70], [173, 72], [176, 85]], markPoint: {
                        show:false, data: [ {
                            type: 'max', name: ''
                        }
                        , {
                            type: 'min', name: ''
                        }
                        ]
                    }
                    , /*markLine : {
                show:false,
                data : [
                    {type : 'average', name: ''}
                ]
            }*/
                }
                ]
            }
            ;
            // Load data into the ECharts instance 
            myChart.setOption(option);
        }
        /*----------------- Chart 4 ------------------*/
        if($("#page_views_today_bar").length) {
            // Initialize after dom ready
            var myChart=echarts.init(document.getElementById('page_views_today_bar'));
            var option= {
                // Setup grid
                grid: {
                    zlevel: 0, x: 20, x2: 20, y: 15, y2: 15, borderWidth: 0, backgroundColor: 'rgba(0,0,0,0)', borderColor: 'rgba(0,0,0,0)',
                }
                , // Add tooltip
                tooltip: {
                    trigger: 'axis', axisPointer: {
                        type: 'shadow', // line|shadow
                        lineStyle: {
                            color: 'rgba(0,0,0,.5)', width: 1
                        }
                        , shadowStyle: {
                            color: 'rgba(0,0,0,.1)'
                        }
                    }
                }
                , // Add legend
                legend: {
                    data: []
                }
                , toolbox: {
                    orient: 'vertical', show: true, showTitle: true, color: ['#bdbdbd', '#bdbdbd', '#bdbdbd', '#bdbdbd'], feature: {
                        mark: {
                            show: false
                        }
                        , dataZoom: {
                            show: false, title: {
                                dataZoom: 'Data Zoom', dataZoomReset: 'Reset Zoom'
                            }
                        }
                        , dataView: {
                            show: false, readOnly: false
                        }
                        , magicType: {
                            show: false, title: {
                                line: 'Line', bar: 'Bar',
                            }
                            , type: ['line', 'bar'], option: {}
                        }
                        , restore: {
                            show: false
                        }
                        , saveAsImage: {
                            show: false, title: 'Save as Image'
                        }
                    }
                }
                , // Enable drag recalculate
                calculable: true, // Horizontal axis
                xAxis: [ {
                    type: 'category', boundaryGap: false, data: [ '03 march', '04 march', '05 march', '06 march', '07 march', '08 march', '09 march', '10 march', '11 march', '12 march', '13 march', '14 march'], axisLine: {
                        show: true, onZero: true, lineStyle: {
                            color: '#e77512', type: 'solid', width: '2', shadowColor: 'rgba(0,0,0,0)', shadowBlur: 5, shadowOffsetX: 3, shadowOffsetY: 3,
                        }
                        ,
                    }
                    , axisTick: {
                        show: false,
                    }
                    , splitLine: {
                        show: false, lineStyle: {
                            color: '#fff', type: 'solid', width: 0, shadowColor: 'rgba(0,0,0,0)',
                        }
                        ,
                    }
                    ,
                }
                ], // Vertical axis
                yAxis: [ {
                    type: 'value', splitLine: {
                        show: false, lineStyle: {
                            color: 'fff', type: 'solid', width: 0, shadowColor: 'rgba(0,0,0,0)',
                        }
                        ,
                    }
                    , axisLabel: {
                        show: false,
                    }
                    , axisTick: {
                        show: false,
                    }
                    , axisLine: {
                        show: false, onZero: true, lineStyle: {
                            color: '#ff0000', type: 'solid', width: '0', shadowColor: 'rgba(0,0,0,0)', shadowBlur: 5, shadowOffsetX: 3, shadowOffsetY: 3,
                        }
                        ,
                    }
                    ,
                }
                ], // Add series
                series: [ {
                    name: 'ICO Sales', type: 'bar', smooth: true, symbol:'none', symbolSize:2, showAllSymbol: true, barWidth:30, itemStyle: {
                        normal: {
                            color:'#e77512', borderWidth:2, borderColor:'#e77512', areaStyle: {
                                color: 'rgba(63,81,181,0)', type: 'default'
                            }
                        }
                    }
                    , data: [1545, 1343, 1445, 2675, 2878, 1789, 1745, 2343, 2445, 1675, 1878, 2789, 1545, 1343, 1445, 2675, 2878, 1789, 1745, 2343, 2445, 1675, 1878, 2789]
                }
                ]
            }
            ;
            // Load data into the ECharts instance 
            myChart.setOption(option);
        }
        /*------------- Chart 1 ----------------*/
        if($("#browser_type_bar").length) {
            // Initialize after dom ready
            var myChart=echarts.init(document.getElementById('browser_type_bar'));
            var option= {
                // Setup grid
                grid: {
                    zlevel: 0, x: 50, x2: 50, y: 20, y2: 20, borderWidth: 0, backgroundColor: 'rgba(0,0,0,0)', borderColor: 'rgba(0,0,0,0)',
                }
                , // Add tooltip
                tooltip: {
                    trigger: 'axis', axisPointer: {
                        type: 'shadow', // line|shadow
                        lineStyle: {
                            color: 'rgba(0,0,0,.5)', width: 1
                        }
                        , shadowStyle: {
                            color: 'rgba(0,0,0,.1)'
                        }
                    }
                }
                , // Add legend
                legend: {
                    data: []
                }
                , toolbox: {
                    orient: 'vertical', show: true, showTitle: true, color: ['#bdbdbd', '#bdbdbd', '#bdbdbd', '#bdbdbd'], feature: {
                        mark: {
                            show: false
                        }
                        , dataZoom: {
                            show: true, title: {
                                dataZoom: 'Data Zoom', dataZoomReset: 'Reset Zoom'
                            }
                        }
                        , dataView: {
                            show: false, readOnly: true
                        }
                        , magicType: {
                            show: true, title: {
                                line: 'Area', bar: 'Bar'
                            }
                            , type: ['line', 'bar']
                        }
                        , restore: {
                            show: false
                        }
                        , saveAsImage: {
                            show: true, title: 'Save as Image'
                        }
                    }
                }
                , // Enable drag recalculate
                calculable: true, // Horizontal axis
                xAxis: [ {
                    type: 'category', boundaryGap: false, data: ['Chrome', 'Firefox', 'Safari', 'Opera', 'IE'], axisLine: {
                        show: true, onZero: true, lineStyle: {
                            color: '#e77512', type: 'solid', width: '2', shadowColor: 'rgba(0,0,0,0)', shadowBlur: 5, shadowOffsetX: 3, shadowOffsetY: 3,
                        }
                        ,
                    }
                    , axisTick: {
                        show: false,
                    }
                    , splitLine: {
                        show: false, lineStyle: {
                            color: '#fff', type: 'solid', width: 0, shadowColor: 'rgba(0,0,0,0)',
                        }
                        ,
                    }
                    ,
                }
                ], // Vertical axis
                yAxis: [ {
                    type: 'value', splitLine: {
                        show: false, lineStyle: {
                            color: 'fff', type: 'solid', width: 0, shadowColor: 'rgba(0,0,0,0)',
                        }
                        ,
                    }
                    , axisLabel: {
                        show: false,
                    }
                    , axisTick: {
                        show: false,
                    }
                    , axisLine: {
                        show: false, onZero: true, lineStyle: {
                            color: '#ff0000', type: 'solid', width: '0', shadowColor: 'rgba(0,0,0,0)', shadowBlur: 5, shadowOffsetX: 3, shadowOffsetY: 3,
                        }
                        ,
                    }
                    ,
                }
                ], // Add series
                series: [ {
                    name: 'Total Visits', type: 'bar', smooth: true, symbol:'none', symbolSize:2, showAllSymbol: true, itemStyle: {
                        normal: {
                            color:'#e77512', borderWidth:4, borderColor:'#e77512', areaStyle: {
                                color: '#e77512', type: 'default'
                            }
                        }
                    }
                    , data: [500, 200, 322, 212, 99]
                }
                ]
            }
            ;
            // Load data into the ECharts instance 
            myChart.setOption(option);
        }
        /*-------------- Chart 2 ---------------*/
        if($("#user_type_bar").length) {
            // Initialize after dom ready
            var myChart=echarts.init(document.getElementById('user_type_bar'));
            var option= {
                // Setup grid
                grid: {
                    zlevel: 0, x: 50, x2: 50, y: 20, y2: 20, borderWidth: 0, backgroundColor: 'rgba(0,0,0,0)', borderColor: 'rgba(0,0,0,0)',
                }
                , // Add tooltip
                tooltip: {
                    trigger: 'axis', axisPointer: {
                        type: 'shadow', // line|shadow
                        lineStyle: {
                            color: 'rgba(0,0,0,.5)', width: 1
                        }
                        , shadowStyle: {
                            color: 'rgba(0,0,0,.1)'
                        }
                    }
                }
                , // Add legend
                legend: {
                    data: []
                }
                , toolbox: {
                    orient: 'vertical', show: true, showTitle: true, color: ['#bdbdbd', '#bdbdbd', '#bdbdbd', '#bdbdbd'], feature: {
                        mark: {
                            show: false
                        }
                        , dataZoom: {
                            show: true, title: {
                                dataZoom: 'Data Zoom', dataZoomReset: 'Reset Zoom'
                            }
                        }
                        , dataView: {
                            show: false, readOnly: true
                        }
                        , magicType: {
                            show: true, title: {
                                line: 'Area', bar: 'Bar', stack: 'Stacked Bar', tiled: 'Tiled Bar'
                            }
                            , type: ['line', 'bar', 'stack', 'tiled']
                        }
                        , restore: {
                            show: false
                        }
                        , saveAsImage: {
                            show: true, title: 'Save as Image'
                        }
                    }
                }
                , // Enable drag recalculate
                calculable: true, // Horizontal axis
                xAxis: [ {
                    type: 'category', boundaryGap: false, data: ['2018-06-01', '2018-05-01', '2018-04-01', '2018-03-01', '2018-02-01', '2018-01-01', '2015-12-01', '2015-11-01', '2015-10-01', '2015-09-01'], axisLine: {
                        show: true, onZero: true, lineStyle: {
                            color: '#e77512', type: 'solid', width: '2', shadowColor: 'rgba(0,0,0,0)', shadowBlur: 5, shadowOffsetX: 3, shadowOffsetY: 3,
                        }
                        ,
                    }
                    , axisTick: {
                        show: false,
                    }
                    , splitLine: {
                        show: false, lineStyle: {
                            color: '#fff', type: 'solid', width: 0, shadowColor: 'rgba(0,0,0,0)',
                        }
                        ,
                    }
                    ,
                }
                ], // Vertical axis
                yAxis: [ {
                    type: 'value', splitLine: {
                        show: false, lineStyle: {
                            color: 'fff', type: 'solid', width: 0, shadowColor: 'rgba(0,0,0,0)',
                        }
                        ,
                    }
                    , axisLabel: {
                        show: false,
                    }
                    , axisTick: {
                        show: false,
                    }
                    , axisLine: {
                        show: false, onZero: true, lineStyle: {
                            color: '#e8952e', type: 'solid', width: '0', shadowColor: 'rgba(0,0,0,0)', shadowBlur: 5, shadowOffsetX: 3, shadowOffsetY: 3,
                        }
                        ,
                    }
                    ,
                }
                ], // Add series
                series: [ {
                    name: 'Registered Users', type: 'bar', smooth: true, symbol:'none', symbolSize:2, showAllSymbol: true, barWidth:25, barGap:'10%', itemStyle: {
                        normal: {
                            color:'#e77512', borderWidth:2, borderColor:'#e77512', areaStyle: {
                                color: '#e77512', type: 'default'
                            }
                        }
                    }
                    , data: [2323, 2144, 4534, 1989, 3232, 2323, 2144, 4534, 1989, 3232, 2323, 2144, 4534, 1989, 3232, 2323, 2144, 4534, 1989, 3232, 2323, 2144, 4534, 1989, 3232, 2323, 2144, 4534, 1989, 3232]
                }
                , {
                    name: 'Guest Visitors', type: 'bar', smooth: true, symbol:'none', symbolSize:2, showAllSymbol: true, barWidth:25, barGap:'10%', itemStyle: {
                        normal: {
                            color:'#e8952e', borderWidth:2, borderColor:'#e8952e', areaStyle: {
                                color: '#e8952e', type: 'default'
                            }
                        }
                    }
                    , data: [5656, 6567, 7675, 3423, 4343, 5656, 6567, 7675, 3423, 4343, 5656, 6567, 7675, 3423, 4343, 5656, 6567, 7675, 3423, 4343, 5656, 6567, 7675, 3423, 4343, 5656, 6567, 7675, 3423, 4343]
                }
                , ]
            }
            ;
            // Load data into the ECharts instance 
            myChart.setOption(option);
        }
    }
    /******************************
     initialize respective scripts 
     *****************************/
    $(document).ready(function() {
        CRYPTONIA_SETTINGS.dashboardEcharts();
    }
    );
    $(window).resize(function() {
        CRYPTONIA_SETTINGS.dashboardEcharts();
    }
    );
    $(window).load(function() {}
    );
}

);