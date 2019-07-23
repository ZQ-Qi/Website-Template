import { Routes, RouterModule } from '@angular/router';

export const DETACHED_RIGHT_SIDEBAR_ROUTES: Routes = [
    {
        path: 'detached-right-sidebar-layout',
        loadChildren: './pages/detached-right-sidebar-layout-page/detached-right-sidebar-layout-page.module#DetachedRightSidebarLayoutPagesModule'
      }
];