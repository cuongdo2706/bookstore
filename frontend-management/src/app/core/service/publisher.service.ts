import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ENV} from "../../environment";
import {ApiResponse} from "../model/response/api-response.model";
import {PublisherResponse} from "../model/response/publisher-response.model";
import {AttributeCreatedRequest} from "../model/request/attribute-created-request";
@Injectable({
  providedIn: 'root'
})
export class PublisherService {
    private http=inject(HttpClient);
    private readonly url: string = ENV.API_BASE_URL + "publisher";
    fetch() {
        return this.http.get<ApiResponse<PublisherResponse[]>>(this.url);
    }

    save(value: AttributeCreatedRequest) {
        return this.http.post<ApiResponse<PublisherResponse>>(this.url, value);
    }
}
