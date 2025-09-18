import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {PageResponse} from "../model/response/page-response.model";
import {ProductResponse} from "../model/response/product-response.model";
import {ApiResponse} from "../model/response/api-response.model";
import {ProductUpdatedRequest} from "../model/request/product-updated-request.model";
import {ProductCreatedRequest} from "../model/request/product-created-request.model";
import {AppConstants} from "../../app.constants";
import {ProductFilterRequest} from "../model/request/product-filter-request";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private http = inject(HttpClient);
    private readonly url: string = AppConstants.API_BASE_URL + "product";

    searchProducts(filter: ProductFilterRequest) {
        let params = new HttpParams()
            .set("nameOrCodeKeyword", filter.nameOrCodeKeyword)
            .set("sortBy", filter.sortBy)
            .set("page", filter.page)
            .set("size", filter.size)
            .set("isActive", filter.isActive);
        return this.http.get<ApiResponse<PageResponse<ProductResponse>>>(`${this.url}/search`, {params});
    }

    findProductById(id: number) {
        return this.http.get<ApiResponse<ProductResponse>>(`${this.url}/${id}`);
    }

    findAllProductById(ids: number[]) {
        let params = new HttpParams()
            .set("ids", ids.toString());
        return this.http.get<ApiResponse<ProductResponse[]>>(`${this.url}/by-ids`, {params});
    }

    exportExcel() {
        return this.http.get(`${this.url}/export-excel`, {
            responseType: "blob"
        });
    }

    saveProduct(product: ProductCreatedRequest, file: File | null) {
        const formData = new FormData();
        const productBlob = new Blob([JSON.stringify(product)], {type: 'application/json'});
        formData.append('product', productBlob);
        if (file) {
            formData.append('file', file);
        }
        return this.http.post<ApiResponse<ProductResponse>>(this.url, formData);
    }

    updateProduct(id: number, product: ProductUpdatedRequest, file: File | null) {
        const formData = new FormData();
        const productBlob = new Blob([JSON.stringify(product)], {type: 'application/json'});
        formData.append('product', productBlob);
        if (file) {
            formData.append('file', file);
        }
        return this.http.put<ApiResponse<ProductResponse>>(`${this.url}/${id}`, formData);
    }

    deleteProduct(id: number) {
        return this.http.delete<ApiResponse<any>>(`${this.url}/${id}`);
    }

    getProductStock(id: number) {
        return this.http.get<ApiResponse<number>>(`${this.url}/stock/${id}`);
    };
}
