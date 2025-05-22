import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import {provideRouter, withComponentInputBinding} from '@angular/router';
import {routes} from './app.routes';
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {JwtModule} from "@auth0/angular-jwt";
import {authInterceptor} from "./core/auth/interceptor/auth.interceptor";
import {providePrimeNG} from "primeng/config";
import Aura from '@primeng/themes/aura';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({eventCoalescing: true}),
        provideRouter(routes, withComponentInputBinding()),
        provideAnimationsAsync(),
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
