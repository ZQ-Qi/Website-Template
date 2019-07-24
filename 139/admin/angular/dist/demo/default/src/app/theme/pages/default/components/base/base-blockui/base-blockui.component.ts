import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../_services/script-loader.service';


@Component({
selector: "app-base-blockui",
templateUrl: "./base-blockui.component.html",
encapsulation: ViewEncapsulation.None,
})
export class BaseBlockuiComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-base-blockui',
['assets/demo/default/custom/components/base/blockui.js']);

}

}