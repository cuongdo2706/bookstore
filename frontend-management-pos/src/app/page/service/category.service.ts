import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PageResponse} from "../../core/model/page.model";
import {Category} from "../model/response/category.model";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private http = inject(HttpClient);
  private url: string = "http://localhost:8080/api/v1/category";

  fetchCategories(){
    return this.http.get<Category[]>(this.url)
  }
}
