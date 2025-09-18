import {inject, Injectable} from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    GuardResult,
    MaybeAsync,
    Router,
    RouterStateSnapshot
} from "@angular/router";
import {AuthService} from "../service/auth.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    private router = inject(Router);
    private authService = inject(AuthService);

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {

        if (this.authService.isLoggedIn()) {
            return true;
        } else {
            localStorage.removeItem('token');
            this.router.navigate(['/dang-nhap']).then(() => {
                alert("Hết phiên đăng nhập");
            });
            return false;
        }
    }
}
