import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { FixedNavbarNavigationLayoutPagesRoutingModule } from "./fixed-navbar-navigation-layout-page-routing.module";
import { FixedNavbarNavigationLayoutPageComponent } from './fixed-navbar-navigation-layout-page.component';



@NgModule({
    imports: [
        CommonModule,
        FixedNavbarNavigationLayoutPagesRoutingModule,
        FormsModule        
    ],
    declarations: [
        FixedNavbarNavigationLayoutPageComponent
    ]
})
export class FixedNavbarNavigationLayoutPagesModule { }
