import { Component, OnInit } from '@angular/core';
import { Step } from './step/step.model';
import { DataStepsService } from '../../data-steps.service';
import { Artisan } from '../artisan/artisan.model';
import { DataArtisansService } from '../../data-artisans.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  steps: Step[] = [];
  artisans: Artisan[] = [];
  selectedArtisans: Artisan[] = [];

  constructor(private dataStepsService: DataStepsService, private dataArtisansService: DataArtisansService) { }

  ngOnInit() {
    this.steps = this.dataStepsService.dataSteps;
    this.artisans = this.dataArtisansService.dataArtisans;
    this.filterSelectedArtisans();
  }

  filterSelectedArtisans() {
    const selectedNames = ["John Doe", "Paula Gonzalez", "Thomas Dubois"];
    this.selectedArtisans = this.artisans.filter(artisan => selectedNames.includes(artisan.identity));
  }
}
