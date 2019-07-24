import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';


@Component({
selector: "app-locked-right",
templateUrl: "./locked-right.component.html",
encapsulation: ViewEncapsulation.None,
})
export class LockedRightComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-locked-right',
['assets/demo/default/custom/components/datatables/locked/right.js']);

}

}