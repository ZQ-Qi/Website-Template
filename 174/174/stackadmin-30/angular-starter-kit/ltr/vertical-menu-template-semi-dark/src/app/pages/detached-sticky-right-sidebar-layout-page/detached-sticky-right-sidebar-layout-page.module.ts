import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { DetachedStickyRightSidebarLayoutPagesRoutingModule } from "./detached-sticky-right-sidebar-layout-page-routing.module";
import { DetachedStickyRightSidebarLayoutPageComponent } from './detached-sticky-right-sidebar-layout-page.component';



@NgModule({
    imports: [
        CommonModule,
        DetachedStickyRightSidebarLayoutPagesRoutingModule,
        FormsModule        
    ],
    declarations: [
        DetachedStickyRightSidebarLayoutPageComponent
    ]
})
export class  DetachedStickyRightSidebarLayoutPagesModule { }
