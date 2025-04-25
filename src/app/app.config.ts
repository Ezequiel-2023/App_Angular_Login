import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
     provideHttpClient(withInterceptorsFromDi()), // Uncomment if you are using HttpClient with interceptors
    // provideAnimations(), // Uncomment if you are using Angular animations
    // provideStore(), // Uncomment if you are using NgRx Store
    // provideEffects(), // Uncomment if you are using NgRx Effects
    // provideStoreDevtools() // Uncomment if you are using NgRx Store Devtools
  ]
};
