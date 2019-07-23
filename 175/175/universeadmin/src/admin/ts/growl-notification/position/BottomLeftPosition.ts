import {IPosition} from "./IPosition";

export class BottomLeftPosition implements IPosition {
  static readonly position: string = 'bottom-left';

  constructor(private notification: HTMLElement, private margin: number) { }

  calculate(): void {
    let offset: number = this.margin;
    let notifications = [].slice.call(document.querySelectorAll('.growl-notification.position-' + BottomLeftPosition.position));

    [...notifications].forEach((el) => {
      if (el !== this.notification) {
        offset += (Number(el.clientHeight)) + this.margin;
      }
    });

    this.notification.style.bottom = offset + 'px';
    this.notification.style.left = this.margin + 'px';
  }

  recalculate() {
    let offset: number = this.margin;
    let notifications = [].slice.call(document.querySelectorAll('.growl-notification.position-' + BottomLeftPosition.position));

    [...notifications].forEach((el) => {
      if (el !== this.notification) {
        el.style.bottom = offset + 'px';
        offset += (Number(el.clientHeight)) + this.margin;
      }
    });
  }
}
