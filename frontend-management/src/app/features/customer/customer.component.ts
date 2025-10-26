import {Component, inject, OnInit, signal, viewChild} from '@angular/core';
import {CardModule} from "primeng/card";
import {ConfirmationService, MessageService} from "primeng/api";
import {CustomerService} from "../../core/service/customer.service";
import {CustomerResponse} from "../../core/model/response/customer-response.model";
import {Paginator, PaginatorState} from "primeng/paginator";
import {ENV} from "../../environment";
import {TableModule, TableRowExpandEvent} from "primeng/table";
import {PageResponse} from "../../core/model/response/page-response.model";
import {CustomerSaveForm} from "../../shared/components/customer-save-form/customer-save-form";
import {IconField} from "primeng/iconfield";
import {InputIcon} from "primeng/inputicon";
import {InputText} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {Select} from "primeng/select";
import {Button} from "primeng/button";
import {Toast} from "primeng/toast";
import {Image} from "primeng/image";
import {DatePipe} from "@angular/common";

@Component({
    selector: 'app-customer',
    imports: [
        CardModule,
        CustomerSaveForm,
        TableModule,
        IconField,
        InputIcon,
        InputText,
        FormsModule,
        Select,
        Button,
        Paginator,
        Toast,
        Image,
        DatePipe
    ],
    templateUrl: './customer.component.html',
    styleUrl: './customer.component.css',
    providers: [ConfirmationService, MessageService]
})
export class CustomerComponent implements OnInit {
    ngOnInit(): void {
        this.searchCustomer(this.page(), this.size(), false);
    }
    
    private confirmationService = inject(ConfirmationService);
    private messageService = inject(MessageService);
    private customerService = inject(CustomerService);
    customers = signal<CustomerResponse[]>([]);
    nameOrCodeOrPhoneNumKeyword = signal("");
    filterSelection = signal("cre-at-d");
    expandedRows = signal<{ [key: string]: boolean }>({});
    filterOption = signal([
        {name: "Tên: A -> Z", value: "name"},
        {name: "Tên: Z -> A", value: "name-d"},
        {name: "Ngày tạo: gần nhất", value: "cre-at-d"},
        {name: "Ngày tạo: xa nhất", value: "cre-at"}
    ]);
    statusOption = signal([
        {name: "Đang hoạt động", value: true},
        {name: "Ngừng hoạt động", value: false}
    ]);
    statusSelection = signal(true);
    page = signal(1);
    size = signal(10);
    totalElements = signal(0);
    paginator = viewChild<Paginator>('paginator');
    saveFormVisible = signal(false);
    updateFormVisible = signal(false);
    updateId!: number;
    readonly baseImg = ENV.BASE_IMAGE;
    isFilter = signal(false);
    timeout: any;
    
    searchCustomer(
            page: number,
            size: number,
            resetPaginator: boolean
    ) {
        this.customerService.search({
            page: page,
            size: size,
            sortBy: this.filterSelection(),
            searchKeyword: this.nameOrCodeOrPhoneNumKeyword(),
            isActive: this.statusSelection()
        }).subscribe({
            next: res => {
                this.customers.set(res.data.content);
                this.totalElements.set(res.data.totalElements);
                this.expandedRows.set({});
                if (resetPaginator) {
                    const paginator = this.paginator();
                    if (paginator) paginator.changePage(0);
                    if (this.isFilter()) this.isFilter.set(false);
                }
            }
        });
    }
    
    delaySearch() {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            if (this.nameOrCodeOrPhoneNumKeyword !== null) {
                this.isFilter.set(true);
                this.searchCustomer(this.page(), this.size(), true);
            }
        }, 500);
    }
    
    onPageChange(event: PaginatorState) {
        if (this.isFilter()) return;
        this.searchCustomer(event.page! + 1, event.rows!, false);
    }
    
    onRowExpand(event: TableRowExpandEvent<CustomerResponse>) {
        const cusId = event.data.id;
        this.expandedRows.update(rows => {
            const newRows = {...rows};
            Object.keys(newRows).forEach(k => {
                if (k != cusId.toString()) delete newRows[k];
            });
            newRows[cusId] = true;
            return newRows;
        });
    }
    
    onSaveForm(event: PageResponse<CustomerResponse>) {
        this.customers.set(event.content);
        this.totalElements.set(event.totalElements);
    }
    
    saveMessage(event: {}) {
        this.messageService.add(event);
    }
}
