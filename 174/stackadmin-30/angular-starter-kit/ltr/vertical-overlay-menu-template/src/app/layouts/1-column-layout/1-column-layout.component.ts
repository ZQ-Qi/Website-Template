import { Component, OnDestroy, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-1-column-layout',
  templateUrl: './1-column-layout.component.html',
  styleUrls: ['./1-column-layout.component.scss']
})
export class OneColumnLayoutComponent implements OnDestroy {

  constructor(private renderer: Renderer2) {
    this.renderer.addClass(document.body, '1-column');
    this.renderer.setAttribute(document.body, 'data-col', '1-column');
   }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, '1-column');
    // this.renderer.removeAttribute(document.body, 'data-col');
  }

}
