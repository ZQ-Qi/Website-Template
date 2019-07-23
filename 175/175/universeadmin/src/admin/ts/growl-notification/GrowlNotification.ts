import {INotificationOptions} from './INotificationOptions';
import {IPosition} from "./position/IPosition";
import {PositionFactory} from "./position/PositionFactory";

export class GrowlNotification {
  options: INotificationOptions;
  notification: HTMLElement;
  body: HTMLElement;
  template: string;
  position: IPosition;

  constructor(options: INotificationOptions = {}) {
    let d = document;
    this.options = GrowlNotification.assignOptions({}, GrowlNotification.defaultOptions, options);
    // Disable animation duration if animation close set to 'none'
    if (!this.options.animation.close || this.options.animation.close == 'none') {
      this.options.animationDuration = 0;
    }
    this.notification = d.createElement('div');
    this.body = d.querySelector('body');
    this.template = GrowlNotification.template;
    this.position = PositionFactory.newInstance(this.options.position, this.notification, this.options.margin);
  }

  static get defaultOptions(): INotificationOptions {
    return {
      margin: 20,
      type: 'alert',
      title: '',
      description: '',
      image: '',
      closeTimeout: false,
      closeWith: ['click', 'button'],
      animation: {
        open: 'slide-in',
        close: 'slide-out'
      },
      animationDuration: .3,
      position: 'top-right'
    }
  }

  static get template(): string {
    return `<span class="growl-notification__close">
             <span class="ua-icon-alert-close"></span>
           </span>
           {{ image }}
           <div class="growl-notification__content">
             <div class="growl-notification__title">{{ title }}</div>
             <div class="growl-notification__desc">{{ description }}</div>
           </div>`
    ;
  }

  static notify(options: INotificationOptions = {}) {
    return (new GrowlNotification(options)).show();
  }

  show() {
    this.addNotification();
    this.initPosition();
    this.initCloseEvents();

    return this;
  }

  close(): void {
    let self = this;
    let classList = this.notification.classList;
    classList.remove('animation-' + this.options.animation.open);
    classList.add('animation-' + this.options.animation.close);
    classList.add('growl-notification--closed');

    console.log(this.options.animationDuration);

    setTimeout(() => {
      self.remove();
      self.position.recalculate();
    }, this.options.animationDuration * 1000);
  }

  remove() {
    this.notification.remove();

    return this;
  }

  /**
   * Add notification to document
   */
  private addNotification() {
    let options = this.options;
    let template = this.template.replace('{{ title }}', options.title);
    template = template.replace('{{ image }}', options.image ? '<img src="'+options.image+'" alt="" class="growl-notification__image">' : '');
    template = template.replace('{{ description }}', options.description);

    let classList = this.notification.classList;
    classList.add('growl-notification');
    classList.add('growl-notification--' + options.type);
    classList.add('animation-' + options.animation.open);
    classList.add('position-' + options.position);
    if (options.image) { classList.add('growl-notification--image') }

    this.notification.innerHTML = template;
  }

  /**
   * Calculate and set notification positions
   */
  private initPosition() {
    this.body.appendChild(this.notification);
    this.position.calculate();
  }

  private initCloseEvents(): void {
    let self = this;

    if (this.options.closeWith.indexOf('click') > -1) {
      this.notification.classList.add('growl-notification--close-on-click');
      this.notification.addEventListener('click', () => self.close());
    } else if (this.options.closeWith.indexOf('button') > -1) {
      let closeBtn = this.notification.querySelector('.growl-notification__close');
      closeBtn.addEventListener('click', () => self.close());
    }

    if (this.options.closeTimeout && (this.options.closeTimeout > 0)) {
      setTimeout(() => self.close(), this.options.closeTimeout);
    }
  }

  private static assignOptions(target: any, ...sources: any[]): any {
    if (target === null) {
      throw new TypeError('Cannot convert undefined or null to object');
    }

    let to = Object(target);

    for (let index = 1; index < arguments.length; index++) {
      var nextSource = arguments[index];

      if (nextSource !== null) {
        for (let nextKey in nextSource) {
          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }

    return to;
  }
}
