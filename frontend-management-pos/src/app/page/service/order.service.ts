import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppConstants} from "../../app.constants";
import {OrderCreatedRequest} from "../model/request/order-created-request";
import {ApiResponse} from "../model/response/api-response";
import {OrderOfflineResponse} from "../model/response/order-offline-response.model";

@Injectable({
    providedIn: 'root'
})
export class OrderService {

    private http = inject(HttpClient);
    private readonly url: string = AppConstants.API_BASE_URL + "order";
    private readonly offline: string = this.url + "/offline";
    private readonly online: string = this.url + "/online";

    placeOrderOffline(request: OrderCreatedRequest) {
        return this.http.post<ApiResponse<OrderOfflineResponse>>(`${this.offline}/place-order`, request);
    }
}
