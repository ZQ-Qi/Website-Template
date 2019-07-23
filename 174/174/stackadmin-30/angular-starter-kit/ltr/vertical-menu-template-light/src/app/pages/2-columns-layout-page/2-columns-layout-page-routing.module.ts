import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TwoColumnsLayoutPageComponent } from './2-columns-layout-page.component';


const routes: Routes = [
  {
    path: '',
    component: TwoColumnsLayoutPageComponent,
    data: {
      title: 'Two Columns Layout Page'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TwoColumnsLayoutPagesRoutingModule { }
