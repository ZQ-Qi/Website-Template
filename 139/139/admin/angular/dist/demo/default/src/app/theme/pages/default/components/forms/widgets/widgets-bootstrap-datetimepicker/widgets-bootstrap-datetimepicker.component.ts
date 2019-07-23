import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';


@Component({
selector: "app-widgets-bootstrap-datetimepicker",
templateUrl: "./widgets-bootstrap-datetimepicker.component.html",
encapsulation: ViewEncapsulation.None,
})
export class WidgetsBootstrapDatetimepickerComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-widgets-bootstrap-datetimepicker',
['assets/demo/default/custom/components/forms/widgets/bootstrap-datetimepicker.js']);

}

}