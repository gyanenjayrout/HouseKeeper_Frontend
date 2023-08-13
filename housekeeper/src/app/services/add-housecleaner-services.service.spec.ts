import { TestBed } from '@angular/core/testing';

import { AddHousecleanerServicesService } from './add-housecleaner-services.service';

describe('AddHousecleanerServicesService', () => {
  let service: AddHousecleanerServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddHousecleanerServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
