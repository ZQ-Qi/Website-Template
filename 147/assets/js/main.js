var falcon = falcon || {};
"use strict";
$(function() {

 // global inicialization functions
 falcon.global = {

  init: function() {
   falcon.global.deviceSize();
   falcon.global.layout();
   falcon.global.animsition();
  },
  // device identification function
  deviceSize: function() {
   var jRes = jRespond([{
    label: 'smallest',
    enter: 0,
    exit: 479
   }, {
    label: 'handheld',
    enter: 480,
    exit: 767
   }, {
    label: 'tablet',
    enter: 768,
    exit: 991
   }, {
    label: 'laptop',
    enter: 992,
    exit: 1199
   }, {
    label: 'desktop',
    enter: 1200,
    exit: 10000
   }]);
   jRes.addFunc([{
    breakpoint: 'desktop',
    enter: function() {
     $body.addClass('device-lg');
    },
    exit: function() {
     $body.removeClass('device-lg');
    }
   }, {
    breakpoint: 'laptop',
    enter: function() {
     $body.addClass('device-md');
    },
    exit: function() {
     $body.removeClass('device-md');
    }
   }, {
    breakpoint: 'tablet',
    enter: function() {
     $body.addClass('device-sm');
    },
    exit: function() {
     $body.removeClass('device-sm');
    }
   }, {
    breakpoint: 'handheld',
    enter: function() {
     $body.addClass('device-xs');
    },
    exit: function() {
     $body.removeClass('device-xs');
    }
   }, {
    breakpoint: 'smallest',
    enter: function() {
     $body.addClass('device-xxs');
    },
    exit: function() {
     $body.removeClass('device-xxs');
    }
   }]);
  },

  layout: function() {
   var defaultHeadertheme = '',
    defaultNavbartheme = 'theme-default',
    defaultBrandingtheme = 'theme-default',
    defaultColortheme = 'default-theme-color',
    defaultHeaderPosition = 'header-fixed',
    defaultNavbarPosition = 'aside-fixed',
    defaultRightbarVisibility = 'rightmenu-hidden',
    defaultAppClasses = 'theme-default default-theme-color header-fixed aside-fixed rightmenu-hidden';

   $body.addClass(defaultAppClasses);
   $header.addClass(defaultHeadertheme);
   $branding.addClass(defaultBrandingtheme);
   $leftmenu.addClass(defaultNavbartheme).addClass(defaultNavbarPosition);

   $headerthemeEl.on('click', function($event) {
    var theme = $(this).data('theme');

    $body.removeClass(defaultHeadertheme).addClass(theme);
    $header.removeClass(defaultHeadertheme).addClass(theme);
    defaultHeadertheme = theme;
    $event.stopPropagation();
   });

   $brandingthemeEl.on('click', function($event) {
    var theme = $(this).data('theme');

    $branding.removeClass(defaultBrandingtheme).addClass(theme);
    defaultBrandingtheme = theme;
    $event.stopPropagation();
   });

   $leftmenuthemeEl.on('click', function($event) {
    var theme = $(this).data('theme');

    $body.removeClass(defaultNavbartheme).addClass(theme);
    $leftmenu.removeClass(defaultNavbartheme).addClass(theme);
    defaultNavbartheme = theme;
    $event.stopPropagation();
   });

   $colorthemeEl.on('click', function($event) {
    var theme = $(this).data('theme');

    $body.removeClass(defaultColortheme).addClass(theme);
    defaultColortheme = theme;
    $event.stopPropagation();
   });

   $fixedHeaderEl.change(function() {
    if ($body.hasClass('header-fixed')) {
     $body.removeClass('header-fixed').addClass('header-static');
    } else {
     $body.removeClass('header-static').addClass('header-fixed');
    }
   });
   $fixedHeaderEl.parent().on('click', function($event) {
    $event.stopPropagation();
   });

   $fixedAsideEl.change(function() {
    if ($body.hasClass('aside-fixed')) {
     $body.removeClass('aside-fixed').addClass('aside-static');
     $leftmenu.removeClass('aside-fixed').addClass('aside-static');
    } else {
     $body.removeClass('aside-static').addClass('aside-fixed');
     $leftmenu.removeClass('aside-static').addClass('aside-fixed');
    }
   });
   $fixedAsideEl.parent().on('click', function($event) {
    $event.stopPropagation();
   });

   $toggleRightbarEl.on('click', function() {
    if ($body.hasClass('rightmenu-hidden')) {
     $body.removeClass('rightmenu-hidden').addClass('rightmenu-show');
    } else {
     $body.removeClass('rightmenu-show').addClass('rightmenu-hidden');
    }
   });

   if ($app.hasClass('boxed-layout')) {
    $app.parent().addClass('boxed-layout');
   }

   if ($app.hasClass('leftmenu-offcanvas')) {
    $app.parent().addClass('leftmenu-offcanvas');
   }

   if ($app.hasClass('hz-menu')) {
    $app.parent().addClass('hz-menu');
   }

   if ($app.hasClass('rtl')) {
    $app.parent().addClass('rtl');
   }

  },

  // initialize animsition
  animsition: function() {
   $wrap.animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 1500,
    outDuration: 800,
    linkElement: '.animsition-link',
    // e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    unSupportCss: ['animation-duration',
     '-webkit-animation-duration',
     '-o-animation-duration'
    ],
    //"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    //The default setting is to disable the "animsition" in a browser that does not support "animation-duration".

    overlay: false,
    overlayClass: 'animsition-overlay-slide',
    overlayParentElement: 'body'
   });
  }

 };

 // header section functions

 falcon.header = {

  init: function() {

  }

 };

 // navbar section functions

 falcon.navbar = {

  init: function() {
   falcon.navbar.menu();
   falcon.navbar.ripple();
   falcon.navbar.removeRipple();
   falcon.navbar.collapse();
   falcon.navbar.offcanvas();
  },

  menu: function() {
   if ($dropdowns.length > 0) {

    $dropdowns.addClass('dropdown');

    var $submenus = $dropdowns.find('ul >.dropdown');
    $submenus.addClass('submenu');

    $a.append('<i class="fa fa-plus"></i>');

    $a.on('click', function(event) {
     if ($app.hasClass('leftmenu-sm') || $app.hasClass('leftmenu-xs') || $app.hasClass('hz-menu')) {
      return false;
     }

     var $this = $(this),
      $parent = $this.parent('li'),
      $openSubmenu = $('.submenu.open');

     if (!$parent.hasClass('submenu')) {
      $dropdowns.not($parent).removeClass('open').find('ul').slideUp();
     }

     $openSubmenu.not($this.parents('.submenu')).removeClass('open').find('ul').slideUp();
     $parent.toggleClass('open').find('>ul').stop().slideToggle();
     event.preventDefault();
    });

    $dropdowns.on('mouseenter', function() {
     $leftmenu.addClass('dropdown-open');
     $controls.addClass('dropdown-open');
    });

    $dropdowns.on('mouseleave', function() {
     $leftmenu.removeClass('dropdown-open');
     $controls.removeClass('dropdown-open');
    });

    $notDropdownsLinks.on('click', function() {
     $dropdowns.removeClass('open').find('ul').slideUp();
    });

    var $activeDropdown = $('.dropdown>ul>.active').parent();

    $activeDropdown.css('display', 'block');
   }
  },

  ripple: function() {
   var parent, ink, d, x, y;

   $navigation.find('>li>a').click(function(e) {
    parent = $(this).parent();

    if (parent.find('.ink').length === 0) {
     parent.prepend('<span class="ink"></span>');
    }

    ink = parent.find('.ink');
    //incase of quick double clicks stop the previous animation
    ink.removeClass('animate');

    //set size of .ink
    if (!ink.height() && !ink.width()) {
     //use parent's width or height whichever is larger for the diameter to make a circle which can cover the entire element.
     d = Math.max(parent.outerWidth(), parent.outerHeight());
     ink.css({
      height: d,
      width: d
     });
    }

    //get click coordinates
    //logic = click coordinates relative to page - parent's position relative to page - half of self height/width to make it controllable from the center;
    x = e.pageX - parent.offset().left - ink.width() / 2;
    y = e.pageY - parent.offset().top - ink.height() / 2;

    //set the position and add class .animate
    ink.css({
     top: y + 'px',
     left: x + 'px'
    }).addClass('animate');

    setTimeout(function() {
     $('.ink').remove();
    }, 600);
   });
  },

  removeRipple: function() {
   $leftmenu.find('.ink').remove();
  },

  collapse: function() {
   $collapseSidebarEl.on('click', function(e) {
    if ($app.hasClass('leftmenu-sm')) {
     $app.removeClass('leftmenu-sm').addClass('leftmenu-xs');
    } else if ($app.hasClass('leftmenu-xs')) {
     $app.removeClass('leftmenu-xs');
    } else {
     $app.addClass('leftmenu-sm');
    }

    $app.removeClass('leftmenu-sm-forced leftmenu-xs-forced');
    $app.parent().removeClass('leftmenu-sm leftmenu-xs');
    falcon.navbar.removeRipple;
    $window.trigger('resize');
    e.preventDefault();
   });
  },

  offcanvas: function() {
   $offcanvasToggleEl.on('click', function(e) {
    if ($app.hasClass('offcanvas-opened')) {
     $app.removeClass('offcanvas-opened');
    } else {
     $app.addClass('offcanvas-opened');
    }
    e.preventDefault();
   });
  }


 };


 // boxss functions

 falcon.boxss = {

  init: function() {
   falcon.boxss.toggle();
   falcon.boxss.refresh();
   falcon.boxss.fullscreen();
   falcon.boxss.close();
  },

  toggle: function() {
   $boxsToggleEl.on('click', function() {
    var element = $(this);
    var boxs = element.parents('.boxs');

    boxs.toggleClass('collapsed');
    boxs.children().not('.boxs-header').slideToggle(150);
   });
  },

  refresh: function() {
   $boxsRefreshEl.on('click', function() {
    var element = $(this);
    var boxs = element.parents('.boxs');
    var dropdown = element.parents('.dropdown');

    boxs.addClass('refreshing');
    dropdown.trigger('click');

    var t = setTimeout(function() {
     boxs.removeClass('refreshing');
    }, 3000);
   });
  },

  fullscreen: function() {
   $boxsFullscreenEl.on('click', function() {
    var element = $(this);
    var boxs = element.parents('.boxs');
    var dropdown = element.parents('.dropdown');

    screenfull.toggle(boxs[0]);
    dropdown.trigger('click');
   });

   if ($boxsFullscreenEl.length > 0) {
    $(document).on(screenfull.raw.fullscreenchange, function() {
     var element = $(screenfull.element);
     if (screenfull.isFullscreen) {
      element.addClass('isInFullScreen');
     } else {
      $('.boxs.isInFullScreen').removeClass('isInFullScreen');
     }
    });
   }
  },

  close: function() {
   $boxsCloseEl.on('click', function() {
    var element = $(this);
    var boxs = element.parents('.boxs');

    boxs.addClass('closed').fadeOut();
   });
  }

 };

 // extra functions

 falcon.extra = {

  init: function() {
   falcon.extra.sparklineChart();
   falcon.extra.slimScroll();
   falcon.extra.daterangePicker();
   falcon.extra.easypiechart();
   
   falcon.extra.toggleClass();
   falcon.extra.colorpicker();
   falcon.extra.touchspin();
   falcon.extra.datepicker();
   falcon.extra.animateProgress();
   falcon.extra.counter();
   falcon.extra.popover();
   falcon.extra.tooltip();
   falcon.extra.splash();
   falcon.extra.lightbox();
  },

  //initialize sparkline chart on elements
  sparklineChart: function() {

   if ($sparklineEl.length > 0) {
    $sparklineEl.each(function() {
     var element = $(this);

     element.sparkline('html', {
      enableTagOptions: true
     });
    });
   }

  },

  //initialize slimscroll on elements
  slimScroll: function() {

   if ($slimScrollEl.length > 0) {
    $slimScrollEl.each(function() {
     var element = $(this);

     element.slimScroll({
      height: '100%'
     });
    });
   }

  },

  //initialize date range picker on elements
  daterangePicker: function() {

   if ($pickDateEl.length > 0) {
    $pickDateEl.each(function() {
     var element = $(this);

     element.find('span').html(moment().subtract(29, 'days').format('MMMM D, YYYY') + ' - ' + moment().format('MMMM D, YYYY'));

     element.daterangepicker({
      format: 'MM/DD/YYYY',
      startDate: moment().subtract(29, 'days'),
      endDate: moment(),
      minDate: '01/01/2015',
      maxDate: '12/31/2020',
      dateLimit: {
       days: 60
      },
      showDropdowns: true,
      showWeekNumbers: true,
      timePicker: false,
      timePickerIncrement: 1,
      timePicker12Hour: true,
      ranges: {
       'Today': [moment(), moment()],
       'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
       'Last 7 Days': [moment().subtract(6, 'days'), moment()],
       'Last 30 Days': [moment().subtract(29, 'days'), moment()],
       'This Month': [moment().startOf('month'), moment().endOf('month')],
       'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
      },
      opens: 'left',
      drops: 'down',
      buttonClasses: ['btn', 'btn-sm'],
      applyClass: 'btn-success',
      cancelClass: 'btn-default',
      separator: ' to ',
      locale: {
       applyLabel: 'Submit',
       cancelLabel: 'Cancel',
       fromLabel: 'From',
       toLabel: 'To',
       customRangeLabel: 'Custom',
       daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
       monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
       firstDay: 1
      }
     }, function(start, end, label) {
      console.log(start.toISOString(), end.toISOString(), label);
      element.find('span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
     });

    });
   }

  },

  toggleClass: function() {
   $toggleClassEl.on('click', function() {
    var element = $(this),
     className = element.data('toggle'),
     type = element.data('type');

    if (type === 'radio') {
     element.parent().find('.' + className).removeClass(className);
    }

    if (element.hasClass(className)) {
     element.removeClass(className);
    } else {
     element.addClass(className);
    }
   });
  },

  colorpicker: function() {
   if ($colorPickerEl.length > 0) {
    $colorPickerEl.each(function() {
     var element = $(this);
     element.colorpicker();
    });
   }
  },
  easypiechart: function() {
   if ($easypiechartEl.length > 0) {
    $easypiechartEl.each(function() {
     var element = $(this);
     element.easyPieChart({
      onStart: function(value) {
       if (element.hasClass('animate')) {
        $(this.el).find('span').countTo({
         to: value
        });
       }
      }
     });
    });
   }
  },





  datepicker: function() {
   if ($datepickerEl.length > 0) {
    $datepickerEl.each(function() {
     var element = $(this);
     var format = element.data('format')
     element.datetimepicker({
      format: format
     });
    });
   }
  },

  touchspin: function() {
   if ($touchspinEl.length > 0) {
    $touchspinEl.each(function() {
     var element = $(this);
     element.TouchSpin();
    });
   }
  },

  animateProgress: function() {
   if ($animateProgressEl.length > 0) {
    $animateProgressEl.each(function() {
     var element = $(this);
     var progress = element.data('percentage');

     element.css('width', progress);
    });
   }
  },

  popover: function() {
   $popoverEl = $('[data-toggle="popover"]');
   if ($popoverEl.length > 0) {
    $popoverEl.each(function() {
     var element = $(this);

     element.popover();
    });
   }
  },

  tooltip: function() {
   $tooltipEl = $('[data-toggle="tooltip"]');
   if ($tooltipEl.length > 0) {
    $tooltipEl.each(function() {
     var element = $(this);

     element.tooltip();
    });
   }
  },
  counter: function() {
   if ($counterEl.length > 0) {
    $counterEl.each(function() {
     var element = $(this);

     element.countTo();
    });
   }
  },

  splash: function() {
   var options = "";
   var target = "";
   $splashEl.on('show.bs.modal', function(e) {
    options = e.relatedTarget.dataset.options;
    target = $(e.target);

    target.addClass(options);
    $body.addClass(options).addClass('splash');
   });
   $splashEl.on('hidden.bs.modal', function() {
    target.removeClass(options);
    $body.removeClass(options).removeClass('splash');
   });
  },

  //initialize magnificPopup lightbox
  lightbox: function() {
   var $lightboxImageEl = $('[data-lightbox="image"]'),
    $lightboxIframeEl = $('[data-lightbox="iframe"]'),
    $lightboxGalleryEl = $('[data-lightbox="gallery"]');

   if ($lightboxImageEl.length > 0) {
    $lightboxImageEl.magnificPopup({
     type: 'image',
     closeOnContentClick: true,
     closeBtnInside: false,
     fixedContentPos: true,
     image: {
      verticalFit: true
     }
    });
   }

   if ($lightboxIframeEl.length > 0) {
    $lightboxIframeEl.magnificPopup({
     disableOn: 600,
     type: 'iframe',
     removalDelay: 160,
     preloader: false,
     fixedContentPos: false
    });
   }

   if ($lightboxGalleryEl.length > 0) {
    $lightboxGalleryEl.each(function() {
     var element = $(this);

     if (element.find('a[data-lightbox="gallery-item"]').parent('.clone').hasClass('clone')) {
      element.find('a[data-lightbox="gallery-item"]').parent('.clone').find('a[data-lightbox="gallery-item"]').attr('data-lightbox', '');
     }

     element.magnificPopup({
      delegate: 'a[data-lightbox="gallery-item"]',
      type: 'image',
      closeOnContentClick: true,
      closeBtnInside: false,
      fixedContentPos: true,
      image: {
       verticalFit: true
      },
      gallery: {
       enabled: true,
       navigateByImgClick: true,
       preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
      }
     });
    });
   }
  }

 };


 // check mobile device

 falcon.isMobile = {
  Android: function() {
   return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function() {
   return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function() {
   return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function() {
   return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function() {
   return navigator.userAgent.match(/IEMobile/i);
  },
  any: function() {
   return (falcon.isMobile.Android() || falcon.isMobile.BlackBerry() || falcon.isMobile.iOS() || falcon.isMobile.Opera() || falcon.isMobile.Windows());
  }
 };
 // initialize after resize
 falcon.documentOnResize = {
  init: function() {
   var t = setTimeout(function() {
    falcon.documentOnReady.setSidebar();
    falcon.navbar.removeRipple();
   }, 500);
  }
 };
 // initialize when document ready
 falcon.documentOnReady = {
  init: function() {
   falcon.global.init();
   falcon.header.init();
   falcon.navbar.init();
   falcon.documentOnReady.windowscroll();
   falcon.boxss.init();
   falcon.extra.init();
   falcon.documentOnReady.setSidebar();
  },

  // run on window scrolling

  windowscroll: function() {

   $window.on('scroll', function() {

   });
  },


  setSidebar: function() {
   width = $window.width();
   if (width < 1100) {
    $app.addClass('leftmenu-sm');
   }
   if (width < 768) {
    $app.removeClass('leftmenu-sm').addClass('leftmenu-xs');
   }
   if ($app.hasClass('leftmenu-sm-forced')) {
    $app.addClass('leftmenu-sm');
   }
   if ($app.hasClass('leftmenu-xs-forced')) {
    $app.addClass('leftmenu-xs');
   }
  }
 };

 // initialize when document load

 falcon.documentOnLoad = {
  init: function() {}
 };


 // material Kit JS ============================================================================

 var transparent = true;
 var transparentDemo = true;
 var fixedTop = false;
 var navbar_initialized = false;
 $(document).ready(function() {
  // Init Material scripts for buttons ripples, inputs animations etc, more info on the next link https://github.com/FezVrasta/bootstrap-material-design#materialjs
  $.material.init();
  //  Activate the Tooltips
  $('[data-toggle="tooltip"], [rel="tooltip"]').tooltip();
  // Activate Datepicker
  if ($('.m-datepicker').length != 0) {
   $('.m-datepicker').datepicker({
    weekStart: 1
   });
  }
  // Activate Popovers
  $('[data-toggle="popover"]').popover();
  // Active Carousel
  $('.carousel').carousel({
   interval: 400000
  });
 });
 materialKit = {
  misc: {
   navbar_menu_visible: 0
  },
  checkScrollForTransparentNavbar: debounce(function() {
   if ($(document).scrollTop() > 260) {
    if (transparent) {
     transparent = false;
     $('.navbar-color-on-scroll').removeClass('navbar-transparent');
    }
   } else {
    if (!transparent) {
     transparent = true;
     $('.navbar-color-on-scroll').addClass('navbar-transparent');
    }
   }
  }, 17),
  initSliders: function() {
   // Sliders for demo purpose
   $('#sliderRegular').noUiSlider({
    start: 40,
    connect: "lower",
    range: {
     min: 0,
     max: 100
    }
   });
   $('#sliderDouble').noUiSlider({
    start: [20, 60],
    connect: true,
    range: {
     min: 0,
     max: 100
    }
   });
  }
 }
 var big_image;
 materialKitDemo = {
   checkScrollForParallax: debounce(function() {
    var current_scroll = $(this).scrollTop();

    oVal = ($(window).scrollTop() / 3);
    big_image.css({
     'transform': 'translate3d(0,' + oVal + 'px,0)',
     '-webkit-transform': 'translate3d(0,' + oVal + 'px,0)',
     '-ms-transform': 'translate3d(0,' + oVal + 'px,0)',
     '-o-transform': 'translate3d(0,' + oVal + 'px,0)'
    });
   }, 6)
  }
  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.    
 function debounce(func, wait, immediate) {
  var timeout;
  return function() {
   var context = this,
    args = arguments;
   clearTimeout(timeout);
   timeout = setTimeout(function() {
    timeout = null;
    if (!immediate) func.apply(context, args);
   }, wait);
   if (immediate && !timeout) func.apply(context, args);
  };
 };

 //  End material Kit JS ============================================================================

 // global variables

 var $window = $(window),
  $body = $('body'),
  $header = $('#header'),
  $branding = $('#header .branding'),
  $leftmenu = $('#leftmenu'),
  $controls = $('#controls'),
  $app = $('.main_Wrapper'),
  $navigation = $('#navigation'),
  $sparklineEl = $('.sparklineChart'),
  $slimScrollEl = $('.slim-scroll'),
  $collapseSidebarEl = $('.collapse-leftmenu'),
  $wrap = $('#wrap'),
  $offcanvasToggleEl = $('.offcanvas-toggle'),

  //navigation elements
  $dropdowns = $navigation.find('ul').parent('li'),
  $a = $dropdowns.children('a'),
  $notDropdowns = $navigation.children('li').not($dropdowns),
  $notDropdownsLinks = $notDropdowns.children('a'),
  // end of navuigation elements

  $headerthemeEl = $('.color-themes .header-theme'),
  $brandingthemeEl = $('.color-themes .branding-theme'),
  $leftmenuthemeEl = $('.color-themes .leftmenu-theme'),
  $colorthemeEl = $('.color-themes .color-theme'),
  $fixedHeaderEl = $('#fixed-header'),
  $fixedAsideEl = $('#fixed-aside'),
  $toggleRightbarEl = $('.toggle-right-leftmenu'),
  $pickDateEl = $('.pickDate'),

  $boxsEl = $('.boxs'),
  $boxsToggleEl = $('.boxs .boxs-toggle'),
  $boxsRefreshEl = $('.boxs .boxs-refresh'),
  $boxsFullscreenEl = $('.boxs .boxs-fullscreen'),
  $boxsCloseEl = $('.boxs .boxs-close'),

  $easypiechartEl = $('.easypiechart'),  
  $toggleClassEl = $('.toggle-class'),
  $colorPickerEl = $('.colorpicker'),
  $touchspinEl = $('.touchspin'),
  $datepickerEl = $('.datepicker'),
  $animateProgressEl = $('.animate-progress-bar'),
  $counterEl = $('.counter'),
  $splashEl = $('.splash');


 // initializing
 $(document).ready(falcon.documentOnReady.init);
 $window.on('resize', falcon.documentOnResize.init);

});