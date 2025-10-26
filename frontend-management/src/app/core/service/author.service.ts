import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthorResponse} from "../model/response/author-response.model";
import {ApiResponse} from "../model/response/api-response.model";
import {ENV} from "../../environment";
import {AttributeCreatedRequest} from "../model/request/attribute-created-request";

@Injectable({
    providedIn: 'root'
})
export class AuthorService {

    private http = inject(HttpClient);
    private readonly url: string = ENV.API_BASE_URL + "author";
    fetch() {
        return this.http.get<ApiResponse<AuthorResponse[]>>(this.url);
    }

    save(value: AttributeCreatedRequest) {
        return this.http.post<ApiResponse<AuthorResponse>>(this.url, value);
    }
}
