import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppConstants} from "../../app.constants";
import {ApiResponse} from "../model/response/api-response.model";
import {PublisherResponse} from "../model/response/publisher-response.model";
import {AttributeCreatedRequest} from "../model/request/attribute-created-request";
import {AuthorResponse} from "../model/response/author-response.model";

@Injectable({
  providedIn: 'root'
})
export class PublisherService {
    private http=inject(HttpClient);
    private readonly url: string = AppConstants.API_BASE_URL + "publisher";
    fetch() {
        return this.http.get<ApiResponse<PublisherResponse[]>>(this.url);
    }

    save(value: AttributeCreatedRequest) {
        return this.http.post<ApiResponse<PublisherResponse>>(this.url, value);
    }
}
