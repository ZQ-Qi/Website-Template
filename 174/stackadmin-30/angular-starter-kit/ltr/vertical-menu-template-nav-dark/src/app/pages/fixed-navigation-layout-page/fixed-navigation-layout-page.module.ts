import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { FixedNavigationLayoutPagesRoutingModule } from "./fixed-navigation-layout-page-routing.module";
import { FixedNavigationLayoutPageComponent } from './fixed-navigation-layout-page.component';



@NgModule({
    imports: [
        CommonModule,
        FixedNavigationLayoutPagesRoutingModule,
        FormsModule        
    ],
    declarations: [
        FixedNavigationLayoutPageComponent
    ]
})
export class FixedNavigationLayoutPagesModule { }
