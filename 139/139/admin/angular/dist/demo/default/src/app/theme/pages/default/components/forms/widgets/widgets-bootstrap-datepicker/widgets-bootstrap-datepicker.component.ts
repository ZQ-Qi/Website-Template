import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';


@Component({
selector: "app-widgets-bootstrap-datepicker",
templateUrl: "./widgets-bootstrap-datepicker.component.html",
encapsulation: ViewEncapsulation.None,
})
export class WidgetsBootstrapDatepickerComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-widgets-bootstrap-datepicker',
['assets/demo/default/custom/components/forms/widgets/bootstrap-datepicker.js']);

}

}