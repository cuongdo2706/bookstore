import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {AppConstants} from "../../app.constants";
import {OrderCreatedRequest} from "../model/request/order-created-request";
import {ApiResponse} from "../model/response/api-response";
import {OrderResponse} from "../model/response/order-response.model";
import {OrderFilterRequest} from "../model/request/order-filter-request";
import {PageResponse} from "../model/response/page-response.model";

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    private http = inject(HttpClient);
    private readonly url: string = AppConstants.API_BASE_URL + "order";

    placeOrder(request: OrderCreatedRequest) {
        return this.http.post<ApiResponse<OrderResponse>>(this.url, request);
    }

    searchOrder(request: OrderFilterRequest) {
        return this.http.post<ApiResponse<PageResponse<OrderResponse>>>(`${this.url}/search`, request);
    }
}
