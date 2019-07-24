import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../_services/script-loader.service';


@Component({
selector: "app-maps-jqvmap",
templateUrl: "./maps-jqvmap.component.html",
encapsulation: ViewEncapsulation.None,
})
export class MapsJqvmapComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-maps-jqvmap',
['assets/vendors/custom/jqvmap/jqvmap.bundle.js',
'assets/demo/default/custom/components/maps/jqvmap.js']);

}

}