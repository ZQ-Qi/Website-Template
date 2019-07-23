import { Routes, RouterModule } from '@angular/router';

export const ONE_COLUMN_ROUTES: Routes = [
    {
        path: '1-column-layout',
        loadChildren: './pages/1-column-layout-page/1-column-layout-page.module#OneColumnLayoutPagesModule'
      }
];