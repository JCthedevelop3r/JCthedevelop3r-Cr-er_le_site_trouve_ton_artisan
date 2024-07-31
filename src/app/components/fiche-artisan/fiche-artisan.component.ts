import { Component, OnInit } from '@angular/core';
import { Artisan } from '../artisan/artisan.model';
import { DataArtisansService } from '../../data-artisans.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fiche-artisan',
  templateUrl: './fiche-artisan.component.html',
  styleUrl: './fiche-artisan.component.scss'
})
export class FicheArtisanComponent implements OnInit {
  dataArtisans!: Artisan[];
  artisan!: Artisan | undefined;
  constructor(private route: ActivatedRoute, private dataArtisansService: DataArtisansService) {}

  ngOnInit() {
    const artisanId: string | null = this.route.snapshot.paramMap.get('id');
    if(artisanId) {
      this.artisan = this.dataArtisansService.dataArtisans.find(artisan => artisan.id === +artisanId)
    }
  }
}