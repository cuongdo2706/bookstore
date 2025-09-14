import {Component, inject, OnInit, signal, viewChild} from '@angular/core';
import {TableModule, TableRowExpandEvent} from "primeng/table";
import {ProductService} from "../../../service/product.service";
import {Toast} from "primeng/toast";
import {Button} from "primeng/button";
import {IconField} from "primeng/iconfield";
import {InputIcon} from "primeng/inputicon";
import {InputText} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {Image} from "primeng/image";
import {Paginator, PaginatorModule, PaginatorState} from "primeng/paginator";
import {DecimalPipe, NgOptimizedImage} from "@angular/common";
import {SaveFormComponent} from "./save-form/save-form.component";
import {ProductResponse} from "../../../model/response/product-response.model";
import {ConfirmDialog} from "primeng/confirmdialog";
import {ConfirmationService, MessageService} from "primeng/api";
import {firstValueFrom} from "rxjs";
import {UpdateFormComponent} from "./update-form/update-form.component";
import {AppConstants} from "../../../../app.constants";
import {PageResponse} from "../../../model/response/page-response.model";
import {Select} from "primeng/select";

@Component({
    selector: 'app-product',
    imports: [
        FormsModule,
        DecimalPipe,
        SaveFormComponent,
        UpdateFormComponent,
        Select,
        Toast,
        Button,
        IconField,
        InputIcon,
        InputText,
        Image,
        PaginatorModule,
        TableModule,
        ConfirmDialog,
        NgOptimizedImage
    ],
    templateUrl: './product.component.html',
    styleUrl: './product.component.css',
    providers: [ConfirmationService, MessageService]
})
export class ProductComponent implements OnInit {
    private confirmationService = inject(ConfirmationService);
    private messageService = inject(MessageService);
    private productService = inject(ProductService);
    products = signal<ProductResponse[]>([]);
    nameOrCodeKeyword = signal("");
    filterSelection = signal("name");
    expandedRows = signal<{ [key: string]: boolean }>({});
    filterOption = signal([
        {name: "Tên: A -> Z", value: "name"},
        {name: "Tên: Z -> A", value: "name-d"},
        {name: "Giá: thấp -> cao", value: "price"},
        {name: "Giá: cao -> thấp", value: "price-d"}
    ]);
    statusOption = signal([
        {name: "Đang bán", value: true},
        {name: "Ngừng bán", value: false}
    ]);
    statusSelection = signal(true);
    page = signal(0);
    size = signal(10);
    totalElements = signal(0);

    paginator = viewChild<Paginator>('paginator');
    saveFormVisible = signal(false);
    updateFormVisible = signal(false);
    updateId!: number;
    readonly baseImg = AppConstants.BASE_IMAGE;
    isFilter = signal(false);


    ngOnInit() {
        this.onFetchProducts();
    }

    onFetchProducts() {
        this.productService.searchProducts({
            page: 1,
            size: 10,
            sortBy: this.filterSelection(),
            nameOrCodeKeyword: "",
            isActive: this.statusSelection()
        }).subscribe({
                next: res => {
                    this.products.set(res.data.content);
                    this.totalElements.set(res.data.totalElements);
                }
            }
        );

    }

    timeout: any;

    onSearchProduct() {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            if (this.nameOrCodeKeyword !== null) {
                this.isFilter.set(true);
                const paginator = this.paginator();
                this.productService.searchProducts({
                    page: 1,
                    size: this.size(),
                    sortBy: this.filterSelection(),
                    nameOrCodeKeyword: this.nameOrCodeKeyword(),
                    isActive: this.statusSelection()
                })
                    .subscribe({
                        next: res => {
                            this.products.set(res.data.content);
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

    exportExcel() {
        this.productService.exportExcel().subscribe({
            next: (response: Blob) => {
                const blob = new Blob([response], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = 'Danh-sach-san-pham.xlsx';
                link.click();
                window.URL.revokeObjectURL(url);
            },
            error: (error) => {
                console.error('Lỗi khi tải file Excel:', error);
            }
        });
    }

    onRowExpand(event: TableRowExpandEvent<ProductResponse>) {
        const productId = event.data.id;
        // Đóng tất cả các hàng khác
        this.expandedRows.update(rows => {
            const newRows = {...rows};
            Object.keys(newRows).forEach(k => {
                if (k !== productId.toString()) delete newRows[k];
            });
            newRows[productId] = true;
            return newRows;
        });
    }

    onPageChange(event: PaginatorState) {
        if (this.isFilter()) return;
        this.productService.searchProducts({
            page: event.page! + 1,
            size: event.rows!,
            sortBy: this.filterSelection(),
            nameOrCodeKeyword: this.nameOrCodeKeyword(),
            isActive: this.statusSelection()
        }).subscribe({
                next: res => {
                    this.products.set(res.data.content);
                    this.totalElements.set(res.data.totalElements);
                }
            }
        );
    }


    onSaveForm(event: PageResponse<ProductResponse>) {
        this.products.set(event.content);
        this.totalElements.set(event.totalElements);
    }

    saveMessage(event: {}) {
        this.messageService.add(event);
    }


    confirmDelete(id: number) {
        this.confirmationService.confirm({
            header: 'Bạn có chắc muốn xoá ?',
            accept: async () => {
                await firstValueFrom(this.productService.deleteProduct(id));

                this.messageService.add({
                    severity: 'error',
                    summary: 'Xác nhận',
                    detail: 'Xoá thành công'
                });


                this.onFetchProducts();

            },
            reject: () => {
            }
        });
    }

    showUpdateDialog(id: number) {
        this.updateFormVisible.set(true);
        this.updateId = id;
    }

    onUpdateForm(event: PageResponse<ProductResponse>) {
        this.products.set(event.content);
        this.totalElements.set(event.totalElements);
    }

    updateMessage(event: {}) {
        this.messageService.add(event);
    }
}
