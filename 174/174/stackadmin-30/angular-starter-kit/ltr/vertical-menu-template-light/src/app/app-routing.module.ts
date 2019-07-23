import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { SemiDarkLayoutComponent } from './layouts/semi-dark-layout/semi-dark-layout.component';
import { DarkLayoutComponent } from './layouts/dark-layout/dark-layout.component';
import { LightLayoutComponent } from './layouts/light-layout/light-layout.component';
import { StaticLayoutComponent } from './layouts/static-layout/static-layout.component';
import { BoxedLayoutComponent } from './layouts/boxed-layout/boxed-layout.component';
import { FixedLayoutComponent } from './layouts/fixed-layout/fixed-layout.component';
import { FixedNavbarFooterLayoutComponent } from './layouts/fixed-navbar-footer-layout/fixed-navbar-footer-layout.component';
import { FixedNavbarNavigationLayoutComponent } from './layouts/fixed-navbar-navigation-layout/fixed-navbar-navigation-layout.component';
import { FixedNavigationLayoutComponent } from './layouts/fixed-navigation-layout/fixed-navigation-layout.component';
import { FixedNavbarLayoutComponent } from './layouts/fixed-navbar-layout/fixed-navbar-layout.component';
import { DetachedRightSidebarLayoutComponent } from './layouts/detached-right-sidebar-layout/detached-right-sidebar-layout.component';
import { DetachedStickyRightSidebarLayoutComponent } from './layouts/detached-sticky-right-sidebar-layout/detached-sticky-right-sidebar-layout.component';
import { DetachedStickyLeftSidebarLayoutComponent } from './layouts/detached-sticky-left-sidebar-layout/detached-sticky-left-sidebar-layout.component';
import { DetachedLeftSidebarLayoutComponent } from './layouts/detached-left-sidebar-layout/detached-left-sidebar-layout.component';
import { OneColumnLayoutComponent } from './layouts/1-column-layout/1-column-layout.component';
import { TwoColumnsLayoutComponent } from './layouts/2-columns-layout/2-columns-layout.component';


import { ONE_COLUMN_ROUTES } from "./shared/routes/1-column-layout.routes";
import { TWO_COLUMN_ROUTES } from "./shared/routes/2-columns-layout.routes";
import { BOXED_ROUTES } from "./shared/routes/boxed-layout.routes";
import { DARK_ROUTES } from "./shared/routes/dark-layout.routes";
import { DETACHED_LEFT_SIDEBAR_ROUTES } from "./shared/routes/detached-left-sidebar-layout.routes";
import { DETACHED_RIGHT_SIDEBAR_ROUTES } from "./shared/routes/detached-right-sidebar-layout.routes";
import { DETACHED_STICKY_LEFT_SIDEBAR_ROUTES } from "./shared/routes/detached-sticky-left-sidebar-layout.routes";
import { DETACHED_STICKY_RIGHT_SIDEBAR_ROUTES } from "./shared/routes/detached-sticky-right-sidebar-layout.routes";
import { FIXED_ROUTES } from "./shared/routes/fixed-layout.routes";
import { FIXED_NAVBAR_FOOTER_ROUTES } from "./shared/routes/fixed-navbar-footer-layout.routes";
import { FIXED_NAVBAR_ROUTES } from "./shared/routes/fixed-navbar-layout.routes";
import { FIXED_NAVBAR_NAVIGATION_ROUTES } from "./shared/routes/fixed-navbar-navigation-layout.routes";
import { FIXED_NAVIGATION_ROUTES } from "./shared/routes/fixed-navigation-layout.routes";
import { LIGHT_ROUTES } from "./shared/routes/light-layout.routes";
import { SEMI_DARK_ROUTES } from "./shared/routes/semi-dark-layout.routes";
import { STATIC_ROUTES } from "./shared/routes/static-layout.routes";

import { AuthGuard } from './shared/auth/auth-guard.service';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '2-columns-layout',
    pathMatch: 'full',
  },
  { path: '', component: OneColumnLayoutComponent, data: { title: '' }, children: ONE_COLUMN_ROUTES, canActivate: [AuthGuard] },
  { path: '', component: TwoColumnsLayoutComponent, data: { title: '' }, children: TWO_COLUMN_ROUTES, canActivate: [AuthGuard] },
  { path: '', component: BoxedLayoutComponent, data: { title: '' }, children: BOXED_ROUTES, canActivate: [AuthGuard] },
  { path: '', component: DarkLayoutComponent, data: { title: '' }, children: DARK_ROUTES, canActivate: [AuthGuard] },
  { path: '', component: DetachedLeftSidebarLayoutComponent, data: { title: '' }, children: DETACHED_LEFT_SIDEBAR_ROUTES, canActivate: [AuthGuard] },
  { path: '', component: DetachedRightSidebarLayoutComponent, data: { title: '' }, children: DETACHED_RIGHT_SIDEBAR_ROUTES, canActivate: [AuthGuard] },
  { path: '', component: DetachedStickyLeftSidebarLayoutComponent, data: { title: '' }, children: DETACHED_STICKY_LEFT_SIDEBAR_ROUTES, canActivate: [AuthGuard] },
  { path: '', component: DetachedStickyRightSidebarLayoutComponent, data: { title: '' }, children: DETACHED_STICKY_RIGHT_SIDEBAR_ROUTES, canActivate: [AuthGuard] },
  { path: '', component: FixedLayoutComponent, data: { title: '' }, children: FIXED_ROUTES, canActivate: [AuthGuard] },
  { path: '', component: FixedNavbarFooterLayoutComponent, data: { title: '' }, children: FIXED_NAVBAR_FOOTER_ROUTES, canActivate: [AuthGuard] },
  { path: '', component: FixedNavbarLayoutComponent, data: { title: '' }, children: FIXED_NAVBAR_ROUTES, canActivate: [AuthGuard] },
  { path: '', component: FixedNavbarNavigationLayoutComponent, data: { title: '' }, children: FIXED_NAVBAR_NAVIGATION_ROUTES, canActivate: [AuthGuard] },
  { path: '', component: FixedNavigationLayoutComponent, data: { title: '' }, children: FIXED_NAVIGATION_ROUTES, canActivate: [AuthGuard] },
  { path: '', component: LightLayoutComponent, data: { title: '' }, children: LIGHT_ROUTES, canActivate: [AuthGuard] },
  { path: '', component: SemiDarkLayoutComponent, data: { title: '' }, children: SEMI_DARK_ROUTES, canActivate: [AuthGuard] },
  { path: '', component: StaticLayoutComponent, data: { title: '' }, children: STATIC_ROUTES, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
