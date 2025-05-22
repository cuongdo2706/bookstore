import {Component} from '@angular/core';
import {CardModule} from "primeng/card";
import {UIChart} from "primeng/chart";

@Component({
    selector: 'app-dashboard',
    imports: [
        CardModule,
        UIChart
    ],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
