import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { FixedNavbarFooterLayoutPagesRoutingModule } from "./fixed-navbar-footer-layout-page-routing.module";
import { FixedNavbarFooterLayoutPageComponent } from './fixed-navbar-footer-layout-page.component';



@NgModule({
    imports: [
        CommonModule,
        FixedNavbarFooterLayoutPagesRoutingModule,
        FormsModule        
    ],
    declarations: [
        FixedNavbarFooterLayoutPageComponent
    ]
})
export class FixedNavbarFooterLayoutPagesModule { }
