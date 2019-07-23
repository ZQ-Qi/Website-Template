require('.././libs/stickyfill.min');
(function() {
    "use strict";
    if ($('.sticky').length) {
        $('.sticky').Stickyfill();
    }
}());