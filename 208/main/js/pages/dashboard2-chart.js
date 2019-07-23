//[Dashboard chart Javascript]



//------------echarts1

if( $('#e_chart_1').length > 0 ){
		var eChart_1 = echarts.init(document.getElementById('e_chart_1'));
		var option = {
			xAxis: {
				type: 'time',
				boundaryGap: false,
				axisLine: {
					show:false
				},
				axisLabel: {
					textStyle: {
						color: '#878787',
						fontStyle: 'normal',
						fontWeight: 'normal',
						fontFamily: "'Roboto', sans-serif",
						fontSize: 12
					}
				},
				splitLine: {
					show: false,
				},
			},
			yAxis: {
				data: ['1', '2', '3'],
				axisLine: {
						show:false
				},
				axisLabel: {
					textStyle: {
						color: '#878787',
						fontStyle: 'normal',
						fontWeight: 'normal',
						fontFamily: "'Roboto', sans-serif",
						fontSize: 12
					}
				},
				splitLine: {
					show: false,
				},
				boundaryGap: [0, '100%']
			},
			tooltip: {
				trigger: 'axis',
				backgroundColor: 'rgba(33,33,33,1)',
				borderRadius:0,
				padding:10,
				axisPointer: {
					type: 'cross',
					label: {
						backgroundColor: 'rgba(33,33,33,1)'
					}
				},
				textStyle: {
					color: '#fff',
					fontStyle: 'normal',
					fontWeight: 'normal',
					fontFamily: "'Roboto', sans-serif",
					fontSize: 12
				}	
			},
			series: [
				{
					name: 'ab1',
					type: 'bar',
					stack: '1',
					itemStyle: {
						normal: {
							color: 'rgba(0,0,0,1)'
						}
					},
					data: [
						new Date("2018/09/2"),
						new Date("2018/09/8"),
						new Date("2018/09/18"),
					]
				},{
					name: 'ab2',
					type: 'bar',
					stack: '1',
					itemStyle: {
						normal: {
							color: '#6F88EE',
							barBorderRadius: 5,
							shadowBlur: 5,
							shadowColor: 'rgba(0, 0, 0, .2)'
						}
					},
					data: [
						new Date("2018/09/19"),
						new Date("2018/09/29"),
						new Date("2018/09/28"),
					]
				}
			]
		};
		eChart_1.setOption(option);
		eChart_1.resize();
	}

// Morris-chart

Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2010',
            tv: 50,
            mobile: 80,
            laptop: 20
        }, {
            period: '2011',
            tv: 130,
            mobile: 100,
            laptop: 80
        }, {
            period: '2012',
            tv: 80,
            mobile: 60,
            laptop: 70
        }, {
            period: '2013',
            tv: 70,
            mobile: 200,
            laptop: 140
        }, {
            period: '2014',
            tv: 180,
            mobile: 150,
            laptop: 140
        }, {
            period: '2015',
            tv: 105,
            mobile: 100,
            laptop: 80
        },
         {
            period: '2016',
            tv: 250,
            mobile: 150,
            laptop: 200
        }],
        xkey: 'period',
        ykeys: ['tv', 'mobile', 'laptop'],
        labels: ['TV', 'Mobile', 'Laptop'],
        pointSize: 3,
        fillOpacity: 0.1,
        pointStrokeColors:['#ba69aa', '#69cce0', '#ef483e'],
        behaveLikeLine: true,
        gridLineColor: '#e0e0e0',
        lineWidth: 3,
        hideHover: 'auto',
        lineColors: ['#ba69aa', '#69cce0', '#ef483e'],
        resize: true
        
    });

// Callback that creates and populates a data table, instantiates the column chart, passes in the data and draws it.
    var columnChart = c3.generate({
        bindto: '#column-chart',
        size: { height: 480 },
        color: {
            pattern: ['#0bb2d4', '#ff4c52', '#3e8ef7']
        },


        // Create the data table.
        data: {
            columns: [
                ['data1', 30, 200, 100, 400, 150, 250],
            	['data2', 130, 100, 140, 200, 150, 50]
            ],
            type: 'bar'
        },
        bar: {
            width: {
                ratio: 0.9 // this makes bar width 50% of length between ticks
            }
            // or
            //width: 100 // this makes bar width 100px
        },
        grid: {
            y: {
                show: true
            }
        }
    });

    // Instantiate and draw our chart, passing in some options.
    setTimeout(function() {
        columnChart.load({
            columns: [
                ['data3', 130, -150, 200, 300, -200, 100]
            ]
        });
    }, 1000);
	
		


// ------------------------------

var Widgetschart = function() {

    

    

    // Simple sparklines
    var _sparklinesWidget = function(element, chartType, qty, chartHeight, interpolation, duration, interval, color) {
        if (typeof d3 == 'undefined') {
            console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if(element) {


            // Basic setup
            // ------------------------------

            // Define main variables
            var d3Container = d3.select(element),
                margin = {top: 0, right: 0, bottom: 0, left: 0},
                width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right,
                height = chartHeight - margin.top - margin.bottom;


            // Generate random data (for demo only)
            var data = [];
            for (var i=0; i < qty; i++) {
                data.push(Math.floor(Math.random() * qty) + 5);
            }


            // Construct scales
            // ------------------------------

            // Horizontal
            var x = d3.scale.linear().range([0, width]);

            // Vertical
            var y = d3.scale.linear().range([height - 5, 5]);


            // Set input domains
            // ------------------------------

            // Horizontal
            x.domain([1, qty - 3]);

            // Vertical
            y.domain([0, qty]);
                

            // Construct chart layout
            // ------------------------------

            // Line
            var line = d3.svg.line()
                .interpolate(interpolation)
                .x(function(d, i) { return x(i); })
                .y(function(d, i) { return y(d); });

            // Area
            var area = d3.svg.area()
                .interpolate(interpolation)
                .x(function(d,i) { 
                    return x(i); 
                })
                .y0(height)
                .y1(function(d) { 
                    return y(d); 
                });


            // Create SVG
            // ------------------------------

            // Container
            var container = d3Container.append('svg');

            // SVG element
            var svg = container
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
                .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


            // Add mask for animation
            // ------------------------------

            // Add clip path
            var clip = svg.append("defs")
                .append("clipPath")
                .attr('id', function(d, i) { return "load-clip-" + element.substring(1); });

            // Add clip shape
            var clips = clip.append("rect")
                .attr('class', 'load-clip')
                .attr("width", 0)
                .attr("height", height);

            // Animate mask
            clips
                .transition()
                    .duration(1000)
                    .ease('linear')
                    .attr("width", width);


            //
            // Append chart elements
            //

            // Main path
            var path = svg.append("g")
                .attr("clip-path", function(d, i) { return "url(#load-clip-" + element.substring(1) + ")"; })
                .append("path")
                    .datum(data)
                    .attr("transform", "translate(" + x(0) + ",0)");

            // Add path based on chart type
            if(chartType == "area") {
                path.attr("d", area).attr('class', 'd3-area').style("fill", color); // area
            }
            else {
                path.attr("d", line).attr("class", "d3-line d3-line-medium").style('stroke', color); // line
            }

            // Animate path
            path
                .style('opacity', 0)
                .transition()
                    .duration(500)
                    .style('opacity', 1);



            // Set update interval. For demo only
            // ------------------------------

            setInterval(function() {

                // push a new data point onto the back
                data.push(Math.floor(Math.random() * qty) + 5);

                // pop the old data point off the front
                data.shift();

                update();

            }, interval);



            // Update random data. For demo only
            // ------------------------------

            function update() {

                // Redraw the path and slide it to the left
                path
                    .attr("transform", null)
                    .transition()
                        .duration(duration)
                        .ease("linear")
                        .attr("transform", "translate(" + x(0) + ",0)");

                // Update path type
                if(chartType == "area") {
                    path.attr("d", area).attr('class', 'd3-area').style("fill", color);
                }
                else {
                    path.attr("d", line).attr("class", "d3-line d3-line-medium").style('stroke', color);
                }
            }



            // Resize chart
            // ------------------------------

            // Call function on window resize
            $(window).on('resize', resizeSparklines);

            // Call function on sidebar width change
            $(document).on('click', '.sidebar-control', resizeSparklines);

            // Resize function
            // 
            // Since D3 doesn't support SVG resize by default,
            // we need to manually specify parts of the graph that need to 
            // be updated on window resize
            function resizeSparklines() {

                // Layout variables
                width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right;


                // Layout
                // -------------------------

                // Main svg width
                container.attr("width", width + margin.left + margin.right);

                // Width of appended group
                svg.attr("width", width + margin.left + margin.right);

                // Horizontal range
                x.range([0, width]);


                // Chart elements
                // -------------------------

                // Clip mask
                clips.attr("width", width);

                // Line
                svg.select(".d3-line").attr("d", line);

                // Area
                svg.select(".d3-area").attr("d", area);
            }
        }
    };

    

    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _sparklinesWidget("#sparklines_color", "line", 30, 150, "basis", 750, 2000, "rgba(255,255,255,0.75)");
            
        }
    }
}();


// Initialize module
// ------------------------------

// When content loaded
document.addEventListener('DOMContentLoaded', function() {
    Widgetschart.init();
});
