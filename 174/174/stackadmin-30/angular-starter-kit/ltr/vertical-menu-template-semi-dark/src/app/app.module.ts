
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from "./shared/shared.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
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

import { AuthService } from './shared/auth/auth.service';
import { AuthGuard } from './shared/auth/auth-guard.service';

import * as $ from 'jquery';





@NgModule({
    declarations: [
        AppComponent,
        OneColumnLayoutComponent,
        TwoColumnsLayoutComponent,
        DetachedLeftSidebarLayoutComponent,
        DetachedStickyLeftSidebarLayoutComponent,
        DetachedStickyRightSidebarLayoutComponent,
        DetachedRightSidebarLayoutComponent,
        FixedNavbarLayoutComponent,
        FixedNavigationLayoutComponent,
        FixedNavbarNavigationLayoutComponent,
        FixedNavbarFooterLayoutComponent,
        FixedLayoutComponent,
        BoxedLayoutComponent,
        StaticLayoutComponent,
        LightLayoutComponent,
        DarkLayoutComponent,
        SemiDarkLayoutComponent
       
    ],
    imports: [
        BrowserAnimationsModule,
        AppRoutingModule,
        SharedModule,
        NgbModule.forRoot()
    ],
    providers: [
        AuthService,
        AuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }