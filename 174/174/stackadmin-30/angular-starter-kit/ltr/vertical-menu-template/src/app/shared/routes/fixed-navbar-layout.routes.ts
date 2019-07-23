import { Routes, RouterModule } from '@angular/router';

export const FIXED_NAVBAR_ROUTES: Routes = [
    {
        path: 'fixed-navbar-layout',
        loadChildren: './pages/fixed-navbar-layout-page/fixed-navbar-layout-page.module#FixedNavbarLayoutPagesModule'
      }
];