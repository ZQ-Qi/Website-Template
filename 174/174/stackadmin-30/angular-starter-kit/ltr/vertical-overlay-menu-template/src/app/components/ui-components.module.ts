import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UIComponentsRoutingModule } from "./ui-components-routing.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JsonpModule } from '@angular/http';
import { MatchHeightModule } from "../shared/directives/match-height.directive";

import { ButtonsComponent } from "./buttons/buttons.component";
import { AlertsComponent } from "./alerts/alerts.component";
import { DropdownsComponent } from "./dropdowns/dropdowns.component";
import { PaginationComponent } from "./pagination/pagination.component";
import { ProgressBarsComponent } from "./progress/progress.component";
import { ModalsComponent, NgbdModalContent } from "./modals/modals.component";
import { CollapseComponent } from "./collapse/collapse.component";
import { AccordionComponent } from './accordion/accordion.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { PopoverComponent } from './popover/popover.component';
import { RatingComponent } from './rating/rating.component';
import { TabsComponent } from './tabs/tabs.component';
import { TimepickerComponent } from './timepicker/timepicker.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TypeaheadComponent } from './typeahead/typeahead.component';

@NgModule({
    imports: [
        CommonModule,
        UIComponentsRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        JsonpModule,
        NgbModule,
        MatchHeightModule
    ],
    declarations: [
        ButtonsComponent,
        AlertsComponent,
        DropdownsComponent,
        PaginationComponent,
        ProgressBarsComponent,
        ModalsComponent,
        CollapseComponent,
        AccordionComponent,
        CarouselComponent,
        DatepickerComponent,
        PopoverComponent,
        RatingComponent,
        TabsComponent,
        TimepickerComponent,
        TooltipComponent,
        TypeaheadComponent,
        NgbdModalContent,
    ],
    providers: [  ],
    entryComponents:[NgbdModalContent]
})
export class UIComponentsModule { }
