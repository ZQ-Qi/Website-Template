import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../helpers';
import { ScriptLoaderService } from '../../../../../_services/script-loader.service';


@Component({
selector: "app-header-actions",
templateUrl: "./header-actions.component.html",
encapsulation: ViewEncapsulation.None,
})
export class HeaderActionsComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-header-actions',
['assets/demo/default/custom/header/actions.js']);

}

}