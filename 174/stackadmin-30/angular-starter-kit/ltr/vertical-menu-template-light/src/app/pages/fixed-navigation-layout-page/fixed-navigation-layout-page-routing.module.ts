import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FixedNavigationLayoutPageComponent } from './fixed-navigation-layout-page.component';


const routes: Routes = [
  {
    path: '',
     component: FixedNavigationLayoutPageComponent,
    data: {
      title: 'Fixed Navigation Layout Page'
    },    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FixedNavigationLayoutPagesRoutingModule { }
