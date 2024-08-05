import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu-burger',
  templateUrl: './menu-burger.component.html',
  styleUrls: ['./menu-burger.component.scss']
})
export class MenuBurgerComponent {
  @Output() closeMenu = new EventEmitter<void>();

  onLinkClick() {
    setTimeout(() => {
      this.closeMenu.emit();
    }, 300);
  }
}