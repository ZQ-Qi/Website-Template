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
         * CALENDAR EVENTS
         * ------------------------------------------------------------------------- */
        var $calendarEvents = $('.calendar--events'),
            $calendarEventsEl = $calendarEvents.children('.fc-events'),
            $calendarEventEl = $calendarEventsEl.children('.fc-event'),
            $calendarEventsInput = $calendarEvents.find('.form-check-input');

        if ( $calendarEvents.length ) {
            $calendarEventEl.each(function () {
                var $el = $(this),
                    bgColor = $el.css('background-color');

                $el.draggable({
                        revert: true,
                        revertDuration: 0,
                        zIndex: 999
                    })
                    .css({
                        'border-color': bgColor
                    })
                    .data('event', {
                        title: $el.text(),
                        color: bgColor,
                        stick: true
                    });
            });
        }

        $calendarEvents.on('click', '.calendar--event__colors li', function () {
            var $el = $(this);

            $el.addClass('active').siblings().removeClass('active');
        });

        $calendarEvents.on('submit', 'form', function (e) {
            e.preventDefault();

            var $el = $(this),
                $input = $el.children('input'),
                $event = $('<div></div>'),
                $colorClass = $calendarEvents.find('.calendar--event__colors .active'),
                $bdColor = $colorClass.css('background-color');

            $event.draggable({
                    revert: true,
                    revertDuration: 0,
                    zIndex: 999
                })
                .css({
                    'border-color': $bdColor
                })
                .data('event', {
                    title: $input.val(),
                    color: $bdColor,
                    stick: true
                })
                .addClass( ' fc-event ' + $colorClass.attr('class') )
                .text( $input.val() )
                .appendTo( $calendarEventsEl );
        });

        /* ------------------------------------------------------------------------- *
         * CALENDAR APP
         * ------------------------------------------------------------------------- */
        var $calendarApp = $('#calendarApp');

        if ( $calendarApp.length ) {
            $calendarApp.fullCalendar({
                header: {
                    left: '',
                    center: 'prev next title',
                    right: 'today basicDay basicWeek month'
                },
                editable: true,
                droppable: true,
                drop: function () {
                    if ( $calendarEventsInput.is(':checked') ) {
                        $(this).remove();
                    }
                },
                timeFormat: 'h(:mm)a',
                events: [
                    {
                        title: 'Party',
                        start: '2018-02-06T16:30:00'
                    },
                    {
                        title: 'Meeting',
                        start: '2018-02-13T10:30:00',
                        color: '#009378'
                    },
                    {
                        title: 'Launch',
                        start: '2018-02-16T13:30:00',
                        color: '#2bb3c0'
                    },
                    {
                        title: 'Long Event',
                        start: '2018-02-23T12:30:00',
                        end: '2018-02-24T12:30:00',
                        color: '#e16123'
                    },
                    {
                        title: 'Launch',
                        start: '2018-02-24T13:30:00'
                    },
                    {
                        title: 'Simple Event',
                        start: '2018-02-25',
                        color: '#ff4040'
                    }
                ]
            });
        }
    });

}(jQuery));
