import {Component} from '@angular/core';
import {CardModule} from "primeng/card";
import {TableModule} from "primeng/table";

@Component({
    selector: 'app-order',
    imports: [
        CardModule,
        TableModule
    ],
    templateUrl: './order.component.html',
    styleUrl: './order.component.css'
})
export class OrderComponent {
}
