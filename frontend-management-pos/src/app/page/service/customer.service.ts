import {inject, Injectable} from '@angular/core';
import {AppConstants} from "../../app.constants";
import {HttpClient, HttpParams} from "@angular/common/http";
import {ApiResponse} from "../model/response/api-response";
import {PageResponse} from "../model/response/page-response.model";
import {CustomerResponse} from "../model/response/customer-response";

@Injectable({
    providedIn: 'root'
})
export class CustomerService {
    private http = inject(HttpClient);
    private readonly url: string = AppConstants.API_BASE_URL + "customer";

    searchCustomer(page: number, size: number, keyword: string, sort: string) {
        let params = new HttpParams()
            .set("keyword", keyword)
            .set("sort", sort)
            .set("page", page)
            .set("size", size);
        return this.http.get<ApiResponse<PageResponse<CustomerResponse>>>(`${this.url}/search`, {params});
    }
}
