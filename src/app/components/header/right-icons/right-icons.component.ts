import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SearchVisibilityService } from '../../../search-visibility.service';

@Component({
  selector: 'app-right-icons',
  templateUrl: './right-icons.component.html',
  styleUrls: ['./right-icons.component.scss']
})
export class RightIconsComponent {

  constructor(private visibilityService: SearchVisibilityService) { }
  
  @Input() isMenuOpen = false;
  @Output() toggleMenu = new EventEmitter<void>();
  @Output() closeMenu = new EventEmitter<void>();

  navbarToggler() {
    this.isMenuOpen = !this.isMenuOpen;
    this.toggleMenu.emit();
  }

  resetIcons() {
    this.isMenuOpen = false;
  }

  searchToggler(): void {
    this.visibilityService.toggleSearch();
  }
}