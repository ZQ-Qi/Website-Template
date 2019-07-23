import { Component, OnDestroy, Renderer2 } from '@angular/core';
@Component({
  selector: 'app-2-columns-layout',
  templateUrl: './2-columns-layout.component.html',
  styleUrls: ['./2-columns-layout.component.scss']
})
export class TwoColumnsLayoutComponent implements OnDestroy {

  constructor(private renderer: Renderer2) {
    this.renderer.addClass(document.body, '2-columns');
    this.renderer.setAttribute(document.body, 'data-col', '2-columns');
   }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, '2-columns');
    // this.renderer.removeAttribute(document.body, 'data-col');
  }

}
