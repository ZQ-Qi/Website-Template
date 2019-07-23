/**
 * @Package: Cryptonia - Bitcoin & Cryptocurrency trading Dashboard
 * @Version: 1.0.0
 */

jQuery(function($) {

    'use strict';

    var CRYPTONIA_SETTINGS = window.CRYPTONIA_SETTINGS || {};

    /*--------------------------------
         Window Based Layout
     --------------------------------*/
    CRYPTONIA_SETTINGS.windowBasedLayout = function() {
        var width = window.innerWidth;
        //console.log(width);

        if ($("body").hasClass("chat-open") || $("body").hasClass("sidebar-collapse")) {

            CRYPTONIA_SETTINGS.mainmenuCollapsed();

        } else if (width < 767) {

            // small window
            $(".page-topbar").addClass("sidebar_shift").removeClass("chat_shift");
            $(".page-sidebar").addClass("collapseit").removeClass("expandit");
            $("#main-content").addClass("sidebar_shift").removeClass("chat_shift");
            $(".page-chatapi").removeClass("showit").addClass("hideit");
            $(".chatapi-windows").removeClass("showit").addClass("hideit");
            CRYPTONIA_SETTINGS.mainmenuCollapsed();

        } else {

            // large window
            $(".page-topbar").removeClass("sidebar_shift chat_shift");
            $(".page-sidebar").removeClass("collapseit chat_shift");
            $("#main-content").removeClass("sidebar_shift chat_shift");
            CRYPTONIA_SETTINGS.mainmenuScroll();
        }

    }

    /*--------------------------------
         Window Based Layout
     --------------------------------*/
    CRYPTONIA_SETTINGS.onLoadTopBar = function() {

        $(".page-topbar .message-toggle-wrapper").addClass("showopacity");
        $(".page-topbar .notify-toggle-wrapper").addClass("showopacity");
        $(".page-topbar .searchform").addClass("showopacity");
        $(".page-topbar li.profile").addClass("showopacity");
    }

    /*--------------------------------
         CHAT API
     --------------------------------*/
    CRYPTONIA_SETTINGS.chatAPI = function() {

        $('.page-topbar .toggle_chat').on('click', function() {
            var chatarea = $(".page-chatapi");
            var chatwindow = $(".chatapi-windows");
            var topbar = $(".page-topbar");
            var mainarea = $("#main-content");
            var menuarea = $(".page-sidebar");

            if (chatarea.hasClass("hideit")) {
                chatarea.addClass("showit").removeClass("hideit");
                chatwindow.addClass("showit").removeClass("hideit");
                topbar.addClass("chat_shift");
                mainarea.addClass("chat_shift");
                menuarea.addClass("chat_shift");
                CRYPTONIA_SETTINGS.mainmenuCollapsed();
            } else {
                chatarea.addClass("hideit").removeClass("showit");
                chatwindow.addClass("hideit").removeClass("showit");
                topbar.removeClass("chat_shift");
                mainarea.removeClass("chat_shift");
                menuarea.removeClass("chat_shift");
                //CRYPTONIA_SETTINGS.mainmenuScroll();
                CRYPTONIA_SETTINGS.windowBasedLayout();
            }
        });

        $('.page-topbar .sidebar_toggle').on('click', function() {
            var chatarea = $(".page-chatapi");
            var chatwindow = $(".chatapi-windows");
            var topbar = $(".page-topbar");
            var mainarea = $("#main-content");
            var menuarea = $(".page-sidebar");

            if (menuarea.hasClass("collapseit") || menuarea.hasClass("chat_shift")) {
                menuarea.addClass("expandit").removeClass("collapseit").removeClass("chat_shift");
                topbar.removeClass("sidebar_shift").removeClass("chat_shift");
                mainarea.removeClass("sidebar_shift").removeClass("chat_shift");
                chatarea.addClass("hideit").removeClass("showit");
                chatwindow.addClass("hideit").removeClass("showit");
                CRYPTONIA_SETTINGS.mainmenuScroll();
            } else {
                menuarea.addClass("collapseit").removeClass("expandit").removeClass("chat_shift");
                topbar.addClass("sidebar_shift").removeClass("chat_shift");
                mainarea.addClass("sidebar_shift").removeClass("chat_shift");
                CRYPTONIA_SETTINGS.mainmenuCollapsed();
            }
        });

    };

    /*--------------------------------
         CHAT API Scroll
     --------------------------------*/
    CRYPTONIA_SETTINGS.chatApiScroll = function() {

        var topsearch = $(".page-chatapi .search-bar").height();
        var height = window.innerHeight - topsearch;
        $('.chat-wrapper').height(height).perfectScrollbar({
            suppressScrollX: true
        });
    };

    /*--------------------------------
         CHAT API window
     --------------------------------*/
    CRYPTONIA_SETTINGS.chatApiWindow = function() {

        var chatarea = $(".page-chatapi");

        $('.page-chatapi .user-row').on('click', function() {

            var name = $(this).find(".user-info h4 a").html();
            var img = $(this).find(".user-img a img").attr("src");
            var id = $(this).attr("data-user-id");
            var status = $(this).find(".user-info .status").attr("data-status");

            if ($(this).hasClass("active")) {
                $(this).toggleClass("active");

                $(".chatapi-windows #user-window" + id).hide();

            } else {
                $(this).toggleClass("active");

                if ($(".chatapi-windows #user-window" + id).length) {

                    $(".chatapi-windows #user-window" + id).removeClass("minimizeit").show();

                } else {
                    var msg = chatformat_msg('I am really interested in buying bitcoin and other Cryptocurrency', 'receive', name);
                    msg += chatformat_msg('Yes! Thanks for contacting me ;)', 'sent', 'You');
                    var html = "<div class='user-window' id='user-window" + id + "' data-user-id='" + id + "'>";
                    html += "<div class='controlbar'><img src='" + img + "' data-user-id='" + id + "' rel='tooltip' data-animate='animated fadeIn' data-toggle='tooltip' data-original-title='" + name + "' data-placement='top' data-color-class='primary'><span class='status " + status + "'><i class='fa fa-circle'></i></span><span class='name'>" + name + "</span><span class='opts'><i class='fa fa-times closeit' data-user-id='" + id + "'></i><i class='fa fa-minus minimizeit' data-user-id='" + id + "'></i></span></div>";
                    html += "<div class='chatarea'>" + msg + "</div>";
                    html += "<div class='typearea'><input type='text' data-user-id='" + id + "' placeholder='Type & Enter' class='form-control'></div>";
                    html += "</div>";
                    $(".chatapi-windows").append(html);
                }
            }

        });

        $(document).on('click', ".chatapi-windows .user-window .controlbar .closeit", function(e) {
            var id = $(this).attr("data-user-id");
            $(".chatapi-windows #user-window" + id).hide();
            $(".page-chatapi .user-row#chat_user_" + id).removeClass("active");
        });

        $(document).on('click', ".chatapi-windows .user-window .controlbar img, .chatapi-windows .user-window .controlbar .minimizeit", function(e) {
            var id = $(this).attr("data-user-id");

            if (!$(".chatapi-windows #user-window" + id).hasClass("minimizeit")) {
                $(".chatapi-windows #user-window" + id).addClass("minimizeit");
                CRYPTONIA_SETTINGS.tooltipsPopovers();
            } else {
                $(".chatapi-windows #user-window" + id).removeClass("minimizeit");
            }

        });

        $(document).on('keypress', ".chatapi-windows .user-window .typearea input", function(e) {
            if (e.keyCode == 13) {
                var id = $(this).attr("data-user-id");
                var msg = $(this).val();
                msg = chatformat_msg(msg, 'sent', 'You');
                $(".chatapi-windows #user-window" + id + " .chatarea").append(msg);
                $(this).val("");
                $(this).focus();
            }
            $(".chatapi-windows #user-window" + id + " .chatarea").perfectScrollbar({
                suppressScrollX: true
            });
        });

    };

    function chatformat_msg(msg, type, name) {
        var d = new Date();
        var h = d.getHours();
        var m = d.getMinutes();
        return "<div class='chatmsg msg_" + type + "'><span class='name'>" + name + "</span><span class='text'>" + msg + "</span><span class='ts'>" + h + ":" + m + "</span></div>";
    }

    /*--------------------------------
         Login Page
     --------------------------------*/
    CRYPTONIA_SETTINGS.loginPage = function() {

        var height = window.innerHeight;
        var formheight = $("#login").height();
        var newheight = (height - formheight) / 2;
        //console.log(height+" - "+ formheight + " / "+ newheight);
        $('#login').css('margin-top', +newheight + 'px');

        if ($('#login #user_login').length) {
            var d = document.getElementById('user_login');
            d.focus();
        }

    };

    /*--------------------------------
         Search Page
     --------------------------------*/
    CRYPTONIA_SETTINGS.searchPage = function() {

        $('.search_data .tab-pane').perfectScrollbar({
            suppressScrollX: true
        });
        var search = $(".search-page-input");
        if (search.length) {
            search.focus();
        }
    };

    /*--------------------------------
        Viewport Checker
     --------------------------------*/
    CRYPTONIA_SETTINGS.viewportElement = function() {

        if ($.isFunction($.fn.viewportChecker)) {

            $('.inviewport').viewportChecker({
                callbackFunction: function(elem, action) {
                    //setTimeout(function(){
                    //elem.html((action == "add") ? 'Callback with 500ms timeout: added class' : 'Callback with 500ms timeout: removed class');
                    //},500);
                }
            });

            $('.number_counter').viewportChecker({
                classToAdd: 'start_timer',
                offset: 10,
                callbackFunction: function(elem) {
                    $('.start_timer:not(.counted)').each(count);
                    //$(elem).removeClass('number_counter');
                }
            });

        }

        // start count
        function count(options) {
            var $this = $(this);
            options = $.extend({}, options || {}, $this.data('countToOptions') || {});
            $this.countTo(options).addClass("counted");
        }
    };

    /*--------------------------------
        Sortable / Draggable Panels
     --------------------------------*/
    CRYPTONIA_SETTINGS.draggablePanels = function() {

        if ($.isFunction($.fn.sortable)) {
            $(".sort_panel").sortable({
                connectWith: ".sort_panel",
                handle: "header.panel_header",
                cancel: ".panel_actions",
                placeholder: "portlet-placeholder"
            });
        }
    };

    /*--------------------------------
         Breadcrumb autoHidden
     --------------------------------*/
    CRYPTONIA_SETTINGS.breadcrumbAutoHidden = function() {

        $('.breadcrumb.auto-hidden a').on('mouseover', function() {
            $(this).removeClass("collapsed");
        });
        $('.breadcrumb.auto-hidden a').on('mouseout', function() {
            $(this).addClass("collapsed");
        });

    };

    /*--------------------------------
         Section Box Actions
     --------------------------------*/
    CRYPTONIA_SETTINGS.sectionBoxActions = function() {

        $('section.box .actions .box_toggle').on('click', function() {

            var content = $(this).parent().parent().parent().find(".content-body");
            if (content.hasClass("collapsed")) {
                content.removeClass("collapsed").slideDown(500);
                $(this).removeClass("fa-chevron-up").addClass("fa-chevron-down");
            } else {
                content.addClass("collapsed").slideUp(500);
                $(this).removeClass("fa-chevron-down").addClass("fa-chevron-up");
            }

        });

        $('section.box .actions .box_close').on('click', function() {
            content = $(this).parent().parent().parent().remove();
        });

    };

    /*--------------------------------
         Main Menu Scroll
     --------------------------------*/
    CRYPTONIA_SETTINGS.mainmenuScroll = function() {

        //console.log("expand scroll menu");

        var topbar = $(".page-topbar").height();
        var projectinfo = $(".project-info").innerHeight();

        var height = window.innerHeight - topbar - projectinfo;

        $('.fixedscroll #main-menu-wrapper').height(height).perfectScrollbar({
            suppressScrollX: true
        });
        $("#main-menu-wrapper .wraplist").height('auto');

        /*show first sub menu of open menu item only - opened after closed*/
        // > in the selector is used to select only immediate elements and not the inner nested elements.
        $("li.open > .sub-menu").attr("style", "display:block;");

    };

    /*--------------------------------
         Collapsed Main Menu
     --------------------------------*/
    CRYPTONIA_SETTINGS.mainmenuCollapsed = function() {

        if ($(".page-sidebar.chat_shift #main-menu-wrapper").length > 0 || $(".page-sidebar.collapseit #main-menu-wrapper").length > 0) {
            //console.log("collapse menu");
            var topbar = $(".page-topbar").height();
            var windowheight = window.innerHeight;
            var minheight = windowheight - topbar;
            var fullheight = $(".page-container #main-content .wrapper").height();

            var height = fullheight;

            if (fullheight < minheight) {
                height = minheight;
            }

            $('.fixedscroll #main-menu-wrapper').perfectScrollbar('destroy');

            $('.page-sidebar.chat_shift #main-menu-wrapper .wraplist, .page-sidebar.collapseit #main-menu-wrapper .wraplist').height(height);

            /*hide sub menu of open menu item*/
            $("li.open .sub-menu").attr("style", "");

        }

    };

    /*--------------------------------
         Main Menu
     --------------------------------*/
    CRYPTONIA_SETTINGS.mainMenu = function() {
        $('#main-menu-wrapper li a').on('click', function(e) {

            if ($(this).next().hasClass('sub-menu') === false) {
                return;
            }

            var parent = $(this).parent().parent();
            var sub = $(this).next();

            parent.children('li.open').children('.sub-menu').slideUp(200);
            parent.children('li.open').children('a').children('.arrow').removeClass('open');
            parent.children('li').removeClass('open');

            if (sub.is(":visible")) {
                $(this).find(".arrow").removeClass("open");
                sub.slideUp(200);
            } else {
                $(this).parent().addClass("open");
                $(this).find(".arrow").addClass("open");
                sub.slideDown(200);
            }

        });

        $("body").on('click', function(e) {
            $(".page-sidebar.collapseit .wraplist li.open .sub-menu").attr("style", "");
            $(".page-sidebar.collapseit .wraplist li.open").removeClass("open");
            $(".page-sidebar.chat_shift .wraplist li.open .sub-menu").attr("style", "");
            $(".page-sidebar.chat_shift .wraplist li.open").removeClass("open");
        });

    };

    /*--------------------------------
         Mailbox
     --------------------------------*/
    CRYPTONIA_SETTINGS.mailboxInbox = function() {

        $('.mail_list table .star i').on('click', function(e) {
            $(this).toggleClass("fa-star fa-star-o");
        });

        $('.mail_list .open-view').on('click', function(e) {
            window.location = 'mail-view.html';
        });

        $('.mail_view_info .labels .cc').on('click', function(e) {
            var ele = $(".mail_compose_cc");
            if (ele.is(":visible")) {
                ele.hide();
            } else {
                ele.show();
            }
        });

        $('.mail_view_info .labels .bcc').on('click', function(e) {
            var ele = $(".mail_compose_bcc");
            if (ele.is(":visible")) {
                ele.hide();
            } else {
                ele.show();
            }
        });

    };

    /*--------------------------------
         Top Bar
     --------------------------------*/
    CRYPTONIA_SETTINGS.pageTopBar = function() {
        $('.page-topbar li.searchform .input-group-addon').on('click', function(e) {
            $(this).parent().parent().parent().toggleClass("focus");
            $(this).parent().parent().find("input").focus();
        });

        $('.page-topbar li .dropdown-menu .list').perfectScrollbar({
            suppressScrollX: true
        });

    };

    /*--------------------------------
         Extra form settings
     --------------------------------*/
    CRYPTONIA_SETTINGS.extraFormSettings = function() {

        // transparent input group focus/blur
        $('.input-group .form-control').focus(function(e) {
            $(this).parent().find(".input-group-addon").addClass("input-focus");
            $(this).parent().find(".input-group-btn").addClass("input-focus");
        });

        $('.input-group .form-control').blur(function(e) {
            $(this).parent().find(".input-group-addon").removeClass("input-focus");
            $(this).parent().find(".input-group-btn").removeClass("input-focus");
        });

    };

    /*--------------------------------
         js tree
     --------------------------------*/
    CRYPTONIA_SETTINGS.jsTreeINIT = function() {

        if ($.isFunction($.fn.jstree)) {
            $(function() {
                var to = false;
                $('#treedata_q').keyup(function() {
                    if (to) {
                        clearTimeout(to);
                    }
                    to = setTimeout(function() {
                        var v = $('#treedata_q').val();
                        $('#jstree_treedata').jstree(true).search(v);
                    }, 250);
                });

                $('#jstree_treedata')
                    .jstree({
                        "core": {
                            "animation": 0,
                            "check_callback": true,
                            "themes": {
                                "stripes": true
                            },
                            'data': {
                                'url': function(node) {
                                    return node.id === '#' ? 'data/ajax_demo_roots_jstree.json' : 'data/ajax_demo_children_jstree.json';
                                },
                                'data': function(node) {
                                    return {
                                        'id': node.id
                                    };
                                }
                            }
                        },
                        "types": {
                            "#": {
                                "max_children": 1,
                                "max_depth": 4,
                                "valid_children": ["root"]
                            },
                            "root": {
                                "icon": "assets/plugins/jstree/images/tree_icon.png",
                                "valid_children": ["default"]
                            },
                            "default": {
                                "valid_children": ["default", "file"]
                            },
                            "file": {
                                "icon": "fa fa-file",
                                "valid_children": []
                            }
                        },
                        "checkbox": {
                            "keep_selected_style": false
                        },
                        "plugins": ["checkbox", "contextmenu", "dnd", "search", "sort", "state", "types", "unique", "wholerow"]
                    });
            });

        }
    };

    /*--------------------------------
         Vector maps
     --------------------------------*/
    CRYPTONIA_SETTINGS.jvectorMaps = function() {

        if ($.isFunction($.fn.vectorMap)) {

            if ($("#world-map-markers").length) {
                //@code_start
                $(function() {
                    $('#world-map-markers').vectorMap({
                        map: 'world_mill_en',
                        scaleColors: ['#e77512', '#e77512'],
                        normalizeFunction: 'polynomial',
                        hoverOpacity: 0.7,
                        hoverColor: false,
                        regionsSelectable: true,
                        markersSelectable: true,
                        markersSelectableOne: true,

                        onRegionOver: function(event, code) {
                            //console.log('region-over', code);
                        },
                        onRegionOut: function(event, code) {
                            //console.log('region-out', code);
                        },
                        onRegionClick: function(event, code) {
                            //console.log('region-click', code);
                        },
                        onRegionSelected: function(event, code, isSelected, selectedRegions) {
                            //console.log('region-select', code, isSelected, selectedRegions);
                            if (window.localStorage) {
                                window.localStorage.setItem(
                                    'jvectormap-selected-regions',
                                    JSON.stringify(selectedRegions)
                                );
                            }
                        },

                        panOnDrag: true,

                        focusOn: {
                            x: 1.5,
                            y: 1.5,
                            scale: 1,
                            animate: true
                        },

                        regionStyle: {
                            initial: {
                                fill: '#cccccc',
                                'fill-opacity': 1,
                                stroke: 'none',
                                'stroke-width': 0,
                                'stroke-opacity': 1
                            },
                            hover: {
                                fill: '#E91E63',
                                'fill-opacity': 1,
                                cursor: 'pointer'
                            },
                            selected: {
                                fill: '#E91E63'
                            },
                            selectedHover: {}
                        },

                        markerStyle: {
                            initial: {
                                fill: '#673AB7',
                                stroke: '#ffffff',
                                "stroke-width": 2,
                                r: 10
                            },
                            hover: {
                                stroke: '#FFC107',
                                "stroke-width": 2,
                                cursor: 'pointer'
                            },
                            selected: {
                                fill: '#FFC107',
                                "stroke-width": 0,
                            },
                        },
                        backgroundColor: '#ffffff',
                        markers: [{
                            latLng: [41.90, 12.45],
                            name: 'Vatican City'
                        }, {
                            latLng: [43.73, 7.41],
                            name: 'Monaco'
                        }, {
                            latLng: [-0.52, 166.93],
                            name: 'Nauru'
                        }, {
                            latLng: [37.77, -122.41],
                            name: 'San Francisco'
                        }, {
                            latLng: [43.93, 12.46],
                            name: 'San Marino'
                        }, {
                            latLng: [47.14, 9.52],
                            name: 'Liechtenstein'
                        }, {
                            latLng: [7.11, 171.06],
                            name: 'Marshall Islands'
                        }, {
                            latLng: [17.3, -62.73],
                            name: 'Saint Kitts and Nevis'
                        }, {
                            latLng: [3.2, 73.22],
                            name: 'Maldives'
                        }, {
                            latLng: [35.88, 14.5],
                            name: 'Malta'
                        }, {
                            latLng: [12.05, -61.75],
                            name: 'Grenada'
                        }, {
                            latLng: [13.16, -61.23],
                            name: 'Saint Vincent and the Grenadines'
                        }, {
                            latLng: [13.16, -59.55],
                            name: 'Barbados'
                        }, {
                            latLng: [17.11, -61.85],
                            name: 'Antigua and Barbuda'
                        }, {
                            latLng: [-4.61, 55.45],
                            name: 'Seychelles'
                        }, {
                            latLng: [7.35, 134.46],
                            name: 'Palau'
                        }, {
                            latLng: [42.5, 1.51],
                            name: 'Andorra'
                        }, {
                            latLng: [14.01, -60.98],
                            name: 'Saint Lucia'
                        }, {
                            latLng: [6.91, 158.18],
                            name: 'Federated States of Micronesia'
                        }, {
                            latLng: [1.3, 103.8],
                            name: 'Singapore'
                        }, {
                            latLng: [1.46, 173.03],
                            name: 'Kiribati'
                        }, {
                            latLng: [-21.13, -175.2],
                            name: 'Tonga'
                        }, {
                            latLng: [15.3, -61.38],
                            name: 'Dominica'
                        }, {
                            latLng: [-20.2, 57.5],
                            name: 'Mauritius'
                        }, {
                            latLng: [26.02, 50.55],
                            name: 'Bahrain'
                        }, {
                            latLng: [0.33, 6.73],
                            name: 'São Tomé and Príncipe'
                        }]
                    });
                });
                //@code_end
            }

            var mapid = "";
            mapid = $('#europe_mill_en-map');
            if (mapid.length) {
                mapid.vectorMap({
                    map: 'europe_mill_en',
                    regionsSelectable: true,
                    backgroundColor: '#e77512',
                    regionStyle: {
                        initial: {
                            fill: 'white',
                            stroke: 'none',
                        },
                        hover: {
                            fill: '#E91E63',
                            'fill-opacity': 1,
                            cursor: 'pointer'
                        },
                        selected: {
                            fill: '#E91E63'
                        }
                    },
                    focusOn: {
                        x: 0,
                        y: 0,
                        scale: 1,
                        animate: true
                    },
                });
            } // Europe 
            mapid = $('#in_mill_en-map');
            if (mapid.length) {
                mapid.vectorMap({
                    map: 'in_mill_en',
                    regionsSelectable: true,
                    backgroundColor: '#e77512',
                    regionStyle: {
                        initial: {
                            fill: 'white',
                            stroke: 'none',
                        },
                        hover: {
                            fill: '#E91E63',
                            'fill-opacity': 1,
                            cursor: 'pointer'
                        },
                        selected: {
                            fill: '#E91E63'
                        }
                    },
                    focusOn: {
                        x: 0,
                        y: 0,
                        scale: 5,
                        animate: true
                    },
                });
            } // India
            mapid = $('#us_aea_en-map');
            if (mapid.length) {
                mapid.vectorMap({
                    map: 'us_aea_en',
                    regionsSelectable: true,
                    backgroundColor: '#e77512',
                    regionStyle: {
                        initial: {
                            fill: 'white',
                            stroke: 'none',
                        },
                        hover: {
                            fill: '#E91E63',
                            'fill-opacity': 1,
                            cursor: 'pointer'
                        },
                        selected: {
                            fill: '#E91E63'
                        }
                    },
                    focusOn: {
                        x: 0,
                        y: 0,
                        scale: 5,
                        animate: true
                    },
                });
            } // USA
            mapid = $('#pt_mill_en-map');
            if (mapid.length) {
                mapid.vectorMap({
                    map: 'pt_mill_en',
                    regionsSelectable: true,
                    backgroundColor: '#e77512',
                    regionStyle: {
                        initial: {
                            fill: 'white',
                            stroke: 'none',
                        },
                        hover: {
                            fill: '#E91E63',
                            'fill-opacity': 1,
                            cursor: 'pointer'
                        },
                        selected: {
                            fill: '#E91E63'
                        }
                    },
                    focusOn: {
                        x: 0,
                        y: 0,
                        scale: 5,
                        animate: true
                    },
                });
            } // Portugal
            mapid = $('#cn_mill_en-map');
            if (mapid.length) {
                mapid.vectorMap({
                    map: 'cn_mill_en',
                    regionsSelectable: true,
                    backgroundColor: '#e77512',
                    regionStyle: {
                        initial: {
                            fill: 'white',
                            stroke: 'none',
                        },
                        hover: {
                            fill: '#E91E63',
                            'fill-opacity': 1,
                            cursor: 'pointer'
                        },
                        selected: {
                            fill: '#E91E63'
                        }
                    },
                    focusOn: {
                        x: 0,
                        y: 0,
                        scale: 5,
                        animate: true
                    },
                });
            } // China
            mapid = $('#nz_mill_en-map');
            if (mapid.length) {
                mapid.vectorMap({
                    map: 'nz_mill_en',
                    regionsSelectable: true,
                    backgroundColor: '#e77512',
                    regionStyle: {
                        initial: {
                            fill: 'white',
                            stroke: 'none',
                        },
                        hover: {
                            fill: '#E91E63',
                            'fill-opacity': 1,
                            cursor: 'pointer'
                        },
                        selected: {
                            fill: '#E91E63'
                        }
                    },
                    focusOn: {
                        x: 0,
                        y: 0,
                        scale: 5,
                        animate: true
                    },
                });
            } // New Zealand
            mapid = $('#no_mill_en-map');
            if (mapid.length) {
                mapid.vectorMap({
                    map: 'no_mill_en',
                    regionsSelectable: true,
                    backgroundColor: '#e77512',
                    regionStyle: {
                        initial: {
                            fill: 'white',
                            stroke: 'none',
                        },
                        hover: {
                            fill: '#E91E63',
                            'fill-opacity': 1,
                            cursor: 'pointer'
                        },
                        selected: {
                            fill: '#E91E63'
                        }
                    },
                    focusOn: {
                        x: 0,
                        y: 0,
                        scale: 5,
                        animate: true
                    },
                });
            } // Norway
            mapid = $('#es_mill_en-map');
            if (mapid.length) {
                mapid.vectorMap({
                    map: 'es_mill_en',
                    regionsSelectable: true,
                    backgroundColor: '#e77512',
                    regionStyle: {
                        initial: {
                            fill: 'white',
                            stroke: 'none',
                        },
                        hover: {
                            fill: '#E91E63',
                            'fill-opacity': 1,
                            cursor: 'pointer'
                        },
                        selected: {
                            fill: '#E91E63'
                        }
                    },
                    focusOn: {
                        x: 0,
                        y: 0,
                        scale: 5,
                        animate: true
                    },
                });
            } // Spain
            mapid = $('#au_mill_en-map');
            if (mapid.length) {
                mapid.vectorMap({
                    map: 'au_mill_en',
                    regionsSelectable: true,
                    backgroundColor: '#e77512',
                    regionStyle: {
                        initial: {
                            fill: 'white',
                            stroke: 'none',
                        },
                        hover: {
                            fill: '#E91E63',
                            'fill-opacity': 1,
                            cursor: 'pointer'
                        },
                        selected: {
                            fill: '#E91E63'
                        }
                    },
                    focusOn: {
                        x: 0,
                        y: 0,
                        scale: 5,
                        animate: true
                    },
                });
            } // Australia
            mapid = $('#fr_regions_mill_en-map');
            if (mapid.length) {
                mapid.vectorMap({
                    map: 'fr_regions_mill_en',
                    regionsSelectable: true,
                    backgroundColor: '#e77512',
                    regionStyle: {
                        initial: {
                            fill: 'white',
                            stroke: 'none',
                        },
                        hover: {
                            fill: '#E91E63',
                            'fill-opacity': 1,
                            cursor: 'pointer'
                        },
                        selected: {
                            fill: '#E91E63'
                        }
                    },
                    focusOn: {
                        x: 0,
                        y: 0,
                        scale: 5,
                        animate: true
                    },
                });
            } // France - Regions
            mapid = $('#th_mill_en-map');
            if (mapid.length) {
                mapid.vectorMap({
                    map: 'th_mill_en',
                    regionsSelectable: true,
                    backgroundColor: '#e77512',
                    regionStyle: {
                        initial: {
                            fill: 'white',
                            stroke: 'none',
                        },
                        hover: {
                            fill: '#E91E63',
                            'fill-opacity': 1,
                            cursor: 'pointer'
                        },
                        selected: {
                            fill: '#E91E63'
                        }
                    },
                    focusOn: {
                        x: 0,
                        y: 0,
                        scale: 5,
                        animate: true
                    },
                });
            } // Thailand
            mapid = $('#co_mill_en-map');
            if (mapid.length) {
                mapid.vectorMap({
                    map: 'co_mill_en',
                    regionsSelectable: true,
                    backgroundColor: '#e77512',
                    regionStyle: {
                        initial: {
                            fill: 'white',
                            stroke: 'none',
                        },
                        hover: {
                            fill: '#E91E63',
                            'fill-opacity': 1,
                            cursor: 'pointer'
                        },
                        selected: {
                            fill: '#E91E63'
                        }
                    },
                    focusOn: {
                        x: 0,
                        y: 0,
                        scale: 5,
                        animate: true
                    },
                });
            } // Colombia
            mapid = $('#be_mill_en-map');
            if (mapid.length) {
                mapid.vectorMap({
                    map: 'be_mill_en',
                    regionsSelectable: true,
                    backgroundColor: '#e77512',
                    regionStyle: {
                        initial: {
                            fill: 'white',
                            stroke: 'none',
                        },
                        hover: {
                            fill: '#E91E63',
                            'fill-opacity': 1,
                            cursor: 'pointer'
                        },
                        selected: {
                            fill: '#E91E63'
                        }
                    },
                    focusOn: {
                        x: 0,
                        y: 0,
                        scale: 5,
                        animate: true
                    },
                });
            } // Belgium
            mapid = $('#ar_mill_en-map');
            if (mapid.length) {
                mapid.vectorMap({
                    map: 'ar_mill_en',
                    regionsSelectable: true,
                    backgroundColor: '#e77512',
                    regionStyle: {
                        initial: {
                            fill: 'white',
                            stroke: 'none',
                        },
                        hover: {
                            fill: '#E91E63',
                            'fill-opacity': 1,
                            cursor: 'pointer'
                        },
                        selected: {
                            fill: '#E91E63'
                        }
                    },
                    focusOn: {
                        x: 0,
                        y: 0,
                        scale: 5,
                        animate: true
                    },
                });
            } // Argentina
            mapid = $('#ve_mill_en-map');
            if (mapid.length) {
                mapid.vectorMap({
                    map: 've_mill_en',
                    regionsSelectable: true,
                    backgroundColor: '#e77512',
                    regionStyle: {
                        initial: {
                            fill: 'white',
                            stroke: 'none',
                        },
                        hover: {
                            fill: '#E91E63',
                            'fill-opacity': 1,
                            cursor: 'pointer'
                        },
                        selected: {
                            fill: '#E91E63'
                        }
                    },
                    focusOn: {
                        x: 0,
                        y: 0,
                        scale: 5,
                        animate: true
                    },
                });
            } // Venezuela
            mapid = $('#it_mill_en-map');
            if (mapid.length) {
                mapid.vectorMap({
                    map: 'it_mill_en',
                    regionsSelectable: true,
                    backgroundColor: '#e77512',
                    regionStyle: {
                        initial: {
                            fill: 'white',
                            stroke: 'none',
                        },
                        hover: {
                            fill: '#E91E63',
                            'fill-opacity': 1,
                            cursor: 'pointer'
                        },
                        selected: {
                            fill: '#E91E63'
                        }
                    },
                    focusOn: {
                        x: 0,
                        y: 0,
                        scale: 5,
                        animate: true
                    },
                });
            } // Italy
            mapid = $('#dk_mill_en-map');
            if (mapid.length) {
                mapid.vectorMap({
                    map: 'dk_mill_en',
                    regionsSelectable: true,
                    backgroundColor: '#e77512',
                    regionStyle: {
                        initial: {
                            fill: 'white',
                            stroke: 'none',
                        },
                        hover: {
                            fill: '#E91E63',
                            'fill-opacity': 1,
                            cursor: 'pointer'
                        },
                        selected: {
                            fill: '#E91E63'
                        }
                    },
                    focusOn: {
                        x: 0,
                        y: 0,
                        scale: 5,
                        animate: true
                    },
                });
            } // Denmark
            mapid = $('#at_mill_en-map');
            if (mapid.length) {
                mapid.vectorMap({
                    map: 'at_mill_en',
                    regionsSelectable: true,
                    backgroundColor: '#e77512',
                    regionStyle: {
                        initial: {
                            fill: 'white',
                            stroke: 'none',
                        },
                        hover: {
                            fill: '#E91E63',
                            'fill-opacity': 1,
                            cursor: 'pointer'
                        },
                        selected: {
                            fill: '#E91E63'
                        }
                    },
                    focusOn: {
                        x: 0,
                        y: 0,
                        scale: 5,
                        animate: true
                    },
                });
            } // Austria
            mapid = $('#ca_lcc_en-map');
            if (mapid.length) {
                mapid.vectorMap({
                    map: 'ca_lcc_en',
                    regionsSelectable: true,
                    backgroundColor: '#e77512',
                    regionStyle: {
                        initial: {
                            fill: 'white',
                            stroke: 'none',
                        },
                        hover: {
                            fill: '#E91E63',
                            'fill-opacity': 1,
                            cursor: 'pointer'
                        },
                        selected: {
                            fill: '#E91E63'
                        }
                    },
                    focusOn: {
                        x: 0,
                        y: 0,
                        scale: 5,
                        animate: true
                    },
                });
            } // Canada
            mapid = $('#nl_mill_en-map');
            if (mapid.length) {
                mapid.vectorMap({
                    map: 'nl_mill_en',
                    regionsSelectable: true,
                    backgroundColor: '#e77512',
                    regionStyle: {
                        initial: {
                            fill: 'white',
                            stroke: 'none',
                        },
                        hover: {
                            fill: '#E91E63',
                            'fill-opacity': 1,
                            cursor: 'pointer'
                        },
                        selected: {
                            fill: '#E91E63'
                        }
                    },
                    focusOn: {
                        x: 0,
                        y: 0,
                        scale: 5,
                        animate: true
                    },
                });
            } // Netherlands
            mapid = $('#se_mill_en-map');
            if (mapid.length) {
                mapid.vectorMap({
                    map: 'se_mill_en',
                    regionsSelectable: true,
                    backgroundColor: '#e77512',
                    regionStyle: {
                        initial: {
                            fill: 'white',
                            stroke: 'none',
                        },
                        hover: {
                            fill: '#E91E63',
                            'fill-opacity': 1,
                            cursor: 'pointer'
                        },
                        selected: {
                            fill: '#E91E63'
                        }
                    },
                    focusOn: {
                        x: 0,
                        y: 0,
                        scale: 5,
                        animate: true
                    },
                });
            } // Sweden
            mapid = $('#pl_mill_en-map');
            if (mapid.length) {
                mapid.vectorMap({
                    map: 'pl_mill_en',
                    regionsSelectable: true,
                    backgroundColor: '#e77512',
                    regionStyle: {
                        initial: {
                            fill: 'white',
                            stroke: 'none',
                        },
                        hover: {
                            fill: '#E91E63',
                            'fill-opacity': 1,
                            cursor: 'pointer'
                        },
                        selected: {
                            fill: '#E91E63'
                        }
                    },
                    focusOn: {
                        x: 0,
                        y: 0,
                        scale: 5,
                        animate: true
                    },
                });
            } // Poland
            mapid = $('#de_mill_en-map');
            if (mapid.length) {
                mapid.vectorMap({
                    map: 'de_mill_en',
                    regionsSelectable: true,
                    backgroundColor: '#e77512',
                    regionStyle: {
                        initial: {
                            fill: 'white',
                            stroke: 'none',
                        },
                        hover: {
                            fill: '#E91E63',
                            'fill-opacity': 1,
                            cursor: 'pointer'
                        },
                        selected: {
                            fill: '#E91E63'
                        }
                    },
                    focusOn: {
                        x: 0,
                        y: 0,
                        scale: 5,
                        animate: true
                    },
                });
            } // Germany
            mapid = $('#fr_mill_en-map');
            if (mapid.length) {
                mapid.vectorMap({
                    map: 'fr_mill_en',
                    regionsSelectable: true,
                    backgroundColor: '#e77512',
                    regionStyle: {
                        initial: {
                            fill: 'white',
                            stroke: 'none',
                        },
                        hover: {
                            fill: '#E91E63',
                            'fill-opacity': 1,
                            cursor: 'pointer'
                        },
                        selected: {
                            fill: '#E91E63'
                        }
                    },
                    focusOn: {
                        x: 0,
                        y: 0,
                        scale: 5,
                        animate: true
                    },
                });
            } // France - Departments
            mapid = $('#za_mill_en-map');
            if (mapid.length) {
                mapid.vectorMap({
                    map: 'za_mill_en',
                    regionsSelectable: true,
                    backgroundColor: '#e77512',
                    regionStyle: {
                        initial: {
                            fill: 'white',
                            stroke: 'none',
                        },
                        hover: {
                            fill: '#E91E63',
                            'fill-opacity': 1,
                            cursor: 'pointer'
                        },
                        selected: {
                            fill: '#E91E63'
                        }
                    },
                    focusOn: {
                        x: 0,
                        y: 0,
                        scale: 5,
                        animate: true
                    },
                });
            } // South Africa
            mapid = $('#ch_mill_en-map');
            if (mapid.length) {
                mapid.vectorMap({
                    map: 'ch_mill_en',
                    regionsSelectable: true,
                    backgroundColor: '#e77512',
                    regionStyle: {
                        initial: {
                            fill: 'white',
                            stroke: 'none',
                        },
                        hover: {
                            fill: '#E91E63',
                            'fill-opacity': 1,
                            cursor: 'pointer'
                        },
                        selected: {
                            fill: '#E91E63'
                        }
                    },
                    focusOn: {
                        x: 0,
                        y: 0,
                        scale: 5,
                        animate: true
                    },
                });
            } // Switzerland
            mapid = $('#us-ny-newyork_mill_en-map');
            if (mapid.length) {
                mapid.vectorMap({
                    map: 'us-ny-newyork_mill_en',
                    regionsSelectable: true,
                    backgroundColor: '#e77512',
                    regionStyle: {
                        initial: {
                            fill: 'white',
                            stroke: 'none',
                        },
                        hover: {
                            fill: '#E91E63',
                            'fill-opacity': 1,
                            cursor: 'pointer'
                        },
                        selected: {
                            fill: '#E91E63'
                        }
                    },
                    focusOn: {
                        x: 0,
                        y: 0,
                        scale: 5,
                        animate: true
                    },
                });
            } // New York City
            mapid = $('#us-il-chicago_mill_en-map');
            if (mapid.length) {
                mapid.vectorMap({
                    map: 'us-il-chicago_mill_en',
                    regionsSelectable: true,
                    backgroundColor: '#e77512',
                    regionStyle: {
                        initial: {
                            fill: 'white',
                            stroke: 'none',
                        },
                        hover: {
                            fill: '#E91E63',
                            'fill-opacity': 1,
                            cursor: 'pointer'
                        },
                        selected: {
                            fill: '#E91E63'
                        }
                    },
                    focusOn: {
                        x: 0,
                        y: 0,
                        scale: 5,
                        animate: true
                    },
                });
            } // Chicago

        }

    };

    /*--------------------------------
         Pretty Photo
     --------------------------------*/
    CRYPTONIA_SETTINGS.loadPrettyPhoto = function() {

        if ($.isFunction($.fn.prettyPhoto)) {
            //Pretty Photo
            $("a[rel^='prettyPhoto']").prettyPhoto({
                social_tools: false
            });
        }
    };

    /*--------------------------------
         Gallery
     --------------------------------*/
    CRYPTONIA_SETTINGS.isotopeGallery = function() {
        if ($.isFunction($.fn.isotope)) {

            var $portfolio_selectors = $('.portfolio-filter >li>a');
            var $portfolio = $('.portfolio-items');
            $portfolio.isotope({
                itemSelector: '.portfolio-item',
                layoutMode: 'sloppyMasonry'
            });

            $portfolio_selectors.on('click', function() {
                $portfolio_selectors.removeClass('active');
                $(this).addClass('active');
                var selector = $(this).attr('data-filter');
                $portfolio.isotope({
                    filter: selector
                });
                return false;
            });

        }
    };

    /*--------------------------------
         Tocify
     --------------------------------*/
    CRYPTONIA_SETTINGS.tocifyScrollMenu = function() {
        if ($.isFunction($.fn.tocify)) {
            var toc = $("#toc").tocify({
                selectors: "h2,h3,h4,h5",
                context: ".tocify-content",
                extendPage: false
            }).data("toc-tocify");
        }
    };

    /*--------------------------------
         Full Calendar
     --------------------------------*/
    CRYPTONIA_SETTINGS.uiCalendar = function() {

        if ($.isFunction($.fn.fullCalendar)) {

            /* initialize the external events
                 -----------------------------------------------------------------*/

            $('#external-events .fc-event').each(function() {

                // create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
                // it doesn't need to have a start or end
                var eventObject = {
                    title: $.trim($(this).text()) // use the element's text as the event title
                };

                // store the Event Object in the DOM element so we can get to it later
                $(this).data('eventObject', eventObject);

                // make the event draggable using jQuery UI
                $(this).draggable({
                    zIndex: 999,
                    revert: true, // will cause the event to go back to its
                    revertDuration: 0 //  original position after the drag
                });

            });

            /* initialize the calendar
             -----------------------------------------------------------------*/

            var date = new Date();
            var d = date.getDate();
            var m = date.getMonth();
            var y = date.getFullYear();

            $('#calendar').fullCalendar({
                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'month,basicWeek,basicDay'
                },
                editable: true,
                eventLimit: true, // allow "more" link when too many events
                droppable: true, // this allows things to be dropped onto the calendar !!!
                drop: function(date, allDay) { // this function is called when something is dropped

                    // retrieve the dropped element's stored Event Object
                    var originalEventObject = $(this).data('eventObject');

                    // we need to copy it, so that multiple events don't have a reference to the same object
                    var copiedEventObject = $.extend({}, originalEventObject);

                    // assign it the date that was reported
                    copiedEventObject.start = date;
                    copiedEventObject.allDay = allDay;

                    // render the event on the calendar
                    // the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
                    $('#calendar').fullCalendar('renderEvent', copiedEventObject, true);

                    // is the "remove after drop" checkbox checked?
                    if ($('#drop-remove').is(':checked')) {
                        // if so, remove the element from the "Draggable Events" list
                        $(this).remove();
                    }

                },
                events: [{
                    title: 'All Day Event',
                    start: new Date(y, m, 1)
                }, {
                    title: 'Long Event',
                    start: new Date(y, m, d - 5),
                    end: new Date(y, m, d - 2)
                }, {
                    id: 999,
                    title: 'Repeating Event',
                    start: new Date(y, m, d - 3, 16, 0),
                    allDay: false
                }, {
                    id: 999,
                    title: 'Repeating Event',
                    start: new Date(y, m, d + 4, 16, 0),
                    allDay: false
                }, {
                    title: 'Meeting',
                    start: new Date(y, m, d, 10, 30),
                    allDay: false
                }, {
                    title: 'Lunch',
                    start: new Date(y, m, d, 12, 0),
                    end: new Date(y, m, d, 14, 0),
                    allDay: false
                }, {
                    title: 'Conference',
                    start: new Date(y, m, d + 1, 19, 0),
                    end: new Date(y, m, d + 1, 22, 30),
                    allDay: false
                }, {
                    title: 'Staff Meeting',
                    start: new Date(y, m, 28),
                    end: new Date(y, m, 29),
                    url: 'http://google.com/'
                }]
            });

            /*Add new event*/
            // Form to add new event

            $("#add_event_form").on('submit', function(ev) {
                ev.preventDefault();

                var $event = $(this).find('.new-event-form'),
                    event_name = $event.val();

                if (event_name.length >= 3) {

                    var newid = "new" + "" + Math.random().toString(36).substring(7);
                    // Create Event Entry
                    $("#external-events").append(
                        '<div id="' + newid + '" class="fc-event bg-accent">' + event_name + '</div>'
                    );

                    var eventObject = {
                        title: $.trim($("#" + newid).text()) // use the element's text as the event title
                    };

                    // store the Event Object in the DOM element so we can get to it later
                    $("#" + newid).data('eventObject', eventObject);

                    // Reset draggable
                    $("#" + newid).draggable({
                        revert: true,
                        revertDuration: 0,
                        zIndex: 999
                    });

                    // Reset input
                    $event.val('').focus();
                } else {
                    $event.focus();
                }
            });

        }

    };

    /*--------------------------------
         Sortable (Nestable) List
     --------------------------------*/
    CRYPTONIA_SETTINGS.nestableList = function() {

        $("#nestableList-1").on('stop.uk.nestable', function(ev) {
            var serialized = $(this).data('nestable').serialize(),
                str = '';

            str = nestableIterate(serialized, 0);

            $("#nestableList-1-ev").val(str);
        });

        function nestableIterate(items, depth) {
            var str = '';

            if (!depth)
                depth = 0;

            //console.log(items);

            jQuery.each(items, function(i, obj) {
                str += '[ID: ' + obj.itemId + ']\t' + nestableRepeat('—', depth + 1) + ' ' + obj.item;
                str += '\n';

                if (obj.children) {
                    str += nestableIterate(obj.children, depth + 1);
                }
            });

            return str;
        }

        function nestableRepeat(s, n) {
            var a = [];
            while (a.length < n) {
                a.push(s);
            }
            return a.join('');
        }
    };

    /*--------------------------------
         Tooltips & Popovers
     --------------------------------*/
    CRYPTONIA_SETTINGS.tooltipsPopovers = function() {

        $('[rel="tooltip"]').each(function() {
            var animate = $(this).attr("data-animate");
            var colorclass = $(this).attr("data-color-class");
            $(this).tooltip({
                template: '<div class="tooltip ' + animate + ' ' + colorclass + '"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
            });
        });

        $('[rel="popover"]').each(function() {
            var animate = $(this).attr("data-animate");
            var colorclass = $(this).attr("data-color-class");
            $(this).popover({
                template: '<div class="popover ' + animate + ' ' + colorclass + '"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
            });
        });

    };

    /*--------------------------------
         iCheck
     --------------------------------*/
    CRYPTONIA_SETTINGS.iCheck = function() {

        if ($.isFunction($.fn.iCheck)) {

            $('input[type="checkbox"].iCheck').iCheck({
                checkboxClass: 'icheckbox_minimal',
                radioClass: 'iradio_minimal',
                increaseArea: '20%'
            });

            var x;
            var colors = ["-green", "-red", "-yellow", "-blue", "-aero", "-orange", "-grey", "-pink", "-purple", "-white"];

            for (x = 0; x < colors.length; x++) {

                if (x == 0) {
                    $('input.icheck-minimal').iCheck({
                        checkboxClass: 'icheckbox_minimal' + colors[x],
                        radioClass: 'iradio_minimal' + colors[x],
                        increaseArea: '20%'
                    });

                    $('input.skin-square').iCheck({
                        checkboxClass: 'icheckbox_square' + colors[x],
                        radioClass: 'iradio_square' + colors[x],
                        increaseArea: '20%'
                    });

                    $('input.skin-flat').iCheck({
                        checkboxClass: 'icheckbox_flat' + colors[x],
                        radioClass: 'iradio_flat' + colors[x],
                    });

                    $('input.skin-line').each(function() {
                        var self = $(this),
                            label = self.next(),
                            label_text = label.text();

                        label.remove();
                        self.iCheck({
                            checkboxClass: 'icheckbox_line' + colors[x],
                            radioClass: 'iradio_line' + colors[x],
                            insert: '<div class="icheck_line-icon"></div>' + label_text
                        });
                    });

                } // end x = 0

                $('input.icheck-minimal' + colors[x]).iCheck({
                    checkboxClass: 'icheckbox_minimal' + colors[x],
                    radioClass: 'iradio_minimal' + colors[x],
                    increaseArea: '20%'
                });

                $('input.skin-square' + colors[x]).iCheck({
                    checkboxClass: 'icheckbox_square' + colors[x],
                    radioClass: 'iradio_square' + colors[x],
                    increaseArea: '20%'
                });

                $('input.skin-flat' + colors[x]).iCheck({
                    checkboxClass: 'icheckbox_flat' + colors[x],
                    radioClass: 'iradio_flat' + colors[x],
                });

                $('input.skin-line' + colors[x]).each(function() {
                    var self = $(this),
                        label = self.next(),
                        label_text = label.text();

                    label.remove();
                    self.iCheck({
                        checkboxClass: 'icheckbox_line' + colors[x],
                        radioClass: 'iradio_line' + colors[x],
                        insert: '<div class="icheck_line-icon"></div>' + label_text
                    });
                });

            } // end for loop

        }
    };

    /*--------------------------------
         Form Editors
     --------------------------------*/
    CRYPTONIA_SETTINGS.formEditors = function() {

        if ($.isFunction($.fn.wysihtml5)) {
            $('.bootstrap-wysihtml5-textarea').wysihtml5({
                toolbar: {
                    "font-styles": true, //Font styling, e.g. h1, h2, etc. Default true
                    "emphasis": true, //Italics, bold, etc. Default true
                    "lists": true, //(Un)ordered lists, e.g. Bullets, Numbers. Default true
                    "html": true, //Button which allows you to edit the generated HTML. Default false
                    "link": true, //Button to insert a link. Default true
                    "image": true, //Button to insert an image. Default true,
                    "color": true, //Button to change color of font  
                    "blockquote": true, //Blockquote  
                    "size": "none" //default: none, other options are xs, sm, lg
                }
            });

            $('.mail-compose-editor').wysihtml5({
                toolbar: {
                    "font-styles": true, //Font styling, e.g. h1, h2, etc. Default true
                    "emphasis": true, //Italics, bold, etc. Default true
                    "lists": false, //(Un)ordered lists, e.g. Bullets, Numbers. Default true
                    "html": true, //Button which allows you to edit the generated HTML. Default false
                    "link": true, //Button to insert a link. Default true
                    "image": true, //Button to insert an image. Default true,
                    "color": true, //Button to change color of font  
                    "blockquote": false, //Blockquote  
                    "size": "none" //default: none, other options are xs, sm, lg
                }
            });

        }

        if ($.isFunction($.fn.CKEDITOR)) {
            // This code is generally not necessary, but it is here to demonstrate
            // how to customize specific editor instances on the fly. This fits well
            // this demo because we have editable elements (like headers) that
            // require less features.

            // The "instanceCreated" event is fired for every editor instance created.
            CKEDITOR.on('instanceCreated', function(event) {
                var editor = event.editor,
                    element = editor.element;

                // Customize editors for headers and tag list.
                // These editors don't need features like smileys, templates, iframes etc.
                if (element.is('h1', 'h2', 'h3') || element.getAttribute('id') == 'taglist') {
                    // Customize the editor configurations on "configLoaded" event,
                    // which is fired after the configuration file loading and
                    // execution. This makes it possible to change the
                    // configurations before the editor initialization takes place.
                    editor.on('configLoaded', function() {

                        // Remove unnecessary plugins to make the editor simpler.
                        editor.config.removePlugins = 'colorbutton,find,flash,font,' +
                            'forms,iframe,image,newpage,removeformat,' +
                            'smiley,specialchar,stylescombo,templates';

                        // Rearrange the layout of the toolbar.
                        editor.config.toolbarGroups = [{
                            name: 'editing',
                            groups: ['basicstyles', 'links']
                        }, {
                            name: 'undo'
                        }, {
                            name: 'clipboard',
                            groups: ['selection', 'clipboard']
                        }, {
                            name: 'about'
                        }];
                    });
                }
            });
        }
    };

    /*--------------------------------
         Custom Dropzone
     --------------------------------*/
    CRYPTONIA_SETTINGS.customDropZone = function() {

        if ($.isFunction($.fn.dropzone)) {

            var i = 1,
                $custom_droplist = $("#custom-droptable"),
                example_dropzone = $("#customDZ").dropzone({
                    url: 'data/upload-file.php',

                    // Events
                    addedfile: function(file) {
                        if (i == 1) {
                            $custom_droplist.find('tbody').html('');
                        }

                        var size = parseInt(file.size / 1024, 10);
                        size = size < 1024 ? (size + " KB") : (parseInt(size / 1024, 10) + " MB");

                        var $el = $('<tr>\
                                                    <td class="text-center">' + (i++) + '</td>\
                                                    <td>' + file.name + '</td>\
                                                    <td><div class="progress"><div class="progress-bar progress-bar-warning"></div></div></td>\
                                                    <td>' + size + '</td>\
                                                </tr>');

                        $custom_droplist.find('tbody').append($el);
                        file.fileEntryTd = $el;
                        file.progressBar = $el.find('.progress-bar');
                    },

                    uploadprogress: function(file, progress, bytesSent) {
                        file.progressBar.width(progress + '%');
                        $('.custom-dropzone .drop-table').perfectScrollbar({
                            suppressScrollX: true
                        });
                    },

                    success: function(file) {
                        file.progressBar.removeClass('progress-bar-warning').addClass('progress-bar-success');
                    },

                    error: function(file) {
                        file.progressBar.removeClass('progress-bar-warning').addClass('progress-bar-red');
                    }
                });

        }

    };

    /*--------------------------------
         Other Form component Scripts
     --------------------------------*/
    CRYPTONIA_SETTINGS.otherScripts = function() {

        /*--------------------------------*/

        if ($.isFunction($.fn.autosize)) {
            $(".autogrow").autosize();
        }

        /*--------------------------------*/

        // Input Mask
        if ($.isFunction($.fn.inputmask)) {
            $("[data-mask]").each(function(i, el) {
                var $this = $(el),
                    mask = $this.data('mask').toString(),
                    opts = {
                        numericInput: getValue($this, 'numeric', false),
                        radixPoint: getValue($this, 'radixPoint', ''),
                        rightAlign: getValue($this, 'numericAlign', 'left') == 'right'
                    },
                    placeholder = getValue($this, 'placeholder', ''),
                    is_regex = getValue($this, 'isRegex', '');

                if (placeholder.length) {
                    opts[placeholder] = placeholder;
                }

                if (mask.toLowerCase() == "phone") {
                    mask = "(999) 999-9999";
                }

                if (mask.toLowerCase() == "email") {
                    mask = 'Regex';
                    opts.regex = "[a-zA-Z0-9._%-]+@[a-zA-Z0-9-]+\\.[a-zA-Z]{2,4}";
                }

                if (mask.toLowerCase() == "fdecimal") {
                    mask = 'decimal';
                    $.extend(opts, {
                        autoGroup: true,
                        groupSize: 3,
                        radixPoint: getValue($this, 'rad', '.'),
                        groupSeparator: getValue($this, 'dec', ',')
                    });
                }

                if (mask.toLowerCase() == "currency" || mask.toLowerCase() == "rcurrency") {

                    var sign = getValue($this, 'sign', '$');;

                    mask = "999,999,999.99";
                    if (mask.toLowerCase() == 'rcurrency') {
                        mask += ' ' + sign;
                    } else {
                        mask = sign + ' ' + mask;
                    }

                    opts.numericInput = true;
                    opts.rightAlignNumerics = false;
                    opts.radixPoint = '.';

                }

                if (is_regex) {
                    opts.regex = mask;
                    mask = 'Regex';
                }

                $this.inputmask(mask, opts);
            });
        }

        /*---------------------------------*/

        // autoNumeric
        if ($.isFunction($.fn.autoNumeric)) {
            $('.autoNumeric').autoNumeric('init');
        }

        /*---------------------------------*/

        // Slider
        if ($.isFunction($.fn.slider)) {
            $(".slider").each(function(i, el) {
                var $this = $(el),
                    $label_1 = $('<span class="ui-label"></span>'),
                    $label_2 = $label_1.clone(),

                    orientation = getValue($this, 'vertical', 0) != 0 ? 'vertical' : 'horizontal',

                    prefix = getValue($this, 'prefix', ''),
                    postfix = getValue($this, 'postfix', ''),

                    fill = getValue($this, 'fill', ''),
                    $fill = $(fill),

                    step = getValue($this, 'step', 1),
                    value = getValue($this, 'value', 5),
                    min = getValue($this, 'min', 0),
                    max = getValue($this, 'max', 100),
                    min_val = getValue($this, 'min-val', 10),
                    max_val = getValue($this, 'max-val', 90),

                    is_range = $this.is('[data-min-val]') || $this.is('[data-max-val]'),

                    reps = 0;

                // Range Slider Options
                if (is_range) {
                    $this.slider({
                        range: true,
                        orientation: orientation,
                        min: min,
                        max: max,
                        values: [min_val, max_val],
                        step: step,
                        slide: function(e, ui) {
                            var min_val = (prefix ? prefix : '') + ui.values[0] + (postfix ? postfix : ''),
                                max_val = (prefix ? prefix : '') + ui.values[1] + (postfix ? postfix : '');

                            $label_1.html(min_val);
                            $label_2.html(max_val);

                            if (fill)
                                $fill.val(min_val + ',' + max_val);

                            reps++;
                        },
                        change: function(ev, ui) {
                            if (reps == 1) {
                                var min_val = (prefix ? prefix : '') + ui.values[0] + (postfix ? postfix : ''),
                                    max_val = (prefix ? prefix : '') + ui.values[1] + (postfix ? postfix : '');

                                $label_1.html(min_val);
                                $label_2.html(max_val);

                                if (fill)
                                    $fill.val(min_val + ',' + max_val);
                            }

                            reps = 0;
                        }
                    });

                    var $handles = $this.find('.ui-slider-handle');

                    $label_1.html((prefix ? prefix : '') + min_val + (postfix ? postfix : ''));
                    $handles.first().append($label_1);

                    $label_2.html((prefix ? prefix : '') + max_val + (postfix ? postfix : ''));
                    $handles.last().append($label_2);
                }
                // Normal Slider
                else {

                    $this.slider({
                        range: getValue($this, 'basic', 0) ? false : "min",
                        orientation: orientation,
                        min: min,
                        max: max,
                        value: value,
                        step: step,
                        slide: function(ev, ui) {
                            var val = (prefix ? prefix : '') + ui.value + (postfix ? postfix : '');

                            $label_1.html(val);

                            if (fill)
                                $fill.val(val);

                            reps++;
                        },
                        change: function(ev, ui) {
                            if (reps == 1) {
                                var val = (prefix ? prefix : '') + ui.value + (postfix ? postfix : '');

                                $label_1.html(val);

                                if (fill)
                                    $fill.val(val);
                            }

                            reps = 0;
                        }
                    });

                    var $handles = $this.find('.ui-slider-handle');
                    //$fill = $('<div class="ui-fill"></div>');

                    $label_1.html((prefix ? prefix : '') + value + (postfix ? postfix : ''));
                    $handles.html($label_1);

                    //$handles.parent().prepend( $fill );

                    //$fill.width($handles.get(0).style.left);
                }

            })
        }

        /*------------- Color Slider widget---------------*/

        function hexFromRGB(r, g, b) {
            var hex = [
                r.toString(16),
                g.toString(16),
                b.toString(16)
            ];
            $.each(hex, function(nr, val) {
                if (val.length === 1) {
                    hex[nr] = "0" + val;
                }
            });
            return hex.join("").toUpperCase();
        }

        function refreshSwatch() {
            var red = $("#slider-red").slider("value"),
                green = $("#slider-green").slider("value"),
                blue = $("#slider-blue").slider("value"),
                hex = hexFromRGB(red, green, blue);
            $("#slider-swatch").css("background-color", "#" + hex);
        }

        if ($.isFunction($.fn.slider)) {

            $(function() {
                $("#slider-red, #slider-green, #slider-blue").slider({
                    orientation: "horizontal",
                    range: "min",
                    max: 255,
                    value: 127,
                    slide: refreshSwatch,
                    change: refreshSwatch
                });
                $("#slider-red").slider("value", 235);
                $("#slider-green").slider("value", 70);
                $("#slider-blue").slider("value", 60);
            });
        }

        /*-------------------------------------*/

        /*--------------------------------*/

        // Spinner
        if ($.isFunction($.fn.spinner)) {

            $("#spinner").spinner();

            $("#spinner2").spinner({
                min: 5,
                max: 2500,
                step: 25,
                start: 1000,
                numberFormat: "C"
            });

            $("#spinner3").spinner({
                spin: function(event, ui) {
                    if (ui.value > 10) {
                        $(this).spinner("value", -10);
                        return false;
                    } else if (ui.value < -10) {
                        $(this).spinner("value", 10);
                        return false;
                    }
                }
            });
        }
        /*------------------------------------*/

        // tagsinput
        if ($.isFunction($.fn.tagsinput)) {

            // categorize tags input
            var i = -1,
                colors = ['primary', 'info', 'warning', 'success'];

            colors = shuffleArray(colors);

            $("#tagsinput-2").tagsinput({
                tagClass: function() {
                    i++;
                    return "label label-" + colors[i % colors.length];
                }
            });

            $(".mail_compose_to").tagsinput({
                tagClass: function() {
                    i++;
                    return "label label-" + colors[i % colors.length];
                }
            });

        }

        // Just for demo purpose
        function shuffleArray(array) {
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            return array;
        }

        /*----------------------------*/

        // datepicker
        if ($.isFunction($.fn.datepicker)) {
            $(".datepicker").each(function(i, e) {
                var $this = $(e),
                    options = {
                        minViewMode: getValue($this, 'minViewMode', 0),
                        format: getValue($this, 'format', 'mm/dd/yyyy'),
                        startDate: getValue($this, 'startDate', ''),
                        endDate: getValue($this, 'endDate', ''),
                        daysOfWeekDisabled: getValue($this, 'disabledDays', ''),
                        startView: getValue($this, 'startView', 0)
                    },
                    $nxt = $this.next(),
                    $prv = $this.prev();

                $this.datepicker(options);

                if ($nxt.is('.input-group-addon') && $nxt.has('a')) {
                    $nxt.on('click', function(ev) {
                        ev.preventDefault();
                        $this.datepicker('show');
                    });
                }

                if ($prv.is('.input-group-addon') && $prv.has('a')) {
                    $prv.on('click', function(ev) {
                        ev.preventDefault();

                        $this.datepicker('show');
                    });
                }
            });
        }

        /*-------------------------------------------*/

        // Date Range Picker
        if ($.isFunction($.fn.daterangepicker)) {
            $(".daterange").each(function(i, e) {
                // Change the range as you desire
                var ranges = {
                    'Today': [moment(), moment()],
                    'Yesterday': [moment().subtract('days', 1), moment().subtract('days', 1)],
                    'Last 7 Days': [moment().subtract('days', 6), moment()],
                    'Last 30 Days': [moment().subtract('days', 29), moment()],
                    'This Month': [moment().startOf('month'), moment().endOf('month')],
                    'Last Month': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')]
                };

                var $this = $(e),
                    options = {
                        format: getValue($this, 'format', 'MM/DD/YYYY'),
                        timePicker: getValue($this, 'timePicker', false),
                        timePickerIncrement: getValue($this, 'timePickerIncrement', false),
                        separator: getValue($this, 'separator', ' - '),
                    },
                    min_date = getValue($this, 'minDate', ''),
                    max_date = getValue($this, 'maxDate', ''),
                    start_date = getValue($this, 'startDate', ''),
                    end_date = getValue($this, 'endDate', '');

                if ($this.hasClass('add-date-ranges')) {
                    options['ranges'] = ranges;
                }

                if (min_date.length) {
                    options['minDate'] = min_date;
                }

                if (max_date.length) {
                    options['maxDate'] = max_date;
                }

                if (start_date.length) {
                    options['startDate'] = start_date;
                }

                if (end_date.length) {
                    options['endDate'] = end_date;
                }

                $this.daterangepicker(options, function(start, end) {
                    var drp = $this.data('daterangepicker');

                    if ($this.hasClass('daterange-text')) {
                        //                        $this.find('span').html(start.format(drp.format) + drp.separator + end.format(drp.format));
                        $this.find('span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
                    }
                });

                if (typeof options['ranges'] == 'object') {
                    $this.data('daterangepicker').container.removeClass('show-calendar');
                }
            });
        }

        /*-------------------------------------*/

        // Timepicker
        if ($.isFunction($.fn.timepicker)) {
            $(".timepicker").each(function(i, e) {
                var $this = $(e),
                    options = {
                        template: getValue($this, 'template', false),
                        showSeconds: getValue($this, 'showSeconds', false),
                        defaultTime: getValue($this, 'defaultTime', 'current'),
                        showMeridian: getValue($this, 'showMeridian', true),
                        minuteStep: getValue($this, 'minuteStep', 15),
                        secondStep: getValue($this, 'secondStep', 15)
                    },
                    $nxt = $this.next(),
                    $prv = $this.prev();

                $this.timepicker(options);

                if ($nxt.is('.input-group-addon') && $nxt.has('a')) {
                    $nxt.on('click', function(ev) {
                        ev.preventDefault();

                        $this.timepicker('showWidget');
                    });
                }

                if ($prv.is('.input-group-addon') && $prv.has('a')) {
                    $prv.on('click', function(ev) {
                        ev.preventDefault();

                        $this.timepicker('showWidget');
                    });
                }
            });
        }

        /*-------------------------------------*/

        // DateTimepicker
        if ($.isFunction($.fn.datetimepicker)) {

            $('.form_datetime').datetimepicker({
                //language:  'fr',
                format: "yyyy-mm-dd hh:ii",
                weekStart: 1,
                todayBtn: 1,
                autoclose: 1,
                todayHighlight: 1,
                startView: 2,
                forceParse: 0,
                showMeridian: 0
            });

            $('.form_datetime_meridian').datetimepicker({
                //language:  'fr',
                format: "dd MM yyyy - hh:ii",
                weekStart: 1,
                todayBtn: 1,
                autoclose: 1,
                todayHighlight: 1,
                startView: 2,
                forceParse: 0,
                showMeridian: 1
            });

            $('.form_datetime_lang').datetimepicker({
                language: 'fr',
                format: "yyyy-mm-dd hh:ii",
                weekStart: 1,
                todayBtn: 1,
                autoclose: 1,
                todayHighlight: 1,
                startView: 2,
                forceParse: 0,
                showMeridian: 0
            });

            /*    $('.form_date').datetimepicker({
                    weekStart: 1,
                    todayBtn:  1,
                    autoclose: 1,
                    todayHighlight: 1,
                    startView: 2,
                    minView: 2,
                    forceParse: 0
                });
                $('.form_time').datetimepicker({
                    //language:  'fr',
                    weekStart: 1,
                    todayBtn:  1,
                    autoclose: 1,
                    todayHighlight: 1,
                    startView: 1,
                    minView: 0,
                    maxView: 1,
                    forceParse: 0
                });*/

        }

        /*-------------------------------------*/

        // Colorpicker
        if ($.isFunction($.fn.colorpicker)) {
            $(".colorpicker").each(function(i, e) {
                var $this = $(e),
                    options = {},
                    $nxt = $this.next(),
                    $prv = $this.prev(),
                    $view = $this.siblings('.input-group-addon').find('.sel-color');

                $this.colorpicker(options);

                if ($nxt.is('.input-group-addon') && $nxt.has('a')) {
                    $nxt.on('click', function(ev) {
                        ev.preventDefault();

                        $this.colorpicker('show');
                    });
                }

                if ($prv.is('.input-group-addon') && $prv.has('a')) {
                    $prv.on('click', function(ev) {
                        ev.preventDefault();

                        $this.colorpicker('show');
                    });
                }

                if ($view.length) {
                    $this.on('changeColor', function(ev) {

                        $view.css('background-color', ev.color.toHex());
                    });

                    if ($this.val().length) {
                        $view.css('background-color', $this.val());
                    }
                }
            });
        }

        /*--------------------------------------*/

        // select2
        if ($.isFunction($.fn.select2)) {

            $("#s2example-1").select2({
                placeholder: 'Select your country...',
                allowClear: true
            }).on('select2-open', function() {
                // Adding Custom Scrollbar
                $(this).data('select2').results.addClass('overflow-hidden').perfectScrollbar();
            });

            $("#s2example-2").select2({
                placeholder: 'Choose your favorite US Countries',
                allowClear: true
            }).on('select2-open', function() {
                // Adding Custom Scrollbar
                $(this).data('select2').results.addClass('overflow-hidden').perfectScrollbar();
            });

            $("#s2example-4").select2({
                minimumInputLength: 1,
                placeholder: 'Search',
                ajax: {
                    url: "data/select2-remote-data.php",
                    dataType: 'json',
                    quietMillis: 100,
                    data: function(term, page) {
                        return {
                            limit: -1,
                            q: term
                        };
                    },
                    results: function(data, page) {
                        return {
                            results: data
                        }
                    }
                },
                formatResult: function(student) {
                    return "<div class='select2-user-result'>" + student.name + "</div>";
                },
                formatSelection: function(student) {
                    return student.name;
                }

            });
        }
        /*------------------------------------*/

        //multiselect start

        if ($.isFunction($.fn.multiSelect)) {

            $('#my_multi_select1').multiSelect();
            $('#my_multi_select2').multiSelect({
                selectableOptgroup: true
            });

            $('#my_multi_select3').multiSelect({
                selectableHeader: "<input type='text' class='form-control search-input' autocomplete='off' placeholder='search...'>",
                selectionHeader: "<input type='text' class='form-control search-input' autocomplete='off' placeholder='search...'>",
                afterInit: function(ms) {
                    var that = this,
                        $selectableSearch = that.$selectableUl.prev(),
                        $selectionSearch = that.$selectionUl.prev(),
                        selectableSearchString = '#' + that.$container.attr('id') + ' .ms-elem-selectable:not(.ms-selected)',
                        selectionSearchString = '#' + that.$container.attr('id') + ' .ms-elem-selection.ms-selected';

                    that.qs1 = $selectableSearch.quicksearch(selectableSearchString)
                        .on('keydown', function(e) {
                            if (e.which === 40) {
                                that.$selectableUl.focus();
                                return false;
                            }
                        });

                    that.qs2 = $selectionSearch.quicksearch(selectionSearchString)
                        .on('keydown', function(e) {
                            if (e.which == 40) {
                                that.$selectionUl.focus();
                                return false;
                            }
                        });
                },
                afterSelect: function() {
                    this.qs1.cache();
                    this.qs2.cache();
                },
                afterDeselect: function() {
                    this.qs1.cache();
                    this.qs2.cache();
                }
            });

        }
        //multiselect end

        /*---------------------------------------*/

        if ($.isFunction($.fn.typeahead)) {

            // basic typeahead

            var substringMatcher = function(strs) {
                return function findMatches(q, cb) {
                    var matches, substrRegex;

                    // an array that will be populated with substring matches
                    matches = [];

                    // regex used to determine if a string contains the substring `q`
                    substrRegex = new RegExp(q, 'i');

                    // iterate through the pool of strings and for any string that
                    // contains the substring `q`, add it to the `matches` array
                    $.each(strs, function(i, str) {
                        if (substrRegex.test(str)) {
                            // the typeahead jQuery plugin expects suggestions to a
                            // JavaScript object, refer to typeahead docs for more info
                            matches.push({
                                value: str
                            });
                        }
                    });

                    cb(matches);
                };
            };

            var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
                'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
                'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
                'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
                'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
                'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
                'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
                'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
                'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
            ];

            $('#typeahead-1').typeahead({
                hint: true,
                highlight: true,
                minLength: 1
            }, {
                name: 'states',
                displayKey: 'value',
                source: substringMatcher(states)
            });

            // prefetch typeahead

            var names = new Bloodhound({
                datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
                queryTokenizer: Bloodhound.tokenizers.whitespace,
                limit: 10,
                prefetch: {
                    url: 'data/names.json',
                    filter: function(list) {
                        return $.map(list, function(name) {
                            return {
                                name: name
                            };
                        });
                    }
                }
            });

            names.initialize();

            $('#typeahead-2').typeahead(null, {
                name: 'names',
                displayKey: 'name',
                source: names.ttAdapter()
            });

            // remote data

            var name_randomizer = new Bloodhound({
                datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
                queryTokenizer: Bloodhound.tokenizers.whitespace,
                // You can also prefetch suggestions
                // prefetch: 'data/typeahead-generate.php',
                remote: 'data/typeahead-generate.php?q=%QUERY'
            });

            name_randomizer.initialize();

            $('#typeahead-3').typeahead({
                hint: true,
                highlight: true
            }, {
                name: 'string-randomizer',
                displayKey: 'value',
                source: name_randomizer.ttAdapter()
            });

            // templating

            var oscar_movies = new Bloodhound({
                datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
                queryTokenizer: Bloodhound.tokenizers.whitespace,
                remote: 'data/typeahead-hp-movies.php?q=%QUERY'
            });

            oscar_movies.initialize();

            $('#typeahead-4').typeahead(null, {
                    name: 'oscar-movies',
                    displayKey: 'value',
                    source: oscar_movies.ttAdapter(),
                    templates: {
                        empty: [
                            '<div class="empty-message">',
                            'We cannot find this movie title',
                            '</div>'
                        ].join('\n'),
                        suggestion: Handlebars.compile('<div class="clearfix" style="width:100%;display:inline-block;min-height:60px;height:auto;"><img src="data/{{cover}}" class="img-responsive pull-left" width="30" style="margin-right:10px;" /><strong>{{value}}</strong> &mdash; {{year}}<br /><span style="display:inline-block; height: 22px; overflow: hidden; white-space:nowrap; text-overflow:ellipsis; max-width: 400px;"></span></div>')
                    }
                })
                .bind('typeahead:opened', function() {
                    $(this).data('ttTypeahead').dropdown.$menu.addClass('overflow-hidden').perfectScrollbar();
                })
                .on('keyup', function() {
                    $(this).data('ttTypeahead').dropdown.$menu.perfectScrollbar('update');
                });

        }
        /*------------------------------------*/

        /*------------------------------------------*/

    };

    /*--------------------------------
        Widgets
     --------------------------------*/
    CRYPTONIA_SETTINGS.CRYPTONIAWidgets = function() {

        /*notification widget*/
        var notif_widget = $(".notification-widget").height();
        $('.notification-widget').height(notif_widget).perfectScrollbar({
            suppressScrollX: true
        });

    };

    /*--------------------------------
        weather widget
     --------------------------------*/
    CRYPTONIA_SETTINGS.CRYPTONIAWidgetWeather = function() {

        /*notification widget*/
        /*var wid = $(".wid-weather");
        var notif_widget = $(".notification-widget").height();
        $('.notification-widget').height(notif_widget).perfectScrollbar({suppressScrollX: true});

        $('.wid-weather').each( function () {
                var days = $(this).find(".weekdays");
                var today = $(this).find(".today");

                var height = days.height();
                if(days.height() < today.height()){
                    height = today.height();
                }

                days.height(height);
                today.height(height);
        });*/

        $('.wid-weather .weekdays ul').perfectScrollbar({
            suppressScrollX: true
        });

    };

    /*--------------------------------
        To Do Task Widget
     --------------------------------*/
    CRYPTONIA_SETTINGS.CRYPTONIAToDoWidget = function() {

        /*todo task widget*/
        $(".icheck-minimal-white.todo-task").on('ifChecked', function(event) {
            $(this).parent().parent().addClass("checked");
        });
        $(".icheck-minimal-white.todo-task").on('ifUnchecked', function(event) {
            $(this).parent().parent().removeClass("checked");
        });

        $(".wid-all-tasks ul").perfectScrollbar({
            suppressScrollX: true
        });

    };

    /*--------------------------------
        To Do Add Task Widget
     --------------------------------*/
    CRYPTONIA_SETTINGS.CRYPTONIAToDoAddTaskWidget = function() {

        $(".wid-add-task input").on('keypress', function(e) {
            if (e.keyCode == 13) {
                var i = Math.random().toString(36).substring(7);
                var msg = $(this).val();
                var msg = '<li><input type="checkbox" id="task-' + i + '" class="icheck-minimal-white todo-task"><label class="icheck-label form-label" for="task-' + i + '">' + msg + '</label></li>';
                $(this).parent().parent().find(".wid-all-tasks ul").append(msg);
                $(this).val("");
                $(this).focus();
                CRYPTONIA_SETTINGS.iCheck();
                CRYPTONIA_SETTINGS.CRYPTONIAToDoWidget();
                $(this).parent().parent().find(".wid-all-tasks ul").perfectScrollbar('update');
            }
        });

    };

    /*--------------------------------
         Vector maps
     --------------------------------*/
    CRYPTONIA_SETTINGS.dbjvectorMap = function() {

        if ($.isFunction($.fn.vectorMap)) {
            //@code_start
            $(function() {
                $('#db-world-map-markers').vectorMap({
                    map: 'world_mill_en',
                    scaleColors: ['#e77512', '#e77512'],
                    normalizeFunction: 'polynomial',
                    hoverOpacity: 0.7,
                    hoverColor: false,
                    regionsSelectable: true,
                    markersSelectable: true,
                    markersSelectableOne: true,
                    updateSize: true,
                    onRegionOver: function(event, code) {
                        //console.log('region-over', code);
                    },
                    onRegionOut: function(event, code) {
                        //console.log('region-out', code);
                    },
                    onRegionClick: function(event, code) {
                        //console.log('region-click', code);
                    },
                    onRegionSelected: function(event, code, isSelected, selectedRegions) {
                        //console.log('region-select', code, isSelected, selectedRegions);
                        if (window.localStorage) {
                            window.localStorage.setItem(
                                'jvectormap-selected-regions',
                                JSON.stringify(selectedRegions)
                            );
                        }
                    },

                    panOnDrag: true,

                    focusOn: {
                        x: 0.5,
                        y: 0.5,
                        scale: 1.2,
                        animate: true
                    },

                    regionStyle: {
                        initial: {
                            fill: '#aaaaaa',
                            'fill-opacity': 1,
                            stroke: 'false',
                            'stroke-width': 0,
                            'stroke-opacity': 1
                        },
                        hover: {
                            fill: '#e77512',
                            'fill-opacity': 1,
                            cursor: 'pointer'
                        },
                        selected: {
                            fill: '#e77512'
                        },
                        selectedHover: {}
                    },

                    markerStyle: {
                        initial: {
                            fill: '#f63b23',
                            stroke: '#ffffff',
                            r: 5
                        },
                        hover: {
                            stroke: '#FFC107',
                            "stroke-width": 2,
                            cursor: 'pointer'
                        },
                        selected: {
                            fill: '#FFC107',
                            "stroke-width": 0,
                        },
                    },
                    backgroundColor: '#ffffff',
                    markers: [{
                        latLng: [41.90, 12.45],
                        name: 'Vatican City'
                    }, {
                        latLng: [43.73, 7.41],
                        name: 'Monaco'
                    }, {
                        latLng: [-0.52, 166.93],
                        name: 'Nauru'
                    }, {
                        latLng: [22.28, 114.14],
                        name: 'Hong Kong'
                    }, {
                        latLng: [43.93, 12.46],
                        name: 'San Marino'
                    }, {
                        latLng: [47.14, 9.52],
                        name: 'Liechtenstein'
                    }, {
                        latLng: [7.11, 171.06],
                        name: 'Marshall Islands'
                    }, {
                        latLng: [51.50, -0.11],
                        name: 'London'
                    }, {
                        latLng: [3.2, 73.22],
                        name: 'Maldives'
                    }, {
                        latLng: [35.88, 14.5],
                        name: 'Malta'
                    }, {
                        latLng: [12.05, -61.75],
                        name: 'Grenada'
                    }, {
                        latLng: [19.43, -99.13],
                        name: 'Mexico City'
                    }, {
                        latLng: [41.88, -87.62],
                        name: 'Chicago'
                    }, {
                        latLng: [17.11, -61.85],
                        name: 'Antigua and Barbuda'
                    }, {
                        latLng: [-4.61, 55.45],
                        name: 'Seychelles'
                    }, {
                        latLng: [7.35, 134.46],
                        name: 'Palau'
                    }, {
                        latLng: [42.5, 1.51],
                        name: 'Andorra'
                    }, {
                        latLng: [26.82, 30.80],
                        name: 'Egypt'
                    }, {
                        latLng: [55.75, 37.61],
                        name: 'Moscow'
                    }, {
                        latLng: [1.3, 103.8],
                        name: 'Singapore'
                    }, {
                        latLng: [-33.86, 151.20],
                        name: 'Sydney'
                    }, {
                        latLng: [40.71, -74.00],
                        name: 'New York City'
                    }, {
                        latLng: [56.13, -106.34],
                        name: 'Canada'
                    }, {
                        latLng: [-20.2, 57.5],
                        name: 'Mauritius'
                    }, {
                        latLng: [26.02, 50.55],
                        name: 'Bahrain'
                    }, {
                        latLng: [0.33, 6.73],
                        name: 'São Tomé and Príncipe'
                    }]
                });
            });
            //@code_end
        }

    };

    /*--------------------------------
        IOS7 Switchery
     --------------------------------*/
    CRYPTONIA_SETTINGS.ios7Switchery = function() {

        if ($(".js-switch").length > 0) {

            var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));
            var defaults = {
                color: '#17a0d9',
                secondaryColor: '#dfdfdf',
                jackColor: '#fff',
                jackSecondaryColor: null,
                className: 'switchery',
                disabled: false,
                disabledOpacity: 0.5,
                speed: '0.5s',
                size: 'large'
            }
            var count = 0;
            var colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#e77512', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#795548', '#9e9e9e', '#607d8b', '#000000'];
            elems.forEach(function(html) {
                count = count + 1;
                var size = 'default';
                var color = colors[count];
                if (count > 20) {
                    var size = 'large';
                    var color = colors[count - 20];
                }
                if (count > 40) {
                    var size = 'small';
                    var color = colors[count - 40];
                }
                var defaults = {
                    color: color,
                    secondaryColor: '#dfdfdf',
                    jackColor: '#fff',
                    jackSecondaryColor: null,
                    className: 'switchery',
                    disabled: false,
                    disabledOpacity: 0.5,
                    speed: '0.5s',
                    size: size
                }

                var switchery = new Switchery(html, defaults);
            });
        }

    };

    /*--------------------------------
        Sparkline Chart - Widgets
     --------------------------------*/
    CRYPTONIA_SETTINGS.widgetSparklineChart = function() {

        if ($.isFunction($.fn.sparkline)) {

            $('.wid_dynamicbar').sparkline([8.4, 9, 8.8, 8, 9.5, 9.2, 9.9, 9, 9, 8, 7, 8, 9, 8, 7, 9, 9, 9.5, 8, 9.5, 9.8], {
                type: 'bar',
                barColor: '#f5f5f5',
                height: '60',
                barWidth: '12',
                barSpacing: 1,
            });

            $('.wid_linesparkline').sparkline([2000, 3454, 5454, 2323, 3432, 4656, 2897, 3545, 4232, 4656, 2897, 3545, 4232, 5434, 4656, 3567, 4878, 3676, 3787], {
                type: 'line',
                width: '100%',
                height: '60',
                lineWidth: 2,
                lineColor: '#f5f5f5',
                fillColor: 'rgba(255,255,255,0.2)',
                highlightSpotColor: '#ffffff',
                highlightLineColor: '#ffffff',
                spotRadius: 3,
            });

            // Bar + line composite charts
            $('.wid_compositebar').sparkline([4, 6, 7, 7, 4, 3, 2, 4, 6, 7, 7, 8, 8, 4, 4, 3, 1, 4, 6, 5, 9], {
                type: 'bar',
                barColor: '#f5f5f5',
                height: '60',
                barWidth: '12',
                barSpacing: 1,
            });

            $('.wid_compositebar').sparkline([4, 1, 5, 7, 9, 9, 8, 8, 4, 7, 8, 4, 7, 9, 9, 8, 8, 4, 2, 5, 6, 7], {
                composite: true,
                fillColor: 'rgba(103,58,183,0)',
                type: 'line',
                width: '100%',
                height: '40',
                lineWidth: 2,
                lineColor: '#673AB7',
                highlightSpotColor: '#E91E63',
                highlightLineColor: '#673AB7',
                spotRadius: 3,
            });

        }

    };

    // Element Attribute Helper
    function getValue($el, data_var, default_val) {
        if (typeof $el.data(data_var) != 'undefined') {
            return $el.data(data_var);
        }

        return default_val;
    }

    /******************************
     initialize respective scripts 
     *****************************/
    $(document).ready(function() {
        CRYPTONIA_SETTINGS.windowBasedLayout();
        CRYPTONIA_SETTINGS.mainmenuScroll();
        CRYPTONIA_SETTINGS.mainMenu();
        CRYPTONIA_SETTINGS.mainmenuCollapsed();
        CRYPTONIA_SETTINGS.pageTopBar();
        CRYPTONIA_SETTINGS.otherScripts();
        CRYPTONIA_SETTINGS.iCheck();
        CRYPTONIA_SETTINGS.customDropZone();
        CRYPTONIA_SETTINGS.formEditors();
        CRYPTONIA_SETTINGS.extraFormSettings();
        CRYPTONIA_SETTINGS.tooltipsPopovers();
        CRYPTONIA_SETTINGS.nestableList();
        CRYPTONIA_SETTINGS.uiCalendar();
        CRYPTONIA_SETTINGS.tocifyScrollMenu();
        CRYPTONIA_SETTINGS.loadPrettyPhoto();
        CRYPTONIA_SETTINGS.jvectorMaps();
        CRYPTONIA_SETTINGS.jsTreeINIT();
        CRYPTONIA_SETTINGS.breadcrumbAutoHidden();
        CRYPTONIA_SETTINGS.chatAPI();
        CRYPTONIA_SETTINGS.chatApiScroll();
        CRYPTONIA_SETTINGS.chatApiWindow();
        CRYPTONIA_SETTINGS.mailboxInbox();
        CRYPTONIA_SETTINGS.CRYPTONIAWidgets();
        CRYPTONIA_SETTINGS.sectionBoxActions();
        CRYPTONIA_SETTINGS.draggablePanels();
        CRYPTONIA_SETTINGS.viewportElement();
        CRYPTONIA_SETTINGS.searchPage();
        CRYPTONIA_SETTINGS.CRYPTONIAToDoAddTaskWidget();
        CRYPTONIA_SETTINGS.CRYPTONIAToDoWidget();
        CRYPTONIA_SETTINGS.dbjvectorMap();
        CRYPTONIA_SETTINGS.widgetSparklineChart();
        CRYPTONIA_SETTINGS.CRYPTONIAWidgetWeather();
        CRYPTONIA_SETTINGS.onLoadTopBar();
        CRYPTONIA_SETTINGS.ios7Switchery();
    });

    $(window).resize(function() {
        CRYPTONIA_SETTINGS.windowBasedLayout();
        //CRYPTONIA_SETTINGS.mainmenuScroll();
        //CRYPTONIA_SETTINGS.CRYPTONIAWidgetWeather();
        CRYPTONIA_SETTINGS.isotopeGallery();
        CRYPTONIA_SETTINGS.loginPage();
        CRYPTONIA_SETTINGS.widgetSparklineChart();
    });

    $(window).load(function() {
        CRYPTONIA_SETTINGS.isotopeGallery();
        CRYPTONIA_SETTINGS.loginPage();
    });

});