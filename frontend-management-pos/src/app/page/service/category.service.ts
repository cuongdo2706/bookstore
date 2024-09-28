import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {CategoryResponse} from "../model/response/category-response.model";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private http = inject(HttpClient);
  private url: string = "http://localhost:8080/api/v1/category";

  fetchCategories() {
    return this.http.get<CategoryResponse[]>(this.url)
  }

  postCategories(name: string) {
    let params = new HttpParams().set("name", name);
    return this.http.post<CategoryResponse>(this.url,null, {params});
  }
}
