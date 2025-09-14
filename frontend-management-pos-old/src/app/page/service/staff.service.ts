import {inject, Injectable} from '@angular/core';
import {AppConstants} from "../../app.constants";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class StaffService {
    private http = inject(HttpClient);
    private readonly url: string = AppConstants.API_BASE_URL + "staff";
}
