import {
    ApplicationConfig,
    importProvidersFrom,
    provideBrowserGlobalErrorListeners,
    provideZonelessChangeDetection
} from '@angular/core';
import {provideRouter, withComponentInputBinding} from '@angular/router';
import Aura from '@primeuix/themes/aura';
import { routes } from './app.routes';
import {providePrimeNG} from "primeng/config";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {JwtModule} from "@auth0/angular-jwt";
import {authInterceptor} from "./core/interceptor/auth.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [
      provideZonelessChangeDetection(),
      provideBrowserGlobalErrorListeners(),
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
