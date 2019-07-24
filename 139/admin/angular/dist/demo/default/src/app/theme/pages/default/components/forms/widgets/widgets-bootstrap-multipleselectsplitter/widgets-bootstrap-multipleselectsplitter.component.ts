import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';


@Component({
selector: "app-widgets-bootstrap-multipleselectsplitter",
templateUrl: "./widgets-bootstrap-multipleselectsplitter.component.html",
encapsulation: ViewEncapsulation.None,
})
export class WidgetsBootstrapMultipleselectsplitterComponent implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-widgets-bootstrap-multipleselectsplitter',
['assets/demo/default/custom/components/forms/widgets/bootstrap-multipleselectsplitter.js']);

}

}