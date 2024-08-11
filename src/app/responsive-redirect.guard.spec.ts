import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { responsiveRedirectGuard } from './responsive-redirect.guard';

describe('responsiveRedirectGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => responsiveRedirectGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
