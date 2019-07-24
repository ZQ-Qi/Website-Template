import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetachedStickyRightSidebarLayoutPageComponent } from './detached-sticky-right-sidebar-layout-page.component';


const routes: Routes = [
  {
    path: '',
     component: DetachedStickyRightSidebarLayoutPageComponent,
    data: {
      title: 'Detached Sticky Right Sidebar Layout Page'
    },    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetachedStickyRightSidebarLayoutPagesRoutingModule { }
