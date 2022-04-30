import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { ArticleAComponent } from './components/article-a/article-a.component';
import { ArticleBComponent } from './components/article-b/article-b.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SharedDataComponent } from './components/shared-data/shared-data.component';

const appRoutes: Routes = [
  {path:'inicio', component: WelcomeComponent},
  {path:'comunicacionComponentes', component: SharedDataComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ArticleAComponent,
    ArticleBComponent,
    WelcomeComponent,
    SharedDataComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
