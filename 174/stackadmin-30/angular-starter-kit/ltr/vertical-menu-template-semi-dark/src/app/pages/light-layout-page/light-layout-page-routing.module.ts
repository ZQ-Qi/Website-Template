import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LightLayoutPageComponent } from './light-layout-page.component';


const routes: Routes = [
  {
    path: '',
     component: LightLayoutPageComponent,
    data: {
      title: 'Light Layout Page'
    },    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LightLayoutPagesRoutingModule { }
