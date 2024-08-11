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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClickOutsideDirective } from './click-outside.directive';
import { MentionsLegalesComponent } from './components/mentions-legales/mentions-legales/mentions-legales.component';
import { DonneesPersonnellesComponent } from './components/mentions-legales/donnees-personnelles/donnees-personnelles.component';
import { AccessibiliteComponent } from './components/mentions-legales/accessibilite/accessibilite.component';
import { PresseComponent } from './components/mentions-legales/presse/presse.component';
import { MarchesPublicsComponent } from './components/mentions-legales/marches-publics/marches-publics.component';
import { VenirALaRegionComponent } from './components/mentions-legales/venir-a-la-region/venir-a-la-region.component';
import { ContactsComponent } from './components/mentions-legales/contacts/contacts.component';
import { MessageSentComponent } from './components/fiche-artisan/message-sent/message-sent.component';
import { FicheArtisan2Component } from './components/fiche-artisan-2/fiche-artisan-2.component';

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
    ClickOutsideDirective,
    MentionsLegalesComponent,
    DonneesPersonnellesComponent,
    AccessibiliteComponent,
    PresseComponent,
    MarchesPublicsComponent,
    VenirALaRegionComponent,
    ContactsComponent,
    MessageSentComponent,
    FicheArtisan2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ClickOutsideDirective],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
