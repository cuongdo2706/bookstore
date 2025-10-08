import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {CategoryResponse} from "../model/response/category-response.model";
import {ApiResponse} from "../model/response/api-response.model";
import {AppConstants} from "../../app.constants";
import {AttributeCreatedRequest} from "../model/request/attribute-created-request";

@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    private http = inject(HttpClient);
    private readonly url: string = AppConstants.API_BASE_URL + "category";

    fetch() {
        return this.http.get<ApiResponse<CategoryResponse[]>>(this.url);
    }

    save(value: AttributeCreatedRequest) {
        return this.http.post<ApiResponse<CategoryResponse>>(this.url, value);
    }
}
