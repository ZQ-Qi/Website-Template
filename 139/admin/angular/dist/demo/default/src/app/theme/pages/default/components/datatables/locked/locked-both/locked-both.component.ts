import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';


@Component({
selector: "app-locked-both",
templateUrl: "./locked-both.component.html",
encapsulation: ViewEncapsulation.None,
})
export class LockedBothComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-locked-both',
['assets/demo/default/custom/components/datatables/locked/both.js']);

}

}