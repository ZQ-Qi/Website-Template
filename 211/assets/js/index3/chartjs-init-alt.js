
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






var ctx = document.getElementById('myChart-light2').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: 'rgba(0,123,255,.2)',
            borderColor: 'rgba(0,123,255,1)',
            data: [0, 5, 18, 2, 15, 10,18]
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











var ctx = document.getElementById('myChart-light3').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: 'rgba(23,162,184,.2)',
            borderColor: 'rgba(23,162,184,1)',
            data: [0, 5, 10, 15, 20, 25,25]
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



var ctx = document.getElementById('myChart-light4').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: 'rgba(253,126,20,.2)',
            borderColor: 'rgba(253,126,20,1)',
            data: [0, 20, 9, 20, 10, 25,18]
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











