import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';


@Component({
selector: "app-amcharts-maps",
templateUrl: "./amcharts-maps.component.html",
encapsulation: ViewEncapsulation.None,
})
export class AmchartsMapsComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-amcharts-maps',
['//www.amcharts.com/lib/3/plugins/export/export.min.js',
'assets/demo/default/custom/components/charts/amcharts/maps.js']);
Helpers.loadStyles('app-amcharts-maps',[
'//www.amcharts.com/lib/3/plugins/export/export.css']);
}

}