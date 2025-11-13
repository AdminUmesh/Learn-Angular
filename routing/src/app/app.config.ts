import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { MainRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(MainRoutes),
  ],
};


// THIS IS CONFIGURATION SETTING----
// provideRouter(MainRoutes), --- Initiallise First Router Here 