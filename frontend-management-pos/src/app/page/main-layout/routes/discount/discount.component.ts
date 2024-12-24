import { Component } from '@angular/core';
import {CardModule} from "primeng/card";

@Component({
    selector: 'app-discount',
    imports: [
        CardModule
    ],
    templateUrl: './discount.component.html',
    styleUrl: './discount.component.css'
})
export class DiscountComponent {

}
