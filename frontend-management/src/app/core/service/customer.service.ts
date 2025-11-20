import {inject, Injectable} from '@angular/core';
import {ENV} from "../../environment";
import {HttpClient} from "@angular/common/http";
import {ApiResponse} from "../model/response/api-response.model";
import {PageResponse} from "../model/response/page-response.model";
import {CustomerResponse} from "../model/response/customer-response.model";
import {CustomerCreatedRequest} from "../model/request/customer-created-request";
import {CustomerFilterRequest} from "../model/request/customer-filter-request";
import {CustomerUpdatedRequest} from "../model/request/customer-updated-request";


@Injectable({
    providedIn: 'root'
})
export class CustomerService {
    private http = inject(HttpClient);
    private readonly url: string = ENV.API_BASE_URL + "customer";
    
    search(body: CustomerFilterRequest) {
        return this.http.post<ApiResponse<PageResponse<CustomerResponse>>>(`${this.url}/search`, body);
    }
    
    findById(id: number) {
        return this.http.get<ApiResponse<CustomerResponse>>(`${this.url}/${id}`);
    }
    
    save(customer: CustomerCreatedRequest, file: File | null) {
        const formData = new FormData();
        const customerBlob = new Blob([JSON.stringify(customer)], {type: 'application/json'});
        formData.append('customer', customerBlob);
        if (file) {
            formData.append('file', file);
        }
        return this.http.post<ApiResponse<CustomerResponse>>(this.url, formData);
    }
    
    update(id: number, customer: CustomerUpdatedRequest, file: File | null) {
        const formData = new FormData();
        const cusBlob = new Blob([JSON.stringify(customer)], {type: 'application/json'});
        formData.append('customer', cusBlob);
        if (file) {
            formData.append('file', file);
        }
        return this.http.put<ApiResponse<CustomerResponse>>(`${this.url}/${id}`, formData);
    }
    
    delete(id: number) {
        return this.http.delete<ApiResponse<any>>(`${this.url}/${id}`);
    }
    
    changeStatus(id: number) {
        return this.http.patch<ApiResponse<CustomerResponse>>(`${this.url}/${id}/change-status`, null);
    }
}
