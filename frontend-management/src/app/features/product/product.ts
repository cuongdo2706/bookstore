import {Component, inject, OnInit, signal, viewChild} from '@angular/core';
import {TableModule, TableRowExpandEvent} from "primeng/table";
import {Toast} from "primeng/toast";
import {Button} from "primeng/button";
import {IconField} from "primeng/iconfield";
import {InputIcon} from "primeng/inputicon";
import {InputText} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {Image} from "primeng/image";
import {Paginator, PaginatorModule, PaginatorState} from "primeng/paginator";
import {DecimalPipe, NgOptimizedImage} from "@angular/common";
import {ProductSaveForm} from "./product-save-form/product-save-form";
import {ConfirmDialog} from "primeng/confirmdialog";
import {ConfirmationService, MessageService} from "primeng/api";
import {firstValueFrom} from "rxjs";
import {ProductUpdateForm} from "./product-update-form/product-update-form";
import {Select} from "primeng/select";
import {ENV} from "../../environment";
import {ProductService} from "../../core/service/product.service";
import {ProductResponse} from "../../core/model/response/product-response.model";
import {MultiSelect} from "primeng/multiselect";
import {AuthorResponse} from "../../core/model/response/author-response.model";
import {CategoryResponse} from "../../core/model/response/category-response.model";
import {PublisherResponse} from "../../core/model/response/publisher-response.model";
import {CategoryService} from "../../core/service/category.service";
import {AuthorService} from "../../core/service/author.service";
import {PublisherService} from "../../core/service/publisher.service";
import {buildImgUrl} from "../../shared/utils/image-utils";

@Component({
    selector: 'app-product',
    imports: [
        FormsModule,
        DecimalPipe,
        ProductSaveForm,
        ProductUpdateForm,
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
        NgOptimizedImage,
        MultiSelect
    ],
    templateUrl: './product.html',
    styleUrl: './product.css',
    providers: [ConfirmationService, MessageService]
})
export class Product implements OnInit {
    private confirmationService = inject(ConfirmationService);
    private messageService = inject(MessageService);
    private productService = inject(ProductService);
    private categoryService = inject(CategoryService);
    private authorService = inject(AuthorService);
    private publisherService = inject(PublisherService);
    products = signal<ProductResponse[]>([]);
    authors = signal<AuthorResponse[]>([]);
    categories = signal<CategoryResponse[]>([]);
    publishers = signal<PublisherResponse[]>([]);
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
    page = signal(1);
    size = signal(10);
    totalElements = signal(0);
    selectedCategoryIds = signal<number[]>([]);
    selectedAuthorIds = signal<number[]>([]);
    selectedPublisherIds = signal<number[]>([]);
    paginator = viewChild<Paginator>('paginator');
    saveFormVisible = signal(false);
    updateFormVisible = signal(false);
    updateId!: number;
    isFilter = signal(false);
    timeout: any;
    protected readonly ENV = ENV;
    protected readonly buildImgUrl = buildImgUrl;
    
    
    ngOnInit() {
        this.searchProducts(this.page(), this.size(), false);
        this.fetchAuthors();
        this.fetchCategories();
        this.fetchPublisher();
    }
    
    searchProducts(page: number,
                   size: number,
                   resetPaginator: boolean) {
        this.productService.search({
            page: page,
            size: size,
            sortBy: this.filterSelection(),
            nameOrCodeKeyword: this.nameOrCodeKeyword(),
            isPublished: this.statusSelection(),
            authorIds: this.selectedAuthorIds(),
            categoryIds: this.selectedCategoryIds(),
            publisherIds: this.selectedPublisherIds()
        }).subscribe({
                    next: res => {
                        this.products.set(res.data.content);
                        this.totalElements.set(res.data.totalElements);
                        this.expandedRows.set({});
                        if (resetPaginator) {
                            const paginator = this.paginator();
                            if (paginator) paginator.changePage(0);
                            if (this.isFilter()) this.isFilter.set(false);
                        }
                    }
                }
        );
    }
    
    delaySearch() {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            if (this.nameOrCodeKeyword !== null) {
                this.isFilter.set(true);
                this.searchProducts(this.page(), this.size(), true);
            }
        }, 500);
    }
    
    onPageChange(event: PaginatorState) {
        this.size.set(event.rows!);
        this.page.set(event.page! + 1);
        if (this.isFilter()) return;
        this.searchProducts(this.page(), this.size(), false);
    }
    
    fetchAuthors() {
        this.authorService.fetch().subscribe({
            next: res => {
                this.authors.set(res.data);
            }
        });
    }
    
    fetchPublisher() {
        this.publisherService.fetch().subscribe({
            next: res => {
                this.publishers.set(res.data);
            }
        });
    }
    
    fetchCategories() {
        this.categoryService.fetch().subscribe({
            next: res => {
                this.categories.set(res.data);
            }
        });
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
    
    saveMessage(event: {}) {
        this.messageService.add(event);
    }
    
    
    confirmDelete(id: number) {
        this.confirmationService.confirm({
            header: 'Bạn có chắc muốn xoá ?',
            accept: async () => {
                await firstValueFrom(this.productService.delete(id));
                
                this.messageService.add({
                    severity: 'error',
                    summary: 'Xác nhận',
                    detail: 'Xoá thành công'
                });
                this.searchProducts(this.page(), this.size(), false);
            },
            reject: () => {
            }
        });
    }
    
    async changeStatus(id: number) {
        await firstValueFrom(this.productService.changeStatus(id));
        this.searchProducts(this.page(), this.size(), false);
    }
    
    showUpdateDialog(id: number) {
        this.updateFormVisible.set(true);
        this.updateId = id;
    }
    
    updateMessage(event: {}) {
        this.messageService.add(event);
    }
    
    
}
