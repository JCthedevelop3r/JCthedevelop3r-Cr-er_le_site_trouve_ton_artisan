import { Component, OnInit } from '@angular/core';
import { Artisan } from '../artisan/artisan.model';
import { DataArtisansService } from '../../data-artisans.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fiche-artisan',
  templateUrl: './fiche-artisan.component.html',
  styleUrls: ['./fiche-artisan.component.scss']
})
export class FicheArtisanComponent implements OnInit {
  artisan!: Artisan | undefined;

  constructor(
    private route: ActivatedRoute,
    private dataArtisansService: DataArtisansService
  ) {}

  ngOnInit(): void {
    // Écouter les changements de paramètres
    this.route.paramMap.subscribe(params => {
      const artisanId: string | null = params.get('id');
      if (artisanId) {
        this.artisan = this.dataArtisansService.dataArtisans.find(
          artisan => artisan.id === +artisanId
        );
      }
    });
  }
}