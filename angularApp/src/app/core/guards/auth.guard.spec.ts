import {TestBed} from '@angular/core/testing';
import {CanActivateFn} from '@angular/router';

import {authGuard} from './auth.guard';

describe('authGuard', () => {
  const mockRoute: any = {};
  const mockState: any = {};
  const executeGuard: CanActivateFn = () =>
      TestBed.runInInjectionContext(() => authGuard(mockRoute, mockState));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
