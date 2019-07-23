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
    this.renderer.removeClass(el, 'navbar-semi-dark');
    this.renderer.addClass(el, 'navbar-light');
    const elm = this.elRef.nativeElement.querySelector('#stackMenu')
    this.renderer.removeClass(elm, 'menu-dark');
    this.renderer.addClass(elm, 'menu-light');
    const elf = this.elRef.nativeElement.querySelector('#stackFooter')
    this.renderer.removeClass(elf, 'footer-dark');
    this.renderer.addClass(elf, 'footer-light');
    const elt = this.elRef.nativeElement.querySelector('#stackNavToggle')
    this.renderer.removeClass(elt, 'white');
    this.renderer.addClass(elt, 'blue-grey');
    this.renderer.addClass(elt, 'darken-3');
    const ell = this.elRef.nativeElement.querySelector('#stackLogo')
    this.renderer.setAttribute(ell, 'src', 'assets/app/images/logo/stack-logo.png');
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, '2-columns');
    // this.renderer.removeAttribute(document.body, 'data-col');
    const el = this.elRef.nativeElement.querySelector('#stackNav')
    this.renderer.addClass(el, 'navbar-semi-dark');
    this.renderer.removeClass(el, 'navbar-light');
    const elm = this.elRef.nativeElement.querySelector('#stackMenu')
    this.renderer.addClass(elm, 'menu-dark');
    this.renderer.removeClass(elm, 'menu-light');
    const elf = this.elRef.nativeElement.querySelector('#stackFooter')
    this.renderer.addClass(elf, 'footer-dark');
    this.renderer.removeClass(elf, 'footer-light');
    const elt = this.elRef.nativeElement.querySelector('#stackNavToggle')
    this.renderer.addClass(elt, 'white');
    this.renderer.removeClass(elt, 'blue-grey');
    this.renderer.removeClass(elt, 'darken-3');
  }
}

