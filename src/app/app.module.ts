import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListeArtisansComponent } from './components/liste-artisans/liste-artisans.component';
import { FicheArtisanComponent } from './components/fiche-artisan/fiche-artisan.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { SearchInputComponent } from './components/header/search-input/search-input.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ListeArtisansComponent,
    FicheArtisanComponent,
    NotFoundPageComponent,
    SearchInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
