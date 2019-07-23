import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';


@Component({
selector: "app-base-data-local",
templateUrl: "./base-data-local.component.html",
encapsulation: ViewEncapsulation.None,
})
export class BaseDataLocalComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-base-data-local',
['assets/demo/default/custom/components/datatables/base/data-local.js']);

}

}