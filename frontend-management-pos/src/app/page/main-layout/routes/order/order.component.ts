import {Component, inject, signal} from '@angular/core';
import {CardModule} from "primeng/card";
import {TableModule} from "primeng/table";
import {OrderResponse} from "../../../model/response/order-response.model";
import {OrderService} from "../../../service/order.service";

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
    constructor() {
        this.orderTypeOptions = [
            {label: "Online", value: true},
            {label: "Tại quầy", value: false}
        ];
        this.orderStatusOptions=[
            {label:"Chờ xác nhận",value:0},
            {label:"Đang xử lý",value:1},
            {label:"Chờ giao hàng",value:2},
            {label:"Đã giao hàng",value:3},
            {label:"Đã huỷ",value:4},
            {label:"Chờ xác nhận",value:5}
        ]
    }

    readonly orderTypeOptions!: {}[];
    readonly orderStatusOptions!: {}[];
    private orderService = inject(OrderService);
    orders!: OrderResponse[];
    orderTypeSelection = signal(false);

    isFilter = signal(false);

    onFetchOrder() {
        this.orderService.searchOrder({
            page: 1,
            size: 10,

        });
    }

    timeout: any;

    onSearchOrder() {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {

        });
    }
}
