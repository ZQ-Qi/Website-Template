import { Routes, RouterModule } from '@angular/router';

export const TWO_COLUMN_ROUTES: Routes = [
    {
        path: '2-columns-layout',
        loadChildren: './pages/2-columns-layout-page/2-columns-layout-page.module#TwoColumnsLayoutPagesModule'
    },
    {
        path: 'changelog',
        loadChildren: './changelog/changelog.module#ChangeLogModule'
    },
    {
        path: 'components',
        loadChildren: './components/ui-components.module#UIComponentsModule'
    },
];