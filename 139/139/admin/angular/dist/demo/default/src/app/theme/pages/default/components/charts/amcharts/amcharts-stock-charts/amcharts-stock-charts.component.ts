import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';


@Component({
selector: "app-amcharts-stock-charts",
templateUrl: "./amcharts-stock-charts.component.html",
encapsulation: ViewEncapsulation.None,
})
export class AmchartsStockChartsComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-amcharts-stock-charts',
['//www.amcharts.com/lib/3/plugins/export/export.min.js',
'assets/demo/default/custom/components/charts/amcharts/stock-charts.js']);
Helpers.loadStyles('app-amcharts-stock-charts',[
'//www.amcharts.com/lib/3/plugins/export/export.css']);
}

}