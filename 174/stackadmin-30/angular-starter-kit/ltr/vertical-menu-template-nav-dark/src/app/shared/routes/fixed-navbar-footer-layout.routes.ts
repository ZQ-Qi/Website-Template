import { Routes, RouterModule } from '@angular/router';

export const FIXED_NAVBAR_FOOTER_ROUTES: Routes = [
    {
        path: 'fixed-navbar-footer-layout',
        loadChildren: './pages/fixed-navbar-footer-layout-page/fixed-navbar-footer-layout-page.module#FixedNavbarFooterLayoutPagesModule'
      }
];