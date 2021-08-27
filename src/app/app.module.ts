import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { SettingsComponent } from './settings/settings.component';
import { AllmoviesComponent } from './allmovies/allmovies.component';
import { HttpClientModule } from '@angular/common/http';
import { EditmoviesComponent } from './editmovies/editmovies.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AddmovieComponent,
    MenuComponent,
    FooterComponent,
    SettingsComponent,
    AllmoviesComponent,
    EditmoviesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
