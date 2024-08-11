import { Injectable, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ResizeService {
  window: any;

  constructor(private router: Router) {}

  public checkResize() {
    if (typeof window !== undefined) {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 768) {
        // Redirection vers fiche-artisan-2 si la largeur de l'écran est >= 768px
        if (this.router.url.startsWith('/fiche-artisan') && !this.router.url.startsWith('/fiche-artisan-2')) {
          const id = this.getIdFromUrl(this.router.url);
          this.router.navigate(['/fiche-artisan-2', id]);
        }
      } else if (screenWidth < 768) {
        // Redirection vers fiche-artisan si la largeur de l'écran est < 768px
        if (this.router.url.startsWith('/fiche-artisan-2')) {
          const id = this.getIdFromUrl(this.router.url);
          this.router.navigate(['/fiche-artisan', id]);
        }
      }
    }
  }

  private getIdFromUrl(url: string): string | null {
    const parts = url.split('/');
    return parts[parts.length - 1] || null;
  }
}
