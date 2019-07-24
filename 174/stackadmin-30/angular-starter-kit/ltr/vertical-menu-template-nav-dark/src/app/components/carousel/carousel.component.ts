import { Component } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [NgbCarouselConfig] // add NgbCarouselConfig to the component providers
})

export class CarouselComponent  {
  ngOnInit() { 
      //  Code formatting script
      $.getScript('./assets/app/vendors/js/ui/prism.min.js');
  }
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
  }
}
