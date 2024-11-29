import { Component } from '@angular/core';
import {CardModule} from "primeng/card";

@Component({
    selector: 'app-voucher',
    imports: [
        CardModule
    ],
    templateUrl: './voucher.component.html',
    standalone: true,
    styleUrl: './voucher.component.css'
})
export class VoucherComponent {

}
