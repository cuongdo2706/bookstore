import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppConstants} from "../../app.constants";
import {ApiResponse} from "../model/response/api-response.model";
import {CouponResponse} from "../model/response/coupon-response.model";

@Injectable({
    providedIn: 'root'
})
export class CouponService {
    private http = inject(HttpClient);
    private readonly url: string = AppConstants.API_BASE_URL + "coupon";

    findCouponByCode(code: string) {
        return this.http.get<ApiResponse<CouponResponse>>(`${this.url}/${code}`);
    }
}
