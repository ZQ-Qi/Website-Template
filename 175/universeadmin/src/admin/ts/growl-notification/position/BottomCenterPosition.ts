import {IPosition} from "./IPosition";

export class BottomCenterPosition implements IPosition {
  static readonly position = 'bottom-center';

  constructor(private notification: HTMLElement, private margin: number) { }

  calculate(): void {
    let offset: number = this.margin;
    let notifications = [].slice.call(document.querySelectorAll('.growl-notification.position-' + BottomCenterPosition.position));

    [...notifications].forEach((el) => {
      if (el !== this.notification) {
        offset += (Number(el.clientHeight)) + this.margin;
      }
    });

    let width = parseInt(window.getComputedStyle(this.notification).width, 10);
    this.notification.style.bottom = offset + 'px';
    this.notification.style.left = 'calc(50% - ' + (Math.ceil(width / 2)) + 'px)';
  }

  recalculate(): void {
    let offset: number = this.margin;
    let notifications = [].slice.call(document.querySelectorAll('.growl-notification.position-' + BottomCenterPosition.position));

    [...notifications].forEach((el) => {
      if (el !== this.notification) {
        el.style.bottom = offset + 'px';
        offset += (Number(el.clientHeight)) + this.margin;
      }
    });
  }
}
