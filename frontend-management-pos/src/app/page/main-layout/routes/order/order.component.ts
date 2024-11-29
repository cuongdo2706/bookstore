import { Component } from '@angular/core';
import {CardModule} from "primeng/card";

@Component({
    selector: 'app-order',
    imports: [
        CardModule
    ],
    templateUrl: './order.component.html',
    standalone: true,
    styleUrl: './order.component.css'
})
export class OrderComponent {

}
