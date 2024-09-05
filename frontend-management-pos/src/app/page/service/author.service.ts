import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Author} from "../model/response/author.model";

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private http = inject(HttpClient);
  private url: string = "http://localhost:8080/api/v1/author";

  fetchAuthors() {
    return this.http.get<Author[]>(this.url)
  }
}
