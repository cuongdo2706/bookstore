import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {ENV} from "../../environment";
import {OrderCreatedRequest} from "../model/request/order-created-request";
import {ApiResponse} from "../model/response/api-response.model";
import {OrderResponse} from "../model/response/order-response.model";
import {OrderFilterRequest} from "../model/request/order-filter-request";
import {PageResponse} from "../model/response/page-response.model";

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    private http = inject(HttpClient);
    private readonly url: string = ENV.API_BASE_URL + "order";

    placeOrder(request: OrderCreatedRequest) {
        return this.http.post<ApiResponse<OrderResponse>>(this.url, request);
    }

    search(request: OrderFilterRequest) {
        return this.http.post<ApiResponse<PageResponse<OrderResponse>>>(`${this.url}/search`, request);
    }

    exportAllOrderExcel() {
        return this.http.get(`${this.url}/export-all-excel`, {
            responseType: "blob"
        });
    }
    exportAllOrderDetailsExcel() {
        return this.http.get(`${this.url}/export-all-details-excel`, {
            responseType: "blob"
        });
    }
    exportSingleOrderExcel(id:number) {
        return this.http.get(`${this.url}/export-single-excel/${id}`, {
            responseType: "blob"
        });
    }
}
