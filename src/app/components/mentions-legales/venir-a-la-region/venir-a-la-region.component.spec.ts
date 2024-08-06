import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenirALaRegionComponent } from './venir-a-la-region.component';

describe('VenirALaRegionComponent', () => {
  let component: VenirALaRegionComponent;
  let fixture: ComponentFixture<VenirALaRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VenirALaRegionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VenirALaRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
