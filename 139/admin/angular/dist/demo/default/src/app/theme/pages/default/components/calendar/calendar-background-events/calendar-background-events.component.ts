import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../_services/script-loader.service';


@Component({
selector: "app-calendar-background-events",
templateUrl: "./calendar-background-events.component.html",
encapsulation: ViewEncapsulation.None,
})
export class CalendarBackgroundEventsComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-calendar-background-events',
['assets/demo/default/custom/components/calendar/background-events.js']);

}

}