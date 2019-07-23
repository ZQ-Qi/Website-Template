import { Routes, RouterModule } from '@angular/router';

export const DETACHED_STICKY_LEFT_SIDEBAR_ROUTES: Routes = [
    {
        path: 'detached-sticky-left-sidebar-layout',
        loadChildren: './pages/detached-sticky-left-sidebar-layout-page/detached-sticky-left-sidebar-layout-page.module#DetachedStickyLeftSidebarLayoutPagesModule'
      }
];