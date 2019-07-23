import { Component, Renderer2, OnDestroy, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-dark-layout',
  templateUrl: './dark-layout.component.html',
  styleUrls: ['./dark-layout.component.scss']
})
export class DarkLayoutComponent implements OnDestroy, OnInit {


  constructor(private renderer: Renderer2, private elRef: ElementRef) {
    this.renderer.addClass(document.body, '2-columns');
    this.renderer.setAttribute(document.body, 'data-col', '2-columns');
  }

  ngOnInit() {
    const el = this.elRef.nativeElement.querySelector('#stackNav')
    this.renderer.removeClass(el, 'navbar-light');
    this.renderer.removeClass(el, 'bg-primary');
    this.renderer.addClass(el, 'navbar-dark');
    const elm = this.elRef.nativeElement.querySelector('#stackMenu')
    this.renderer.removeClass(elm, 'menu-light');
    this.renderer.addClass(elm, 'menu-dark');
    const elf = this.elRef.nativeElement.querySelector('#stackFooter')
    this.renderer.addClass(elf, 'footer-dark');
    this.renderer.removeClass(elf, 'footer-light');
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, '2-columns');
    // this.renderer.removeAttribute(document.body, 'data-col');
    const el = this.elRef.nativeElement.querySelector('#stackNav')
    this.renderer.addClass(el, 'navbar-light');
    this.renderer.addClass(el, 'bg-primary');
    this.renderer.removeClass(el, 'navbar-dark');
    const elm = this.elRef.nativeElement.querySelector('#stackMenu')
    this.renderer.addClass(elm, 'menu-light');
    this.renderer.removeClass(elm, 'menu-dark');
    const elf = this.elRef.nativeElement.querySelector('#stackFooter')
    this.renderer.removeClass(elf, 'footer-dark');
    this.renderer.addClass(elf, 'footer-light');
  }
}
