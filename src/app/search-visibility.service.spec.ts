import { TestBed } from '@angular/core/testing';

import { SearchVisibilityService } from './search-visibility.service';

describe('SearchVisibilityService', () => {
  let service: SearchVisibilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchVisibilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
