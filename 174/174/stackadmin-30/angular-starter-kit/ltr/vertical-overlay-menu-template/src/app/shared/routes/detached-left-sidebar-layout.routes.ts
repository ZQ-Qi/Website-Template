import { Routes, RouterModule } from '@angular/router';

export const DETACHED_LEFT_SIDEBAR_ROUTES: Routes = [
    {
        path: 'detached-left-sidebar-layout',
        loadChildren: './pages/detached-left-sidebar-layout-page/detached-left-sidebar-layout-page.module#DetachedLeftSidebarLayoutPagesModule'
      }
];