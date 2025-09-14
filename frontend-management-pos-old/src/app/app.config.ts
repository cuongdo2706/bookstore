import {ApplicationConfig, importProvidersFrom, provideZonelessChangeDetection} from '@angular/core';
import {provideRouter, withComponentInputBinding} from '@angular/router';
import {routes} from './app.routes';
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {JwtModule} from "@auth0/angular-jwt";
import {authInterceptor} from "./core/auth/interceptor/auth.interceptor";
import {providePrimeNG} from "primeng/config";
import Aura from '@primeng/themes/aura';
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";

export const appConfig: ApplicationConfig = {
    providers: [
        provideZonelessChangeDetection(),
        provideAnimationsAsync(),
        provideRouter(routes, withComponentInputBinding()),
        providePrimeNG({
            ripple: true,
            theme: {
                preset: Aura,
                options: {
                    darkModeSelector: false,
                    cssLayer: false
                }
            }
        }),
        provideHttpClient(withInterceptors([authInterceptor])),
        importProvidersFrom([JwtModule.forRoot({config: {tokenGetter: () => localStorage.getItem('token')}})]),

    ]
};
