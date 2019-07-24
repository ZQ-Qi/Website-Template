import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  // Checkbox Buttons
    model = {
        left: true,
        middle: false,
        right: false
    };

    // Radio Buttons
    modelRadio = 1;

    // Checkbox and Radio Buttons (Reactive Forms)
    public checkboxGroupForm: FormGroup;
    public radioGroupForm: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.checkboxGroupForm = this.formBuilder.group({
            left: true,
            middle: false,
            right: false
        });
        this.radioGroupForm = this.formBuilder.group({
             'modelRadioForm': 'Left'
        });
    }
}
