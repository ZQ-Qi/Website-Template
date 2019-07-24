import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../_services/script-loader.service';


@Component({
selector: "app-utils-session-timeout",
templateUrl: "./utils-session-timeout.component.html",
encapsulation: ViewEncapsulation.None,
})
export class UtilsSessionTimeoutComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-utils-session-timeout',
['assets/demo/default/custom/components/utils/session-timeout.js']);

}

}