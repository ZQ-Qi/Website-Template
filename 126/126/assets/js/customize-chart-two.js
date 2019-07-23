var data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "Product 1",
      backgroundColor: [
        'rgba(112, 193, 179, 1)',
        'rgba(112, 193, 179, 1)',
        'rgba(112, 193, 179, 1)',
        'rgba(112, 193, 179, 1)',
        'rgba(112, 193, 179, 1)',
        'rgba(112, 193, 179, 1)',
        'rgba(112, 193, 179, 1)',
      ],
      borderColor: [
        'rgba(112, 193, 179, 1)',
        'rgba(112, 193, 179, 1)',
        'rgba(112, 193, 179, 1)',
        'rgba(112, 193, 179, 1)',
        'rgba(112, 193, 179, 1)',
        'rgba(112, 193, 179, 1)',
        'rgba(112, 193, 179, 1)',
      ],
      borderWidth: 1,
      data: [70, 110, 50, 100, 65, 90, 60],
    },
    {
      label: "Product 2",
      backgroundColor: [
        'rgba(2, 93, 131, 1)',
        'rgba(2, 93, 131, 1)',
        'rgba(2, 93, 131, 1)',
        'rgba(2, 93, 131, 1)',
        'rgba(2, 93, 131, 1)',
        'rgba(2, 93, 131, 1)',
        'rgba(2, 93, 131, 1)',

      ],
      borderColor: [

        'rgba(2, 93, 131, 1)',
        'rgba(2, 93, 131, 1)',
        'rgba(2, 93, 131, 1)',
        'rgba(2, 93, 131, 1)',
        'rgba(2, 93, 131, 1)',
        'rgba(2, 93, 131, 1)',
        'rgba(2, 93, 131, 1)',

      ],
      borderWidth: 1,
      data: [120, 120, 100, 120, 110, 70, 90],
    },
    {
      label: "Product 3",
      backgroundColor: [
        'rgba(235, 84, 124, 1)',
        'rgba(235, 84, 124, 1)',
        'rgba(235, 84, 124, 1)',
        'rgba(235, 84, 124, 1)',
        'rgba(235, 84, 124, 1)',
        'rgba(235, 84, 124, 1)',
        'rgba(235, 84, 124, 1)',
      ],
      borderColor: [
        'rgba(235, 84, 124, 1)',
        'rgba(235, 84, 124, 1)',
        'rgba(235, 84, 124, 1)',
        'rgba(235, 84, 124, 1)',
        'rgba(235, 84, 124, 1)',
        'rgba(235, 84, 124, 1)',
        'rgba(235, 84, 124, 1)',
      ],
      borderWidth: 1,
      data: [95, 90, 75, 100, 90, 90, 120],
    }
  ]
};

var options = {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero:true,
        max: 150,
        stepSize: 25,
        fontColor: "#ccc",
        fontFamily:  '"Montserrat", sans-serif',

      },
    }],
    xAxes:[{
      ticks: {
        beginAtZero:true,
        fontColor: "#ccc",
        fontFamily:  '"Montserrat", sans-serif',
      },
      gridLines: {
        display: false
      },
      barPercentage: 0.5
    }]
  },
  legend: {
    position: 'bottom',
    labels: {
      boxWidth: 12,
      padding: 10
    }
  }
}



var ctxBar = document.querySelector(".barChart");
if(ctxBar) {
  ctxBar.height = 200;
  var myBarChart = new Chart(ctxBar, {
    type: 'bar',
    data: data,
    options: options
  });
}



// Bar chart two

var dataBartTwo = {
  labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(2, 93, 131, 1)',
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(2, 93, 131, 1)',

      ],
      borderWidth: 1,
      data: [90, 75, 115, 130, 115 , 70, 80],
    }
  ]
};

var ctxBarTwo = document.querySelector(".barChartTwo");
if(ctxBarTwo) {
  ctxBarTwo.height = 200;
  var myBarChartTwo = new Chart(ctxBarTwo, {
    type: 'bar',
    data: dataBartTwo,
    options: options
  });
}


var ctxBarTwoHorizontal = document.querySelector(".barChartTwoHorizontal");
if(ctxBarTwoHorizontal) {
  ctxBarTwoHorizontal.height = 200;
  var myBarChartTwoHorizontal = new Chart(ctxBarTwoHorizontal, {
    type: 'horizontalBar',
    data: dataBartTwo,
    options: options
  });
}


// small bar chart
//
var dataBarSmall = {
  labels: ["1", "2", "3", "4", "5", "6", "7", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
    "21", "22",  "23", "24"," 25"
  ],
  datasets: [
    {
      backgroundColor: [
        "rgba(2, 93, 131,1)", "rgba(2, 93, 131,1)", "rgba(2, 93, 131,1)", "rgba(2, 93, 131,1)",
        "rgba(2, 93, 131,1)" , "rgba(2, 93, 131,1)", "rgba(2, 93, 131,1)", "rgba(2, 93, 131,1)",
        "rgba(2, 93, 131,1)", "rgba(2, 93, 131,1)", "rgba(2, 93, 131,1)", "rgba(2, 93, 131,1)",
        "rgba(2, 93, 131,1)", "rgba(2, 93, 131,1)", "rgba(2, 93, 131,1)", "rgba(2, 93, 131,1)",
        "rgba(2, 93, 131,1)", "rgba(2, 93, 131,1)", "rgba(2, 93, 131,1)", "rgba(2, 93, 131,1)",
        "rgba(2, 93, 131,1)", "rgba(2, 93, 131,1)", "rgba(2, 93, 131,1)", "rgba(2, 93, 131,1)",
        "rgba(2, 93, 131,1)"
      ],
      borderColor: [
        "rgba(2, 93, 131,1)", "rgba(2, 93, 131,1)", "rgba(2, 93, 131,1)", "rgba(2, 93, 131,1)",
        "rgba(2, 93, 131,1)" , "rgba(2, 93, 131,1)", "rgba(2, 93, 131,1)", "rgba(2, 93, 131,1)",
        "rgba(2, 93, 131,1)", "rgba(2, 93, 131,1)", "rgba(2, 93, 131,1)", "rgba(2, 93, 131,1)",
        "rgba(2, 93, 131,1)", "rgba(2, 93, 131,1)", "rgba(2, 93, 131,1)", "rgba(2, 93, 131,1)",
        "rgba(2, 93, 131,1)", "rgba(2, 93, 131,1)", "rgba(2, 93, 131,1)", "rgba(2, 93, 131,1)",
        "rgba(2, 93, 131,1)", "rgba(2, 93, 131,1)", "rgba(2, 93, 131,1)", "rgba(2, 93, 131,1)",
        "rgba(2, 93, 131,1)"
      ],
      label: "My First dataset",
      borderWidth: 1,
      data: [90, 75, 115, 130, 115 , 70, 80, 90, 75, 115, 130, 115 , 70, 80, 90, 75, 115, 130, 115 , 70, 80, 90, 75, 115, 130],
    }
  ]
};

var barsmallOptions = {
  scales: {
    yAxes: [{
      display: false,
      ticks: {
        beginAtZero:true,
        max: 150,
        stepSize: 25,
        fontColor: "#ccc",
        fontFamily:  '"Montserrat", sans-serif',

      },
      gridLines: {
        display: false
      }
    }],
    xAxes:[{
      display: false,
      gridLines: {
        display: false
      },
      barPercentage: 0.2
    }]
  },
  legend: {
    display: false
  }
}

var ctxBarSmall = document.querySelector(".barChartSmall");
if(ctxBarSmall) {
  ctxBarSmall.height = 119;
  var myBarChartSmall = new Chart(ctxBarSmall, {
    type: 'bar',
    data: dataBarSmall,
    options: barsmallOptions
  });
}




// Polar area chart
//
var dataPolarArea = {
  datasets: [{
    data: [
      11,
      16,
      10,
      7,
      16
    ],
    backgroundColor: [
      "#FF6384",
      "#4BC0C0",
      "#FFCE56",
      "#E7E9ED",
      "#36A2EB"
    ],
    label: 'Ploar Area Chart' // for legend
  }],
  labels: [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5"
  ]
};


var optionsPolar = {
  legend: {
    position: 'bottom',
    labels: {
      boxWidth: 12,
      padding: 10
    }
  }
}


var ctxPolarAreaChart = document.querySelector(".polarAreaChart");
if(ctxPolarAreaChart) {
  ctxPolarAreaChart.height = 200;
  var myPolarAreaChart = new Chart(ctxPolarAreaChart, {
    type: 'polarArea',
    data: dataPolarArea,
    options: optionsPolar
  });
}



// Radar chart

var dataRadar = {
  labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
  datasets: [
    {
      label: "Employee 1",
      backgroundColor: "rgba(2, 93, 131, .3)",
      borderColor: "rgba(2, 93, 131, 1)",
      pointBackgroundColor: "rgba(2, 93, 131, 1)",
      pointBorderColor: "rgba(2, 93, 131, 1)",
      pointHoverBackgroundColor: "gba(2, 93, 131, 1)",
      pointHoverBorderColor: "gba(2, 93, 131, 1)",
      data: [65, 59, 90, 81, 56, 55, 40]
    },
    {
      label: "Employee 2",
      backgroundColor: "rgba(112, 193, 179, .5)",
      borderColor: "rgba(112, 193, 179, 1)",
      pointBackgroundColor: "rgba(112, 193, 179, 1)",
      pointBorderColor: "rgba(112, 193, 179, 1)",
      pointHoverBackgroundColor: "rgba(112, 193, 179, 1)",
      pointHoverBorderColor: "rgba(112, 193, 179, 1)",
      data: [28, 48, 40, 19, 96, 27, 100]
    }
  ]
};

var ctxRadarChart = document.querySelector(".radarChart");
if(ctxRadarChart) {
  ctxRadarChart.height = 200;
  var myPolarAreaChart = new Chart(ctxRadarChart, {
    type: 'radar',
    data: dataRadar,
    options: optionsPolar
  });
}




var barSmallChartBgColor = [
  "rgba(235,84,124,1)", "rgba(235,84,124,1)", "rgba(235,84,124,1)", "rgba(235,84,124,1)",
  "rgba(235,84,124,1)" , "rgba(235,84,124,1)", "rgba(235,84,124,1)", "rgba(235,84,124,1)",
  "rgba(235,84,124,1)", "rgba(235,84,124,1)", "rgba(235,84,124,1)", "rgba(235,84,124,1)",
  "rgba(235,84,124,1)", "rgba(235,84,124,1)", "rgba(235,84,124,1)", "rgba(235,84,124,1)",
  "rgba(235,84,124,1)", "rgba(235,84,124,1)", "rgba(235,84,124,1)", "rgba(235,84,124,1)",
  "rgba(235,84,124,1)", "rgba(235,84,124,1)", "rgba(235,84,124,1)", "rgba(235,84,124,1)",
  "rgba(235,84,124,1)"
]
