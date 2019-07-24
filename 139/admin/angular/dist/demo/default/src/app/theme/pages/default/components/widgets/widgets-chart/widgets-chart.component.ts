import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../_services/script-loader.service';


@Component({
selector: "app-widgets-chart",
templateUrl: "./widgets-chart.component.html",
encapsulation: ViewEncapsulation.None,
})
export class WidgetsChartComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-widgets-chart',
['assets/vendors/custom/gmaps/gmaps.js',
'assets/app/js/dashboard.js']);

}

}