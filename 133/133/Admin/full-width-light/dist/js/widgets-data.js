/*Widgets Init*/
 
"use strict"; 

/*****Ready function start*****/
$(document).ready(function(){
	if( $('#support_table').length > 0 ) {
		$('#support_table').DataTable({
		 "bFilter": false,
		 "bLengthChange": false,
		 "bPaginate": false,
		 "bInfo": false,
		});
	}
	if( $('#chart_6').length > 0 ){
		var ctx6 = document.getElementById("chart_6").getContext("2d");
		var data6 = {
			 labels: [
			"organic",
			"Referral",
			"Other"
		],
		datasets: [
			{
				data: [200,50,250],
				backgroundColor: [
					"rgba(248, 179, 45,1)",
					"rgba(74, 162, 60,1)",
					"rgba(0,152, 163,1)",
				],
				hoverBackgroundColor: [
					"rgba(248, 179, 45,1)",
					"rgba(74, 162, 60,1)",
					"rgba(0,152, 163,1)",
				]
			}]
		};
		
		var pieChart  = new Chart(ctx6,{
			type: 'pie',
			data: data6,
			options: {
				animation: {
					duration:	3000
				},
				responsive: true,
				maintainAspectRatio:false,
				legend: {
					display:false
				},
				elements: {
					arc: {
							borderWidth: 0
						}
				},
				tooltips: {
					backgroundColor:'rgba(33,33,33,1)',
					cornerRadius:0,
					footerFontFamily:"'Roboto'"
				}
			}
		});
	}
	if( $('#pie_chart_4').length > 0 ){
		$('#pie_chart_4').easyPieChart({
			barColor : 'rgba(74, 162, 60,1)',
			lineWidth: 20,
			animate: 3000,
			size:	165,
			lineCap: 'square',
			trackColor: 'rgba(33,33,33,0.1)',
			scaleColor: false,
			onStep: function(from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
		});
	}
	if( $('#chart_7').length > 0 ){
		var ctx7 = document.getElementById("chart_7").getContext("2d");
		var data7 = {
			 labels: [
			"lab 1",
			"lab 2",
			"lab 3",
			"lab 4",
			"lab 5"
		],
		datasets: [
			{
				data: [30,870,300, 50, 100],
				backgroundColor: [
					"rgba(248, 179, 45,1)",
					"rgba(74, 162, 60,1)",
					"rgba(0,152, 163,1)",
					"rgba(243, 57, 35,1)",
					"rgba(231, 54, 141,1)",
				],
				hoverBackgroundColor: [
					"rgba(248, 179, 45,1)",
					"rgba(74, 162, 60,1)",
					"rgba(0,152, 163,1)",
					"rgba(243, 57, 35,1)",
					"rgba(231, 54, 141,1)",
				]
			}]
		};
		
		var doughnutChart = new Chart(ctx7, {
			type: 'doughnut',
			data: data7,
			options: {
				animation: {
					duration:	3000
				},
				elements: {
					arc: {
						borderWidth: 0
					}
				},
				responsive: true,
				maintainAspectRatio:false,
				percentageInnerCutout: 50,
				legend: {
					display:false
				},
				tooltips: {
					backgroundColor:'rgba(33,33,33,1)',
					cornerRadius:0,
					footerFontFamily:"'Roboto'"
				},
				cutoutPercentage: 70,
				segmentShowStroke: false
			}
		});
	}	
	
	if( $('.instagram-lite').length > 0 ){
		/*instagram*/
		$.fn.spectragram.accessData = {
				accessToken: '3434068161.50cce2b.797965f78a3e4269839dd8e3b4ae65a4',
				clientID: '50cce2bc21ad40a7939d71ed89f63a14'
			};
		$('.instagram-lite').spectragram('getUserFeed', {
			query: 'themenerds', //this gets adrianengine's photo feed
			size: 'max',
			max: 4});
	}	
	if( $('#tweets_fetch').length > 0 ){
		var configList = {
		  "profile": {"screenName": 'envato'},
		  "domId": 'tweets_fetch',
		  "maxTweets": 2,
		  "enableLinks": true, 
		  "showUser": true,
		  "showTime": true,
		  "showImages": true,
		  "lang": 'en'
		};
		twitterFetcher.fetch(configList);
	}
});
/*****Ready function end*****/


var sparklineLogin = function() { 
	if( $('#sparkline_1').length > 0 ){
		$("#sparkline_1").sparkline([2,4,4,6,8,5,6,4,8,6,6,2 ], {
			type: 'line',
			width: '100%',
			height: '35',
			lineColor: '#4aa23c',
			fillColor: 'rgba(74, 162, 60,1)',
			minSpotColor: '#4aa23c',
			maxSpotColor: '#4aa23c',
			spotColor: '#4aa23c',
			highlightLineColor: 'rgba(0, 0, 0, 0.6)',
			highlightSpotColor: '#4aa23c'
		});
	}	
	if( $('#sparkline_2').length > 0 ){
		$("#sparkline_2").sparkline([0,2,8,6,8], {
			type: 'line',
			width: '100%',
			height: '35',
			lineColor: '#4aa23c',
			fillColor: 'rgba(74, 162, 60,1)',
			minSpotColor: '#4aa23c',
			maxSpotColor: '#4aa23c',
			spotColor: '#4aa23c',
			highlightLineColor: 'rgba(0, 0, 0, 0.6)',
			highlightSpotColor: '#4aa23c'
		});
	}	
	if( $('#sparkline_3').length > 0 ){
		$("#sparkline_3").sparkline([0, 23, 43, 35, 44, 45, 56, 37, 40, 45, 56, 7, 10], {
			type: 'line',
			width: '100%',
			height: '35',
			lineColor: '#4aa23c',
			fillColor: 'rgba(74, 162, 60,1)',
			minSpotColor: '#4aa23c',
			maxSpotColor: '#4aa23c',
			spotColor: '#4aa23c',
			highlightLineColor: 'rgba(0, 0, 0, 0.6)',
			highlightSpotColor: '#4aa23c'
		});
	}
	if( $('#sparkline_4').length > 0 ){
		$("#sparkline_4").sparkline([2,4,4,6,8,5,6,4,8,6,6,2 ], {
			type: 'line',
			width: '100%',
			height: '45',
			lineColor: '#f8b32d',
			fillColor: 'rgba(248, 179, 45,1)',
			minSpotColor: '#f8b32d',
			maxSpotColor: '#f8b32d',
			spotColor: '#f8b32d',
			highlightLineColor: 'rgba(0, 0, 0, 0.6)',
			highlightSpotColor: '#f8b32d'
		});
	}	
	if( $('#sparkline_5').length > 0 ){
		$("#sparkline_5").sparkline([0,2,8,6,8], {
			type: 'bar',
			width: '100%',
			height: '45',
			barWidth: '10',
			resize: true,
			barSpacing: '10',
			barColor: 'rgba(0,152, 163,1)',
			highlightSpotColor: '#0098a3'
		});
	}	
	if( $('#sparkline_6').length > 0 ){
		$("#sparkline_6").sparkline([2,4,4,6,8,5,6,4,8,6,6,2 ], {
			type: 'line',
			width: '100%',
			height: '45',
			lineColor: '#4aa23c',
			fillColor: 'rgba(74, 162, 60,1)',
			minSpotColor: '#4aa23c',
			maxSpotColor: '#4aa23c',
			spotColor: '#4aa23c',
			highlightLineColor: 'rgba(0, 0, 0, 0.6)',
			highlightSpotColor: '#4aa23c'
		});
	}	
	
}
var sparkResize;
	$(window).resize(function(e) {
		clearTimeout(sparkResize);
		sparkResize = setTimeout(sparklineLogin, 200);
	});
sparklineLogin();

	