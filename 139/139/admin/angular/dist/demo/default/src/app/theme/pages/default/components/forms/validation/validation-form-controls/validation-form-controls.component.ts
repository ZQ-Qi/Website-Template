import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';


@Component({
selector: "app-validation-form-controls",
templateUrl: "./validation-form-controls.component.html",
encapsulation: ViewEncapsulation.None,
})
export class ValidationFormControlsComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-validation-form-controls',
['assets/demo/default/custom/components/forms/validation/form-controls.js']);

}

}