import { TestBed } from '@angular/core/testing';

import { DataStepsService } from './data-steps.service';

describe('DataStepsService', () => {
  let service: DataStepsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataStepsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
