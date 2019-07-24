(function($) {
  'use strict';
  $(document).on('mouseenter mouseleave', '.sidebar .nav-item', function (ev) {
      var body = $('body');
      var sidebarMini = body.hasClass("sidebar-mini");
      var sidebarIconOnly = body.hasClass("sidebar-icon-only");
      var horizontalMenu = body.hasClass("horizontal-menu");
      var horizontalMenuTop = body.hasClass("horizontal-menu-top");
      var boxedLayout = body.hasClass("boxed-layout");
      var rtlLayout = body.hasClass("rtl");
      if (sidebarMini || sidebarIconOnly) {
        var $menuItem = $(this),
        $submenuWrapper = $('> .collapse', $menuItem);
        if(ev.type === 'mouseenter') {
          $submenuWrapper.addClass('show');
          // grab the menu item's position relative to its positioned parent
          var menuItemPos = $menuItem.offset();
          // place the submenu in the correct position relevant to the menu item
          if(horizontalMenu) {
            if(horizontalMenuTop) {
              if(rtlLayout) {
                $submenuWrapper.css({
                    top: menuItemPos.top+$menuItem.height()-15,
                    left: menuItemPos.left,
                    minWidth: $menuItem.outerWidth()
                });
              }
              else {
                $submenuWrapper.css({
                    top: menuItemPos.top+$menuItem.height()-15,
                    left: menuItemPos.left - $('.navbar-brand-wrapper').outerWidth(),
                    minWidth: $menuItem.outerWidth()
                });
              }
            }
            else {
              $submenuWrapper.css({
                  top: menuItemPos.top+$menuItem.height(),
                  left: menuItemPos.left,
                  minWidth: $menuItem.outerWidth()
              });
            }
          }
          else {
            if(menuItemPos.top>=$('.sidebar').height()/2){
              $submenuWrapper.css({
                  top: menuItemPos.top+$menuItem.height()- $(window).scrollTop()-$submenuWrapper.height()
              });
            }
            else {
              $submenuWrapper.css({
                  top: menuItemPos.top- $(window).scrollTop()
              });
            }
            if(boxedLayout) {
              if(rtlLayout) {
                $submenuWrapper.css({
                  right: $menuItem.outerWidth() + $('.container-scroller').css('padding-right')
                });
              }
              else {
                $submenuWrapper.css({
                  left: menuItemPos.left + Math.round($menuItem.outerWidth()-$('.container-scroller').css('padding-left'))
                });
              }
            }
            else {
              if(rtlLayout) {
                $submenuWrapper.css({
                  right: $menuItem.outerWidth()
                });
              }
              else {
                $submenuWrapper.css({
                  left: menuItemPos.left + Math.round($menuItem.outerWidth()-20)
                });
              }
            }
          }
        }
        else {
          $submenuWrapper.css({
              top: 0,
              left: 0
          });
          $submenuWrapper.removeClass('show');
        }
      }
      // if (horizontalMenu) {
      //   if(ev.type === 'mouseenter') {
      //     $(this).addClass('expanded');
      //   }
      //   else {
      //     $(this).removeClass('expanded');
      //   }
      // }
  });

  //We are handling submenu in horizontal menu layout in a different way
  $('[data-toggle="showMegaMenu"]').on("click", function () {
    $(this).toggleClass('expanded');
  }).hover(function(){
    if(!('ontouchstart' in document.documentElement)) {
      $(this).toggleClass('expanded');
    }
  });
})(jQuery);
