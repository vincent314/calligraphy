import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from "@angular/common";

registerLocaleData(localeFr);
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from "@angular/common/http";
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    provideFirebaseApp(() => initializeApp({"projectId":"calligraphy-872ec","appId":"1:747694148235:web:5604545b97cba7a868e28e","databaseURL":"https://calligraphy-872ec-default-rtdb.europe-west1.firebasedatabase.app","storageBucket":"calligraphy-872ec.appspot.com","apiKey":"AIzaSyD5NTwZ98e58sU1FrqYhR8zAg3d6FIjOeg","authDomain":"calligraphy-872ec.firebaseapp.com","messagingSenderId":"747694148235"})), provideAuth(() => getAuth()), provideDatabase(() => getDatabase()),
  ]
};
