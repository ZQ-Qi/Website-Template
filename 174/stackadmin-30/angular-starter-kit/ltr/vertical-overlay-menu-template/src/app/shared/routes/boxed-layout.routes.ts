import { Routes, RouterModule } from '@angular/router';

export const BOXED_ROUTES: Routes = [
    {
        path: 'boxed-layout',
        loadChildren: './pages/boxed-layout-page/boxed-layout-page.module#BoxedLayoutPagesModule'
      }
];