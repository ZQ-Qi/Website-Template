import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-detached-sticky-left-sidebar-layout',
  templateUrl: './detached-sticky-left-sidebar-layout.component.html',
  styleUrls: ['./detached-sticky-left-sidebar-layout.component.scss']
})
export class DetachedStickyLeftSidebarLayoutComponent implements OnDestroy, OnInit {
  
    constructor(private renderer: Renderer2) {
      this.renderer.addClass(document.body, 'content-detached-left-sidebar');
      this.renderer.setAttribute(document.body, 'data-col', 'content-detached-left-sidebar');
     }
  
    ngOnDestroy() {
      this.renderer.removeClass(document.body, 'content-detached-left-sidebar');
      // this.renderer.removeAttribute(document.body, 'data-col');
    }

    ngOnInit(){
      $.getScript('./assets/app/vendors/js/ui/jquery.sticky.js');
      $.getScript('./assets/app/js/scripts/pages/sk-content-sidebar.js');
    }
  
  }