import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SharedDataComponent } from './components/shared-data/shared-data.component';

const appRoutes: Routes = [
  {path:'inicio', component: WelcomeComponent},
  {path:'comunicacionComponentes', component: SharedDataComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
