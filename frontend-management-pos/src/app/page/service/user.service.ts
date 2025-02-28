import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {AppConstants} from "../../app.constants";
import {ApiResponse} from "../model/response/api-response";
import {UserResponse} from "../model/response/user-response";
import {PageResponse} from "../model/response/page-response.model";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private http = inject(HttpClient);
    private readonly customerUrl: string = AppConstants.API_BASE_URL + "user/customer";
    private readonly staffUrl: string = AppConstants.API_BASE_URL + "user/staff";

    searchCustomer(page: number, size: number, keyword: string, sort: string) {
        let params = new HttpParams()
            .set("keyword", keyword)
            .set("sort", sort)
            .set("page", page)
            .set("size", size);
        return this.http.get<ApiResponse<PageResponse<UserResponse>>>(`${this.customerUrl}/search`, {params});
    }

}
