import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SemiDarkLayoutPageComponent } from './semi-dark-layout-page.component';


const routes: Routes = [
  {
    path: '',
     component: SemiDarkLayoutPageComponent,
    data: {
      title: 'Semi Dark Layout Page'
    },    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SemiDarkLayoutPagesRoutingModule { }
