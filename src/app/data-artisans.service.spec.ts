import { TestBed } from '@angular/core/testing';

import { DataArtisansService } from './data-artisans.service';

describe('DataArtisansService', () => {
  let service: DataArtisansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataArtisansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
