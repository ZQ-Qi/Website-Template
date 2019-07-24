import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';


@Component({
selector: "app-widgets-bootstrap-timepicker",
templateUrl: "./widgets-bootstrap-timepicker.component.html",
encapsulation: ViewEncapsulation.None,
})
export class WidgetsBootstrapTimepickerComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-widgets-bootstrap-timepicker',
['assets/demo/default/custom/components/forms/widgets/bootstrap-timepicker.js']);

}

}