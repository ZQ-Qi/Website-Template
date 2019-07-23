import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';


@Component({
selector: "app-base-data-json",
templateUrl: "./base-data-json.component.html",
encapsulation: ViewEncapsulation.None,
})
export class BaseDataJsonComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-base-data-json',
['assets/demo/default/custom/components/datatables/base/data-json.js']);

}

}