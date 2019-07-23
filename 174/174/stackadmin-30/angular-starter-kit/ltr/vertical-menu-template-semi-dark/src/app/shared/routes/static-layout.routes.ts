import { Routes, RouterModule } from '@angular/router';

export const STATIC_ROUTES: Routes = [
    {
        path: 'static-layout',
        loadChildren: './pages/static-layout-page/static-layout-page.module#StaticLayoutPagesModule'
      }
];