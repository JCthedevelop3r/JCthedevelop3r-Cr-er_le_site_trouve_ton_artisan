import { Component, ViewChild } from '@angular/core';
import { RightIconsComponent } from './right-icons/right-icons.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuOpen = false;

  @ViewChild(RightIconsComponent) rightIcons!: RightIconsComponent;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
    if (this.rightIcons) {
      this.rightIcons.resetIcons();
    }
  }
}