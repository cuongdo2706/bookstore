import {Component, inject, model, OnInit, Signal, viewChild} from '@angular/core';
import {CardModule} from "primeng/card";
import {TableLazyLoadEvent, TableModule} from "primeng/table";
import {ProductService} from "../../../service/product.service";
import {CheckboxModule} from "primeng/checkbox";
import {ToastModule} from "primeng/toast";
import {ButtonModule} from "primeng/button";
import {IconFieldModule} from "primeng/iconfield";
import {InputIconModule} from "primeng/inputicon";
import {InputTextModule} from "primeng/inputtext";
import {RippleModule} from "primeng/ripple";
import {FormsModule} from "@angular/forms";
import {ImageModule} from "primeng/image";
import {Paginator, PaginatorModule, PaginatorState} from "primeng/paginator";
import {DecimalPipe} from "@angular/common";
import {DialogModule} from "primeng/dialog";
import {SaveFormComponent} from "./save-form/save-form.component";
import {ProductResponse} from "../../../model/response/product-response.model";
import {FileUploadComponent} from "../../../../shared/file-upload/file-upload.component";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {ConfirmationService, MessageService} from "primeng/api";
import {firstValueFrom} from "rxjs";
import {UpdateFormComponent} from "./update-form/update-form.component";
import {AuthService} from "../../../../core/auth/service/auth.service";
import {AppConstants} from "../../../../app.constants";

@Component({
    selector: 'app-product',
    standalone: true,
    imports: [
        CardModule,
        TableModule,
        CheckboxModule,
        ToastModule,
        ButtonModule,
        IconFieldModule,
        InputIconModule,
        InputTextModule,
        RippleModule,
        FormsModule,
        ImageModule,
        PaginatorModule,
        DecimalPipe,
        DialogModule,
        SaveFormComponent,
        FileUploadComponent,
        ConfirmDialogModule,
        UpdateFormComponent
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
    filterSelection: string = "name-asc";
    expandedRows: { [key: string]: boolean } = {};
    filterOption: {}[] = [
        {name: "Tên: A -> Z", code: "name-asc"},
        {name: "Tên: Z -> A", code: "name-desc"},
        {name: "Giá: thấp -> cao", code: "price-asc"},
        {name: "Giá: cao -> thấp", code: "price-desc"}
    ];
    page: number = 0;
    size: number = 10;
    totalElements: number = 0;
    first: number = 0;
    paginator = viewChild<Paginator>('paginator');
    saveFormVisible: boolean = false;
    updateFormVisible: boolean = false;
    updateId: number | null = null;
    baseImg = AppConstants.BASE_IMAGE;


    ngOnInit() {
        this.onFetchProducts();
    }

    onFetchProducts() {
        this.productService.fetchProducts(0, 10).subscribe({
                next: res => {
                    this.products = res.data.content;
                    this.totalElements = res.data.totalElements;
                }
            }
        );

    }

    searchKeyword() {
        const paginator = this.paginator();
        this.productService.searchProducts(0, this.size, this.keyword, this.filterSelection).subscribe({
                next: res => {
                    this.products = res.data.content;
                    this.totalElements = res.data.totalElements;
                    if (paginator) {
                        paginator.changePage(0);
                    }
                }
            }
        );
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

    onSaveForm(event: any) {
        this.products = event.content;
        this.totalElements = event.totalElements;
    }


    confirmDelete(id: number) {
        this.confirmationService.confirm({
            header: 'Bạn có chắc muốn xoá ?',
            accept: async () => {
                await firstValueFrom(this.productService.deleteProduct(id));

                this.messageService.add({
                    key: 'deleteToast',
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
}
