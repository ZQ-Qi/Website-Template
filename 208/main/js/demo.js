//[Preview Menu Javascript]

//Project:	Ekan Admin - Responsive Admin Template
//Primary use:   This file is for demo purposes only.

$(function () {
  'use strict'

  /**
   * Get access to plugins
   */

  $('[data-toggle="control-sidebar"]').controlSidebar()
  $('[data-toggle="push-menu"]').pushMenu()

  var $pushMenu       = $('[data-toggle="push-menu"]').data('lte.pushmenu')
  var $controlSidebar = $('[data-toggle="control-sidebar"]').data('lte.controlsidebar')
  var $layout         = $('body').data('lte.layout')

  /**
   * List of all the available skins
   *
   * @type Array
   */
  var mySkins = [
    'skin-info',
    'skin-success',
    'skin-danger',
    'skin-primary',
    'skin-warning',
    'skin-light',
    'skin-dark',
  ]
  /**
   * Get a prestored setting
   *
   * @param String name Name of of the setting
   * @returns String The value of the setting | null
   */
  function get(name) {
    if (typeof (Storage) !== 'undefined') {
      return localStorage.getItem(name)
    } else {
      window.alert('Please use a modern browser to properly view this template!')
    }
  }
  /**
   * Store a new settings in the browser
   *
   * @param String name Name of the setting
   * @param String val Value of the setting
   * @returns void
   */
  function store(name, val) {
    if (typeof (Storage) !== 'undefined') {
      localStorage.setItem(name, val)
    } else {
      window.alert('Please use a modern browser to properly view this template!')
    }
  }
  /**
   * Toggles layout classes
   *
   * @param String cls the layout class to toggle
   * @returns void
   */
  function changeLayout(cls) {
    $('body').toggleClass(cls)
    if ($('body').hasClass('fixed') && cls == 'fixed') {
      $pushMenu.expandOnHover()
      $layout.activate()
    }
    $controlSidebar.fix()
  }
  /**
   * Replaces the old skin with the new skin
   * @param String cls the new skin class
   * @returns Boolean false to prevent link's default action
   */
  function changeSkin(cls) {
    $.each(mySkins, function (i) {
      $('body').removeClass(mySkins[i])
    })

    $('body').addClass(cls)
    store('skin', cls)
    return false
  }
  /**
   * Retrieve default settings and apply them to the template
   *
   * @returns void
   */
  function setup() {
    var tmp = get('skin')
    if (tmp && $.inArray(tmp, mySkins))
      changeSkin(tmp)

    // Add the change skin listener
    $('[data-skin]').on('click', function (e) {
      if ($(this).hasClass('knob'))
        return
      e.preventDefault()
      changeSkin($(this).data('skin'))
    })

    // Add the layout manager
    $('[data-layout]').on('click', function () {
      changeLayout($(this).data('layout'))
    })

    $('[data-controlsidebar]').on('click', function () {
      changeLayout($(this).data('controlsidebar'))
      var slide = !$controlSidebar.options.slide

      $controlSidebar.options.slide = slide
      if (!slide)
        $('.control-sidebar').removeClass('control-sidebar-open')
    })

    $('[data-sidebarskin="toggle"]').on('click', function () {
      var $sidebar = $('.control-sidebar')
      if ($sidebar.hasClass('control-sidebar-dark')) {
        $sidebar.removeClass('control-sidebar-dark')
        $sidebar.addClass('control-sidebar-light')
      } else {
        $sidebar.removeClass('control-sidebar-light')
        $sidebar.addClass('control-sidebar-dark')
      }
    })

    $('[data-enable="expandOnHover"]').on('click', function () {
      $(this).attr('disabled', true)
      $pushMenu.expandOnHover()
      if (!$('body').hasClass('sidebar-collapse'))
        $('[data-layout="sidebar-collapse"]').click()
    })

    $('[data-enable="rtl"]').on('click', function () {
      $(this).attr('disabled', true)
      $pushMenu.expandOnHover()
      if (!$('body').hasClass('rtl'))
        $('[data-layout="rtl"]').click()
    })

    $('[data-enable="dark"]').on('click', function () {
      $(this).attr('disabled', true)
      $pushMenu.expandOnHover()
      if (!$('body').hasClass('dark'))
        $('[data-layout="dark"]').click()
    })
	  	

    $('[data-mainsidebarskin="toggle"]').on('click', function () {
      var $sidebar = $('body')
      if ($sidebar.hasClass('dark-sidebar')) {
        $sidebar.removeClass('dark-sidebar')
        $sidebar.addClass('light-sidebar')
      } else {
        $sidebar.removeClass('light-sidebar')
        $sidebar.addClass('dark-sidebar')
      }
    })

    //  Reset options
    if ($('body').hasClass('fixed')) {
      $('[data-layout="fixed"]').attr('checked', 'checked')
    }
    if ($('body').hasClass('layout-boxed')) {
      $('[data-layout="layout-boxed"]').attr('checked', 'checked')
    }
    if ($('body').hasClass('sidebar-collapse')) {
      $('[data-layout="sidebar-collapse"]').attr('checked', 'checked')
    }
    if ($('body').hasClass('rtl')) {
      $('[data-layout="rtl"]').attr('checked', 'checked')
    }
    if ($('body').hasClass('dark')) {
      $('[data-layout="dark"]').attr('checked', 'checked')
    }

  }

  // Create the new tab
  var $tabPane = $('<div />', {
    'id'   : 'control-sidebar-theme-demo-options-tab',
    'class': 'tab-pane active'
  })

  // Create the tab button
  var $tabButton = $('<li />', { 'class': 'nav-item' })
    .html('<a href=\'#control-sidebar-theme-demo-options-tab\' class=\'active\' data-toggle=\'tab\'>'
      + 'Settings'
      + '</a>')

  // Add the tab button to the right sidebar tabs
  $('[href="#control-sidebar-home-tab"]')
    .parent()
    .before($tabButton)

  // Create the menu
  var $demoSettings = $('<div />')
  
  // Layout options
  $demoSettings.append(
    '<h4 class="control-sidebar-heading">'
    + 'Dark or Light Sidebar'
    + '</h4>'
	  
    // Left Sidebar Skin Toggle	  
	+ '<div class="flexbox mb-10 pb-10 bb-1">'
	+ '<label for="toggle_left_sidebar_skin" class="control-sidebar-subheading">'
    + 'Sidebar Color'
    + '</label>'
	+ '<label class="switch switch-border switch-danger">'
	+ '<input type="checkbox" data-mainsidebarskin="toggle" id="toggle_left_sidebar_skin">'
	+ '<span class="switch-indicator"></span>'
	+ '<span class="switch-description"></span>'
	+ '</label>'
	+ '</div>'
	  
	
  )
	
  // Layout options
  $demoSettings.append(
    '<h4 class="control-sidebar-heading">'
    + 'RTL or LTR'
    + '</h4>'
	  
    // rtl layout
	+ '<div class="flexbox mb-10 pb-10 bb-1">'
	+ '<label for="rtl" class="control-sidebar-subheading">'
    + 'RTL'
    + '</label>'
	+ '<label class="switch switch-border switch-danger">'
	+ '<input type="checkbox" data-layout="rtl" id="rtl">'
	+ '<span class="switch-indicator"></span>'
	+ '<span class="switch-description"></span>'
	+ '</label>'
	+ '</div>'
  )
	
  // Layout options
  $demoSettings.append(
    '<h4 class="control-sidebar-heading">'
    + 'Dark or Light Layout'
    + '</h4>'
	  
    // dark layout
	+ '<div class="flexbox mb-10 pb-10 bb-1">'
	+ '<label for="dark" class="control-sidebar-subheading">'
    + 'Layout Color'
    + '</label>'
	+ '<label class="switch switch-border switch-danger">'
	+ '<input type="checkbox" data-layout="dark" id="dark">'
	+ '<span class="switch-indicator"></span>'
	+ '<span class="switch-description"></span>'
	+ '</label>'
	+ '</div>'
  )

  // Layout options
  $demoSettings.append(
    '<h4 class="control-sidebar-heading">'
    + 'Layout Options'
    + '</h4>'
	  
	  
    // Fixed layout
	+ '<div class="flexbox mb-10">'
	+ '<label for="layout_fixed" class="control-sidebar-subheading">'
    + 'Fixed layout'
    + '</label>'
	+ '<label class="switch switch-border switch-danger">'
	+ '<input type="checkbox" data-layout="fixed" id="layout_fixed">'
	+ '<span class="switch-indicator"></span>'
	+ '<span class="switch-description"></span>'
	+ '</label>'
	+ '</div>'	
	  
    // Boxed layout
	+ '<div class="flexbox mb-10">'
	+ '<label for="layout_boxed" class="control-sidebar-subheading">'
    + 'Boxed Layout'
    + '</label>'
	+ '<label class="switch switch-border switch-danger">'
	+ '<input type="checkbox" data-layout="layout-boxed" id="layout_boxed">'
	+ '<span class="switch-indicator"></span>'
	+ '<span class="switch-description"></span>'
	+ '</label>'
	+ '</div>'
	  
    // Sidebar Toggle
	+ '<div class="flexbox mb-10">'
	+ '<label for="toggle_sidebar" class="control-sidebar-subheading">'
    + 'Toggle Sidebar'
    + '</label>'
	+ '<label class="switch switch-border switch-danger">'
	+ '<input type="checkbox" data-layout="sidebar-collapse" id="toggle_sidebar">'
	+ '<span class="switch-indicator"></span>'
	+ '<span class="switch-description"></span>'
	+ '</label>'
	+ '</div>'	  
    
    // Control Sidebar Toggle
	+ '<div class="flexbox mb-10">'
	+ '<label for="toggle_right_sidebar" class="control-sidebar-subheading">'
    + 'Toggle Right Sidebar Slide'
    + '</label>'
	+ '<label class="switch switch-border switch-danger">'
	+ '<input type="checkbox" data-controlsidebar="control-sidebar-open" id="toggle_right_sidebar">'
	+ '<span class="switch-indicator"></span>'
	+ '<span class="switch-description"></span>'
	+ '</label>'
	+ '</div>'	  
	  	
    // Control Sidebar Skin Toggle
	+ '<div class="flexbox mb-10 pb-10 bb-1">'
	+ '<label for="toggle_right_sidebar_skin" class="control-sidebar-subheading">'
    + 'Toggle Right Sidebar Skin'
    + '</label>'
	+ '<label class="switch switch-border switch-danger">'
	+ '<input type="checkbox" data-sidebarskin="toggle" id="toggle_right_sidebar_skin">'
	+ '<span class="switch-indicator"></span>'
	+ '<span class="switch-description"></span>'
	+ '</label>'
	+ '</div>'
  )
  
  var $skinsList = $('<ul />', { 'class': 'list-unstyled clearfix' })

  // Dark sidebar skins
  var $skinInfo =
        $('<li />', { style: 'padding: 5px;line-height: 25px;' })
          .append('<a href="javascript:void(0)" data-skin="skin-info" style="display: inline-block;box-shadow: 0 0 3px rgba(0,0,0,0.4);border-radius: 100px;height: 20px;width: 20px;vertical-align: middle;" class="clearfix full-opacity-hover bg-info">'
            + '</a>'
			+ '<span class="text-center no-margin pl-20">Skin Info</span>')
  $skinsList.append($skinInfo)
  var $skinSuccess =
        $('<li />', { style: 'padding: 5px;line-height: 25px;' })
          .append('<a href="javascript:void(0)" data-skin="skin-success" style="display: inline-block;box-shadow: 0 0 3px rgba(0,0,0,0.4);border-radius: 100px;height: 20px;width: 20px;vertical-align: middle;" class="clearfix full-opacity-hover bg-success">'
            + '</a>'
			+ '<span class="text-center no-margin pl-20">Skin Success</span>')
  $skinsList.append($skinSuccess)
  var $skinDanger =
        $('<li />', { style: 'padding: 5px;line-height: 25px;' })
          .append('<a href="javascript:void(0)" data-skin="skin-danger" style="display: inline-block;box-shadow: 0 0 3px rgba(0,0,0,0.4);border-radius: 100px;height: 20px;width: 20px;vertical-align: middle;" class="clearfix full-opacity-hover bg-danger">'
            + '</a>'
			+ '<span class="text-center no-margin pl-20">Skin Danger</span>')
  $skinsList.append($skinDanger)
  var $skinPrimary =
        $('<li />', { style: 'padding: 5px;line-height: 25px;' })
          .append('<a href="javascript:void(0)" data-skin="skin-primary" style="display: inline-block;box-shadow: 0 0 3px rgba(0,0,0,0.4);border-radius: 100px;height: 20px;width: 20px;vertical-align: middle;" class="clearfix full-opacity-hover bg-primary">'
            + '</a>'
			+ '<span class="text-center no-margin pl-20">Skin Primary</span>')
  $skinsList.append($skinPrimary)
  var $skinWarning =
        $('<li />', { style: 'padding: 5px;line-height: 25px;' })
          .append('<a href="javascript:void(0)" data-skin="skin-warning" style="display: inline-block;box-shadow: 0 0 3px rgba(0,0,0,0.4);border-radius: 100px;height: 20px;width: 20px;vertical-align: middle;" class="clearfix full-opacity-hover bg-warning">'
            + '</a>'
			+ '<span class="text-center no-margin pl-20">Skin Warning</span>')
  $skinsList.append($skinWarning)
  var $skinLight =
        $('<li />', { style: 'padding: 5px;line-height: 25px;' })
          .append('<a href="javascript:void(0)" data-skin="skin-light" style="display: inline-block;box-shadow: 0 0 3px rgba(0,0,0,0.4);border-radius: 100px;height: 20px;width: 20px;vertical-align: middle;" class="clearfix full-opacity-hover bg-light">'
            + '</a>'
			+ '<span class="text-center no-margin pl-20">Skin Light</span>')
  $skinsList.append($skinLight)
  var $skinDark =
        $('<li />', { style: 'padding: 5px;line-height: 25px;' })
          .append('<a href="javascript:void(0)" data-skin="skin-dark" style="display: inline-block;box-shadow: 0 0 3px rgba(0,0,0,0.4);border-radius: 100px;height: 20px;width: 20px;vertical-align: middle;" class="clearfix full-opacity-hover bg-dark">'
            + '</a>'
			+ '<span class="text-center no-margin pl-20">Skin Dark</span>')
  $skinsList.append($skinDark)

  

  $demoSettings.append('<h4 class="control-sidebar-heading">Header Colors</h4>')
  $demoSettings.append($skinsList)

  $tabPane.append($demoSettings)
  $('#control-sidebar-home-tab').after($tabPane)

  setup()

  $('[data-toggle="tooltip"]').tooltip()
});// End of use strict
