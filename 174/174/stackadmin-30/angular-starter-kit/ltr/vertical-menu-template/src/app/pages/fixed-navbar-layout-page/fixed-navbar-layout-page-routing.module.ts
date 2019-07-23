import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FixedNavbarLayoutPageComponent } from './fixed-navbar-layout-page.component';


const routes: Routes = [
  {
    path: '',
     component: FixedNavbarLayoutPageComponent,
    data: {
      title: 'Fixed Navbar Layout Page'
    },    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FixedNavbarLayoutPagesRoutingModule { }
