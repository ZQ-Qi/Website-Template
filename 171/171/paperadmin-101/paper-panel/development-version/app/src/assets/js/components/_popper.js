require('popper.js');
$(function () {
    'use strict';
    if($('[data-toggle="popover"]').length)
        $('[data-toggle="popover"]').popover();
});