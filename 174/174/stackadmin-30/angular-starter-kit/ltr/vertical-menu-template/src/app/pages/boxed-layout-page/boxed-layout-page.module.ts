import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { BoxedLayoutPagesRoutingModule } from "./boxed-layout-page-routing.module";
import { BoxedLayoutPageComponent } from './boxed-layout-page.component';



@NgModule({
    imports: [
        CommonModule,
        BoxedLayoutPagesRoutingModule,
        FormsModule        
    ],
    declarations: [
        BoxedLayoutPageComponent
    ]
})
export class BoxedLayoutPagesModule { }
