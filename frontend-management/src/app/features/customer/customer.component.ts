import { Component } from '@angular/core';
import {CardModule} from "primeng/card";

@Component({
    selector: 'app-customer',
    imports: [
        CardModule
    ],
    templateUrl: './customer.component.html',
    styleUrl: './customer.component.css'
})
export class CustomerComponent {

}
