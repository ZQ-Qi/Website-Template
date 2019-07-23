/**
* @Package: Cryptonia - Bitcoin & Cryptocurrency trading Dashboard
* @Version: 1.0.0
*/

function showErrorMessage(msg) {
    Messenger({
        extraClasses: 'messenger-fixed messenger-on-right messenger-on-top',
        theme: 'flat'
    }).post({
        message: msg,
        type: 'error',
        showCloseButton: true
    });
}

function progressMessage() {
    var i = 0;
    Messenger({
        extraClasses: 'messenger-fixed messenger-on-right messenger-on-top',
        theme: 'flat'
    }).run({
        errorMessage: 'Error Transaction Failed. Retrying...',
        successMessage: 'Transaction Completed Successfully!',
        action: function(opts) {
            if (++i < 2) {
                return opts.error({
                    status: 500,
                    readyState: 0,
                    responseText: 0
                });
            } else {
                return opts.success();
            }
        }
    });
}

function showSuccess(msg) {
    Messenger({
        extraClasses: 'messenger-fixed messenger-on-right messenger-on-top',
        theme: 'flat'
    }).post(msg);
}
