import { Component, OnInit } from '@angular/core';
import { ResizeService } from './resize-service.service';  // Importez le service

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(private resizeService: ResizeService) {}

  ngOnInit(): void {
    // Initialise la vérification de redimensionnement
    this.resizeService.checkResize();

    // Écoute les changements de taille de la fenêtre
    window.addEventListener('resize', () => this.resizeService.checkResize());
  }
}