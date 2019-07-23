import { Routes, RouterModule } from '@angular/router';

export const FIXED_NAVIGATION_ROUTES: Routes = [
    {
        path: 'fixed-navigation-layout',
        loadChildren: './pages/fixed-navigation-layout-page/fixed-navigation-layout-page.module#FixedNavigationLayoutPagesModule'
      }
];