import { Routes, RouterModule } from '@angular/router';

export const DETACHED_STICKY_RIGHT_SIDEBAR_ROUTES: Routes = [
    {
        path: 'detached-sticky-right-sidebar-layout',
        loadChildren: './pages/detached-sticky-right-sidebar-layout-page/detached-sticky-right-sidebar-layout-page.module#DetachedStickyRightSidebarLayoutPagesModule'
      }
];