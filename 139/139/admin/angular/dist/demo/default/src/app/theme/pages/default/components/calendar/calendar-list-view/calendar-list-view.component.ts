import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../_services/script-loader.service';


@Component({
selector: "app-calendar-list-view",
templateUrl: "./calendar-list-view.component.html",
encapsulation: ViewEncapsulation.None,
})
export class CalendarListViewComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-calendar-list-view',
['assets/demo/default/custom/components/calendar/list-view.js']);

}

}