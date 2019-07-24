import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';


@Component({
selector: "app-widgets-autosize",
templateUrl: "./widgets-autosize.component.html",
encapsulation: ViewEncapsulation.None,
})
export class WidgetsAutosizeComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-widgets-autosize',
['assets/demo/default/custom/components/forms/widgets/autosize.js']);

}

}