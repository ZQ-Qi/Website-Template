import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';


@Component({
selector: "app-widgets-bootstrap-daterangepicker",
templateUrl: "./widgets-bootstrap-daterangepicker.component.html",
encapsulation: ViewEncapsulation.None,
})
export class WidgetsBootstrapDaterangepickerComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-widgets-bootstrap-daterangepicker',
['assets/demo/default/custom/components/forms/widgets/bootstrap-daterangepicker.js']);

}

}