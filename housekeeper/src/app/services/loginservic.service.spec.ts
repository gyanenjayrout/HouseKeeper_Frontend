import { TestBed } from '@angular/core/testing';

import { LoginservicService } from './loginservic.service';

describe('LoginservicService', () => {
  let service: LoginservicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginservicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
