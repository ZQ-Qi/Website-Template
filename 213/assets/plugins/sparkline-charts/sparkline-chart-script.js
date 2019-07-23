
  $(function() {
    "use strict";

    $('#sparklinechart1').sparkline([ 1, 4, 5, 9, 8, 10, 5, 8, 4, 1, 0, 7, 5, 7, 9, 8, 10, 5], {
            type: 'bar',
            height: '45',
            barWidth: '3',
            resize: true,
            barSpacing: '4',
            barColor: '#fff',
			spotColor: '#fff',
            minSpotColor: '#fff',
            maxSpotColor: '#fff',
            highlightSpotColor: '#fff',
            highlightLineColor: '#fff'
        });
    
  $('#sparklinechart2').sparkline([20, 20, 20], {
            type: 'pie',
			width: '60',
            height: '60',
            resize: true,
            sliceColors: ['#ff2fa0', '#5e72e4', '#2dce89']
        });   
    
  $("#sparklinechart3").sparkline([2,4,4,6,8,5,6,4,8,6,6,2 ], {
    type: 'line',
    width: '150',
    height: '65',
    lineColor: '#2dce89',
    fillColor: '#2dce89',
    maxSpotColor: '#2dce89',
    highlightLineColor: '#2dce89',
    highlightSpotColor: '#2dce89'
  });
  
  
   $("#sparklinechart4").sparkline([0, 5, 10, 5, 15, 10, 20, 10, 5, 10, 5, 15, 10 ], {
            type: 'line',
            width: '150',
            height: '65',
            lineWidth: '2',
            lineColor: '#fff',
            fillColor: 'transparent',
            spotColor: '#fff',
            minSpotColor: '#fff',
            maxSpotColor: '#fff',
            highlightSpotColor: '#fff',
            highlightLineColor: '#fff'
    }); 


	$('#sparklinechart5').sparkline([40, 40, 40], {
		  type: 'pie',
		  height: '200',
		  resize: true,
		  sliceColors: ['#5e72e4', '#2dce89', '#f5365c']
	  });
	  
  
  $("#sparklinechart6").sparkline([15,16,20,18,19,14,17,12,11,12,10,14,17,14,10,15], {
    type: 'bar',
    width: '100%',
    height: '200',
    barWidth: 6,
    barSpacing: 10,
    barColor: '#ff2fa0'
  });
  

   $("#sparklinechart7").sparkline([2,4,4,6,8,5,6,4,8,6,6,2 ], {
    type: 'line',
    width: '100%',
    height: '200',
    lineWidth: '3',
    lineColor: '#11cdef',
    fillColor: 'rgba(17, 205, 239, 0.4)',
    maxSpotColor: '#11cdef',
    highlightLineColor: '#11cdef',
    highlightSpotColor: '#11cdef'
  });
  


   });