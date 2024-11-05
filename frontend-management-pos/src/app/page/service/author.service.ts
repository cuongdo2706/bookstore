import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {AuthorResponse} from "../model/response/author-response.model";
import {ApiResponse} from "../model/response/api-response";
import {AppConstants} from "../../app.constants";

@Injectable({
    providedIn: 'root'
})
export class AuthorService {

    private http = inject(HttpClient);
    private url: string = AppConstants.API_BASE_URL + "author";

    fetchAuthors() {
        return this.http.get<ApiResponse<AuthorResponse[]>>(this.url);
    }

    postAuthors(name: string) {
        let params = new HttpParams().set("name", name);
        return this.http.post<ApiResponse<AuthorResponse>>(this.url, null, {params});
    }
}
