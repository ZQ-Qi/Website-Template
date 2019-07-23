import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FixedLayoutPageComponent } from './fixed-layout-page.component';


const routes: Routes = [
  {
    path: '',
     component: FixedLayoutPageComponent,
    data: {
      title: 'Fixed Layout Page'
    },    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FixedLayoutPagesRoutingModule { }
