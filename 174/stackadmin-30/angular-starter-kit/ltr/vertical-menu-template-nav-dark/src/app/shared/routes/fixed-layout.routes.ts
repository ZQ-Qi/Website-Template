import { Routes, RouterModule } from '@angular/router';

export const FIXED_ROUTES: Routes = [
    {
        path: 'fixed-layout',
        loadChildren: './pages/fixed-layout-page/fixed-layout-page.module#FixedLayoutPagesModule'
      }
];