import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {AuthorResponse} from "../model/response/author-response.model";

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private http = inject(HttpClient);
  private url: string = "http://localhost:8080/api/v1/author";

  fetchAuthors() {
    return this.http.get<AuthorResponse[]>(this.url)
  }

  postAuthors(name: string) {
    let params = new HttpParams().set("name", name);
    return this.http.post<AuthorResponse>(this.url, null, {params});
  }
}
