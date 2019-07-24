import { Component, Renderer2, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-detached-right-sidebar-layout',
  templateUrl: './detached-right-sidebar-layout.component.html',
  styleUrls: ['./detached-right-sidebar-layout.component.scss']
})
export class DetachedRightSidebarLayoutComponent implements OnDestroy {
  
    constructor(private renderer: Renderer2) {
      this.renderer.addClass(document.body, 'content-detached-right-sidebar');
      this.renderer.setAttribute(document.body, 'data-col', 'content-detached-right-sidebar');
     }
  
    ngOnDestroy() {
      this.renderer.removeClass(document.body, 'content-detached-right-sidebar');
      // this.renderer.removeAttribute(document.body, 'data-col');
    }
  
  }