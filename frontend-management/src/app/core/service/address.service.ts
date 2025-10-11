import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AppConstants} from "../../app.constants";
import {ApiResponse} from "../model/response/api-response.model";
import {Province} from "../model/response/province-response.model";
import {Commune} from "../model/response/commune-response.model";

@Injectable({
    providedIn: 'root'
})
export class AddressService{
    private http = inject(HttpClient);
    private readonly url: string = AppConstants.API_BASE_URL + "address";
    
    fetchProvinces(){
        return this.http.get<ApiResponse<Province[]>>(`${this.url}/province`)
    }

    fetchCommunes(code:number){
        return this.http.get<ApiResponse<Commune[]>>(`${this.url}/province/${code}/commune`)
    }
}