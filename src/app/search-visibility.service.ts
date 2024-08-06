import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchVisibilityService {
  private visibilitySubject = new BehaviorSubject<boolean>(false);
  visibility$ = this.visibilitySubject.asObservable();

  showSearch(): void {
    this.visibilitySubject.next(true);
  }

  hideSearch(): void {
    this.visibilitySubject.next(false);
  }

  toggleSearch(): void {
    this.visibilitySubject.next(!this.visibilitySubject.value);
  }
}