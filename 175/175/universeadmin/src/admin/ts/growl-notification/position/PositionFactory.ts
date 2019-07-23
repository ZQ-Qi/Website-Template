import {IPosition} from "./IPosition";
import {TopRightPosition} from "./TopRightPosition";
import {TopCenterPosition} from "./TopCenterPosition";
import {BottomRightPosition} from "./BottomRightPosition";
import {TopLeftPosition} from "./TopLeftPosition";
import {BottomCenterPosition} from "./BottomCenterPosition";
import {BottomLeftPosition} from "./BottomLeftPosition";

export class PositionFactory {
  static newInstance(position: string, notification: HTMLElement, margin: number): IPosition {
    let positionClass = null;

    if (position === TopRightPosition.position) {
      positionClass = TopRightPosition;
    } else if (position === TopCenterPosition.position) {
      positionClass = TopCenterPosition;
    } else if (position === BottomRightPosition.position) {
      positionClass = BottomRightPosition;
    } else if (position === TopLeftPosition.position) {
      positionClass = TopLeftPosition;
    } else if (position === BottomCenterPosition.position) {
      positionClass = BottomCenterPosition;
    } else if (position === BottomLeftPosition.position) {
      positionClass = BottomLeftPosition;
    }

    return new positionClass(notification, margin);
  }
}
