import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInput2Component } from './search-input-2.component';

describe('SearchInput2Component', () => {
  let component: SearchInput2Component;
  let fixture: ComponentFixture<SearchInput2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchInput2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchInput2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
