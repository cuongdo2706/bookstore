import {Component, inject, OnInit, Signal} from '@angular/core';
import {MenubarModule} from "primeng/menubar";
import {CardModule} from "primeng/card";
import {TableModule} from "primeng/table";
import {ProductService} from "../../../service/product.service";
import {Product} from "../../../model/response/product.model";
import {CheckboxModule} from "primeng/checkbox";
import {ToastModule} from "primeng/toast";
import {ButtonModule} from "primeng/button";
import {IconFieldModule} from "primeng/iconfield";
import {InputIconModule} from "primeng/inputicon";
import {InputTextModule} from "primeng/inputtext";
import {RippleModule} from "primeng/ripple";
import {BookSearchRequest} from "../../../model/request/BookSearchRequest";
import {FormsModule} from "@angular/forms";
import {ImageModule} from "primeng/image";
import {PaginatorModule} from "primeng/paginator";
import {DecimalPipe} from "@angular/common";

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
    DecimalPipe
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  private productService = inject(ProductService);
  products: Product[] = [];
  productSearch!: BookSearchRequest;
  keyword: string = ""
  expandedRows: { [key: string]: boolean } = {};

  ngOnInit() {
    this.onFetchProducts();
  }

  onFetchProducts() {
    this.productService.fetchProducts().subscribe(
      res => {
        this.products = res;
      }
    )
  }

  searchKeyword() {
    this.productSearch = {
      page: 1,
      size: 10,
      keyword: this.keyword
    }
    this.productService.searchProducts(this.productSearch).subscribe({
        next: res => {
          this.products = res;
          console.log(this.products)
        },
        error: err => {
          this.products = []
        }
      }
    )
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


  onPageChange(event: any) {

  }
}
