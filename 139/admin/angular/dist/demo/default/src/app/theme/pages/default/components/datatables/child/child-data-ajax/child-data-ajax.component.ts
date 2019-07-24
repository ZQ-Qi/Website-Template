import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';


@Component({
selector: "app-child-data-ajax",
templateUrl: "./child-data-ajax.component.html",
encapsulation: ViewEncapsulation.None,
})
export class ChildDataAjaxComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-child-data-ajax',
['assets/demo/default/custom/components/datatables/child/data-ajax.js']);

}

}