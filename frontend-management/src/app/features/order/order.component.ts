import {Component, inject, OnInit, signal, viewChild} from '@angular/core';
import {CardModule} from "primeng/card";
import {TableModule, TableRowExpandEvent} from "primeng/table";
import {Paginator, PaginatorState} from "primeng/paginator";
import {IconField} from "primeng/iconfield";
import {InputIcon} from "primeng/inputicon";
import {InputText} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {Select} from "primeng/select";
import {MultiSelect} from "primeng/multiselect";
import {DatePipe, DecimalPipe} from "@angular/common";
import {IftaLabel} from "primeng/iftalabel";
import {Textarea} from "primeng/textarea";
import {Button} from "primeng/button";
import {Router} from "@angular/router";
import {SplitButton} from "primeng/splitbutton";
import {MenuItem} from "primeng/api";
import {OrderResponse} from "../../core/model/response/order-response.model";
import {OrderService} from "../../core/service/order.service";
import {OrderDetailService} from "../../core/service/order-detail.service";

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
        DecimalPipe,
        IftaLabel,
        Textarea,
        Button,
        SplitButton
    ],
    templateUrl: './order.component.html',
    styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit {
    constructor() {
        this.exportItems.set([
            {
                label: "Cơ bản",
                command: () => this.onExportAllOrderExcel()
            },
            {
                label: "Chi tiết",
                command: () => this.onExportAllOrderDetailsExcel()
            }
        ]);
        this.orderTypeOptions.set([
            {label: "Trực tiếp + Giao hàng", value: null},
            {label: "Online", value: true},
            {label: "Tại quầy", value: false}
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
    readonly exportItems = signal<undefined | MenuItem[]>([]);
    readonly orderTypeOptions = signal<null | SelectForm[]>(null);
    readonly orderStatusOptions = signal<null | SelectForm[]>(null);
    readonly sortByOption = signal<null | SelectForm[]>(null);
    private orderService = inject(OrderService);
    private orderDetailService = inject(OrderDetailService);
    private router = inject(Router);
    expandedRows  = signal<{ [key: string]: boolean }>({});
    orders = signal<OrderResponse[]>([]);
    orderTypeSelection = signal<boolean | null>(null);
    orderStatusSelection = signal<number[]>([0, 5]);
    sortBySelection = signal<string>("ord-d");
    orderCodeKeyword = signal<string>("");
    totalElements = signal<number>(0);
    page = signal<number>(0);
    size = signal<number>(10);
    isFilter = signal(false);

    getOrderStatusLabel(value: number): string {
        return this.orderStatusOptions()!.find(item => item.value === value)!.label;
    }

    onFetchOrder() {
        this.orderService.search({
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
                this.orderService.search({
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
        this.orderService.search({
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
        this.expandedRows.update(rows => {
            const newRows = {...rows};
            Object.keys(newRows).forEach(k => {
                if (k !== orderId.toString()) delete newRows[k];
            });
            newRows[orderId] = true;
            return newRows;
        });
    }

    onCreateOrder() {
        this.router.navigate(['/ban-hang'], {queryParams: {create: true}});
    }

    onExportAllOrderExcel() {
        this.orderService.exportAllOrderExcel().subscribe({
            next: (response: Blob) => {
                const blob = new Blob([response], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = 'Danh-sach-hoa-don.xlsx';
                link.click();
                window.URL.revokeObjectURL(url);
            },
            error: (error) => {
                console.error('Lỗi khi tải file Excel:', error);
            }
        });
    }

    onExportAllOrderDetailsExcel() {
        this.orderService.exportAllOrderDetailsExcel().subscribe({
            next: (response: Blob) => {
                const blob = new Blob([response], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = 'Danh-sach-chi-tiet-hoa-don.xlsx';
                link.click();
                window.URL.revokeObjectURL(url);
            },
            error: (error) => {
                console.error('Lỗi khi tải file Excel:', error);
            }
        });
    }

    onExportSingleOrderExcel(id: number, code: string) {
        this.orderService.exportSingleOrderExcel(id).subscribe({
            next: (response: Blob) => {
                const blob = new Blob([response], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = 'Chi-tiet-hoa-don-' + code + '.xlsx';
                link.click();
                window.URL.revokeObjectURL(url);
            },
            error: (error) => {
                console.error('Lỗi khi tải file Excel:', error);
            }
        });
    }

    onPrint() {
    }
}
