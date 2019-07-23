import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';


@Component({
selector: "app-widgets-bootstrap-touchspin",
templateUrl: "./widgets-bootstrap-touchspin.component.html",
encapsulation: ViewEncapsulation.None,
})
export class WidgetsBootstrapTouchspinComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-widgets-bootstrap-touchspin',
['assets/demo/default/custom/components/forms/widgets/bootstrap-touchspin.js']);

}

}