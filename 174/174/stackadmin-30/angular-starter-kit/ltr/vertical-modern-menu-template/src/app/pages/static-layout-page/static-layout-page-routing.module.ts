import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StaticLayoutPageComponent } from './static-layout-page.component';


const routes: Routes = [
  {
    path: '',
     component: StaticLayoutPageComponent,
    data: {
      title: 'Static Layout Page'
    },    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaticLayoutPagesRoutingModule { }
