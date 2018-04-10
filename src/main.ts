import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {LicenseManager} from 'ag-grid-enterprise';

LicenseManager.setLicenseKey('AFN_LLC_MultiApp_2Devs9_April_2019__MTU1NDc2NDQwMDAwMA==dbad494e8a609d368f98d803be1d96aa');

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
