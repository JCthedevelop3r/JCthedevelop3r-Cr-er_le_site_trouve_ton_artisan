import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListeArtisansComponent } from './components/liste-artisans/liste-artisans.component';
import { FicheArtisanComponent } from './components/fiche-artisan/fiche-artisan.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

const routes: Routes = [
  //Plus tard il faudra diriger l'utilisateur vers l'id fiche-artisan qui correspond
  // à la spécialité de l'artisan(bâtiment, services, fabrication, alimentation).
  { path: 'fiche-artisan/:id', component: FicheArtisanComponent },
  { path: 'liste-artisans/:speciality', component: ListeArtisansComponent },
  { path: 'accueil', component: HomeComponent },
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
