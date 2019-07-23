import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { FixedNavbarLayoutPagesRoutingModule } from "./fixed-navbar-layout-page-routing.module";
import { FixedNavbarLayoutPageComponent } from './fixed-navbar-layout-page.component';



@NgModule({
    imports: [
        CommonModule,
        FixedNavbarLayoutPagesRoutingModule,
        FormsModule        
    ],
    declarations: [
        FixedNavbarLayoutPageComponent
    ]
})
export class FixedNavbarLayoutPagesModule { }
