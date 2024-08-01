import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLaptopComponent } from './menu-laptop.component';

describe('MenuLaptopComponent', () => {
  let component: MenuLaptopComponent;
  let fixture: ComponentFixture<MenuLaptopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuLaptopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuLaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
