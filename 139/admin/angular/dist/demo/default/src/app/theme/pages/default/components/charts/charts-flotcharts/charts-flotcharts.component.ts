import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../_services/script-loader.service';


@Component({
selector: "app-charts-flotcharts",
templateUrl: "./charts-flotcharts.component.html",
encapsulation: ViewEncapsulation.None,
})
export class ChartsFlotchartsComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-charts-flotcharts',
['assets/vendors/custom/flot/flot.bundle.js',
'assets/demo/default/custom/components/charts/flotcharts.js']);

}

}