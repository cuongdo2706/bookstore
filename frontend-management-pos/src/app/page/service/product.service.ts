import {inject, Injectable, signal} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Product} from "../model/response/product.model";
import {Observable} from "rxjs";
import {BookSearchRequest} from "../model/request/BookSearchRequest";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http = inject(HttpClient);
  private url:string = "http://localhost:8080/api/v1/book";

  fetchProducts() {
    return this.http.get<Product[]>(this.url)
  };

  searchProducts(request:BookSearchRequest) {
    let params=new HttpParams()
      .set("page",request.page)
      .set("size",request.size)
      .set("keyword",request.keyword)

    return this.http.get<Product[]>(`${this.url}/search`,{params})
  }

  exportExcel(){
    return this.http.get(`${this.url}/export-excel`,{
      responseType: "blob"
    })
  }
}
