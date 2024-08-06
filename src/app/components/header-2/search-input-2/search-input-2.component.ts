import { Component, OnInit } from '@angular/core';
import { DataArtisansService } from '../../../data-artisans.service';
import { Artisan } from '../../artisan/artisan.model';
import { Router } from '@angular/router';
import { SearchVisibilityService } from '../../../search-visibility.service';

@Component({
  selector: 'app-search-input-2',
  templateUrl: './search-input-2.component.html',
  styleUrl: './search-input-2.component.scss'
})
export class SearchInput2Component implements OnInit {

  artisans: Artisan[] = [];
  filteredArtisans: Artisan[] = [];
  searchQuery = '';
  isListVisible = false; // Initialement, la liste n'est pas visible

  constructor(
    private router: Router,
    private dataArtisansService: DataArtisansService,
    private visibilityService : SearchVisibilityService
  ) {}

  ngOnInit(): void {
    this.artisans = this.dataArtisansService.getArtisans();
    this.filteredArtisans = this.artisans;
  }

  onSearchInputChange(): void {
    if (this.searchQuery.trim()) {
      this.filteredArtisans = this.artisans.filter(artisan =>
        artisan.identity.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        artisan.speciality.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        artisan.town.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
      this.isListVisible = true; // Afficher la liste des artisans lorsqu'il y a une requête de recherche
    } else {
      this.filteredArtisans = [];
      this.isListVisible = false; // Cacher la liste des artisans si la requête est vide
    }
  }

  goToFicheArtisan(id: number): void {
    this.searchQuery = ''; // Réinitialiser la recherche
    this.filteredArtisans = []; // Réinitialiser la liste filtrée
    this.router.navigate(['/fiche-artisan', id]);
  }

  onClickOutside(): void {
    console.log('Click outside detected in app-search-input-2');
    this.isListVisible = false; // Cacher la liste des artisans lorsque l'utilisateur clique en dehors
  }
}
