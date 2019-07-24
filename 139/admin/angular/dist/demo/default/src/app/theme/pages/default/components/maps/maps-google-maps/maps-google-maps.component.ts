import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../_services/script-loader.service';


@Component({
selector: "app-maps-google-maps",
templateUrl: "./maps-google-maps.component.html",
encapsulation: ViewEncapsulation.None,
})
export class MapsGoogleMapsComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-maps-google-maps',
['assets/vendors/custom/gmaps/gmaps.js',
'assets/demo/default/custom/components/maps/google-maps.js']);

}

}