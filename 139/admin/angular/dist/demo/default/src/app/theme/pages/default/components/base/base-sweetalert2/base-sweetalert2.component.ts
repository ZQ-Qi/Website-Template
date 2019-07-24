import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../_services/script-loader.service';


@Component({
selector: "app-base-sweetalert2",
templateUrl: "./base-sweetalert2.component.html",
encapsulation: ViewEncapsulation.None,
})
export class BaseSweetalert2Component implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-base-sweetalert2',
['assets/demo/default/custom/components/base/sweetalert2.js']);

}

}