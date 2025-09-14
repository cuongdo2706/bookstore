import {Component} from '@angular/core';
import {CardModule} from "primeng/card";

@Component({
    selector: 'app-coupon',
    imports: [
        CardModule
    ],
    templateUrl: './coupon.component.html',
    styleUrl: './coupon.component.css'
})
export class CouponComponent {

}
