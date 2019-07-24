import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../_services/script-loader.service';


@Component({
selector: "app-portlets-draggable",
templateUrl: "./portlets-draggable.component.html",
encapsulation: ViewEncapsulation.None,
})
export class PortletsDraggableComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-portlets-draggable',
['assets/vendors/custom/jquery-ui/jquery-ui.bundle.js',
'assets/demo/default/custom/components/portlets/draggable.js']);

}

}