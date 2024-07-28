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
      pictureArtisan: "assets/images/image-artisan-1.png",
      altArtisan: "Artisan qui sourit",
      pictureStars: "assets/images/etoiles-jaunes.png",
      altStars: "5 étoiles jaunes",
      speciality: "Bâtiment",
      location: "23 Rue Carnot, Décines-Charpieu, 69150"
    },

    {
      id: 2,
      identity: "Jeanne Delion",
      pictureArtisan: "assets/images/image-artisan-2.png",
      altArtisan: "Artisane qui sourit",
      pictureStars: "assets/images/etoiles-jaunes.png",
      altStars: "5 étoiles jaunes",
      speciality: "Services",
      location: "19 Rue de la Corderie, Lyon, 69009"
    },

    {
      id: 3,
      identity: "Paul Dupont",
      pictureArtisan: "assets/images/image-artisan-3.png",
      altArtisan: "Artisan qui sourit",
      pictureStars: "assets/images/etoiles-jaunes.png",
      altStars: "5 étoiles jaunes",
      speciality: "Fabrication",
      location: "31 Boulevard Pasteur, Clermont-Ferrand, 63000"
    },

    {
      id: 4,
      identity: "Claire Dupuis",
      pictureArtisan: "assets/images/image-artisan-4.png",
      altArtisan: "Artisane qui sourit",
      pictureStars: "assets/images/etoiles-jaunes.png",
      altStars: "5 étoiles jaunes",
      speciality: "Fabrication",
      location: "11 Route de Chevennes, Annecy, 74960"
    },

    {
      id: 5,
      identity: "John Doe",
      pictureArtisan: "assets/images/image-artisan-5.png",
      altArtisan: "Artisan qui sourit",
      pictureStars: "assets/images/etoiles-jaunes.png",
      altStars: "5 étoiles jaunes",
      speciality: "Bâtiment",
      location: "23 Rue Carnot, Décines-Charpieu, 69150"
    },

    {
      id: 6,
      identity: "John Doe",
      pictureArtisan: "assets/images/image-artisan-1.png",
      altArtisan: "Artisan qui sourit",
      pictureStars: "assets/images/etoiles-jaunes.png",
      altStars: "5 étoiles jaunes",
      speciality: "Bâtiment",
      location: "23 Rue Carnot, Décines-Charpieu, 69150"
    },

    {
      id: 7,
      identity: "John Doe",
      pictureArtisan: "assets/images/image-artisan-1.png",
      altArtisan: "Artisan qui sourit",
      pictureStars: "assets/images/etoiles-jaunes.png",
      altStars: "5 étoiles jaunes",
      speciality: "Bâtiment",
      location: "23 Rue Carnot, Décines-Charpieu, 69150"
    },

    {
      id: 8,
      identity: "John Doe",
      pictureArtisan: "assets/images/image-artisan-1.png",
      altArtisan: "Artisan qui sourit",
      pictureStars: "assets/images/etoiles-jaunes.png",
      altStars: "5 étoiles jaunes",
      speciality: "Bâtiment",
      location: "23 Rue Carnot, Décines-Charpieu, 69150"
    },

    {
      id: 9,
      identity: "John Doe",
      pictureArtisan: "assets/images/image-artisan-1.png",
      altArtisan: "Artisan qui sourit",
      pictureStars: "assets/images/etoiles-jaunes.png",
      altStars: "5 étoiles jaunes",
      speciality: "Bâtiment",
      location: "23 Rue Carnot, Décines-Charpieu, 69150"
    },

    {
      id: 10,
      identity: "John Doe",
      pictureArtisan: "assets/images/image-artisan-1.png",
      altArtisan: "Artisan qui sourit",
      pictureStars: "assets/images/etoiles-jaunes.png",
      altStars: "5 étoiles jaunes",
      speciality: "Bâtiment",
      location: "23 Rue Carnot, Décines-Charpieu, 69150"
    },

    {
      id: 11,
      identity: "John Doe",
      pictureArtisan: "assets/images/image-artisan-1.png",
      altArtisan: "Artisan qui sourit",
      pictureStars: "assets/images/etoiles-jaunes.png",
      altStars: "5 étoiles jaunes",
      speciality: "Bâtiment",
      location: "23 Rue Carnot, Décines-Charpieu, 69150"
    },

    {
      id: 12,
      identity: "John Doe",
      pictureArtisan: "assets/images/image-artisan-1.png",
      altArtisan: "Artisan qui sourit",
      pictureStars: "assets/images/etoiles-jaunes.png",
      altStars: "5 étoiles jaunes",
      speciality: "Bâtiment",
      location: "23 Rue Carnot, Décines-Charpieu, 69150"
    },

    {
      id: 13,
      identity: "John Doe",
      pictureArtisan: "assets/images/image-artisan-1.png",
      altArtisan: "Artisan qui sourit",
      pictureStars: "assets/images/etoiles-jaunes.png",
      altStars: "5 étoiles jaunes",
      speciality: "Bâtiment",
      location: "23 Rue Carnot, Décines-Charpieu, 69150"
    },

    {
      id: 14,
      identity: "John Doe",
      pictureArtisan: "assets/images/image-artisan-1.png",
      altArtisan: "Artisan qui sourit",
      pictureStars: "assets/images/etoiles-jaunes.png",
      altStars: "5 étoiles jaunes",
      speciality: "Bâtiment",
      location: "23 Rue Carnot, Décines-Charpieu, 69150"
    },

    {
      id: 15,
      identity: "John Doe",
      pictureArtisan: "assets/images/image-artisan-1.png",
      altArtisan: "Artisan qui sourit",
      pictureStars: "assets/images/etoiles-jaunes.png",
      altStars: "5 étoiles jaunes",
      speciality: "Bâtiment",
      location: "23 Rue Carnot, Décines-Charpieu, 69150"
    },

    {
      id: 16,
      identity: "John Doe",
      pictureArtisan: "assets/images/image-artisan-1.png",
      altArtisan: "Artisan qui sourit",
      pictureStars: "assets/images/etoiles-jaunes.png",
      altStars: "5 étoiles jaunes",
      speciality: "Bâtiment",
      location: "23 Rue Carnot, Décines-Charpieu, 69150"
    },

    {
      id: 17,
      identity: "John Doe",
      pictureArtisan: "assets/images/image-artisan-1.png",
      altArtisan: "Artisan qui sourit",
      pictureStars: "assets/images/etoiles-jaunes.png",
      altStars: "5 étoiles jaunes",
      speciality: "Bâtiment",
      location: "23 Rue Carnot, Décines-Charpieu, 69150"
    },

    {
      id: 18,
      identity: "John Doe",
      pictureArtisan: "assets/images/image-artisan-1.png",
      altArtisan: "Artisan qui sourit",
      pictureStars: "assets/images/etoiles-jaunes.png",
      altStars: "5 étoiles jaunes",
      speciality: "Bâtiment",
      location: "23 Rue Carnot, Décines-Charpieu, 69150"
    },

    {
      id: 19,
      identity: "John Doe",
      pictureArtisan: "assets/images/image-artisan-1.png",
      altArtisan: "Artisan qui sourit",
      pictureStars: "assets/images/etoiles-jaunes.png",
      altStars: "5 étoiles jaunes",
      speciality: "Bâtiment",
      location: "23 Rue Carnot, Décines-Charpieu, 69150"
    },

    {
      id: 20,
      identity: "John Doe",
      pictureArtisan: "assets/images/image-artisan-1.png",
      altArtisan: "Artisan qui sourit",
      pictureStars: "assets/images/etoiles-jaunes.png",
      altStars: "5 étoiles jaunes",
      speciality: "Bâtiment",
      location: "23 Rue Carnot, Décines-Charpieu, 69150"
    }
  ]
}
