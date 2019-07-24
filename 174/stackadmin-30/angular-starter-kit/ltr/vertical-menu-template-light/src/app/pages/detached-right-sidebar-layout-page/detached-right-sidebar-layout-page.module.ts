import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { DetachedRightSidebarLayoutPagesRoutingModule } from "./detached-right-sidebar-layout-page-routing.module";
import { DetachedRightSidebarLayoutPageComponent } from './detached-right-sidebar-layout-page.component';



@NgModule({
    imports: [
        CommonModule,
        DetachedRightSidebarLayoutPagesRoutingModule,
        FormsModule        
    ],
    declarations: [
        DetachedRightSidebarLayoutPageComponent
    ]
})
export class  DetachedRightSidebarLayoutPagesModule { }
