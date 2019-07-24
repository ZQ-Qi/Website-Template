import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';


@Component({
selector: "app-widgets-bootstrap-switch",
templateUrl: "./widgets-bootstrap-switch.component.html",
encapsulation: ViewEncapsulation.None,
})
export class WidgetsBootstrapSwitchComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-widgets-bootstrap-switch',
['assets/demo/default/custom/components/forms/widgets/bootstrap-switch.js']);

}

}