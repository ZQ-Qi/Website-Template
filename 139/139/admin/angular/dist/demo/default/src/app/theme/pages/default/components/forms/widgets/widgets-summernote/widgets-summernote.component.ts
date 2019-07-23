import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';


@Component({
selector: "app-widgets-summernote",
templateUrl: "./widgets-summernote.component.html",
encapsulation: ViewEncapsulation.None,
})
export class WidgetsSummernoteComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-widgets-summernote',
['assets/demo/default/custom/components/forms/widgets/summernote.js']);

}

}