import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppConstants} from "../../app.constants";
import {ApiResponse} from "../model/response/api-response";
import {VoucherResponse} from "../model/response/voucher-response.model";

@Injectable({
    providedIn: 'root'
})
export class VoucherService {
    private http = inject(HttpClient);
    private readonly url: string = AppConstants.API_BASE_URL + "voucher";

    findVoucherByCode(code: string) {
        return this.http.get<ApiResponse<VoucherResponse>>(`${this.url}/${code}`);
    }
}
