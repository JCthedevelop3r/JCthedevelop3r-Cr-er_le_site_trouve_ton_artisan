import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-right-icons',
  templateUrl: './right-icons.component.html',
  styleUrl: './right-icons.component.scss'
})
export class RightIconsComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const navbarIcon = document.querySelector('.toggler-icon-container') as HTMLElement;
      const blueCross = document.querySelector('.blue-cross-icon') as HTMLElement;
      const searchInput = document.getElementById('app-search-input') as HTMLElement;

      if (navbarIcon) {
        navbarIcon.style.display = "block";
      }
      if (blueCross) {
        blueCross.style.display = "none";
      }
      if (searchInput) {
        searchInput.style.display = "none";
      }
    }
  }

  navbarToggler(): void {
    if (isPlatformBrowser(this.platformId)) {
      const navbarIcon = document.querySelector('.toggler-icon-container') as HTMLElement;
      const blueCross = document.querySelector('.blue-cross-icon') as HTMLElement;

      if (navbarIcon && blueCross) {
        if (navbarIcon.style.display === "block") {
          navbarIcon.style.display = "none";
          blueCross.style.display = "inline-block";
        } else {
          navbarIcon.style.display = "block";
          blueCross.style.display = "none";
        }
      }
    }
  }

  searchToggler(): void {
    if (isPlatformBrowser(this.platformId)) {
      const searchInput = document.getElementById('app-search-input') as HTMLElement;

      if (searchInput?.style.display === "none") {
        searchInput.style.display = "block";
      } else {
        searchInput.style.display = "none";
      }
    }
  }
}
