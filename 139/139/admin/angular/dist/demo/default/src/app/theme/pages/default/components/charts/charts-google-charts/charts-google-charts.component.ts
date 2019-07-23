import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../_services/script-loader.service';

declare let google: any;
declare let GoogleChartsDemo: any;
@Component({
selector: "app-charts-google-charts",
templateUrl: "./charts-google-charts.component.html",
encapsulation: ViewEncapsulation.None,
})
export class ChartsGoogleChartsComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-charts-google-charts',
['assets/demo/default/custom/components/charts/google-charts.js']);
google.load('visualization', '1', {packages: ['corechart', 'bar', 'line'], callback: GoogleChartsDemo.runDemos()});
}

}