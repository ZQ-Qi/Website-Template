import { Component, OnInit } from '@angular/core';
import { ROUTES } from './sidebar-routes.config';
import { RouteInfo } from "./sidebar.metadata";
import { Router, ActivatedRoute } from "@angular/router";

declare var $: any;
@Component({
    // moduleId: module.id,
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];

    constructor(private router: Router,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        $.getScript('./assets/app/js/core/app-menu.js');
        $.getScript('./assets/app/js/core/app.js');
       
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }

}
