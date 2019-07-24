import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../_services/script-loader.service';


@Component({
selector: "app-portlets-tools",
templateUrl: "./portlets-tools.component.html",
encapsulation: ViewEncapsulation.None,
})
export class PortletsToolsComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-portlets-tools',
['assets/demo/default/custom/components/portlets/tools.js']);

}

}