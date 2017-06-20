import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment.prod';

if (environment.production) {
  enableProdMode();
  window.navigator.serviceWorker.register('/sw.js')
  .then(() => {
    console.log('success!!');
  })
}

platformBrowserDynamic().bootstrapModule(AppModule);
