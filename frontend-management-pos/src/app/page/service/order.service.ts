import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppConstants} from "../../app.constants";
import {OrderOfflineRequest} from "../model/request/order-offline-request";
import {ApiResponse} from "../model/response/api-response";
import {OrderResponse} from "../model/response/order-response.model";

@Injectable({
    providedIn: 'root'
})
export class OrderService {

    private http = inject(HttpClient);
    private readonly url: string = AppConstants.API_BASE_URL + "order";
    private readonly offline: string = this.url + "/offline";
    private readonly online: string = this.url + "/online";

    placeOrderOffline(request: OrderOfflineRequest) {
        return this.http.post<ApiResponse<OrderResponse>>(`${this.offline}/place-order`, request);
    }
}
