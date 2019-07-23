import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { TwoColumnsLayoutPagesRoutingModule } from "./2-columns-layout-page-routing.module";
import { TwoColumnsLayoutPageComponent } from './2-columns-layout-page.component';



@NgModule({
    imports: [
        CommonModule,
        TwoColumnsLayoutPagesRoutingModule,
        FormsModule        
    ],
    declarations: [
        TwoColumnsLayoutPageComponent
    ]
})
export class TwoColumnsLayoutPagesModule { }
