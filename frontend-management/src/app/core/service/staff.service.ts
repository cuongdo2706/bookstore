import {inject, Injectable} from '@angular/core';
import {ENV} from "../../environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class StaffService {
    private http = inject(HttpClient);
    private readonly url: string = ENV.API_BASE_URL + "staff";
}
