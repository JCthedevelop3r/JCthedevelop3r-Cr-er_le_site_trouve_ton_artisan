import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListeArtisansComponent } from './liste-artisans/liste-artisans.component';
import { FicheArtisanComponent } from './fiche-artisan/fiche-artisan.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

const routes: Routes = [
  //Plus tard il faudra diriger l'utilisateur vers l'id fiche-artisan qui correspond
  // à la spécialité de l'artisan(bâtiment, services, fabrication, alimentation).
  { path: 'fiche-artisan', component: FicheArtisanComponent },
  { path: 'liste-artisans', component: ListeArtisansComponent },
  { path: '', component: HomeComponent},
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
