import { Routes, RouterModule } from '@angular/router';

export const SEMI_DARK_ROUTES: Routes = [
    {
        path: 'semi-dark-layout',
        loadChildren: './pages/semi-dark-layout-page/semi-dark-layout-page.module#SemiDarkLayoutPagesModule'
      }
];