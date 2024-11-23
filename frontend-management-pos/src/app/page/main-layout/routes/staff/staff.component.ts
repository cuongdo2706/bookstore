import { Component } from '@angular/core';
import {CardModule} from "primeng/card";

@Component({
  selector: 'app-staff',
  standalone: true,
    imports: [
        CardModule
    ],
  templateUrl: './staff.component.html',
  styleUrl: './staff.component.css'
})
export class StaffComponent {

}
