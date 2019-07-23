import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';


@Component({
selector: "app-api-methods",
templateUrl: "./api-methods.component.html",
encapsulation: ViewEncapsulation.None,
})
export class ApiMethodsComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-api-methods',
['assets/demo/default/custom/components/datatables/api/methods.js']);

}

}