import {inject, Injectable} from "@angular/core";
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
export class LoginGuard implements CanActivate {
    private router = inject(Router);
    private authService = inject(AuthService);

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
        if (this.authService.isLoggedIn()) {
            this.router.navigate(["/thong-ke"]);
            return false;
        } else return true;
    }
}