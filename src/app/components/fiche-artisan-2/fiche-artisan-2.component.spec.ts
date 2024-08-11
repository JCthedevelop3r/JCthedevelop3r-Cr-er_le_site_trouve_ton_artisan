import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheArtisan2Component } from './fiche-artisan-2.component';

describe('FicheArtisan2Component', () => {
  let component: FicheArtisan2Component;
  let fixture: ComponentFixture<FicheArtisan2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FicheArtisan2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FicheArtisan2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
