import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FixedNavbarNavigationLayoutPageComponent } from './fixed-navbar-navigation-layout-page.component';


const routes: Routes = [
  {
    path: '',
     component: FixedNavbarNavigationLayoutPageComponent,
    data: {
      title: 'Fixed Navbar Navigation Layout Page'
    },    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FixedNavbarNavigationLayoutPagesRoutingModule { }
