import { Injectable } from '@angular/core';
import { Artisan } from './components/artisan/artisan.model';

@Injectable({
  providedIn: 'root'
})
export class DataArtisansService {

  constructor() { }

  dataArtisans: Artisan[] = [
    {
      id: 1,
      identity: "John Doe",
      pictureArtisan: "assets/images/img-artisans/image-artisan-1.jpg",
      altArtisan: "Artisan qui sourit",
      pictureStars: "assets/images/etoiles-jaunes-5.png",
      altStars: "5 étoiles jaunes",
      speciality: "Bâtiment",
      location: "23 Rue Carnot, Décines-Charpieu, 69150"
    },

    {
      id: 2,
      identity: "Jena Douglas",
      pictureArtisan: "assets/images/img-artisans/image-artisan-2.jpg",
      altArtisan: "Artisane qui sourit",
      pictureStars: "assets/images/etoiles-jaunes-4.png",
      altStars: "4 étoiles jaunes",
      speciality: "Bâtiment",
      location: "103 Rue de la Vaillance, Clermont-Ferrand, 63100"
    },

    {
      id: 3,
      identity: "Cédric Thomas",
      pictureArtisan: "assets/images/img-artisans/image-artisan-3.jpg",
      altArtisan: "Artisan qui sourit",
      pictureStars: "assets/images/etoiles-jaunes-5.png",
      altStars: "5 étoiles jaunes",
      speciality: "Bâtiment",
      location: "47 Rue du Cheval, Clermont-Ferrand, 63100"
    },

    {
      id: 4,
      identity: "Christine Lacraie",
      pictureArtisan: "assets/images/img-artisans/image-artisan-4.jpg",
      altArtisan: "Artisane qui sourit",
      pictureStars: "assets/images/etoiles-jaunes-5.png",
      altStars: "5 étoiles jaunes",
      speciality: "Bâtiment",
      location: "18 Rue Fantin Latour, Grenoble, 38000"
    },

    {
      id: 5,
      identity: "Quentin Lejeune",
      pictureArtisan: "assets/images/img-artisans/image-artisan-5.jpg",
      altArtisan: "Artisan qui sourit",
      pictureStars: "assets/images/etoiles-jaunes-4.png",
      altStars: "4 étoiles jaunes",
      speciality: "Bâtiment",
      location: "19 Rue Sisteron, Seyssinet-Pariset, 38170"
    },

    {
      id: 6,
      identity: "Jeanne Delion",
      pictureArtisan: "assets/images/img-artisans/image-artisan-6.jpg",
      altArtisan: "Artisane qui sourit",
      pictureStars: "assets/images/etoiles-jaunes-5.png",
      altStars: "5 étoiles jaunes",
      speciality: "Services",
      location: "19 Rue de la Corderie, Lyon, 69009"
    },

    {
      id: 7,
      identity: "Fredéric Rameur",
      pictureArtisan: "assets/images/img-artisans/image-artisan-7.jpg",
      altArtisan: "Artisan qui sourit",
      pictureStars: "assets/images/etoiles-jaunes-3.png",
      altStars: "3 étoiles jaunes",
      speciality: "Services",
      location: "5 Rue Jean Zay, Lyon, 69009"
    },

    {
      id: 8,
      identity: "Samira Azzeraoui",
      pictureArtisan: "assets/images/img-artisans/image-artisan-8.jpg",
      altArtisan: "Artisane qui sourit",
      pictureStars: "assets/images/etoiles-jaunes-5.png",
      altStars: "5 étoiles jaunes",
      speciality: "Services",
      location: "21 Rue Maréchal Foch, Villeurbanne, 69100"
    },

    {
      id: 9,
      identity: "Loic Reddy",
      pictureArtisan: "assets/images/img-artisans/image-artisan-9.jpg",
      altArtisan: "Artisan qui sourit",
      pictureStars: "assets/images/etoiles-jaunes-4.png",
      altStars: "4 étoiles jaunes",
      speciality: "Services",
      location: "7 Rue Guyot, Caluire-et-Cuire, 69300"
    },

    {
      id: 10,
      identity: "Érica Touré",
      pictureArtisan: "assets/images/img-artisans/image-artisan-10.jpg",
      altArtisan: "Artisane qui sourit",
      pictureStars: "assets/images/etoiles-jaunes-4.png",
      altStars: "4 étoiles jaunes",
      speciality: "Services",
      location: "84 Rue Bechevelin, Lyon, 69007"
    },

    {
      id: 11,
      identity: "Paul Dupont",
      pictureArtisan: "assets/images/img-artisans/image-artisan-11.jpg",
      altArtisan: "Artisan qui sourit",
      pictureStars: "assets/images/etoiles-jaunes-5.png",
      altStars: "5 étoiles jaunes",
      speciality: "Fabrication",
      location: "31 Boulevard Pasteur, Clermont-Ferrand, 63000"
    },

    {
      id: 12,
      identity: "Paula Gonzalez",
      pictureArtisan: "assets/images/img-artisans/image-artisan-12.jpg",
      altArtisan: "Artisane qui sourit",
      pictureStars: "assets/images/etoiles-jaunes-5.png",
      altStars: "5 étoiles jaunes",
      speciality: "Fabrication",
      location: "9 Rue Chautard, Aubière, 63170"
    },

    {
      id: 13,
      identity: "Francis Ngo",
      pictureArtisan: "assets/images/img-artisans/image-artisan-13.jpg",
      altArtisan: "Artisan qui sourit",
      pictureStars: "assets/images/etoiles-jaunes-5.png",
      altStars: "5 étoiles jaunes",
      speciality: "Fabrication",
      location: "64 Rue Servient, Lyon, 69003"
    },

    {
      id: 14,
      identity: "Claire Dupuis",
      pictureArtisan: "assets/images/img-artisans/image-artisan-14.jpg",
      altArtisan: "Artisane qui sourit",
      pictureStars: "assets/images/etoiles-jaunes-5.png",
      altStars: "5 étoiles jaunes",
      speciality: "Fabrication",
      location: "11 Route de Chevennes, Annecy, 74960"
    },

    {
      id: 15,
      identity: "Jean Lecomte",
      pictureArtisan: "assets/images/img-artisans/image-artisan-15.jpg",
      altArtisan: "Artisan qui sourit",
      pictureStars: "assets/images/etoiles-jaunes-5.png",
      altStars: "5 étoiles jaunes",
      speciality: "Fabrication",
      location: "4 Rue du Square, Annecy, 74960"
    },

    {
      id: 16,
      identity: "Albert Martin",
      pictureArtisan: "assets/images/img-artisans/image-artisan-16.jpg",
      altArtisan: "Artisan qui sourit",
      pictureStars: "assets/images/etoiles-jaunes-3.png",
      altStars: "3 étoiles jaunes",
      speciality: "Alimentation",
      location: "76 Rue du 4 Septembre, Valence, 26000"
    },

    {
      id: 17,
      identity: "Sylvie Bernard",
      pictureArtisan: "assets/images/img-artisans/image-artisan-17.jpg",
      altArtisan: "Artisane qui sourit",
      pictureStars: "assets/images/etoiles-jaunes-5.png",
      altStars: "5 étoiles jaunes",
      speciality: "Alimentation",
      location: "15 Allée Jean Giono, Valence, 26000"
    },

    {
      id: 18,
      identity: "Karim Petit",
      pictureArtisan: "assets/images/img-artisans/image-artisan-18.jpg",
      altArtisan: "Artisan qui sourit",
      pictureStars: "assets/images/etoiles-jaunes-3.png",
      altStars: "3 étoiles jaunes",
      speciality: "Alimentation",
      location: "57 Rue Pablo Neruda, Clermont-Ferrand, 63000"
    },

    {
      id: 19,
      identity: "Alexandra Moreau",
      pictureArtisan: "assets/images/img-artisans/image-artisan-19.jpg",
      altArtisan: "Artisane qui sourit",
      pictureStars: "assets/images/etoiles-jaunes-4.png",
      altStars: "4 étoiles jaunes",
      speciality: "Alimentation",
      location: "13 Allée des Cyclamens, Clermont-Ferrand, 63000"
    },

    {
      id: 20,
      identity: "Thomas Dubois",
      pictureArtisan: "assets/images/img-artisans/image-artisan-20.jpg",
      altArtisan: "Artisan qui sourit",
      pictureStars: "assets/images/etoiles-jaunes-5.png",
      altStars: "5 étoiles jaunes",
      speciality: "Alimentation",
      location: "7 Rue Chautard, Aubière, 63170"
    }
  ]
}
