import { TestBed } from '@angular/core/testing';

import { LoginNService } from './login-n.service';

describe('LoginNService', () => {
  let service: LoginNService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginNService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
