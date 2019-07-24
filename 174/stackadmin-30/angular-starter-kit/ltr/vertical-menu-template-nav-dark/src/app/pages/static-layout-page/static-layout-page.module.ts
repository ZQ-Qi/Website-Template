import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { StaticLayoutPagesRoutingModule } from "./static-layout-page-routing.module";
import { StaticLayoutPageComponent } from './static-layout-page.component';



@NgModule({
    imports: [
        CommonModule,
        StaticLayoutPagesRoutingModule,
        FormsModule        
    ],
    declarations: [
        StaticLayoutPageComponent
    ]
})
export class StaticLayoutPagesModule { }
