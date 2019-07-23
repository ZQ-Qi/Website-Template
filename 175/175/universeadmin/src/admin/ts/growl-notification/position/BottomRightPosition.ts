import {IPosition} from "./IPosition";

export class BottomRightPosition implements IPosition {
  static readonly position: string = 'bottom-right';

  constructor(private notification: HTMLElement, private margin: number) { }

  calculate(): void {
    let offset: number = this.margin;
    let notifications = [].slice.call(document.querySelectorAll('.growl-notification.position-' + BottomRightPosition.position));

    [...notifications].forEach((el) => {
      if (el !== this.notification) {
        offset += (Number(el.clientHeight)) + this.margin;
      }
    });

    this.notification.style.bottom = offset + 'px';
    this.notification.style.right = this.margin + 'px';
  }

  recalculate() {
    let offset: number = this.margin;
    let notifications = [].slice.call(document.querySelectorAll('.growl-notification.position-' + BottomRightPosition.position));

    [...notifications].forEach((el) => {
      if (el !== this.notification) {
        el.style.bottom = offset + 'px';
        offset += (Number(el.clientHeight)) + this.margin;
      }
    });
  }
}
