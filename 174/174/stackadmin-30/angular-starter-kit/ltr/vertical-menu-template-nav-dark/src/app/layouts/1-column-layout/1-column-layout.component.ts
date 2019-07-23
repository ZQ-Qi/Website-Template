import { Component, OnDestroy, Renderer2, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-1-column-layout',
  templateUrl: './1-column-layout.component.html',
  styleUrls: ['./1-column-layout.component.scss']
})
export class OneColumnLayoutComponent implements OnDestroy, OnInit {

  constructor(private renderer: Renderer2, private elRef: ElementRef) {
    this.renderer.addClass(document.body, '1-column');
    this.renderer.setAttribute(document.body, 'data-col', '1-column');
  }

  ngOnInit() {
    const elm = this.elRef.nativeElement.querySelector('#stackNavMenu')
    this.renderer.removeClass(elm, 'd-block');
    this.renderer.addClass(elm, 'd-none');
    const elb = this.elRef.nativeElement.querySelector('#stackNavBack')
    this.renderer.removeClass(elb, 'd-none');
    this.renderer.addClass(elb, 'd-block');
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, '1-column');
    const elm = this.elRef.nativeElement.querySelector('#stackNavMenu')
    this.renderer.addClass(elm, 'd-block');
    this.renderer.removeClass(elm, 'd-none');
    const elb = this.elRef.nativeElement.querySelector('#stackNavBack')
    this.renderer.addClass(elb, 'd-none');
    this.renderer.removeClass(elb, 'd-block');
  }

}
