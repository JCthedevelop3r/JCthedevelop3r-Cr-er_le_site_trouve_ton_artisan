import { Component, Renderer2, ViewChild } from '@angular/core';
import { RightIconsComponent } from './right-icons/right-icons.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuOpen = false;

  @ViewChild(RightIconsComponent) rightIcons!: RightIconsComponent;

  constructor(private renderer: Renderer2) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      this.renderer.addClass(document.body, 'no-scroll');
    } else {
      this.renderer.removeClass(document.body, 'no-scroll');
    }
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.renderer.removeClass(document.body, 'no-scroll');
    if (this.rightIcons) {
      this.rightIcons.resetIcons();
    }
  }
}