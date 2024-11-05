import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {PageResponse} from "../model/response/page-response.model";
import {ProductResponse} from "../model/response/product-response.model";
import {ApiResponse} from "../model/response/api-response";
import {BookUpdatedRequest} from "../model/request/book-updated-request.model";
import {BookCreatedRequest} from "../model/request/book-created-request.model";
import {AppConstants} from "../../app.constants";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private http = inject(HttpClient);
    private url: string = AppConstants.API_BASE_URL + "book";

    fetchProducts(page: number, size: number) {
        let params = new HttpParams()
            .set("page", page)
            .set("size", size);
        return this.http.get<ApiResponse<PageResponse<ProductResponse>>>(this.url, {params});
    };

    searchProducts(page: number, size: number, keyword: string, sort: string) {
        let params = new HttpParams()
            .set("keyword", keyword)
            .set("sort", sort)
            .set("page", page)
            .set("size", size);
        return this.http.get<ApiResponse<PageResponse<ProductResponse>>>(`${this.url}/search`, {params});
    }

    findProductById(id: number) {
        return this.http.get<ApiResponse<ProductResponse>>(`${this.url}/${id}`);
    }

    exportExcel() {
        return this.http.get(`${this.url}/export-excel`, {
            responseType: "blob"
        });
    }

    saveProduct(product: BookCreatedRequest) {
        return this.http.post<ApiResponse<ProductResponse>>(this.url, product);
    }

    updateProduct(id: number, product: BookUpdatedRequest) {
        return this.http.put<ApiResponse<ProductResponse>>(`${this.url}/${id}`, product);
    }

    deleteProduct(id: number) {
        return this.http.delete<ApiResponse<any>>(`${this.url}/${id}`);
    }
}
