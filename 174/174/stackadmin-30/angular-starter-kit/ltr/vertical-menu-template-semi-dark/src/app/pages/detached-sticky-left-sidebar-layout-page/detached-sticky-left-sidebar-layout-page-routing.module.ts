import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetachedStickyLeftSidebarLayoutPageComponent } from './detached-sticky-left-sidebar-layout-page.component';


const routes: Routes = [
  {
    path: '',
     component: DetachedStickyLeftSidebarLayoutPageComponent,
    data: {
      title: 'Detached Sticky Left Sidebar Layout Page'
    },    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetachedStickyLeftSidebarLayoutPagesRoutingModule { }
