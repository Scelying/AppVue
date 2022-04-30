import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SharedDataComponent } from './components/shared-data/shared-data.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PersonsComponent } from './components/persons/persons.component';

const appRoutes: Routes = [
  {path:'', redirectTo:'/inicio', pathMatch:'full'},
  {path:'inicio', component: WelcomeComponent},
  {path:'comunicacionComponentes', component: SharedDataComponent},
  {path:'personas', component: PersonsComponent},
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
