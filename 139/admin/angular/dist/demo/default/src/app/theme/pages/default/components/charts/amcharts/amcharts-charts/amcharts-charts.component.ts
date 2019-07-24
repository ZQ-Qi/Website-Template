import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';


@Component({
selector: "app-amcharts-charts",
templateUrl: "./amcharts-charts.component.html",
encapsulation: ViewEncapsulation.None,
})
export class AmchartsChartsComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-amcharts-charts',
['//www.amcharts.com/lib/3/plugins/tools/polarScatter/polarScatter.min.js',
'//www.amcharts.com/lib/3/plugins/export/export.min.js',
'assets/demo/default/custom/components/charts/amcharts/charts.js']);
Helpers.loadStyles('app-amcharts-charts',[
'//www.amcharts.com/lib/3/plugins/export/export.css']);
}

}