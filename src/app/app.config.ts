import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from "@angular/common";

registerLocaleData(localeFr);
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    { provide: LOCALE_ID, useValue: 'fr-FR' },
  ]
};
