import { Injectable } from '@angular/core';
import { Step } from './components/home/step/step.model';

@Injectable({
  providedIn: 'root'
})
export class DataStepsService {

  dataSteps: Step[] = [
    {
      id: 1,
      stepTitle: "Étape 1",
      srcImg: "assets/images/image-step-1.png",
      altImg: "Zoom sur une barre de navigation",
      stepSubtitle: "Choisissez la catégorie d'artisanat dans le menu",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        porttitor, urna consequat porta ornare, ante felis rhoncus nisl, sit
        amet cursus tortor mi tempus dolor.`
    },

    {
      id: 2,
      stepTitle: "Étape 2",
      srcImg: "assets/images/image-step-2.png",
      altImg: "curseur pointé vers le profil d'un artisan",
      stepSubtitle: "Choisissez un artisan",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        porttitor, urna consequat porta ornare, ante felis rhoncus nisl, sit
        amet cursus tortor mi tempus dolor.`
    },

    {
      id: 3,
      stepTitle: "Étape 3",
      srcImg: "assets/images/image-step-3.png",
      altImg: "Formulaire de contact",
      stepSubtitle: "Contactez l'artisan avec le formulaire de contact",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        porttitor, urna consequat porta ornare, ante felis rhoncus nisl, sit
        amet cursus tortor mi tempus dolor.`
    },

    {
      id: 4,
      stepTitle: "Étape 4",
      srcImg: "assets/images/image-step-4.png",
      altImg: "schéma d'un particulier communiquant avec un artisan avec écrit 48 heures entre les deux",
      stepSubtitle: "Une réponse sera apportée dans 48 heures",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        porttitor, urna consequat porta ornare, ante felis rhoncus nisl, sit
        amet cursus tortor mi tempus dolor.`
    }
  ]
}
