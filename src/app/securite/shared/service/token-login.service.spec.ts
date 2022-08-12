import { TestBed } from '@angular/core/testing';

import { TokenLoginService } from './token-login.service';

describe('TokenLoginService', () => {
  let service: TokenLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
