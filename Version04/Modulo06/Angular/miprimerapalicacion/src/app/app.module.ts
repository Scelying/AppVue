import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MiprimercomponenteComponent } from './miprimercomponente/miprimercomponente.component';

@NgModule({
  declarations: [
    AppComponent,
    MiprimercomponenteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
