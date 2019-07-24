import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../_services/script-loader.service';


@Component({
selector: "app-calendar-google",
templateUrl: "./calendar-google.component.html",
encapsulation: ViewEncapsulation.None,
})
export class CalendarGoogleComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-calendar-google',
['assets/demo/default/custom/components/calendar/google.js']);

}

}