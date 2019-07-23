import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';


@Component({
selector: "app-widgets-bootstrap-maxlength",
templateUrl: "./widgets-bootstrap-maxlength.component.html",
encapsulation: ViewEncapsulation.None,
})
export class WidgetsBootstrapMaxlengthComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-widgets-bootstrap-maxlength',
['assets/demo/default/custom/components/forms/widgets/bootstrap-maxlength.js']);

}

}