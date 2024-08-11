import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class responsiveRedirectGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot): boolean | UrlTree {

    const screenWidth = window.innerWidth;

    if (screenWidth >= 768) {
      // Si l'écran est égal ou supérieur à 768px, rediriger vers fiche-artisan-2
      const id = route.paramMap.get('id');
      return this.router.parseUrl(`/fiche-artisan-2/${id}`);
    } else {
      // Sinon, rester sur la route actuelle (fiche-artisan)
      return true;
    }
  }
}