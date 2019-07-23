import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../_services/script-loader.service';


@Component({
selector: "app-calendar-external-events",
templateUrl: "./calendar-external-events.component.html",
encapsulation: ViewEncapsulation.None,
})
export class CalendarExternalEventsComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-calendar-external-events',
['assets/vendors/custom/jquery-ui/jquery-ui.bundle.js',
'assets/demo/default/custom/components/calendar/external-events.js']);

}

}