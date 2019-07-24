import { Component, OnInit, ElementRef, Renderer2, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-light-layout',
  templateUrl: './light-layout.component.html',
  styleUrls: ['./light-layout.component.scss']
})
export class LightLayoutComponent implements OnDestroy, OnInit {


  constructor(private renderer: Renderer2, private elRef: ElementRef) {
    this.renderer.addClass(document.body, '2-columns');
    this.renderer.setAttribute(document.body, 'data-col', '2-columns');
  }

  ngOnInit() {
    const el = this.elRef.nativeElement.querySelector('#stackNav')
    this.renderer.removeClass(el, 'navbar-dark');
    this.renderer.removeClass(el, 'bg-primary');
    this.renderer.addClass(el, 'navbar-light');
    const elm = this.elRef.nativeElement.querySelector('#stackMenu')
    this.renderer.addClass(elm, 'menu-light');
    this.renderer.removeClass(elm, 'menu-dark');
    const elb = this.elRef.nativeElement.querySelector('#stackBrandText')
    this.renderer.removeClass(elb, 'white');
    const ell = this.elRef.nativeElement.querySelector('#stackLogo')
    this.renderer.setAttribute(ell, 'src', 'assets/app/images/logo/stack-logo.png');
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, '2-columns');
    // this.renderer.removeAttribute(document.body, 'data-col');
    const el = this.elRef.nativeElement.querySelector('#stackNav')
    this.renderer.addClass(el, 'navbar-dark');
    this.renderer.addClass(el, 'bg-primary');
    this.renderer.removeClass(el, 'navbar-light');
    const elb = this.elRef.nativeElement.querySelector('#stackBrandText')
    this.renderer.addClass(elb, 'white');
    const elm = this.elRef.nativeElement.querySelector('#stackMenu')
    this.renderer.removeClass(elm, 'menu-light');
    this.renderer.addClass(elm, 'menu-dark');

  }
}

