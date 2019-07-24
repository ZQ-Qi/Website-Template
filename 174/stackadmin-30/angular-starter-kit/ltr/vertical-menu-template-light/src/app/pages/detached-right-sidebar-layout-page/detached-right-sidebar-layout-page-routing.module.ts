import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetachedRightSidebarLayoutPageComponent } from './detached-right-sidebar-layout-page.component';


const routes: Routes = [
  {
    path: '',
     component: DetachedRightSidebarLayoutPageComponent,
    data: {
      title: 'Detached Right Sidebar Layout Page'
    },    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetachedRightSidebarLayoutPagesRoutingModule { }
