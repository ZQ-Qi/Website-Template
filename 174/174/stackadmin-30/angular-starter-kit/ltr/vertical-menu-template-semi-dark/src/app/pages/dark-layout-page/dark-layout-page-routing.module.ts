import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DarkLayoutPageComponent } from './dark-layout-page.component';


const routes: Routes = [
  {
    path: '',
     component: DarkLayoutPageComponent,
    data: {
      title: 'Dark Layout Page'
    },    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DarkLayoutPagesRoutingModule { }
