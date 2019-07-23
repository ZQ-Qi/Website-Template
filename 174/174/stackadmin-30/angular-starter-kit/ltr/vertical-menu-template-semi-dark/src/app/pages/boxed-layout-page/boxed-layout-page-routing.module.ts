import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoxedLayoutPageComponent } from './boxed-layout-page.component';


const routes: Routes = [
  {
    path: '',
     component: BoxedLayoutPageComponent,
    data: {
      title: 'Boxed Layout Page'
    },    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoxedLayoutPagesRoutingModule { }
