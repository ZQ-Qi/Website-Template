import { Routes, RouterModule } from '@angular/router';

export const FIXED_NAVBAR_NAVIGATION_ROUTES: Routes = [
    {
        path: 'fixed-navbar-navigation-layout',
        loadChildren: './pages/fixed-navbar-navigation-layout-page/fixed-navbar-navigation-layout-page.module#FixedNavbarNavigationLayoutPagesModule'
      }
];