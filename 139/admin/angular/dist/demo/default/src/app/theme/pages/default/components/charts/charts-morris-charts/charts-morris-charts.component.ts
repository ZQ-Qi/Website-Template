import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../_services/script-loader.service';


@Component({
selector: "app-charts-morris-charts",
templateUrl: "./charts-morris-charts.component.html",
encapsulation: ViewEncapsulation.None,
})
export class ChartsMorrisChartsComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-charts-morris-charts',
['assets/demo/default/custom/components/charts/morris-charts.js']);

}

}