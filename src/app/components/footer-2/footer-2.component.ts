import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-2',
  templateUrl: './footer-2.component.html',
  styleUrl: './footer-2.component.scss'
})
export class Footer2Component {
  goTopPage() {
    window.scrollTo(0, 0);
  }
}
