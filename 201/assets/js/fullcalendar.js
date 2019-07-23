	
/*---Selectable calendar---*/
$(document).ready(function() {
	$('#calendar1').fullCalendar({
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      defaultDate: '2018-10-12',
      navLinks: true, // can click day/week names to navigate views
      selectable: true,
      selectHelper: true,
      select: function(start, end) {
        var title = prompt('Event Title:');
        var eventData;
        if (title) {
          eventData = {
            title: title,
            start: start,
            end: end
          };
          $('#calendar1').fullCalendar('renderEvent', eventData, true); // stick? = true
        }
        $('#calendar1').fullCalendar('unselect');
      },
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: [
        {
          title: 'All Day Event',
          start: '2018-10-01'
        },
        {
          title: 'Long Event',
          start: '2018-08-07',
          end: '2018-08-10'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2018-08-09T16:00:00'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2018-08-16T16:00:00'
        },
        {
          title: 'Conference',
          start: '2018-08-11',
          end: '2018-08-13'
        },
        {
          title: 'Meeting',
          start: '2018-08-12T10:30:00',
          end: '2018-08-12T12:30:00'
        },
        {
          title: 'Lunch',
          start: '2018-08-12T12:00:00'
        },
        {
          title: 'Meeting',
          start: '2018-08-12T14:30:00'
        },
        {
          title: 'Happy Hour',
          start: '2018-08-12T17:30:00'
        },
        {
          title: 'Dinner',
          start: '2018-10-12T20:00:00'
        },
        {
          title: 'Birthday Party',
          start: '2018-10-23T07:00:00'
        },
        {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: '2018-08-28'
        }
      ]
    });

  });
  
  // list type
  $(document).ready(function() {

    $('#calendar').fullCalendar({
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'listDay,listWeek,month'
      },

      // customize the button names,
      // otherwise they'd all just say "list"
      views: {
        listDay: { buttonText: 'list day' },
        listWeek: { buttonText: 'list week' }
      },

      defaultView: 'listWeek',
      defaultDate: '2018-10-12',
      navLinks: true, // can click day/week names to navigate views
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: [
        {
          title: 'All Day Event',
          start: '2018-10-01'
        },
        {
          title: 'Long Event',
          start: '2018-08-07',
          end: '2018-03-10'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2018-10-09T16:00:00'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2018-08-16T16:00:00'
        },
        {
          title: 'Conference',
          start: '2018-08-11',
          end: '2018-08-13'
        },
        {
          title: 'Meeting',
          start: '2018-10-12T10:30:00',
          end: '2018-10-12T12:30:00'
        },
        {
          title: 'Lunch',
          start: '2018-08-12T12:00:00'
        },
        {
          title: 'Meeting',
          start: '2018-08-12T14:30:00'
        },
        {
          title: 'Happy Hour',
          start: '2018-08-12T17:30:00'
        },
        {
          title: 'Dinner',
          start: '2018-10-12T20:00:00'
        },
        {
          title: 'Birthday Party',
          start: '2018-10-23T19:00:00'
        },
        {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: '2018-08-28'
        }
      ]
    });

  });