import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';


@Component({
selector: "app-widgets-nouislider",
templateUrl: "./widgets-nouislider.component.html",
encapsulation: ViewEncapsulation.None,
})
export class WidgetsNouisliderComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-widgets-nouislider',
['assets/demo/default/custom/components/forms/widgets/nouislider.js']);

}

}