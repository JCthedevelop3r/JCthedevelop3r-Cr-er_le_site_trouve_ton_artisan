import { Component, OnInit } from '@angular/core';
import { Artisan } from '../../artisan/artisan.model';
import { DataArtisansService } from '../../../data-artisans.service';

@Component({
  selector: 'app-menu-burger',
  templateUrl: './menu-burger.component.html',
  styleUrl: './menu-burger.component.scss'
})
export class MenuBurgerComponent implements OnInit {
  artisans: Artisan[] = [];

  constructor(private dataArtisansService: DataArtisansService) { }

  ngOnInit() {
    this.artisans = this.dataArtisansService.dataArtisans;
  }

  showBuildingCraftsmen(): Artisan[] {
    return this.artisans.slice(0, 5);
  }

  showServiceCraftsmen(): Artisan[] {
    return this.artisans.slice(5, 10);
  }

  showManufacturingCraftsmen(): Artisan[] {
    return this.artisans.slice(10, 15);
  }

  showFoodCraftsmen(): Artisan[] {
    return this.artisans.slice(15, 20);
  }
}
