import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { SettingsComponent } from './settings/settings.component';
import { AllmoviesComponent } from './allmovies/allmovies.component';
import { EntidadesComponent } from './entidades/entidades.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AddmovieComponent,
    MenuComponent,
    FooterComponent,
    SettingsComponent,
    AllmoviesComponent,
    EntidadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
