import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';


@Component({
selector: "app-widgets-form-repeater",
templateUrl: "./widgets-form-repeater.component.html",
encapsulation: ViewEncapsulation.None,
})
export class WidgetsFormRepeaterComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-widgets-form-repeater',
['assets/demo/default/custom/components/forms/widgets/form-repeater.js']);

}

}