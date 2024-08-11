import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListeArtisansComponent } from './components/liste-artisans/liste-artisans.component';
import { FicheArtisanComponent } from './components/fiche-artisan/fiche-artisan.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { MentionsLegalesComponent } from './components/mentions-legales/mentions-legales/mentions-legales.component';
import { DonneesPersonnellesComponent } from './components/mentions-legales/donnees-personnelles/donnees-personnelles.component';
import { AccessibiliteComponent } from './components/mentions-legales/accessibilite/accessibilite.component';
import { PresseComponent } from './components/mentions-legales/presse/presse.component';
import { MarchesPublicsComponent } from './components/mentions-legales/marches-publics/marches-publics.component';
import { VenirALaRegionComponent } from './components/mentions-legales/venir-a-la-region/venir-a-la-region.component';
import { ContactsComponent } from './components/mentions-legales/contacts/contacts.component';
import { FicheArtisan2Component } from './components/fiche-artisan-2/fiche-artisan-2.component';
import { responsiveRedirectGuard } from './responsive-redirect.guard';

const routes: Routes = [
  { path: 'fiche-artisan/:id', component: FicheArtisanComponent, canActivate: [responsiveRedirectGuard] },
  { path: 'fiche-artisan-2/:id', component: FicheArtisan2Component},
  { path: 'liste-artisans/:speciality', component: ListeArtisansComponent },
  { path: 'mentions-legales', component: MentionsLegalesComponent },
  { path: 'donnees-personnelles', component: DonneesPersonnellesComponent },
  { path: 'accessibilite', component: AccessibiliteComponent },
  { path: 'presse', component: PresseComponent },
  { path: 'marches-publics', component: MarchesPublicsComponent },
  { path: 'venir-a-la-region', component: VenirALaRegionComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'accueil', component: HomeComponent },
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
