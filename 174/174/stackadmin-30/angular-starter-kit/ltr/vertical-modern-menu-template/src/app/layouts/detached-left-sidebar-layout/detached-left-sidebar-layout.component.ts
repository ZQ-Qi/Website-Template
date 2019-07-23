import { Component, Renderer2, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-detached-left-sidebar-layout',
  templateUrl: './detached-left-sidebar-layout.component.html',
  styleUrls: ['./detached-left-sidebar-layout.component.scss']
})
export class DetachedLeftSidebarLayoutComponent implements OnDestroy {
  
    constructor(private renderer: Renderer2) {
      this.renderer.addClass(document.body, 'content-detached-left-sidebar');
      this.renderer.setAttribute(document.body, 'data-col', 'content-detached-left-sidebar');
     }
  
    ngOnDestroy() {
      this.renderer.removeClass(document.body, 'content-detached-left-sidebar');
      // this.renderer.removeAttribute(document.body, 'data-col');
    }
  
  }
