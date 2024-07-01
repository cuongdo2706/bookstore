import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = "http://localhost:8080/api/v1/auth/login";
  constructor(private http: HttpClient) {}
  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.url}/login`, { username, password })
      .pipe(
        tap(response => {
          if (response && response.token) {
            localStorage.setItem('token', response.token);
          }
        })
      );
  }
}
