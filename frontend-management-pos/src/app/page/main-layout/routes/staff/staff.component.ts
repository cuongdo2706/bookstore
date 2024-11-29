import { Component } from '@angular/core';
import {CardModule} from "primeng/card";

@Component({
    selector: 'app-staff',
    imports: [
        CardModule
    ],
    templateUrl: './staff.component.html',
    standalone: true,
    styleUrl: './staff.component.css'
})
export class StaffComponent {

}
