import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';


@Component({
selector: "app-scrolling-vertical",
templateUrl: "./scrolling-vertical.component.html",
encapsulation: ViewEncapsulation.None,
})
export class ScrollingVerticalComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-scrolling-vertical',
['assets/demo/default/custom/components/datatables/scrolling/vertical.js']);

}

}