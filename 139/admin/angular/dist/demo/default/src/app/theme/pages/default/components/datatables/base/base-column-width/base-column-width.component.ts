import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';


@Component({
selector: "app-base-column-width",
templateUrl: "./base-column-width.component.html",
encapsulation: ViewEncapsulation.None,
})
export class BaseColumnWidthComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-base-column-width',
['assets/demo/default/custom/components/datatables/base/column-width.js']);

}

}