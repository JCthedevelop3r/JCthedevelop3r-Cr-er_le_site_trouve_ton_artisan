import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Artisan } from '../artisan/artisan.model';
import { DataArtisansService } from '../../data-artisans.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fiche-artisan-2',
  templateUrl: './fiche-artisan-2.component.html',
  styleUrl: './fiche-artisan-2.component.scss'
})
export class FicheArtisan2Component implements OnInit {
  artisan!: Artisan | undefined;
  messageSent: boolean = false;
  contactForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private dataArtisansService: DataArtisansService,
    private fb: FormBuilder
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Écoute les changements de paramètres
    this.route.paramMap.subscribe(params => {
      const artisanId: string | null = params.get('id');
      if (artisanId) {
        this.artisan = this.dataArtisansService.dataArtisans.find(
          artisan => artisan.id === +artisanId
        );
      }
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      // Logique de soumission du formulaire
      this.messageSent = true;
      this.contactForm.reset(); // Réinitialise le formulaire
      window.scrollTo(0, 0); // Défile en haut de la page
    }
  }

  isInvalid(controlName: string): boolean {
    const control = this.contactForm.get(controlName);
    return control ? control.invalid && control.touched : false;
  }

  onCloseMessageSent(): void {
    this.messageSent = false;
  }
}