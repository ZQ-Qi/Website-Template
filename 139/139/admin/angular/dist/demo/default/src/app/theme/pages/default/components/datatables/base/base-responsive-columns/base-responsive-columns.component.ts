import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';


@Component({
selector: "app-base-responsive-columns",
templateUrl: "./base-responsive-columns.component.html",
encapsulation: ViewEncapsulation.None,
})
export class BaseResponsiveColumnsComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-base-responsive-columns',
['assets/demo/default/custom/components/datatables/base/responsive-columns.js']);

}

}