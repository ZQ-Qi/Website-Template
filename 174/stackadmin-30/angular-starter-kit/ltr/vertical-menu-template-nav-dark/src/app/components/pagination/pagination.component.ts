import { Component } from '@angular/core';
import {NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss'],
    providers: [NgbPaginationConfig] // add NgbPaginationConfig to the component providers
})

export class PaginationComponent {
    // Variable Declaration
    page = 4;
    page1 = 4;
    page2 = 4;
    page3 = 4;
    page4 = 4;
    page5 = 4;
    page6 = 4;
    page7 = 4;
    currentPage = 2;
    currentPage1 = 2;
    currentPage2 = 2;
    isDisabled = true;

    // Toggle Disabled
    toggleDisabled() {
        this.isDisabled = !this.isDisabled;
    }
   
    constructor(config: NgbPaginationConfig) {
    // customize default values of paginations used by this component tree
    config.boundaryLinks = true;
  }
}