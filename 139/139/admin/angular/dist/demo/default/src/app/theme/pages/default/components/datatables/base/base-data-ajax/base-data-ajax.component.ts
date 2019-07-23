import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';


@Component({
selector: "app-base-data-ajax",
templateUrl: "./base-data-ajax.component.html",
encapsulation: ViewEncapsulation.None,
})
export class BaseDataAjaxComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-base-data-ajax',
['assets/demo/default/custom/components/datatables/base/data-ajax.js']);

}

}