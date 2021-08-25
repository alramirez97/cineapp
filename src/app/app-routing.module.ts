import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { AllmoviesComponent } from './allmovies/allmovies.component';
import { IndexComponent } from './index/index.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {path:"index",component:IndexComponent},
  {path:"add-movie",component:AddmovieComponent},
  {path:"all-movies",component:AllmoviesComponent},
  {path:"settings",component:SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
