import { Component, OnInit, Input } from '@angular/core';
import { DataArtisansService } from '../../data-artisans.service';
import { Artisan } from './artisan.model';

@Component({
  selector: 'app-artisan',
  templateUrl: './artisan.component.html',
  styleUrl: './artisan.component.scss'
})
export class ArtisanComponent implements OnInit {
  artisan: Artisan[] = [];
  
  constructor(private dataArtisansService: DataArtisansService) {}

  ngOnInit() {
    this.artisan = this.dataArtisansService.dataArtisans;
  }
}
