export interface INotificationOptions {
  margin?: number;
  type?: string;
  title?: string;
  description?: string,
  image?: string,
  closeTimeout?: boolean | number,
  closeWith?: string[],
  animation?: {
    open: string,
    close: string
  },
  animationDuration?: number,
  position?: string
}
