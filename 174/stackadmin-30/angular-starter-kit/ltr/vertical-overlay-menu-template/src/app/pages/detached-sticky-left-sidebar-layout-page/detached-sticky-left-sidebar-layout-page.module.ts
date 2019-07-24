import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { DetachedStickyLeftSidebarLayoutPagesRoutingModule } from "./detached-sticky-left-sidebar-layout-page-routing.module";
import { DetachedStickyLeftSidebarLayoutPageComponent } from './detached-sticky-left-sidebar-layout-page.component';



@NgModule({
    imports: [
        CommonModule,
        DetachedStickyLeftSidebarLayoutPagesRoutingModule,
        FormsModule        
    ],
    declarations: [
        DetachedStickyLeftSidebarLayoutPageComponent
    ]
})
export class DetachedStickyLeftSidebarLayoutPagesModule { }
