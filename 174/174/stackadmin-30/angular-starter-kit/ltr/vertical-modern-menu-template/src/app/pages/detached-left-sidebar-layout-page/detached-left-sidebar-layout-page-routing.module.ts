import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetachedLeftSidebarLayoutPageComponent } from './detached-left-sidebar-layout-page.component';


const routes: Routes = [
  {
    path: '',
     component: DetachedLeftSidebarLayoutPageComponent,
    data: {
      title: 'Detached Left Sidebar Layout Page'
    },    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetachedLeftSidebarLayoutPagesRoutingModule { }
