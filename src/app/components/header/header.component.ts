import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  
  ngOnInit(): void {
    // Permet d'initialiser les styles display lors du chargement des composants
    const navbarIcon = document.querySelector('.toggler-icon-container') as HTMLElement;
    const blueCross = document.querySelector('.blue-cross-icon') as HTMLElement;

    const searchInput = document.getElementById('app-search-input') as HTMLElement;

    if(navbarIcon) {
      navbarIcon.style.display = "block";
    }
    if(blueCross) {
      blueCross.style.display = "none";
    }

    if(searchInput) {
      searchInput.style.display = "none";
    }
  }

  navbarToggler(): void {
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

  searchToggler(): void {
    const searchInput = document.getElementById('app-search-input') as HTMLElement;

    if(searchInput?.style.display === "none") {
      searchInput.style.display ="block";
    } else {
      searchInput.style.display ="none";
    }
  }
}
