import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FixedNavbarFooterLayoutPageComponent } from './fixed-navbar-footer-layout-page.component';


const routes: Routes = [
  {
    path: '',
     component: FixedNavbarFooterLayoutPageComponent,
    data: {
      title: 'Fixed Navbar Footer Layout Page'
    },    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FixedNavbarFooterLayoutPagesRoutingModule { }
