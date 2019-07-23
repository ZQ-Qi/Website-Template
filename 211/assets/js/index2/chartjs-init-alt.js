

var ctx = document.getElementById('myChart-light').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: 'rgba(167,104,243,.2)',
            borderColor: 'rgba(167,104,243,1)',
            data: [0, 20, 9, 25, 15, 25,18]
        }]


    },

    // Configuration options go here
    options: {
        maintainAspectRatio: false,
        legend: {
            display: false
        },

        scales: {
            xAxes: [{
                display: false
            }],
            yAxes: [{
                display: false
            }]
        },
        elements: {
            line: {
                tension: 0.00001,
                //tension: 0.4,
                borderWidth: 1
            },
            point: {
                radius: 4,
                hitRadius: 10,
                hoverRadius: 4
            }
        }
    }
});





var ctx = document.getElementById('myChart3-light').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q"],
        datasets: [{
            label: '# of Votes',
            data: [58, 80, 44, 76, 54, 50, 45, 90, 57, 48, 54, 49, 63, 77, 67, 83, 95],
            backgroundColor: [
                'rgba(234,196,89,.6)',
                'rgba(234,196,89,.6)',
                'rgba(234,196,89,.6)',
                'rgba(234,196,89,.6)',
                'rgba(234,196,89,.6)',
                'rgba(234,196,89,.6)',
                'rgba(234,196,89,.6)',
                'rgba(234,196,89,.6)',
                'rgba(234,196,89,.6)',
                'rgba(234,196,89,.6)',
                'rgba(234,196,89,.6)',
                'rgba(234,196,89,.6)',
                'rgba(234,196,89,.6)',
                'rgba(234,196,89,.6)',
                'rgba(234,196,89,.6)',
                'rgba(234,196,89,.6)',
                'rgba(234,196,89,.6)'

            ],
            //borderColor: [
            //    'rgba(255,99,132,1)',
            //    'rgba(54, 162, 235, 1)',
            //    'rgba(255, 206, 86, 1)',
            //    'rgba(75, 192, 192, 1)',
            //    'rgba(153, 102, 255, 1)',
            //    'rgba(255, 159, 64, 1)'
            //],
            borderWidth: 0
        }]
    },
    options: {
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                display: false
            }],
            yAxes: [{
                display: false
            }]
        }

    }
});

