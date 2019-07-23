/* 
 Dashboard alpha custom js file
 */
$(document).ready(function () {
    $(function () {
        //page view chart
        c3.generate({
            bindto: '#stocked',
            data: {
                columns: [
                    ['Visitors', 130, 200, 100, 140, 150, 250],
                    ['uniqueVisitors', 50, 90, 80, 40, 55, 89]
                ],
                colors: {
                    Visitors: '#23b7e5',
                    uniqueVisitors: '#ddd'
                },
                type: 'bar',
                groups: [
                    ['Visitors', 'uniqueVisitors']
                ]
            }
        });
        /*time series*/
        var chart = c3.generate({
            bindto: '#timeseriesChart',
            data: {
                x: 'x',
                xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
                columns: [
                    ['x', '2016-09-01', '2016-09-02', '2016-09-03', '2016-09-04', '2013-01-05', '2016-09-06'],
                    ['x', '20130101', '20130102', '20130103', '20130104', '20130105', '20130106'],
                    ['data1', 30, 200, 100, 400, 150, 250],
                    ['data2', 130, 340, 200, 500, 250, 350]
                ],
                colors: {
                    data1: '#23b7e5',
                    data2: '#BABABA',
                    data3: '#26A69A'
                }
            },
            axis: {
                x: {
                    type: 'timeseries',
                    tick: {
                        format: '%Y-%m-%d'
                    }
                }
            }
        });

        setTimeout(function () {
            chart.load({
                columns: [
                    ['data3', 400, 500, 450, 700, 600, 500]
                ]
            });
        }, 1000);
        //pie chart
        c3.generate({
            bindto: '#pieChart',
            data: {
                columns: [
                    ['Remains', 30],
                    ['Used', 120]
                ],
                colors: {
                    Remains: '#F44336',
                    Used: '#50cdf4'
                },
                type: 'pie'
            }
        });
    });
    $('.i-checks').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    $.toast({
        heading: 'Welcome back Emily',
        text: 'A simple and easy to use bootstrap admin template',
        position: 'top-right',
        loaderBg: '#fff',
        icon: 'success',
        hideAfter: 3000,
        stack: 1
    });

});