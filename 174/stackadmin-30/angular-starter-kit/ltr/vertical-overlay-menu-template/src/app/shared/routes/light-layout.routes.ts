import { Routes, RouterModule } from '@angular/router';

export const LIGHT_ROUTES: Routes = [
    {
        path: 'light-layout',
        loadChildren: './pages/light-layout-page/light-layout-page.module#LightLayoutPagesModule'
      }
];