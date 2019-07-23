import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';


@Component({
selector: "app-locked-left",
templateUrl: "./locked-left.component.html",
encapsulation: ViewEncapsulation.None,
})
export class LockedLeftComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-locked-left',
['assets/demo/default/custom/components/datatables/locked/left.js']);

}

}