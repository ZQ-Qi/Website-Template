import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';


@Component({
selector: "app-base-row-details",
templateUrl: "./base-row-details.component.html",
encapsulation: ViewEncapsulation.None,
})
export class BaseRowDetailsComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-base-row-details',
['assets/demo/default/custom/components/datatables/base/row-details.js']);

}

}