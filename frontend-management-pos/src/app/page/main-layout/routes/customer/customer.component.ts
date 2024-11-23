import { Component } from '@angular/core';
import {CardModule} from "primeng/card";

@Component({
  selector: 'app-customer',
  standalone: true,
    imports: [
        CardModule
    ],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

}
