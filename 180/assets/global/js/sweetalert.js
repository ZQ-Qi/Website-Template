/*!
 * Prince - v1.0.0
 * @author AtriTheme
 * Copyright (c) 2018
 */
!(function ($) {
    "use strict";

    /*---- Sweetalert ----*/
    $('#type-success').click(function(){
        swal({
            type: 'success',
            title: 'Success!'
        })
    });

    $('#type-error').click(function(){
        swal({
            type: 'error',
            title: 'error!'
        })
    });

    $('#type-warning').click(function(){
        swal({
            type: 'warning',
            title: 'warning!'
        })
    });

    $('#type-info').click(function(){
        swal({
            type: 'info',
            title: 'info!'
        })
    });

    $('#type-question').click(function(){
        swal({
            type: 'question',
            title: 'question?'
        })
    });

    /*---- Input type ----*/

    $('#type-text').click(function(){
        swal({
            title: 'What is your name?',
            input: 'text',
            inputPlaceholder: 'Enter your name or nickname',
            showCancelButton: true,
            inputValidator: function (value) {
                return new Promise(function (resolve, reject) {
                    if (value) {
                        resolve()
                    } else {
                        reject('You need to write something!')
                    }
                })
            }
        }).then(function (name) {
            swal({
                type: 'success',
                title: 'Hi, ' + name
            })
        })
    });

    $('#type-email').click(function(){
        swal({
            title: 'Input email address',
            input: 'email',
            inputPlaceholder: 'Enter your email address'
        }).then(function (email) {
            swal({
                type: 'success',
                html: 'Entered email: ' + email
            })
        })
    });
    $('#type-url').click(function(){
        swal({
            input: 'url',
            inputPlaceholder: 'Enter the URL'
        }).then(function (url) {
            swal({
                type: 'success',
                html: 'Entered URL: ' + url
            })
        })
    });
    $('#type-password').click(function(){
        swal({
            title: 'Enter your password',
            input: 'password',
            inputPlaceholder: 'Enter your password',
            inputAttributes: {
                'maxlength': 10,
                'autocapitalize': 'off',
                'autocorrect': 'off'
            }
        }).then(function (password) {
            if (password) {
                swal({
                    type: 'success',
                    html: 'Entered password: ' + password
                })
            }
        })
    });
    $('#type-textarea').click(function(){
        swal({
            input: 'textarea',
            inputPlaceholder: 'Type your message here',
            showCancelButton: true
        }).then(function (text) {
            if (text) {
                swal(text)
            }
        })
    });
    $('#type-select').click(function(){
        swal({
            title: 'Select Ukraine',
            input: 'select',
            inputOptions: {
                'SRB': 'Serbia',
                'UKR': 'Ukraine',
                'HRV': 'Croatia'
            },
            inputPlaceholder: 'Select country',
            showCancelButton: true,
            inputValidator: function (value) {
                return new Promise(function (resolve, reject) {
                    if (value === 'UKR') {
                        resolve()
                    } else {
                        reject('You need to select Ukraine :)')
                    }
                })
            }
        }).then(function (result) {
            swal({
                type: 'success',
                html: 'You selected: ' + result
            })
        })
    });
    var inputOptions = new Promise(function (resolve) {
        setTimeout(function () {
            resolve({
                '#ff0000': 'Red',
                '#00ff00': 'Green',
                '#0000ff': 'Blue'
            })
        }, 2000)
    })
    $('#type-radio').click(function(){
        swal({
            title: 'Select color',
            input: 'radio',
            inputOptions: inputOptions,
            inputValidator: function (result) {
                return new Promise(function (resolve, reject) {
                    if (result) {
                        resolve()
                    } else {
                        reject('You need to select something!')
                    }
                })
            }
        }).then(function (result) {
            swal({
                type: 'success',
                html: 'You selected: ' + result
            })
        })
    });
    $('#type-checkbox').click(function(){
        swal({
            title: 'Terms and conditions',
            input: 'checkbox',
            inputValue: 1,
            inputPlaceholder:
                'I agree with the terms and conditions',
            confirmButtonText:
                'Continue <i class="fa fa-arrow-right></i>',
            inputValidator: function (result) {
                return new Promise(function (resolve, reject) {
                    if (result) {
                        resolve()
                    } else {
                        reject('You need to agree with T&C')
                    }
                })
            }
        }).then(function (result) {
            swal({
                type: 'success',
                text: 'You agreed with T&C :)'
            })
        })
    });
    $('#type-file').click(function(){
        swal({
            title: 'Select image',
            input: 'file',
            inputAttributes: {
                'accept': 'image/*',
                'aria-label': 'Upload your profile picture'
            }
        }).then(function (file) {
            var reader = new FileReader
            reader.onload = function (e) {
                swal({
                    title: 'Your uploaded picture',
                    imageUrl: e.target.result,
                    imageAlt: 'The uploaded picture'
                })
            }
            reader.readAsDataURL(file)
        })
    });
    $('#type-range').click(function(){
        swal({
            title: 'How old are you?',
            type: 'question',
            input: 'range',
            inputAttributes: {
                min: 8,
                max: 120,
                step: 1
            },
            inputValue: 25
        })
    });

    /*---- Example ----*/

    $('#basic-swal').click(function(){
        swal('Any fool can use a computer');
    });


    $('#text-swal').click(function(){
        swal(
            'The Internet?',
            'That thing is still around?',
            'question'
        )
    });

    $('#success-text-swal').click(function(){
        swal(
            'Good job!',
            'You clicked the button!',
            'success'
        )
    });

    $('#html-swal').click(function(){
        swal({
            title: '<i>HTML</i> <u>example</u>',
            type: 'info',
            html:
            'You can use <b>bold text</b>, ' +
            '<a href="//github.com">links</a> ' +
            'and other HTML tags',
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText:
                '<i class="fa fa-thumbs-up"></i> Great!',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            cancelButtonText:
                '<i class="fa fa-thumbs-down"></i>',
            cancelButtonAriaLabel: 'Thumbs down',
        })
    });

    $('#animation-swal').click(function(){
        swal({
            title: 'jQuery HTML example',
            html: $('<div>')
                .addClass('some-class')
                .text('jQuery is everywhere.'),
            animation: false,
            customClass: 'animated tada'
        })
    });

    $('#confirm-swal').click(function(){
        swal({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function () {
            swal(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
        })
    });

    $('#cancel-swal').click(function(){
        swal({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            buttonsStyling: false
        }).then(function () {
            swal(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
        }, function (dismiss) {
            // dismiss can be 'cancel', 'overlay',
            // 'close', and 'timer'
            if (dismiss === 'cancel') {
                swal(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }
        })
    });

    $('#custom-image-swal').click(function(){
        swal({
            title: 'Sweet!',
            text: 'Modal with a custom image.',
            imageUrl: 'https://unsplash.it/400/200',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
            animation: false
        })
    });

    $('#custom-background-swal').click(function(){
        swal({
            title: 'Custom width, padding, background.',
            width: 600,
            padding: 100,
            background: '#fff url(https://i.imgur.com/tdUzX2P.png)'
        })
    });

    $('#close-timer-swal').click(function(){
        swal({
            title: 'Auto close alert!',
            text: 'I will close in 5 seconds.',
            timer: 5000,
            onOpen: function () {
                swal.showLoading()
            }
        }).then(
            function () {},
            // handling the promise rejection
            function (dismiss) {
                if (dismiss === 'timer') {
                    console.log('I was closed by the timer')
                }
            }
        )
    });

    $('#ajax-request-swal').click(function(){
        swal({
            title: 'Submit email to run ajax request',
            input: 'email',
            showCancelButton: true,
            confirmButtonText: 'Submit',
            showLoaderOnConfirm: true,
            preConfirm: function (email) {
                return new Promise(function (resolve, reject) {
                    setTimeout(function() {
                        if (email === 'taken@example.com') {
                            reject('This email is already taken.')
                        } else {
                            resolve()
                        }
                    }, 2000)
                })
            },
            allowOutsideClick: false
        }).then(function (email) {
            swal({
                type: 'success',
                title: 'Ajax request finished!',
                html: 'Submitted email: ' + email
            })
        })
    });

    $('#chaining-modals-swal').click(function(){
        swal.setDefaults({
            input: 'text',
            confirmButtonText: 'Next &rarr;',
            showCancelButton: true,
            animation: false,
            progressSteps: ['1', '2', '3']
        })

        var steps = [
            {
                title: 'Question 1',
                text: 'Chaining swal2 modals is easy'
            },
            'Question 2',
            'Question 3'
        ]

        swal.queue(steps).then(function (result) {
            swal.resetDefaults()
            swal({
                title: 'All done!',
                html:
                'Your answers: <pre>' +
                JSON.stringify(result) +
                '</pre>',
                confirmButtonText: 'Lovely!'
            })
        }, function () {
            swal.resetDefaults()
        })
    });

    $('#dynamic-queue-swal').click(function(){
        swal.queue([{
            title: 'Your public IP',
            confirmButtonText: 'Show my public IP',
            text:
            'Your public IP will be received ' +
            'via AJAX request',
            showLoaderOnConfirm: true,
            preConfirm: function () {
                return new Promise(function (resolve) {
                    $.get('https://api.ipify.org?format=json')
                        .done(function (data) {
                            swal.insertQueueStep(data.ip)
                            resolve()
                        })
                })
            }
        }])
    });

})(jQuery);