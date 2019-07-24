import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { DarkLayoutPagesRoutingModule } from "./dark-layout-page-routing.module";
import { DarkLayoutPageComponent } from './dark-layout-page.component';



@NgModule({
    imports: [
        CommonModule,
        DarkLayoutPagesRoutingModule,
        FormsModule        
    ],
    declarations: [
        DarkLayoutPageComponent
    ]
})
export class OneColumnLayoutPagesModule { }
