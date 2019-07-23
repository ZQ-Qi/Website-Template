import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';


@Component({
selector: "app-api-events",
templateUrl: "./api-events.component.html",
encapsulation: ViewEncapsulation.None,
})
export class ApiEventsComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-api-events',
['assets/demo/default/custom/components/datatables/api/events.js']);

}

}