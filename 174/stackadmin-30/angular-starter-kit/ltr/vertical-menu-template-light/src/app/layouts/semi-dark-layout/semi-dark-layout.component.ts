import { Component, OnInit, OnDestroy, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-semi-dark-layout',
  templateUrl: './semi-dark-layout.component.html',
  styleUrls: ['./semi-dark-layout.component.scss']
})
export class SemiDarkLayoutComponent implements OnDestroy, OnInit  {
  
    
    constructor(private renderer: Renderer2, private elRef: ElementRef) {
      this.renderer.addClass(document.body, '2-columns'); 
      this.renderer.setAttribute(document.body, 'data-col', '2-columns');
     }
  
     ngOnInit() {
      const el = this.elRef.nativeElement.querySelector('#stackNav')
      this.renderer.removeClass(el, 'navbar-semi-light');
      this.renderer.addClass(el, 'navbar-semi-dark');   
       const ell = this.elRef.nativeElement.querySelector('#stackLogo')
       this.renderer.setAttribute(ell, 'src', 'assets/app/images/logo/stack-logo-light.png');   
     }
  
    ngOnDestroy() {
      this.renderer.removeClass(document.body, '2-columns');
      const el = this.elRef.nativeElement.querySelector('#stackNav')
      this.renderer.addClass(el, 'navbar-semi-light');
      this.renderer.removeClass(el, 'navbar-semi-dark');

    }
  }
  

