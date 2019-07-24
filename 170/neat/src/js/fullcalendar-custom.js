//
// Full Calendar 
//
// Specify your own calendar events, options
// Read More: https://fullcalendar.io/docs/

"use strict";

$(function(){

	if($('.js-calendar')){
		var $calendar = $('.js-calendar');
		
	    $calendar.fullCalendar({
	    	//
	        // Put your options and callbacks here
	        //
	        
	        header:
	        {
	            left: 'prev,next',
	            center: 'title',
	            right: 'month,agendaWeek,agendaDay'
	        },

	        // Show full name of day instead of short(default) name
	        dayNamesShort: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],

	        // Time Format
	        timeFormat: 'hh:mm a',

	        // Events
	        events: [
		        {
		            title  : 'Meeting with James',
		            start  : '2018-01-28',
		            className: 'fc-event--orange',
		            allDay: true
		        },
		        {
		        	title  : 'New branding launch',
		            start  : '2018-02-24',
		            end    : '2018-02-26',
		            className: 'fc-event--green',
		            allDay: true
		        },
		        {
		            title  : 'Deliver new product',
		            start  : '2018-02-08',
		            end    : '2018-02-12',
		            className: 'fc-event--blue'
		        },
		        {
		            title  : 'Meeting with CEO',
		            start  : '2018-02-27',
		            className: 'fc-event--green',
		            allDay: true
		        },
		        {
		            title  : 'Julia\'s birthday',
		            start  : '2018-02-30',
		            className: 'fc-event--green'
		        }, //
		        {
		            title  : 'New job interview',
		            start  : '2018-02-28',
		            className: 'fc-event--orange',
		            allDay: true
		        },
		        {
		        	title  : 'Custom design',
		            start  : '2018-02-24',
		            end    : '2018-02-26',
		            className: 'fc-event--green',
		            allDay: true
		        },
		        {
		            title  : 'Buy New iPhone',
		            start  : '2018-02-08',
		            end    : '2018-02-12',
		            className: 'fc-event--blue'
		        },
		        {
		            title  : 'Travel to Canada',
		            start  : '2018-02-27',
		            className: 'fc-event--green',
		            allDay: true
		        },
		        {
		            title  : 'Agency brainstorming',
		            start  : '2018-02-30',
		            className: 'fc-event--green'
		        }
		    ]
	    });
	}
});