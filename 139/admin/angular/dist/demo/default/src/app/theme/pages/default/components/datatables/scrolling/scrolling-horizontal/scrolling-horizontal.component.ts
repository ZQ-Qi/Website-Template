import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';


@Component({
selector: "app-scrolling-horizontal",
templateUrl: "./scrolling-horizontal.component.html",
encapsulation: ViewEncapsulation.None,
})
export class ScrollingHorizontalComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-scrolling-horizontal',
['assets/demo/default/custom/components/datatables/scrolling/horizontal.js']);

}

}