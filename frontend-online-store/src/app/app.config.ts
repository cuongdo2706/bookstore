import {
    ApplicationConfig,
    importProvidersFrom,
    provideBrowserGlobalErrorListeners,
    provideZonelessChangeDetection
} from '@angular/core';
import {provideRouter, withComponentInputBinding} from '@angular/router';
import Aura from '@primeuix/themes/aura';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {providePrimeNG} from "primeng/config";
import {JwtModule} from "@auth0/angular-jwt";
import {provideHttpClient, withInterceptors} from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
      provideAnimationsAsync(),
    provideRouter(routes, withComponentInputBinding()), provideClientHydration(withEventReplay()),
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
      // provideHttpClient(withInterceptors([authInterceptor])),
      importProvidersFrom([JwtModule.forRoot({config: {tokenGetter: () => localStorage.getItem('token')}})]),
  ]
};
