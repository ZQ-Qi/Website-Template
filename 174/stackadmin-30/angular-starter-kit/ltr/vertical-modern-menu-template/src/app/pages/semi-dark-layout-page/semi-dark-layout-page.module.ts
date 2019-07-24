import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { SemiDarkLayoutPagesRoutingModule } from "./semi-dark-layout-page-routing.module";
import { SemiDarkLayoutPageComponent } from './semi-dark-layout-page.component';



@NgModule({
    imports: [
        CommonModule,
        SemiDarkLayoutPagesRoutingModule,
        FormsModule        
    ],
    declarations: [
        SemiDarkLayoutPageComponent
    ]
})
export class SemiDarkLayoutPagesModule { }
