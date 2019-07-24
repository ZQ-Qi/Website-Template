import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';


@Component({
selector: ".m-grid.m-grid--hor.m-grid--root.m-page",
templateUrl: "./user-login-1.component.html",
encapsulation: ViewEncapsulation.None,
})
export class UserLogin1Component implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('.m-grid.m-grid--hor.m-grid--root.m-page',
['assets/snippets/pages/user/login.js']);

Helpers.bodyClass('m--skin- m-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--skin-dark m-aside-left--offcanvas m-footer--push m-aside--offcanvas-default');

}

}