import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../_services/script-loader.service';


@Component({
selector: "app-calendar-basic",
templateUrl: "./calendar-basic.component.html",
encapsulation: ViewEncapsulation.None,
})
export class CalendarBasicComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-calendar-basic',
['assets/demo/default/custom/components/calendar/basic.js']);

}

}