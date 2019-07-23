import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { FixedLayoutPagesRoutingModule } from "./fixed-layout-page-routing.module";
import { FixedLayoutPageComponent } from './fixed-layout-page.component';



@NgModule({
    imports: [
        CommonModule,
        FixedLayoutPagesRoutingModule,
        FormsModule        
    ],
    declarations: [
        FixedLayoutPageComponent
    ]
})
export class  FixedLayoutPagesModule { }
