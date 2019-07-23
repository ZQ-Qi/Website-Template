import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';


@Component({
selector: "app-base-column-rendering",
templateUrl: "./base-column-rendering.component.html",
encapsulation: ViewEncapsulation.None,
})
export class BaseColumnRenderingComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-base-column-rendering',
['assets/demo/default/custom/components/datatables/base/column-rendering.js']);

}

}