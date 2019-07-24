import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [

    {
        path: '', title: 'Layouts', icon: 'ft-zap', class: 'nav-item has-sub', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false,
        submenu: [
            { path: '/1-column-layout', title: '1 column', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            { path: '/2-columns-layout', title: '2 columns', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            {
                path: '', title: 'Content Det. Sidebar', icon: '', class: 'menu-item has-sub', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false,
                submenu: [
                    { path: '/detached-left-sidebar-layout', title: 'Detached left sidebar', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
                    { path: '/detached-sticky-left-sidebar-layout', title: 'Detached sticky left sidebar', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
                    { path: '/detached-right-sidebar-layout', title: 'Detached right sidebar', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
                    { path: '/detached-sticky-right-sidebar-layout', title: 'Detached sticky right sidebar', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
                ]
            },
            { path: '/fixed-navbar-layout', title: 'Fixed navbar', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            { path: '/fixed-navigation-layout', title: 'Fixed navigation', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            { path: '/fixed-navbar-navigation-layout', title: 'Fixed navbar & navigation', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            { path: '/fixed-navbar-footer-layout', title: 'Fixed navbar & footer', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            { path: '/fixed-layout', title: 'Fixed layout', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            { path: '/boxed-layout', title: 'Boxed layout', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            { path: '/static-layout', title: 'Static layout', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            { path: '/light-layout', title: 'Light layout', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            { path: '/dark-layout', title: 'Dark layout', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            { path: '/semi-dark-layout', title: 'Semi dark layout', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] }
        ]
    },
    {
        path: '', title: 'Components', icon: 'ft-box', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false,
        submenu: [        
            { path: '/components/accordion', title: 'Accordion', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },   
            { path: '/components/alerts', title: 'Alerts', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            { path: '/components/buttons', title: 'Buttons', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            { path: '/components/carousel', title: 'Carousel', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            { path: '/components/collapse', title: 'Collapse', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            { path: '/components/datepicker', title: 'Datepicker', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            { path: '/components/dropdowns', title: 'Dropdowns', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            { path: '/components/models', title: 'Modals', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            { path: '/components/pagination', title: 'Pagination', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            { path: '/components/popover', title: 'Popover', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            { path: '/components/progress', title: 'Progress Bars', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            { path: '/components/rating', title: 'Rating', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            { path: '/components/tabs', title: 'Tabs', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            { path: '/components/timepicker', title: 'Timepicker', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            { path: '/components/tooltip', title: 'Tooltip', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            { path: '/components/typeahead', title: 'Typeahead', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] }
        ]
    },
    {
        path: '', title: 'Menu Levels', icon: 'ft-align-left', class: 'nav-item has-sub', badge: '5', badgeClass: 'badge badge badge-primary badge-pill float-right mr-2', isExternalLink: false, isNavHeader: false,
        submenu: [
            { path: 'javascript:;', title: 'Second Level', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: true, isNavHeader: false, submenu: [] },
            {
                path: '', title: 'Second Level Child', icon: '', class: 'menu-item has-sub', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false,
                submenu: [
                    { path: 'javascript:;', title: 'Third Level 1.1', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
                    { path: 'javascript:;', title: 'Third Level 1.2', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
                ]
            },
        ]
    },
    {
        path: '/changelog', title: 'ChangeLog', icon: 'ft-file', class: 'nav-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: []
    },
    {
        path: '', title: 'Support', icon: 'icon-ellipsis ft-minus', class: 'navigation-header', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: true, submenu: []
    },
    { path: 'https://pixinvent.ticksy.com/', title: 'Raise Support', icon: 'ft-life-buoy', class: 'nav-item', badge: '', badgeClass: '', isExternalLink: true, isNavHeader: false, submenu: [] },
    { path: 'https://pixinvent.com/stack-bootstrap-admin-template/documentation', title: 'Documentation', icon: 'ft-folder', class: 'nav-item', badge: '', badgeClass: '', isExternalLink: true, isNavHeader: false, submenu: [] },
    

];
