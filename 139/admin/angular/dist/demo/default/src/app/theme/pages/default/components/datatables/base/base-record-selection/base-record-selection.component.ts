import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';


@Component({
selector: "app-base-record-selection",
templateUrl: "./base-record-selection.component.html",
encapsulation: ViewEncapsulation.None,
})
export class BaseRecordSelectionComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-base-record-selection',
['assets/demo/default/custom/components/datatables/base/record-selection.js']);

}

}