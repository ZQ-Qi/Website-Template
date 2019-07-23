import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';


@Component({
selector: "app-child-data-local",
templateUrl: "./child-data-local.component.html",
encapsulation: ViewEncapsulation.None,
})
export class ChildDataLocalComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-child-data-local',
['assets/demo/default/custom/components/datatables/child/data-local.js']);

}

}