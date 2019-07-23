import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OneColumnLayoutPageComponent } from './1-column-layout-page.component';


const routes: Routes = [
  {
    path: '',
     component: OneColumnLayoutPageComponent,
    data: {
      title: 'One Column Layout Page'
    },    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OneColumnLayoutPagesRoutingModule { }
