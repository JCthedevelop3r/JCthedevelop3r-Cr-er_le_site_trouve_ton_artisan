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
import { MenuBurgerComponent } from './components/header/menu-burger/menu-burger.component';
import { RightIconsComponent } from './components/header/right-icons/right-icons.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { StepComponent } from './components/home/step/step.component';
import { ArtisanComponent } from './components/artisan/artisan.component';
import { Header2Component } from './components/header-2/header-2.component';
import { MenuLaptopComponent } from './components/header-2/menu-laptop/menu-laptop.component';
import { SearchInput2Component } from './components/header-2/search-input-2/search-input-2.component';
import { Header3Component } from './components/header-3/header-3.component';
import { Footer2Component } from './components/footer-2/footer-2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ListeArtisansComponent,
    FicheArtisanComponent,
    NotFoundPageComponent,
    SearchInputComponent,
    MenuBurgerComponent,
    RightIconsComponent,
    BreadcrumbComponent,
    StepComponent,
    ArtisanComponent,
    Header2Component,
    MenuLaptopComponent,
    SearchInput2Component,
    Header3Component,
    Footer2Component,
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
