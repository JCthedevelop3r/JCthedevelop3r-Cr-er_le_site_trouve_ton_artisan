import { Component, OnInit } from '@angular/core';
import { DataArtisansService } from '../../../data-artisans.service';
import { Artisan } from '../../artisan/artisan.model';
import { Router } from '@angular/router';
import { SearchVisibilityService } from '../../../search-visibility.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  artisans: Artisan[] = [];
  filteredArtisans: Artisan[] = [];
  searchQuery = '';
  isVisible = false;

  constructor(
    private router: Router,
    private dataArtisansService: DataArtisansService,
    private visibilityService: SearchVisibilityService
  ) {}

  ngOnInit(): void {
    this.artisans = this.dataArtisansService.getArtisans();
    this.filteredArtisans = this.artisans;

    // Souscrire aux changements de visibilité
    this.visibilityService.visibility$.subscribe(isVisible => {
      this.isVisible = isVisible;
    });
  }

  onSearchInputChange(): void {
    if (this.searchQuery.trim()) {
      this.filteredArtisans = this.artisans.filter(artisan =>
        artisan.identity.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        artisan.speciality.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        artisan.town.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredArtisans = [];
    }
  }

  goToFicheArtisan(id: number): void {
    this.searchQuery = ''; // Réinitialiser la recherche
    this.filteredArtisans = []; // Réinitialiser la liste filtrée
    this.visibilityService.hideSearch(); // Masquer le composant
    this.router.navigate(['/fiche-artisan', id]);
  }
}