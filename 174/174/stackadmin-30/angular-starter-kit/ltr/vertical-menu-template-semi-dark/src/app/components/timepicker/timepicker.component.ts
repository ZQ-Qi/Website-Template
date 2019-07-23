import { Component } from '@angular/core';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.scss']
})
export class TimepickerComponent {
  // Variable Declaration
  meridian = true;
  time: NgbTimeStruct = { hour: 13, minute: 30, second: 30 };
  meridianTime: NgbTimeStruct = { hour: 13, minute: 30, second: 30 };
  secondsTime: NgbTimeStruct = { hour: 13, minute: 30, second: 30 };
  spinnersTime: NgbTimeStruct = { hour: 13, minute: 30, second: 30 };
  stepsTime: NgbTimeStruct = { hour: 13, minute: 30, second: 30 };
  validationTime: NgbTimeStruct = { hour: 13, minute: 30, second: 30 };
  seconds = true;
  spinners = true;
  hourStep = 1;
  minuteStep = 15;
  secondStep = 30;


  ctrl = new FormControl('', (control: FormControl) => {
    const value = control.value;

    if (!value) {
      return null;
    }

    if (value.hour < 12) {
      return { tooEarly: true };
    }
    if (value.hour > 13) {
      return { tooLate: true };
    }

    return null;
  });

  // Using for Meridian
  toggleMeridian() {
    this.meridian = !this.meridian;
  }

  // Using for Seconds  
  toggleSeconds() {
    this.seconds = !this.seconds;
  }

  // Using for Spinners
  toggleSpinners() {
    this.spinners = !this.spinners;
  }
}
