import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artisan } from '../artisan/artisan.model';
import { DataArtisansService } from '../../data-artisans.service';

@Component({
  selector: 'app-liste-artisans',
  templateUrl: './liste-artisans.component.html',
  styleUrl: './liste-artisans.component.scss'
})
export class ListeArtisansComponent implements OnInit{
  artisans: Artisan[] = [];
  filteredArtisans: Artisan[] = [];
  speciality: string | null | undefined;

  constructor(private dataArtisansService: DataArtisansService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.artisans = this.dataArtisansService.dataArtisans;

    this.route.paramMap.subscribe(params => {
      this.speciality = params.get('speciality');
      this.filterArtisans();
    });
  }

  filterArtisans() {
    if (this.speciality) {
      this.filteredArtisans = this.artisans.filter(artisan => artisan.speciality === this.speciality);
    } else {
      this.filteredArtisans = this.artisans;
    }
  }
}
