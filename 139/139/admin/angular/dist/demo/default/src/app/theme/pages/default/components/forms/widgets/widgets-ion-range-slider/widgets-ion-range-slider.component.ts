import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';


@Component({
selector: "app-widgets-ion-range-slider",
templateUrl: "./widgets-ion-range-slider.component.html",
encapsulation: ViewEncapsulation.None,
})
export class WidgetsIonRangeSliderComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-widgets-ion-range-slider',
['assets/demo/default/custom/components/forms/widgets/ion-range-slider.js']);

}

}