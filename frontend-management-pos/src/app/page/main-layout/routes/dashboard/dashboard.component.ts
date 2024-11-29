import { Component } from '@angular/core';
import {CardModule} from "primeng/card";

@Component({
    selector: 'app-dashboard',
    imports: [
        CardModule
    ],
    templateUrl: './dashboard.component.html',
    standalone: true,
    styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
