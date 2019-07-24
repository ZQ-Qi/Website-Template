import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';


@Component({
selector: "app-base-html-table",
templateUrl: "./base-html-table.component.html",
encapsulation: ViewEncapsulation.None,
})
export class BaseHtmlTableComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-base-html-table',
['assets/demo/default/custom/components/datatables/base/html-table.js']);

}

}