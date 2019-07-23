// Format Number With Commas
getNumberWithCommas = function (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

isElementInViewport = function isElementInViewport(el) {

    //special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
};


$.fn.hasData = function(key) {
    return (typeof $(this).data(key) != 'undefined');
};

getDataOptions = function (x , options) {
    if(!options){
        options = 'options';
    }
    if($.fn.hasData(x)){
        var attrData = $.extend({}, x.data());
        return attrData.options ? attrData.options : null ;
    }
    return null;
};
