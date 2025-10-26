import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ENV} from "../../environment";
import {ApiResponse} from "../model/response/api-response.model";
import {OrderDetailResponse} from "../model/response/order-detail-response.model";

@Injectable({
    providedIn: 'root'
})
export class OrderDetailService {
    private http = inject(HttpClient);
    private readonly url: string = ENV.API_BASE_URL + "order-detail";

    findByOrderId(id: number) {
        return this.http.get<ApiResponse<OrderDetailResponse[]>>(`${this.url}/${id}`);
    }
}
