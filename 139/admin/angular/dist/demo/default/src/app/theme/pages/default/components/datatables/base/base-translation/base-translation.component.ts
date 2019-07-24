import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';


@Component({
selector: "app-base-translation",
templateUrl: "./base-translation.component.html",
encapsulation: ViewEncapsulation.None,
})
export class BaseTranslationComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-base-translation',
['assets/demo/default/custom/components/datatables/base/translation.js']);

}

}