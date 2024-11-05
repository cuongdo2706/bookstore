import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {CategoryResponse} from "../model/response/category-response.model";
import {ApiResponse} from "../model/response/api-response";
import {AppConstants} from "../../app.constants";

@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    private http = inject(HttpClient);
    private url: string = AppConstants.API_BASE_URL +  "category";

    fetchCategories() {
        return this.http.get<ApiResponse<CategoryResponse[]>>(this.url);
    }

    postCategories(name: string) {
        let params = new HttpParams().set("name", name);
        return this.http.post<ApiResponse<CategoryResponse>>(this.url, null, {params});
    }
}
