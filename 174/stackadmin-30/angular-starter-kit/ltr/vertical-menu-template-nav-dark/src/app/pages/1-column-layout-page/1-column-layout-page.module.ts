import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { OneColumnLayoutPagesRoutingModule } from "./1-column-layout-page-routing.module";
import { OneColumnLayoutPageComponent } from './1-column-layout-page.component';



@NgModule({
    imports: [
        CommonModule,
        OneColumnLayoutPagesRoutingModule,
        FormsModule        
    ],
    declarations: [
        OneColumnLayoutPageComponent
    ]
})
export class OneColumnLayoutPagesModule { }
