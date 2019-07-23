//
// Sidebar
//

"use strict";

var Sidebar = function(){

    var $document = $(document),
        $page = $('.o-page'),
        $sidebar = $(".js-page-sidebar"), // page sidebar itself
        $sidebarToggle = $(".js-sidebar-toggle"); // sidebar toggle icon

    $document.on('click', '.js-sidebar-toggle', function(e){
        $page.toggleClass('is-sidebar-open');
        return false;
    });

    $document.on('click', function(e) {
        var $target = $(e.target);
        if (!$target.closest($sidebar).length) {
            $page.removeClass('is-sidebar-open');
        }
    });
}; 