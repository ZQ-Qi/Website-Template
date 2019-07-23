import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { LightLayoutPagesRoutingModule } from "./light-layout-page-routing.module";
import { LightLayoutPageComponent } from './light-layout-page.component';



@NgModule({
    imports: [
        CommonModule,
        LightLayoutPagesRoutingModule,
        FormsModule        
    ],
    declarations: [
        LightLayoutPageComponent
    ]
})
export class LightLayoutPagesModule { }
