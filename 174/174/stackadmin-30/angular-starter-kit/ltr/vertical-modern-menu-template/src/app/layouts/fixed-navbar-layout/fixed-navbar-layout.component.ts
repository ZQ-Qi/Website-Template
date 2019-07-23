import { Component, OnDestroy, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-fixed-navbar-layout',
  templateUrl: './fixed-navbar-layout.component.html',
  styleUrls: ['./fixed-navbar-layout.component.scss']
})
export class FixedNavbarLayoutComponent implements OnDestroy {
  
    constructor(private renderer: Renderer2) {
      this.renderer.addClass(document.body, '2-columns');
      this.renderer.setAttribute(document.body, 'data-col', '2-columns');
     }
  
    ngOnDestroy() {
      this.renderer.removeClass(document.body, '2-columns');
      // this.renderer.removeAttribute(document.body, 'data-col');
    }
  
  }
  