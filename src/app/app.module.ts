import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';
import { AgmCoreModule } from '@agm/core';


import { AppComponent } from './app.component';
import { AgmDirectionModule } from 'agm-direction';
import { SecondGridComponent } from './second-grid/second-grid.component';


@NgModule({
  declarations: [
    AppComponent,
    SecondGridComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAY_0dB4eyQgxEO3Qn9zMGD1FgW5mkcVDk'
    }),
    AgmDirectionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
