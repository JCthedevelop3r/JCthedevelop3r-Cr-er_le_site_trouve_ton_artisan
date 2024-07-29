import { Component, OnInit, Input } from '@angular/core';
import { DataArtisansService } from '../../data-artisans.service';
import { Artisan } from './artisan.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artisan',
  templateUrl: './artisan.component.html',
  styleUrl: './artisan.component.scss'
})
export class ArtisanComponent implements OnInit {
  @Input() identity: string = '';
  @Input() pictureArtisan: string = '';
  @Input() altArtisan: string = '';
  @Input() pictureStars: string = '';
  @Input() altStars: string = '';
  @Input() speciality: string = '';
  @Input() location: string = '';
  @Input() artisanId!: number;

  constructor() {}

  ngOnInit() {
  }
}
