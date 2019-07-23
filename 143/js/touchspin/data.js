$(document).ready(function(){
"use strict";

$("input[name='demo1']").TouchSpin({
    prefix: "pre",
    postfix: "post"
});

$("input[name='demo2']").TouchSpin({
    min: -1000000000,
    max: 1000000000,
    stepinterval: 50,
    maxboostedstep: 10000000,
    prefix: '$'
});

$("input[name='demo_vertical']").TouchSpin({
  verticalbuttons: true
});

$("input[name='demo3']").TouchSpin({
    min: 0,
    max: 100,
    step: 0.1,
    decimals: 2,
    boostat: 5,
    maxboostedstep: 10,
    postfix: '%'
});

$("input[name='demo4']").TouchSpin({
postfix: "button",
postfix_extraclass: "btn btn-md bg-purple"
});

$("input[name='demo5']").TouchSpin();

});//end