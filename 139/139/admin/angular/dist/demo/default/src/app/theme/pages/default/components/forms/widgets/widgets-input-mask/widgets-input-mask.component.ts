import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';


@Component({
selector: "app-widgets-input-mask",
templateUrl: "./widgets-input-mask.component.html",
encapsulation: ViewEncapsulation.None,
})
export class WidgetsInputMaskComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-widgets-input-mask',
['assets/demo/default/custom/components/forms/widgets/input-mask.js']);

}

}