import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

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
  @Input() maps: string ='';
  @Input() artisanId!: number;

  isListPage: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.isListPage = this.router.url.includes('/liste-artisan');
    });
  }
}
