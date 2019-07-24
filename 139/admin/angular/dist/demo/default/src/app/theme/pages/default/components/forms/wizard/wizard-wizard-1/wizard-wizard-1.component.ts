import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';


@Component({
selector: "app-wizard-wizard-1",
templateUrl: "./wizard-wizard-1.component.html",
encapsulation: ViewEncapsulation.None,
})
export class WizardWizard1Component implements OnInit, AfterViewInit {


constructor(private _script: ScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.loadScripts('app-wizard-wizard-1',
['assets/demo/default/custom/components/forms/wizard/wizard.js']);

}

}