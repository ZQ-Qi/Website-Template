/*
 Template Name: Upcube - Bootstrap 4 Admin Dashboard
 Author: Themesdesign
 Website: www.themesdesign.in
 File: Dashboard js
 */

!function ($) {
    "use strict";

    var Dashboard = function () {
    };


    //creates area chart
    Dashboard.prototype.createAreaChart = function (element, pointSize, lineWidth, data, xkey, ykeys, labels, lineColors) {
        Morris.Area({
            element: element,
            pointSize: 0,
            lineWidth: 0,
            data: data,
            xkey: xkey,
            ykeys: ykeys,
            labels: labels,
            resize: true,
            gridLineColor: '#eee',
            hideHover: 'auto',
            lineColors: lineColors,
            fillOpacity: .6,
            behaveLikeLine: true
        });
    },
        //creates Bar chart
        Dashboard.prototype.createBarChart = function (element, data, xkey, ykeys, labels, lineColors) {
            Morris.Bar({
                element: element,
                data: data,
                xkey: xkey,
                ykeys: ykeys,
                labels: labels,
                gridLineColor: '#eee',
                barSizeRatio: 0.4,
                resize: true,
                hideHover: 'auto',
                barColors: lineColors
            });
        },

        //creates Donut chart
        Dashboard.prototype.createDonutChart = function (element, data, colors) {
            Morris.Donut({
                element: element,
                data: data,
                resize: true,
                colors: colors,
            });
        },

        Dashboard.prototype.init = function () {

            //creating area chart
            var $areaData = [
                {y: '2007', a: 0, b: 0, c:0},
                {y: '2008', a: 150, b: 45, c:15},
                {y: '2009', a: 60, b: 150, c:195},
                {y: '2010', a: 180, b: 36, c:21},
                {y: '2011', a: 90, b: 60, c:360},
                {y: '2012', a: 75, b: 240, c:120},
                {y: '2013', a: 30, b: 30, c:30}
            ];
            this.createAreaChart('morris-area-example', 0, 0, $areaData, 'y', ['a', 'b', 'c'], ['Series A', 'Series B', 'Series C'], ['#0097a7', '#ffbb44', '#f32f53']);

            //creating bar chart
            var $barData = [
                { y: '2009', a: 100, b: 90 , c: 40 },
                { y: '2010', a: 75,  b: 65 , c: 20 },
                { y: '2011', a: 50,  b: 40 , c: 50 },
                { y: '2012', a: 75,  b: 65 , c: 95 },
                { y: '2013', a: 50,  b: 40 , c: 22 },
                { y: '2014', a: 75,  b: 65 , c: 56 },
                { y: '2015', a: 100, b: 90 , c: 60 }
            ];
            this.createBarChart('morris-bar-example', $barData, 'y', ['a', 'b'], ['Series A', 'Series B'], ['#4c84ff','#6fd088']);

            //creating donut chart
            var $donutData = [
                {label: "New York", value: 12},
                {label: "London", value: 42},
                {label: "Peking", value: 20},
                {label: "Paris", value: 26}
            ];
            this.createDonutChart('morris-donut-example', $donutData, ['#00a5a8', "#f43f5d", '#d1d337', '#10c888']);

        },
        //init
        $.Dashboard = new Dashboard, $.Dashboard.Constructor = Dashboard
}(window.jQuery),

//initializing
    function ($) {
        "use strict";
        $.Dashboard.init();
    }(window.jQuery);