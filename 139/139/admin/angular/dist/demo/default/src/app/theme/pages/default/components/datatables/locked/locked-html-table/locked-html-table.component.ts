import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';


@Component({
selector: "app-locked-html-table",
templateUrl: "./locked-html-table.component.html",
encapsulation: ViewEncapsulation.None,
})
export class LockedHtmlTableComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-locked-html-table',
['assets/demo/default/custom/components/datatables/locked/html-table.js']);

}

}