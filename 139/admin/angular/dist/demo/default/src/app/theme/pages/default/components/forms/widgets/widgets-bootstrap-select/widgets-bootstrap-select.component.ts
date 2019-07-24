import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';


@Component({
selector: "app-widgets-bootstrap-select",
templateUrl: "./widgets-bootstrap-select.component.html",
encapsulation: ViewEncapsulation.None,
})
export class WidgetsBootstrapSelectComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-widgets-bootstrap-select',
['assets/demo/default/custom/components/forms/widgets/bootstrap-select.js']);

}

}