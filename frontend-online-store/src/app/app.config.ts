import {ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection} from '@angular/core';
import {provideRouter, withComponentInputBinding} from '@angular/router';

import {routes} from './app.routes';
import {provideClientHydration, withEventReplay} from '@angular/platform-browser';
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {providePrimeNG} from "primeng/config";
import Aura from "@primeuix/themes/aura";
import {JwtModule} from "@auth0/angular-jwt";
import {provideHttpClient, withInterceptors} from "@angular/common/http";

export const appConfig: ApplicationConfig = {
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideZonelessChangeDetection(),
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
        provideRouter(routes, withComponentInputBinding()),
        provideClientHydration(withEventReplay()),
        // provideHttpClient(withInterceptors([authInterceptor])),
        importProvidersFrom([JwtModule.forRoot({config: {tokenGetter: () => localStorage.getItem('token')}})]),
    ]
};
