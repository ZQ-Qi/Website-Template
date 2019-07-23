import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../_services/script-loader.service';


@Component({
selector: "app-base-bootstrap-notify",
templateUrl: "./base-bootstrap-notify.component.html",
encapsulation: ViewEncapsulation.None,
})
export class BaseBootstrapNotifyComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-base-bootstrap-notify',
['assets/demo/default/custom/components/base/bootstrap-notify.js']);

}

}