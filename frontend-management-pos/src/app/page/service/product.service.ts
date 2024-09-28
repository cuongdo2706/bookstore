import {inject, Injectable, signal} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {PageResponse} from "../../core/model/page.model";
import {ProductResponse} from "../model/response/product-response.model";
import {BookCreationRequest} from "../model/request/BookCreationRequest.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http = inject(HttpClient);
  private url: string = "http://localhost:8080/api/v1/book";

  fetchProducts(page: number, size: number) {
    let params = new HttpParams()
      .set("page", page)
      .set("size", size)
    return this.http.get<PageResponse<ProductResponse>>(this.url, {params});
  };

  searchProducts(page: number, size: number, keyword: string, sort: string) {
    let params = new HttpParams()
      .set("keyword", keyword)
      .set("sort", sort)
      .set("page", page)
      .set("size", size)
    return this.http.get<PageResponse<ProductResponse>>(`${this.url}/search`, {params});
  }

  exportExcel() {
    return this.http.get(`${this.url}/export-excel`, {
      responseType: "blob"
    });
  }

  saveProduct(product: BookCreationRequest) {
    return this.http.post<ProductResponse>(this.url, product);
  }
}
