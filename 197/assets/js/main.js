/*

Project     : DAdmin - Responsive Bootstrap HTML Admin Dashboard
Version     : 1.1
Author      : ThemeLooks
Author URI  : https://themeforest.net/user/themelooks

*/

(function ($) {
    "use strict";
    
    /* ------------------------------------------------------------------------- *
     * COMMON VARIABLES
     * ------------------------------------------------------------------------- */
    var $wn = $(window),
        $document = $(document),
        $body = $('body');

    $(function () {
        /* ------------------------------------------------------------------------- *
         * BACKGROUND IMAGE
         * ------------------------------------------------------------------------- */
        var $bgImg = $('[data-bg-img]');

        $bgImg.css('background-image', function () {
            return 'url("' + $(this).data('bg-img') + '")';
        }).addClass('bg--img').removeAttr('data-bg-img');

        /* ------------------------------------------------------------------------- *
         * TOOLTIP
         * ------------------------------------------------------------------------- */
        var $tooltip = $('[data-toggle="tooltip"]');

        if ( $tooltip.length ) {
            $tooltip.tooltip();
        }

        /* ------------------------------------------------------------------------- *
         * SELECTMENU
         * ------------------------------------------------------------------------- */
        var $selectmenu = $('[data-trigger="selectmenu"]');

        if ( $selectmenu.length ) {
            $selectmenu.select2();
        }

        /* ------------------------------------------------------------------------- *
         * FILE INPUT
         * ------------------------------------------------------------------------- */
        $document.on('change', 'input[type="file"]', function (e) {
            e.$el = $(this);
            e.$txt = e.target.files.length === 0 ? 'Choose File' : e.target.files[0].name;

            if ( e.$el.hasClass('custom-file-input') ) {
                e.$el.next('span').text( e.$txt );
            }
        });

        /* ------------------------------------------------------------------------- *
         * SCROLLBAR
         * ------------------------------------------------------------------------- */
        var $scrollBar = $('[data-trigger="scrollbar"]');

        $scrollBar.each(function () {
            var $ps, $pos;

            $ps = new PerfectScrollbar(this);

            $pos = localStorage.getItem( 'ps.' + this.classList[0] );

            if ( $pos !== null ) {
                $ps.element.scrollTop = $pos;
            }
        });

        $scrollBar.on('ps-scroll-y', function () {
            localStorage.setItem( 'ps.' + this.classList[0], this.scrollTop );
        });

        /* ------------------------------------------------------------------------- *
         * RANGE SLIDER
         * ------------------------------------------------------------------------- */
        var $rangeSlider = $('[data-trigger="range-slider"]');

        if ( $rangeSlider.length ) {
            $rangeSlider.ionRangeSlider();
        }

        /* ------------------------------------------------------------------------- *
         * SPARKLINE
         * ------------------------------------------------------------------------- */
        var $sparkline = $('[data-trigger="sparkline"]');

        $sparkline.each(function () {
            var $t = $(this);

            $t.sparkline('html', {
                type: $t.data('type'),
                barColor: $t.data('color'),
                barWidth: $t.data('width'),
                height: $t.data('height'),
                values: $t.data('value')
            });
        });

        var $sparklineChart01 = $('[data-trigger="sparklineChart01"]');

        if ( $sparklineChart01.length ) {
            $sparklineChart01.sparkline('html', {
                width: '100%',
                height: '100px',
                lineColor: '#ebebea',
                fillColor: '#ebebea',
                spotColor: '#2bb3c0',
                minSpotColor: '#2bb3c0',
                maxSpotColor: '#2bb3c0',
                spotRadius: '3'
            });
        }

        /* ------------------------------------------------------------------------- *
         * CHARTS
         * ------------------------------------------------------------------------- */
        /* MORRIS LINE CHART 01 */
        var $morrisLineChart01 = document.getElementById('morrisLineChart01');

        if ( $morrisLineChart01 ) {
            new Morris.Line({
                element: $morrisLineChart01.id,
                data: [
                    { degree: '30.05', a: 46 },
                    { degree: '31.05', a: 46 },
                    { degree: '01.06', a: 42 },
                    { degree: '02.06', a: 50 },
                    { degree: '03.06', a: 22 },
                    { degree: '04.06', a: 46 },
                    { degree: '05.06', a: 52 }
                ],
                xkey: 'degree',
                ykeys: ['a'],
                labels: ['Progress'],
                lineColors: ['#009378'],
                postUnits: '%',
                parseTime: false,
                pointSize: 0,
                lineWidth: 2,
                gridLineColor: '#eee',
                resize: true,
                hideHover: true
            });
        }

        var $morrisLineChart02 = document.getElementById('morrisLineChart02');

        if ( $morrisLineChart02 ) {
            new Morris.Line({
                element: $morrisLineChart02.id,
                data: [
                    { month: 'Feb', a: 270, b: 250 },
                    { month: 'Mar', a: 275, b: 260 },
                    { month: 'Apr', a: 225, b: 240 },
                    { month: 'May', a: 230, b: 230 },
                    { month: 'Jun', a: 335, b: 220 }
                ],
                xkey: 'month',
                ykeys: ['a', 'b'],
                labels: ['Visitors', 'Sales'],
                lineColors: ['#e16123', '#2bb3c0'],
                parseTime: false,
                pointSize: 2,
                lineWidth: 2,
                gridLineColor: '#eee',
                resize: true,
                hideHover: true,
                axes: 'x'
            });
        }

        /* MORRIS AREA CHART 03 */
        var $morrisLineChart03 = document.getElementById('morrisLineChart03');

        if ( $morrisLineChart03 ) {
            new Morris.Line({
                element: $morrisLineChart03.id,
                data: [
                    { day: 'S', a: 20 },
                    { day: 'M', a: 30 },
                    { day: 'T', a: 40 },
                    { day: 'W', a: 20 },
                    { day: 'T', a: 10 },
                    { day: 'F', a: 10 },
                    { day: 'S', a: 5 }
                ],
                xkey: 'day',
                ykeys: ['a'],
                labels: ['Overdue'],
                lineColors: ['#e16123'],
                preUnits: '$',
                parseTime: false,
                pointSize: 4,
                gridLineColor: '#eee',
                resize: true,
                hideHover: true
            });
        }

        /* MORRIS AREA CHART 01 */
        var $morrisAreaChart01 = document.getElementById('morrisAreaChart01');

        if ( $morrisAreaChart01 ) {
            new Morris.Area({
                element: $morrisAreaChart01.id,
                data: [
                    { month: 'Jan', a: 0, b: 0, c: 500, d: 0 },
                    { month: 'Feb', a: 2000, b: 1500, c: 500, d: 1000 },
                    { month: 'Mar', a: 2000, b: 2000, c: 1500, d: 1500 },
                    { month: 'Apr', a: 2000, b: 2000, c: 1500, d: 1500 },
                    { month: 'May', a: 2000, b: 2000, c: 1500, d: 1500 },
                    { month: 'Jun', a: 1500, b: 1200, c: 2000, d: 2000 },
                    { month: 'Jul', a: 300, b: 2000, c: 2500, d: 1200 },
                    { month: 'Aug', a: 2500, b: 3000, c: 1500, d: 2000 },
                    { month: 'Sep', a: 1000, b: 1000, c: 1500, d: 1000 },
                    { month: 'Oct', a: 3500, b: 1800, c: 3000, d: 1500 },
                    { month: 'Nov', a: 3500, b: 2000, c: 2000, d: 3500 },
                    { month: 'Dec', a: 5000, b: 1200, c: 4500, d: 4500 }
                ],
                xkey: 'month',
                ykeys: ['a', 'b', 'c', 'd'],
                labels: ['Order', 'Shipment', 'Tax', 'Revenue'],
                lineColors: ['#e16123', '#ff4040', '#2bb3c0', '#009378'],
                preUnits: '$',
                parseTime: false,
                pointSize: 0,
                lineWidth: 0,
                gridLineColor: '#eee',
                resize: true,
                hideHover: true,
                behaveLikeLine: true
            });
        }

        /* MORRIS AREA CHART 02 */
        var $morrisAreaChart02 = document.getElementById('morrisAreaChart02');

        if ( $morrisAreaChart02 ) {
            new Morris.Area({
                element: $morrisAreaChart02.id,
                data: [
                    { day: '20', a: 0, b: 50 },
                    { day: '21', a: 200, b: 250 },
                    { day: '22', a: 380, b: 250 },
                    { day: '23', a: 400, b: 450 },
                    { day: '24', a: 790, b: 350 },
                    { day: '25', a: 600, b: 650 },
                    { day: '26', a: 800, b: 850 }
                ],
                xkey: 'day',
                ykeys: ['a', 'b'],
                labels: ['Total Debt', 'Total Equity'],
                lineColors: ['#ff4040', '#2bb3c0'],
                preUnits: '$',
                parseTime: false,
                pointSize: 0,
                lineWidth: 0,
                gridLineColor: '#eee',
                resize: true,
                hideHover: true,
                behaveLikeLine: true
            });
        }

        /* MORRIS AREA CHART 03 */
        var $morrisAreaChart03 = document.getElementById('morrisAreaChart03');

        if ( $morrisAreaChart03 ) {
            new Morris.Area({
                element: $morrisAreaChart03.id,
                data: [
                    { month: 'Jan', a: 0, b: 0, c: 0, d: 0 },
                    { month: 'Feb', a: 1200, b: 0, c: 0, d: 0 },
                    { month: 'Mar', a: 0, b: 700, c: 0, d: 0 },
                    { month: 'Apr', a: 0, b: 0, c: 1800, d: 0 },
                    { month: 'May', a: 0, b: 0, c: 0, d: 1200 },
                    { month: 'Jun', a: 0, b: 700, c: 0, d: 0 },
                    { month: 'Jul', a: 0, b: 0, c: 0, d: 0 },
                    { month: 'Aug', a: 0, b: 0, c: 1200, d: 0 },
                    { month: 'Sep', a: 0, b: 0, c: 0, d: 0 },
                    { month: 'Oct', a: 0, b: 1200, c: 0, d: 0 },
                    { month: 'Nov', a: 0, b: 0, c: 0, d: 2400 },
                    { month: 'Dec', a: 0, b: 0, c: 0, d: 0 }
                ],
                xkey: 'month',
                ykeys: ['a', 'b', 'c', 'd'],
                labels: ['Product 1', 'Product 2', 'Product 3', 'Product 4'],
                lineColors: ['#e16123', '#ff4040', '#2bb3c0', '#009378'],
                preUnits: '$',
                parseTime: false,
                pointSize: 0,
                lineWidth: 0,
                gridLineColor: '#eee',
                resize: true,
                hideHover: true,
                behaveLikeLine: true
            });
        }

        /* ------------------------------------------------------------------------- *
         * VECTOR MAP
         * ------------------------------------------------------------------------- */
        var $jvectorMap = $('[data-trigger="jvectorMap"]');

        if ( $jvectorMap.length ) {
            $jvectorMap
        }

        $jvectorMap.each(function () {
            var $t = $(this);

            $t.vectorMap({
                map: 'world_mill',
                backgroundColor: 'transparent',
                regionStyle: {
                    initial: { fill: '#494f50' },
                    selected: { fill: '#e16123' }
                },
                selectedRegions: $t.data('map-selected')
            });
        });

        /* ------------------------------------------------------------------------- *
         * FORM WIZARD
         * ------------------------------------------------------------------------- */
        var $formWizard = $('#formWizard');

        if ( $formWizard.length ) {
            $formWizard.validate({
                errorPlacement: function () {
                    return false;
                },
                rules: {
                    cpassword: {
                        equalTo: '#password'
                    }
                }
            });

            $formWizard.steps({
                headerTag: 'h3',
                bodyTag: 'section',
                titleTemplate: '<span class="number">#index#</span> #title#',
                onStepChanging: function () {
                    $formWizard.validate().settings.ignore = ':disabled,:hidden';
                    return $formWizard.valid();
                },
                onFinishing: function () {
                    $formWizard.validate().settings.ignore = ":disabled";
                    return $formWizard.valid();
                }
            });
        }
        
        /* ------------------------------------------------------------------------- *
         * RECORDS LIST
         * ------------------------------------------------------------------------- */
        var $recordsList = $('.records--list'),
            $recordsListView = $('#recordsListView');

        if ( $recordsListView.length ) {
            $recordsListView.DataTable({
                responsive: true,
                language: {
                    "lengthMenu": "View _MENU_ records"
                },
                dom: '<"topbar"<"toolbar"><"right"li>><"table-responsive"t>p',
                order: [],
                columnDefs: [
                    {
                        targets: 'not-sortable',
                        orderable: false
                    }
                ]
            });

            $recordsList.find('.toolbar').text( $recordsList.data('title') );
        }

        /* ------------------------------------------------------------------------- *
         * SIDEBAR NAVIGATION
         * ------------------------------------------------------------------------- */
        var $sidebarNav = $('.sidebar--nav');

        $.each( $sidebarNav.find('li'), function () {
            var $li = $(this);

            if ( $li.children('a').length && $li.children('ul').length ) {
                $li.addClass('is-dropdown');
            }
        });

        $sidebarNav.on('click', '.is-dropdown > a', function (e) {
            e.preventDefault();

            var $el = $(this),
                $es = $el.siblings('ul'),
                $ep = $el.parent(),
                $ps = $ep.siblings('.open');

            if ( $ep.parent().parent('.sidebar--nav').length ) {
                $es.slideToggle();
                $ep.toggleClass('open');

                return;
            }

            $es.add( $ps.children('ul') ).slideToggle();
            $ep.add( $ps ).toggleClass('open');
        });

        /* ------------------------------------------------------------------------- *
         * TOGGLE SIDEBAR
         * ------------------------------------------------------------------------- */
        var $toggleSidebar = $('[data-toggle="sidebar"]');

        $toggleSidebar.on('click', function (e) {
            e.preventDefault();

            $body.toggleClass('sidebar-mini');
        });

        /* ------------------------------------------------------------------------- *
         * TODO PANEL
         * ------------------------------------------------------------------------- */
        var $todoPanel = $('.todo--panel');

        $todoPanel
            .on('submit', 'form', function (e) {
                e.preventDefault();

                var $t = $(this),
                    $input = $t.find('.form-control');

                $('<li class="list-group-item" style="display: none;"><label class="todo--label"><input type="checkbox" name="" value="1" class="todo--input"><span class="todo--text">'+ $input.val() +'</span></label><a href="#" class="todo--remove">&times;</a></li>')
                    .appendTo( $t.children('.list-group') )
                    .slideDown('slow');

                $input.val('');
            })
            .on('click', '.todo--remove', function (e) {
                e.preventDefault();

                var $parent = $(this).parent('li');

                $parent.slideUp('slow', function () {
                    $parent.remove();
                });
            });
    });

}(jQuery));
