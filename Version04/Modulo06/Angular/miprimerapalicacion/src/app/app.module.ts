import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from '../material.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { ArticleAComponent } from './components/article-a/article-a.component';
import { ArticleBComponent } from './components/article-b/article-b.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SharedDataComponent } from './components/shared-data/shared-data.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PersonsComponent } from './components/persons/persons.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ArticleAComponent,
    ArticleBComponent,
    WelcomeComponent,
    SharedDataComponent,
    PageNotFoundComponent,
    PersonsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
