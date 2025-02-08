import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppConstants} from "../../app.constants";
import {ApiResponse} from "../model/response/api-response";
import {UserResponse} from "../model/response/user-response";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private http = inject(HttpClient);
    private readonly customerUrl: string = AppConstants.API_BASE_URL + "user/customer";
    private readonly staffUrl: string = AppConstants.API_BASE_URL + "user/staff";

    findCustomerByCodeOrPhoneNum(keyword: string) {
        return this.http.get<ApiResponse<UserResponse>>(`${this.customerUrl}/${keyword}`);
    }

}
