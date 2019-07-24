import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';


@Component({
selector: "app-scrolling-both",
templateUrl: "./scrolling-both.component.html",
encapsulation: ViewEncapsulation.None,
})
export class ScrollingBothComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-scrolling-both',
['assets/demo/default/custom/components/datatables/scrolling/both.js']);

}

}