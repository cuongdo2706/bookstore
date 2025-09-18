import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";
import {Router} from "@angular/router";
import {Login} from "../model/request/login-request.model";
import {JwtHelperService} from "@auth0/angular-jwt";
import {AppConstants} from "../../app.constants";
import {TokenResponse} from "../model/response/token-response.model";
import {ApiResponse} from "../model/response/api-response.model";


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private readonly url = AppConstants.API_BASE_URL + "auth";
    private http = inject(HttpClient);
    private router = inject(Router);
    private jwtHelper = inject(JwtHelperService);

    storeToken(data: TokenResponse) {
        localStorage.setItem('token', data.token);
    }

    isLoggedIn() {
        const token = this.getToken();
        return token ? !this.jwtHelper.isTokenExpired(token) : false;
    }

    getToken(): string | null {
        return localStorage.getItem('token');
    }

    getPayload() {
        const token = this.getToken();
        if (token) {
            return this.jwtHelper.decodeToken(token);
        }
    }

    login(login: Login): Observable<ApiResponse<TokenResponse>> {
        return this.http.post<ApiResponse<TokenResponse>>(`${this.url}`, login)
            .pipe(
                catchError(err => {
                    if (err.status === 401) {
                        console.error("Invalid credential");
                    }
                    return of();
                }),
                tap(data => {
                    const loginSuccessData = data.data as TokenResponse;
                    this.storeToken(loginSuccessData);
                    this.router.navigate(['/']);
                })
            );
    }
}
