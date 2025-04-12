import {Component, inject, OnInit, signal, viewChild} from '@angular/core';
import {TableModule} from "primeng/table";
import {ProductService} from "../../../service/product.service";
import {Toast} from "primeng/toast";
import {Button} from "primeng/button";
import {IconField} from "primeng/iconfield";
import {InputIcon} from "primeng/inputicon";
import {InputText} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {Image} from "primeng/image";
import {Paginator, PaginatorModule, PaginatorState} from "primeng/paginator";
import {DecimalPipe} from "@angular/common";
import {SaveFormComponent} from "./save-form/save-form.component";
import {ProductResponse} from "../../../model/response/product-response.model";
import {ConfirmDialog} from "primeng/confirmdialog";
import {ConfirmationService, MessageService} from "primeng/api";
import {delay, firstValueFrom} from "rxjs";
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
        ConfirmDialog
    ],
    templateUrl: './product.component.html',
    styleUrl: './product.component.css',
    providers: [ConfirmationService, MessageService]
})
export class ProductComponent implements OnInit {
    private confirmationService = inject(ConfirmationService);
    private messageService = inject(MessageService);
    private productService = inject(ProductService);
    products!: ProductResponse[];
    selectedProductIds!: number[];
    keyword: string = "";
    filterSelection: string = "name";
    expandedRows: { [key: string]: boolean } = {};
    filterOption: {}[] = [
        {name: "Tên: A -> Z", code: "name"},
        {name: "Tên: Z -> A", code: "name-desc"},
        {name: "Giá: thấp -> cao", code: "price"},
        {name: "Giá: cao -> thấp", code: "price-desc"}
    ];
    page: number = 0;
    size: number = 10;
    totalElements: number = 0;
    
    paginator = viewChild<Paginator>('paginator');
    saveFormVisible: boolean = false;
    updateFormVisible: boolean = false;
    updateId!: number;
    baseImg = AppConstants.BASE_IMAGE;
    isFilter = signal(false);


    ngOnInit() {
        this.onFetchProducts();
    }

    onFetchProducts() {
        // this.isFilter.set(true);
        // const paginator = this.paginator();
        this.productService.searchProducts(0, 10, "", this.filterSelection).subscribe({
                next: res => {
                    this.products = res.data.content;
                    this.totalElements = res.data.totalElements;
                    // if (paginator) {
                    //     paginator.changePage(0);
                    // }
                    // this.isFilter.set(false);
                }
            }
        );

    }

    searchKeyword() {
        if (this.keyword !== null || this.keyword !== "") {
            this.isFilter.set(true);
            const paginator = this.paginator();
            this.productService.searchProducts(0, this.size, this.keyword, this.filterSelection)
                .pipe(delay(500))
                .subscribe({
                        next: res => {
                            this.products = res.data.content;
                            this.totalElements = res.data.totalElements;
                            if (paginator) {
                                paginator.changePage(0);
                            }
                            this.isFilter.set(false);
                        }
                    }
                );
        }
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

    onRowExpand(event: any) {
        const productId = event.data.id;
        // Đóng tất cả các hàng khác
        Object.keys(this.expandedRows).forEach(key => {
            if (key !== productId.toString()) {
                delete this.expandedRows[key];
            }
        });
        // Mở hàng hiện tại
        this.expandedRows[productId] = true;
    }

    onPageChange(event: PaginatorState) {
        if (this.isFilter()) return;
        this.productService.searchProducts(event.page!, event.rows!, this.keyword, this.filterSelection).subscribe({
                next: res => {
                    this.products = res.data.content;
                    this.totalElements = res.data.totalElements;
                }
            }
        );
    }

    showSaveDialog() {
        this.saveFormVisible = true;
    }

    onSaveForm(event: PageResponse<ProductResponse>) {
        this.products = event.content;
        this.totalElements = event.totalElements;
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
        this.updateFormVisible = true;
        this.updateId = id;
    }

    onUpdateForm(event: PageResponse<ProductResponse>) {
        this.products = event.content;
        this.totalElements = event.totalElements;
    }

    updateMessage(event: {}) {
        this.messageService.add(event);
    }
}
