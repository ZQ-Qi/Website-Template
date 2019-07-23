//[Dashboard Javascript]

//Primary use:   Used only for the main dashboard (index.html)


$(function () {

  'use strict';	
	
	
	
	   $('.bandwidth').sparkline(
		  [32,24,26,24,32,26,40,34,22,24,32,24,26,24,32,26,40,34,22,24],
		  {
			type: 'bar',
			width: '100%',
			height: '150',
			barWidth: '2',
			resize: true,
			barSpacing: '6',
			barColor: 'rgba(255, 255, 255, 0.3)'
		  }
		);
		
//dashboard_daterangepicker
	
	if(0!==$("#dashboard_daterangepicker").length) {
		var n=$("#dashboard_daterangepicker"),
		e=moment(),
		t=moment();
		n.daterangepicker( {
			startDate:e, endDate:t, opens:"left", ranges: {
				Today: [moment(), moment()], Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")], "Last 7 Days": [moment().subtract(6, "days"), moment()], "Last 30 Days": [moment().subtract(29, "days"), moment()], "This Month": [moment().startOf("month"), moment().endOf("month")], "Last Month": [moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month")]
			}
		}
		, a),
		a(e, t, "")
	}
	function a(e, t, a) {
		var r="",
		o="";
		t-e<100||"Today"==a?(r="Today:", o=e.format("MMM D")): "Yesterday"==a?(r="Yesterday:", o=e.format("MMM D")): o=e.format("MMM D")+" - "+t.format("MMM D"), n.find(".subheader_daterange-date").html(o), n.find(".subheader_daterange-title").html(r)
	}
	
	
}); // End of use strict




                


