import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { debounceTime} from 'rxjs/operators';

//Interface
export interface IAlert {
    id: number;
    type: string;
    message: string;
}

@Component({
    selector: 'app-alerts',
    templateUrl: './alerts.component.html',
    styleUrls: ['./alerts.component.scss'],
})

export class AlertsComponent implements OnInit {
    @Input()
    public alerts: Array<IAlert> = [];

    private backup: Array<IAlert>;

    private _success = new Subject<string>();

    staticAlertClosed = false;
    successMessage: string;
    // Closable Alert's code
    constructor() {
        this.alerts.push(
            {
                id: 1,
                type: 'success',
                message: 'This is a success alert',
            }, {
                id: 2,
                type: 'info',
                message: 'This is an info alert',
            }, {
                id: 3,
                type: 'warning',
                message: 'This is a warning alert',
            }, {
                id: 4,
                type: 'danger',
                message: 'This is a danger alert',
            }, {
                id: 5,
                type: 'primary',
                message: 'This is a primary alert',
            }, {
                id: 6,
                type: 'secondary',
                message: 'This is a secondary alert',
            }, {
                id: 7,
                type: 'light',
                message: 'This is a light alert',
            }, {
                id: 8,
                type: 'dark',
                message: 'This is a dark alert',
            });
        this.backup = this.alerts.map((alert: IAlert) => Object.assign({}, alert));
    }

    // Close Alert on close icon click
    public closeAlert(alert: IAlert) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }

    // Reset all the alerts on click of reset button
    public reset() {
        this.alerts = this.backup.map((alert: IAlert) => Object.assign({}, alert));
    }

    ngOnInit(): void {
        // Auto close alert timer
        setTimeout(() => this.staticAlertClosed = true, 20000);

        // Success message
        this._success.subscribe((message) => this.successMessage = message);

        // Subscribe section code
        this._success.debounceTime(5000).subscribe(() => this.successMessage = null);
    }

    // Self closing alert's message change code
    public changeSuccessMessage() {
        this._success.next(`${new Date()} - Message successfully changed.`);
    }
}