import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);


// THIS IS FIRST FILE  Which is RUN In angular because "browser": "src/main.ts", is write in angular.json

  // index file- "index": "src/index.html",

