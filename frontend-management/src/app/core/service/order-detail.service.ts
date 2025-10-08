import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppConstants} from "../../app.constants";
import {ApiResponse} from "../model/response/api-response.model";
import {OrderDetailResponse} from "../model/response/order-detail-response.model";

@Injectable({
    providedIn: 'root'
})
export class OrderDetailService {
    private http = inject(HttpClient);
    private readonly url: string = AppConstants.API_BASE_URL + "order-detail";

    findByOrderId(id: number) {
        return this.http.get<ApiResponse<OrderDetailResponse[]>>(`${this.url}/${id}`);
    }
}
