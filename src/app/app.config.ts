import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch, withInterceptors, withXsrfConfiguration } from '@angular/common/http';
import { provideState, provideStore } from '@ngrx/store';
import { authFeature } from './management/reducers/auth.reducer';
import { provideEffects } from '@ngrx/effects';
import { AuthEffect } from './management/effects/auth.effect';
import { authInterceptor } from './interseptors/auth.interceptor';
import { csrfAppInitializer } from './security/csrf/csrf-init.factory';
import { environment } from './environment/environment';

registerLocaleData(en);

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(
      withFetch(),
      withInterceptors([
        authInterceptor
      ]),
      withXsrfConfiguration(
        {
          cookieName: environment.csrf.cookieName,
          headerName: environment.csrf.headerName,
        }
      )
    ),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideNzI18n(en_US),
    importProvidersFrom(FormsModule),
    provideAnimationsAsync(),
    provideStore(),
    provideState(authFeature),
    provideEffects(AuthEffect),
    csrfAppInitializer
  ]
};
