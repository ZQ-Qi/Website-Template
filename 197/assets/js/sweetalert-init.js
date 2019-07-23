(function ($) {
    "use strict";

    $(function () {
        /* ------------------------------------------------------------------------- *
         * SWEET ALERT
         * ------------------------------------------------------------------------- */
        var $sweetAlert = $('[data-sweet-alert]');

        $sweetAlert.on('click', function (e) {
            e.preventDefault();

            var $t = $(this),
                $swa = $t.data('sweet-alert');

            switch ( $swa ) {
                case 'basic':
                    swal( 'Basic Alert!' );
                    break;

                case 'with-title':
                    swal( 'Basic Alert!', 'with title' );
                    break;

                case 'html-alert':
                    swal({
                        title: 'HTML <small>Title</small>!',
                        text: 'A custom <span style="color:#f40">html<span> message.',
                        html: true
                    });
                    break;

                case 'success':
                    swal( 'Success Alert!', 'Simple Alert Content.', 'success' );
                    break;

                case 'info':
                    swal( 'Info Alert!', 'Simple Alert Content.', 'info' );
                    break;

                case 'warning':
                    swal( 'Warning Alert!', 'Simple Alert Content.', 'warning' );
                    break;

                case 'error':
                    swal( 'Error Alert!', 'Simple Alert Content.', 'error' );
                    break;

                case 'custom-icon':
                    swal({
                        title: 'Custom Icon',
                        text: 'Simple Alert Content.',
                        imageUrl: 'assets/img/sweet-alert/custom-icon.png'
                    });
                    break;

                case 'auto-close':
                    swal({
                        title: 'Auto Close Alert!',
                        text: 'This alert message will be closed in 3 seconds automatically.',
                        timer: 3000
                    });
                    break;

                case 'closeable-overlay':
                    swal({
                        title: 'Overlay Closeable!',
                        text: 'Simple Alert Content.',
                        showConfirmButton: false,
                        allowOutsideClick: true
                    });
                    break;

                case 'cancel-button':
                    swal({
                        title: 'Cancel Button!',
                        text: 'Simple Alert Content.',
                        showCancelButton: true
                    });
                    break;
            }
        });
    });
}(jQuery));