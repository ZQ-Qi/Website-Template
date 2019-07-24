import { Routes, RouterModule } from '@angular/router';

export const DARK_ROUTES: Routes = [
    {
        path: 'dark-layout',
        loadChildren: './pages/dark-layout-page/dark-layout-page.module#OneColumnLayoutPagesModule'
      }
];