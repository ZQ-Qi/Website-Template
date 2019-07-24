import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';


@Component({
selector: "app-widgets-select2",
templateUrl: "./widgets-select2.component.html",
encapsulation: ViewEncapsulation.None,
})
export class WidgetsSelect2Component implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-widgets-select2',
['assets/demo/default/custom/components/forms/widgets/select2.js']);

}

}