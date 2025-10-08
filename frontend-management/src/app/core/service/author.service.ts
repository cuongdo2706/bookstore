import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {AuthorResponse} from "../model/response/author-response.model";
import {ApiResponse} from "../model/response/api-response.model";
import {AppConstants} from "../../app.constants";
import {AttributeCreatedRequest} from "../model/request/attribute-created-request";

@Injectable({
    providedIn: 'root'
})
export class AuthorService {

    private http = inject(HttpClient);
    private readonly url: string = AppConstants.API_BASE_URL + "author";
    fetch() {
        return this.http.get<ApiResponse<AuthorResponse[]>>(this.url);
    }

    save(value: AttributeCreatedRequest) {
        return this.http.post<ApiResponse<AuthorResponse>>(this.url, value);
    }
}
