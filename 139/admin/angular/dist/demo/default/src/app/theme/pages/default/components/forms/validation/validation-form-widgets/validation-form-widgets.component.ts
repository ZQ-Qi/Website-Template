import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';


@Component({
selector: "app-validation-form-widgets",
templateUrl: "./validation-form-widgets.component.html",
encapsulation: ViewEncapsulation.None,
})
export class ValidationFormWidgetsComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-validation-form-widgets',
['assets/demo/default/custom/components/forms/validation/form-widgets.js']);

}

}