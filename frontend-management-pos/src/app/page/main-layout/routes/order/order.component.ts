import {Component, inject, OnInit, signal, viewChild} from '@angular/core';
import {CardModule} from "primeng/card";
import {TableModule, TableRowExpandEvent} from "primeng/table";
import {OrderResponse} from "../../../model/response/order-response.model";
import {OrderService} from "../../../service/order.service";
import {Paginator, PaginatorState} from "primeng/paginator";
import {IconField} from "primeng/iconfield";
import {InputIcon} from "primeng/inputicon";
import {InputText} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {Select} from "primeng/select";
import {MultiSelect} from "primeng/multiselect";
import {DatePipe, NgClass} from "@angular/common";
import {OrderDetailService} from "../../../service/order-detail.service";

interface SelectForm {
    label: string,
    value: any
}

@Component({
    selector: 'app-order',
    imports: [
        CardModule,
        TableModule,
        IconField,
        InputIcon,
        InputText,
        FormsModule,
        Select,
        MultiSelect,
        DatePipe,
        Paginator,
        NgClass
    ],
    templateUrl: './order.component.html',
    styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit {
    constructor() {
        this.orderTypeOptions.set([
            {label: "Online", value: 0},
            {label: "Tại quầy", value: 1}
        ]);
        this.orderStatusOptions.set([
            {label: "Chờ xác nhận", value: 0},
            {label: "Đang xử lý", value: 1},
            {label: "Chờ giao hàng", value: 2},
            {label: "Đã giao", value: 3},
            {label: "Đã huỷ", value: 4},
            {label: "Hoàn thành", value: 5}
        ]);
        this.sortByOption.set([
            {label: "Mới nhất", value: "ord-d"},
            {label: "Cũ nhất", value: "ord"},
        ]);
    }

    ngOnInit(): void {
        this.onFetchOrder();
    }

    paginator = viewChild<Paginator>('paginator');
    readonly orderTypeOptions = signal<null | SelectForm[]>(null);
    readonly orderStatusOptions = signal<null | SelectForm[]>(null);
    readonly sortByOption = signal<null | SelectForm[]>(null);
    private orderService = inject(OrderService);
    private orderDetailService = inject(OrderDetailService);
    expandedRows: { [key: string]: boolean } = {};
    orders = signal<OrderResponse[]>([]);
    orderTypeSelection = signal<number[]>([0, 1]);
    orderStatusSelection = signal<number[]>([0, 5]);
    sortBySelection = signal<string>("ord-d");
    orderCodeKeyword = signal<string>("");
    totalElements = signal<number>(0);
    page = signal<number>(0);
    size = signal<number>(10);
    isFilter = signal(false);

    getOrderStatusLabel(value:number):string{
        return this.orderStatusOptions()!.find(item=>item.value===value)!.label;
    }

    onFetchOrder() {
        this.orderService.searchOrder({
            page: 1,
            size: 10,
            sortBy: this.sortBySelection(),
            orderType: this.orderTypeSelection(),
            orderStatus: this.orderStatusSelection(),
            orderCodeKeyword: this.orderCodeKeyword()
        }).subscribe({
            next: res => {
                this.orders.set(res.data.content);
                this.totalElements.set(res.data.totalElements);
            }
        });
    }

    timeout: any;

    onSearchOrder() {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            if (this.orderCodeKeyword() !== null) {
                this.isFilter.set(true);
                const paginator = this.paginator();
                this.orderService.searchOrder({
                    page: 1,
                    size: this.size(),
                    sortBy: this.sortBySelection(),
                    orderType: this.orderTypeSelection(),
                    orderStatus: this.orderStatusSelection(),
                    orderCodeKeyword: this.orderCodeKeyword()
                })
                    .subscribe({
                        next: res => {
                            console.log(res.data.content);
                            this.orders.set(res.data.content);
                            this.totalElements.set(res.data.totalElements);
                            if (paginator) {
                                paginator.changePage(0);
                            }
                            this.isFilter.set(false);
                        }
                    });
            }
        }, 500);
    }

    onPageChange(event: PaginatorState) {
        if (this.isFilter()) return;
        this.orderService.searchOrder({
            page: event.page! + 1,
            size: event.rows!,
            sortBy: this.sortBySelection(),
            orderType: this.orderTypeSelection(),
            orderStatus: this.orderStatusSelection(),
            orderCodeKeyword: this.orderCodeKeyword()
        }).subscribe({
            next: res => {
                this.orders.set(res.data.content);
                this.totalElements.set(res.data.totalElements);
            }
        });
    }

    onRowExpand(event: TableRowExpandEvent<OrderResponse>) {
        const orderId = event.data.id;
        this.orderDetailService.findByOrderId(orderId).subscribe({
            next: res => {
                this.orders.update(orders => {
                    return orders.map(order =>
                        order.id === orderId ? {...order, orderDetails: res.data} : order
                    );
                });
            }
        });
        Object.keys(this.expandedRows).forEach(key => {
            if (key !== orderId.toString()) {
                delete this.expandedRows[key];
            }
        });
        this.expandedRows[orderId] = true;
    }
}
