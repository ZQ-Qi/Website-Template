import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../_services/script-loader.service';


@Component({
selector: "app-utils-idle-timer",
templateUrl: "./utils-idle-timer.component.html",
encapsulation: ViewEncapsulation.None,
})
export class UtilsIdleTimerComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-utils-idle-timer',
['assets/demo/default/custom/components/utils/idle-timer.js']);

}

}