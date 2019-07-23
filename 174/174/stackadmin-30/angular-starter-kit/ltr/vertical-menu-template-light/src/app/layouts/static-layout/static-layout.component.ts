import { Component, OnInit, OnDestroy, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-static-layout',
  templateUrl: './static-layout.component.html',
  styleUrls: ['./static-layout.component.scss']
})
export class StaticLayoutComponent implements OnDestroy, OnInit  {
  
    
    constructor(private renderer: Renderer2, private elRef: ElementRef) {
      this.renderer.addClass(document.body, '2-columns'); 
      this.renderer.removeClass(document.body, 'fixed-navbar'); 
      this.renderer.setAttribute(document.body, 'data-col', '2-columns');
     }
  
     ngOnInit() {
      const el = this.elRef.nativeElement.querySelector('#stackNav')
      this.renderer.removeClass(el, 'fixed-top');
      this.renderer.addClass(el, 'navbar-static-top');
      const elm = this.elRef.nativeElement.querySelector('#stackMenu')
      this.renderer.removeClass(elm, 'menu-fixed');
      this.renderer.addClass(elm, 'menu-static');
      
     }
  
    ngOnDestroy() {
      this.renderer.removeClass(document.body, '2-columns');
      this.renderer.addClass(document.body, 'fixed-navbar'); 
      // this.renderer.removeAttribute(document.body, 'data-col');
      const el = this.elRef.nativeElement.querySelector('#stackNav')
      this.renderer.addClass(el, 'fixed-top');
      this.renderer.removeClass(el, 'navbar-static-top');
      const elm = this.elRef.nativeElement.querySelector('#stackMenu')
      this.renderer.addClass(elm, 'menu-fixed');
      this.renderer.removeClass(elm, 'menu-static');
    }
  }
  

