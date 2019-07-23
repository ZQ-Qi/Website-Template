import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../_services/script-loader.service';


@Component({
selector: "app-base-treeview",
templateUrl: "./base-treeview.component.html",
encapsulation: ViewEncapsulation.None,
})
export class BaseTreeviewComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-base-treeview',
['assets/demo/default/custom/components/base/treeview.js']);

}

}