import { Component } from '@angular/core';
import {CardModule} from "primeng/card";

@Component({
  selector: 'app-voucher',
  standalone: true,
    imports: [
        CardModule
    ],
  templateUrl: './voucher.component.html',
  styleUrl: './voucher.component.css'
})
export class VoucherComponent {

}
