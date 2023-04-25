import { TestBed } from '@angular/core/testing';

import { AuthInterceptor2Service } from './auth-interceptor2.service';

describe('AuthInterceptor2Service', () => {
  let service: AuthInterceptor2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthInterceptor2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
