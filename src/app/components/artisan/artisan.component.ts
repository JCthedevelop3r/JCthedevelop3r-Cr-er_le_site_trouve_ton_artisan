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

  @Input() identity: string = '';
  @Input() pictureArtisan: string = '';
  @Input() altArtisan: string = '';
  @Input() pictureStars: string = '';
  @Input() altStars: string = '';
  @Input() speciality: string = '';
  @Input() location: string = '';
  
  constructor(private dataArtisansService: DataArtisansService) {}

  ngOnInit() {
    this.artisan = this.dataArtisansService.dataArtisans;
  }
}
