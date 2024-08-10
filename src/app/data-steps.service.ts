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
      description: `Dans le menu en haut de la page, choisissez la catégorie
        d'artisanat que vous rechercher afin de pouvoir sélectionner uniquement les
        artisans spécialisés dans ce domaine.`
    },

    {
      id: 2,
      stepTitle: "Étape 2",
      srcImg: "assets/images/image-step-2.png",
      altImg: "curseur pointé vers le profil d'un artisan",
      stepSubtitle: "Choisissez un artisan",
      description: `Sélectionnez l'artisan de la liste qui vous a le plus séduit.
        Référez vous sur les informations de son profil pour faire votre choix
        (avis, spécialité, localisation).`
    },

    {
      id: 3,
      stepTitle: "Étape 3",
      srcImg: "assets/images/image-step-3.png",
      altImg: "Formulaire de contact",
      stepSubtitle: "Contactez l'artisan avec le formulaire de contact",
      description: `Cliquez sur l'artisan que vous avez choisi pour avoir des 
        informations supplémentaires sur ce dernier. Contactez-le via le 
        formulaire de contact.`
    },

    {
      id: 4,
      stepTitle: "Étape 4",
      srcImg: "assets/images/image-step-4.png",
      altImg: "schéma d'un particulier communiquant avec un artisan avec écrit 48 heures entre les deux",
      stepSubtitle: "Une réponse sera apportée dans 48 heures",
      description: `Une fois votre message envoyé, l'artisan s'engage à vous
        répondre dans les 48 heures.`
    }
  ]
}
