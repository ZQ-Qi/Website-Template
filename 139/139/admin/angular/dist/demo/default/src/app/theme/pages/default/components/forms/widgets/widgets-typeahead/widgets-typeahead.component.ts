import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';


@Component({
selector: "app-widgets-typeahead",
templateUrl: "./widgets-typeahead.component.html",
encapsulation: ViewEncapsulation.None,
})
export class WidgetsTypeaheadComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-widgets-typeahead',
['assets/demo/default/custom/components/forms/widgets/typeahead.js']);

}

}