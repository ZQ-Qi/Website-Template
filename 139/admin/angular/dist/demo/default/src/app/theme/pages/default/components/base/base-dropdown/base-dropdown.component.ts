import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../_services/script-loader.service';


@Component({
selector: "app-base-dropdown",
templateUrl: "./base-dropdown.component.html",
encapsulation: ViewEncapsulation.None,
})
export class BaseDropdownComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-base-dropdown',
['assets/demo/default/custom/components/base/dropdown.js']);

}

}