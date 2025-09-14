import {
  ApplicationConfig,
  importProvidersFrom,
  provideZonelessChangeDetection
} from '@angular/core';
import {provideRouter, withComponentInputBinding} from '@angular/router';
import Aura from '@primeuix/themes/aura'
import { routes } from './app.routes';
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {providePrimeNG} from "primeng/config";
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {authInterceptor} from "./core/interceptors/auth.interceptor";
import {JwtModule} from "@auth0/angular-jwt";

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
