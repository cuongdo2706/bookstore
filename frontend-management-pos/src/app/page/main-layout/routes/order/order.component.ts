import { Component } from '@angular/core';
import {CardModule} from "primeng/card";

@Component({
  selector: 'app-order',
  standalone: true,
    imports: [
        CardModule
    ],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {

}
