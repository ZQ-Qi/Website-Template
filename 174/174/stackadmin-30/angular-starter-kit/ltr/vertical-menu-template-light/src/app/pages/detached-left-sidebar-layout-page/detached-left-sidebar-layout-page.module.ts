import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { DetachedLeftSidebarLayoutPagesRoutingModule } from "./detached-left-sidebar-layout-page-routing.module";
import { DetachedLeftSidebarLayoutPageComponent } from './detached-left-sidebar-layout-page.component';



@NgModule({
    imports: [
        CommonModule,
        DetachedLeftSidebarLayoutPagesRoutingModule,
        FormsModule        
    ],
    declarations: [
        DetachedLeftSidebarLayoutPageComponent
    ]
})
export class DetachedLeftSidebarLayoutPagesModule { }
